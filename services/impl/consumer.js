var config = require('../rabbit/config');
var lockFile = require('lockfile');
var fs = require('fs');

var control = './control.lock';
var last = './control';

module.exports = {

	consumer: function(connection, exchange) {
		console.log('⚪ Trying to connect with queue ' + config.queue);
		connection.queue(config.queue, config.options, function (q) {
			console.log('✔ Connection done!\n');

			// Catch all messages
			q.bind(exchange, config.routes.consumer);

			// Receive messages
			q.subscribe(function (message, headers, deliveryInfo, messageObject) {
				// Print messages to stdout
				console.log('Got a message with route ' + deliveryInfo.routingKey + ' and data:');
				console.log(message.data.toString());

				lockFile.lock(control, {wait:500, retries:10}, function(err) {
					
					fs.readFile(last, function(err, data) {
						console.log('Vai salvar nota fiscal eletronica');

						var newNFe = (parseInt(data) || 0) + 1;

						fs.writeFile(last, newNFe, function(err) {

							lockFile.unlock(control, function(err) {
								console.log('NFe numero ' + newNFe + ' emitida com sucesso!\n');
							})
						});
					});

				});
			});
		});
	},

};
