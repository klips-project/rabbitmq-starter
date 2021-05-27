#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

// this class regularly sends random messages to
// the queue: 'klips-queue'

// taken from https://stackoverflow.com/a/1349426
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

amqp.connect('amqp://localhost', function (err, conn) {
  conn.createChannel(async function (err, ch) {
    var q = 'klips-queue';

    ch.assertQueue(q, { durable: true, noAck: false });
    setInterval(function () {
      var msg = makeid(8);
      ch.sendToQueue(q, Buffer.from(msg));
      console.log(`SEND: ${msg}`);
    },
      100); //<-- time how often the messages are send
  });
});
