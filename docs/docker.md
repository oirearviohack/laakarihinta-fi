# Get AWS Login
- aws ecr get-login --region eu-west-2

# To build
- docker build -t wwwonderful/aws-docker . OR ./tools/deployment/build.docker.sh

# View images
- docker images

# To Run (mirrors port 8080 in port 9000)
- docker run -p 9000:8080 -d wwwonderful/aws-docker
- docker run -p 9000:8080 591556483586.dkr.ecr.eu-west-2.amazonaws.com/wwwonderful/aws-docker:latest

# To push image to AWS 
- Commands can be found in https://eu-west-2.console.aws.amazon.com/ecs/home?region=eu-west-2#/repositories/create/new

# Get container ID
- docker ps

# Get IP
- docker-machine ip default

# Print app output
- docker logs (container id)

# Access image with bash
- docker exec -it <containerid> bash
