var config = require('./rabbit/config');

module.exports = {

	consumer: function(connection, exchange) {
		console.log('⚪ Trying to connect with queue ' + config.queue);
		connection.queue(config.queue, function (q) {

			console.log('✔ Connection done!');

			// Catch all messages
			q.bind(exchange, config.routes.consumer);

			// Receive messages
			q.subscribe(function (message, headers, deliveryInfo, messageObject) {
				// Print messages to stdout
				console.log('Got a message with route ' + deliveryInfo.routingKey + ' and data:');
				console.log(JSON(message.data));
			});
		});
	},

	online: function(exchange) {
		exchange.publish(config.routes.online, 'Macaco', { contentType: 'text/plain' });
	},

	retail: function(exchange) {
		exchange.publish(config.routes.retail, 'Macaco', { contentType: 'text/plain' });
	}

};
