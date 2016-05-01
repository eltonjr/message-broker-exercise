var amqp = require('amqp');
var rabbitConfig = require('./config/rabbit');

var connection = amqp.createConnection({ host: rabbitConfig.host });

// Wait for connection to become established.
connection.on('ready', function () {
	
	console.log('Wooooow... we are readyyy');

	var exchange = connection.exchange(rabbitConfig.exchange, {});

	// Use the default 'amq.topic' exchange
	connection.queue(rabbitConfig.queue, function (q) {

		console.log('Conected to queue');

		// Catch all messages
		q.bind(exchange, rabbitConfig.route);

		// Receive messages
		q.subscribe(function (message, headers, deliveryInfo, messageObject) {
			// Print messages to stdout
			console.log('Got a message with route ' + deliveryInfo.routingKey + ' and data:');
			console.log(JSON(message.data));
		});
	});
});
