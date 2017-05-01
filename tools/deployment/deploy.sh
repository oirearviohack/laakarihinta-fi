#!/bin/sh
set -e
set -u
set -o pipefail

JQ="jq --raw-output --exit-status"

curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
python get-pip.py
pip install awscli

configure_aws_cli(){
	aws --version
	aws configure set default.region eu-west-2
	aws configure set default.output json
}

deploy_cluster() {
    family="wwwonderful-cluster"

    make_task_def
    register_definition
    if [[ $(aws ecs update-service --cluster wwwonderful-cluster --service aws-docker-cluster-service --task-definition $revision --region eu-west-2 | \
                   $JQ '.service.taskDefinition') != $revision ]]; then
        echo "Error updating service."
        return 1
    fi
}

make_task_def(){
	task_template='[
		{
			"name": "Wwwonderful-container",
			"image": "%s:latest",
			"essential": true,
			"memory": 850,
			"cpu": 0,
			"portMappings": [
				{
					"containerPort": 8080,
					"hostPort": 80
				}
			]
		}
	]'

	task_def=$(printf "$task_template" $AWS_REPO_URI)
}

push_ecr_image() {
	$(aws ecr get-login --region eu-west-2)
	docker push $AWS_REPO_URI:latest
}

register_definition() {
    if revision=$(aws ecs register-task-definition --container-definitions "$task_def" --family $family | $JQ '.taskDefinition.taskDefinitionArn'); then
        echo "Revision: $revision"
    else
        echo "Failed to register task definition"
        return 1
    fi
}

configure_aws_cli
push_ecr_image
deploy_cluster
