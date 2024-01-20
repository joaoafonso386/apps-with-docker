# Use an existing redis image as base

FROM alpine

# Download and instal a dependecy

RUN apk add --update gcc
RUN apk add --update redis

# Tell the image what to do when it starts as container

CMD [ "redis-server" ]