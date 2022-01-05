# (Non)-Acknowledges Messages

This examples shows how to acknowledge messages or to reject them a.k.a. `nack` them.

Start a local RabbitMQ via:

```shell
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

There are two nodescripts:

- `publisher.js` regularly publishes messages to the queue `klips-queue`
- `consumer.js` reads the messages one-by-one and randomly `ack`s or `nack`s them.

Run each of these script using `node` in separately terminals. On the RabbitMQ admin site on [localhost:15672/#/queues](http://localhost:15672/#/queues), you can observe how the number of `ready` und `unacked` messages are changing.