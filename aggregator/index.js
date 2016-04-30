var amqp = require('amqp');
var rabbitConfig = require('./config/rabbit');

var connection = amqp.createConnection({ host: rabbitConfig.host });

// Wait for connection to become established.
connection.on('ready', function () {
	
	console.log('Wooooow... we are readyyy');

	// Use the default 'amq.topic' exchange
	connection.queue(rabbitConfig.queue, function (q) {

		console.log('Conected to queue');

		// Catch all messages
		q.bind(rabbitConfig.route);

		// Receive messages
		q.subscribe(function (message) {
			// Print messages to stdout
			console.log(message);
		});
	});
});
