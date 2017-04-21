# To build
docker build -t (username)/node-web-app .

# View images
docker images

# To Run (mirrors port 8080 in port 9000)
docker run -p 9000:8080 -d (username)/node-web-app

# Get container ID
docker ps

# Get IP
docker-machine ip default

# Print app output
docker logs (container id)
