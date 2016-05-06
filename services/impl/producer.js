var config = require('../rabbit/config');

function getFruit() {
	var products = ['Abacate', 'Maracujá', 'Morango', 'Acerola', 'Laranja', 'Kiwi', 'Abacaxi', 'Banana', 'Melancia'];
	var random = Math.floor(Math.random() * products.length);
	return products[random];
}

module.exports = {

	online: function(exchange) {

		var innercount = 1;

		(function loop(){
			setTimeout(function() {

				var fruit = getFruit();
				console.log('Vai emitir ' + fruit + ' para broker. (já mandei ' + innercount++ +')');
				exchange.publish(config.routes.online, fruit, { contentType: 'text/plain' });
				loop();

			}, 3000);
		})();
	},

	retail: function(exchange) {

		var innercount = 1;

		(function loop(){
			setTimeout(function() {

				var fruit = getFruit();
				console.log('Vai emitir ' + fruit + ' para broker (já mandei ' + innercount++ +')');
				exchange.publish(config.routes.retail, fruit, { contentType: 'text/plain' });
				loop();
				
			}, 4000);
		})();
	}

};
