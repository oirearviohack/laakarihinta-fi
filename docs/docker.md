# To build
- docker build -t wwwonderful/aws-docker .

# View images
- docker images

# To Run (mirrors port 8080 in port 9000)
- docker run -p 9000:8080 -d wwwonderful/aws-docker

# To push image to AWS 
- Commands can be found in https://eu-west-2.console.aws.amazon.com/ecs/home?region=eu-west-2#/repositories/create/new
- docker tag wwwonderful/aws-docker:latest (id).dkr.ecr.eu-west-2.amazonaws.com/wwwonderful/aws-docker:latest

# Get container ID
- docker ps

# Get IP
- docker-machine ip default

# Print app output
- docker logs (container id)
