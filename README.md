# RabbitMQ - example setup

This repository contains basic examples of RabbitMQ functionality. See the
`README` files in the respective directories.

## Quickstart

Run [RabbitMQ](https://www.rabbitmq.com):
```shell
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
Management UI is on [http://localhost:15672](http://localhost:15672).
- User: `guest`
- PW: `guest`

## Notes

Inside the docker container of MessageMQ are some commandline tools.

`rabbitmq-defaults`, `rabbitmq-env`, `rabbitmq-queues`, `rabbitmq-upgrade`, `rabbitmqctl`, `rabbitmq-diagnostics`, `rabbitmq-plugins`, `rabbitmq-server`, `rabbitmqadmin`

The can be accessed via the shell itself:

```shell
docker exec -i -t <your-rabbit-mq-container> bash
```

or directly via:
```shell
docker exec -i -t <your-rabbit-mq-container> rabbitmqctl
```
