#!/bin/bash

docker pull rabbitmq:3-management
docker run -d --hostname localhost --name alices-white --net host rabbitmq:3-management
