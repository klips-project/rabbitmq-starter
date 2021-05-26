# Access RabbitMQ from the Browser via Websocket

This demo shows how a website can access RabbitMQ via a Websocker using the MQTT protocoll.

```shell
docker-compose up
```

It contains three services:
- RabbitMQ with the plugins `rabbitmq_mqtt` and `rabbitmq_web_mqtt`. They need to be enabled in the custom Dockerfile
- A publisher that periodically sends messages to the `exchange` named `amq.topic` with the `binding`/`routing` named `test`
- A simple website available on [localhost:8080](localhost:8080) which consumes the messages. It also has a interface to manually send messages. It can also be opened multiple times and will be updated automatically.

The website can be opened outside of the of the docker stack.

