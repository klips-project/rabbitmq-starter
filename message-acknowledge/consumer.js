#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

// this class reads the messages one by one and
// randomly acks or nacks them.

amqp.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(async function (err, ch) {
        var q = 'klips-queue';

        // necessary for checking if our queue exists
        ch.assertQueue(q, { durable: true, noAck: false });

        // ensure only one message processed at time
        ch.prefetch(1);
        ch.consume(q, function (msg) {
            setTimeout(
                function() {
                    console.log(`\nreceived message ${msg.content.toString()}`);
                    console.log(`... process job ... `);
                    // randomly ack or nack messages
                    var success = Math.random() > 0.5;
                    if (success) {
                        console.log(`SUCCESS ${msg.content.toString()} - Acknowledge`);
                        ch.ack(msg);
                    } else {
                        console.log(`FAILURE ${msg.content.toString()} - reject (no acknowledge)`);
                        // puts the message back to the top of the queue
                        ch.nack(msg);
                    }
                },
                1000 // <-- time how long the fake-processing of the message takes
            );
        });
    });
});
