var config = require('./config');

module.exports = {
	
	connect: function(callback) {
		console.log('⚪ Trying to create connection with ' + config.host);
		var connection = amqp.createConnection({ host: config.host });

		connection.on('ready', function () {
			
			console.log('✔ Connection done!');
			console.log('⚪ Trying to connect with exchange ' + config.exchange);

			var exchange = connection.exchange(config.exchange, {}, function(exc) {

				console.log('✔ Connection done!');

				callback(connection, exchange);

			});

		});
	}
}
