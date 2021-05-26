#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbit', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel( async function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'logs';

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });

    function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
    }

    // taken from https://stackoverflow.com/a/1349426
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    while (true){
        let msg = 'msg-' + makeid(7);
        channel.publish(exchange, '', Buffer.from(msg));
        console.log(" [x] Sent %s", msg);

        let seconds = Math.floor(Math.random() * 10); 
        await sleep(seconds * 1000)
    }
  });
});
