# RabbitMQ - example setup

## Quickstart

Run [RabbitMQ](https://www.rabbitmq.com):
```shell
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
Management UI is on [http://localhost:15672](http://localhost:15672).
- User: `guest`
- PW: `guest`

## Docker Compose Example

This example contains several publisher and consumer clients that exchange random messages every few seconds. The transfer is purely done via RabbitMQ interface. The code for the clients is based on the [publish/subscribe tutorial ](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html) on the RabbitMQ website.

```shell
docker-compose up
```

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
