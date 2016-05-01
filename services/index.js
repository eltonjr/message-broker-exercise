var amqp = require('amqp');
var rabbit = require('./rabbit/util');
var services = require('./impl/services');

var arg = process.argv[2];

if(!arg) {
	console.log('You must pass an argument from [ consumer, retail, online ]');
	return;
}

rabbit.connect(function(connection, exchange) {

	switch(arg) {
		case 'consumer':
			services.consumer(connection, exchange);
			break;

		case 'retail':
			services.retail(exchange);
			break;

		case 'online':
			services.retail(exchange);
			break;

		default:
			console.log('You must pass an argument from [ consumer, retail, online ]');
	}	

});
