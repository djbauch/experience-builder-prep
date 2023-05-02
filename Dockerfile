# Build from the lts release of NodeJS (Alpine based) - be aware of the version being used
#FROM node:16.14.0-alpine3.14
#FROM node:18
#FROM centos:7
#FROM ubi8

ARG BASE_REGISTRY=registry1.dso.mil
ARG BASE_IMAGE=ironbank/redhat/ubi/ubi8
ARG BASE_TAG=8.7

FROM node:18.14.2 as base

FROM ${BASE_REGISTRY}/${BASE_IMAGE}:${BASE_TAG}



## Maintainer's email
LABEL maintainer="hernandez@smil.mil"

COPY . /widgets/
WORKDIR /widgets/



ENV PORT=3000

EXPOSE ${PORT}


#ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

CMD ["yarn", "start"]


