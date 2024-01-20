# RUN THIS COMMAND TO BUILD THIS DUMMY NODE PROJECT IMAGE
docker build -t zigoto/web-app-for-docker:latest -f docker/Dockerfile .

# RUN A CONTAINER WITHT THE IMAGE
docker run -d --name web-app-for-docker -p 8080:8080 zigoto/web-app-for-docker