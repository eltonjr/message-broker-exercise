var rabbit = require('./rabbit/util');
var producer = require('./impl/producer');
var consumer = require('./impl/consumer');

var arg = process.argv[2];

if(!arg) {
	console.log('You must pass an argument from [ consumer, retail, online ]');
	return;
}

rabbit.connect(function(connection, exchange) {

	switch(arg) {
		case 'consumer':
			consumer.consumer(connection, exchange);
			break;

		case 'retail':
			producer.retail(exchange);
			break;

		case 'online':
			producer.online(exchange);
			break;

		default:
			console.log('You must pass an argument from [ consumer, retail, online ]');
	}	

});
