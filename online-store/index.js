var amqp = require('amqp');
var rabbitConfig = require('./config/rabbit');

var connection = amqp.createConnection({ host: rabbitConfig.host });

connection.on('ready', function () {
	
	console.log('Wooooow... we are readyyy');
	console.log('Now lets create a exchange connection');

	var exchange = connection.exchange(rabbitConfig.exchange, {}, function(exc) {

		console.log('Woooooow... connection with '+ exc.name +' is open!!!');

		exchange.publish(rabbitConfig.route, 'Macaco', { contentType: 'text/plain' });

	});

});
