#!/usr/bin/env bash

set -e
set -u
set -o pipefail

JQ="jq --raw-output --exit-status"

register_definition() {

    if revision=$(aws ecs register-task-definition --container-definitions "$task_def" --family $family --region eu-west-1 | $JQ '.taskDefinition.taskDefinitionArn'); then
        echo "Task definition revision: $revision"
    else
        echo "Failed to register task definition"
        return 1
    fi

}

create_task_def() {

    jq_template=".taskDefinition.containerDefinitions | .[] | del(.image) + {image: \"000185720147.dkr.ecr.eu-west-1.amazonaws.com/emedi-webapp:%s\"} | [.]"
    jq_instructions=$(printf "$jq_template" $version)
    task_def=$(aws ecs describe-task-definition --task-definition $family --region eu-west-1 | jq "$jq_instructions")

}

deploy_cluster() {

    host_port=80
    family="emedi-app"

    create_task_def
    register_definition
    if [[ $(aws ecs update-service --cluster emedi --service emedi-webapp-service --task-definition $revision --region eu-west-1 | \
                   $JQ '.service.taskDefinition') != $revision ]]; then
        echo "Error updating service."
        return 1
    fi

    return 0
}

fetch_image_tags() {

    separator=$'\n'
    image_listing=$(aws ecr list-images --repository-name emedi-webapp --region eu-west-1)
    content=$($JQ ".imageIds | .[] | .imageTag" <<< $image_listing)
    image_tags=$content

    while next_token=$($JQ ".nextToken" <<< $image_listing); do
        image_listing=$(aws ecr list-images --repository-name emedi-webapp --next-token "$next_token" --region eu-west-1)
        content=$($JQ ".imageIds | .[] | .imageTag" <<< $image_listing)
        image_tags=$image_tags$separator$content
    done

}

find_image() {

    fetch_image_tags
    for hash in $image_tags; do
        if [ "$version" == "$hash" ]; then
            return 0
        fi
    done
    return 1

}

run_deployment() {

    echo "Searching deployable image for version $version from repository."
    if find_image; then
        echo -n "You are about to deploy version $version to production. Are you sure you want to continue? [yN]? "
        read confirmation
        if [ "$confirmation" == "y" ]; then
            echo "Continuing..."
            if deploy_cluster; then
                echo "Deployment is now underway! Remember to monitor progress in AWS ECS and in http://laakarihinta.fi/health-check"
                echo "Once new version is deployed remember to update master branch to point to correct version."
                exit 0
            else
                echo "Deployment failed."
                exit 1
            fi
        else
            echo "Interrupted"
            exit 1
        fi
        exit 0
    else
        echo "Docker image for version $version not found in repository. Exiting."
        exit 1
    fi

}

display_usage() {

    echo "Usage: deploy-production.sh <version>"
    echo "<version> Is the hash of the commit to be deployed to production"

}

version=${1:-}
if [ -n "$version" ]; then
    run_deployment
else
    display_usage
fi
