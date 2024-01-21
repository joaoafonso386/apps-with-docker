# Use an existing redis image as base

FROM alpine

# Download and instal dependecies

RUN apk add --update gcc
RUN apk add --update redis

# Run command

CMD [ "redis-server" ]