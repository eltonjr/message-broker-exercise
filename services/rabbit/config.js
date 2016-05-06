module.exports = {
	host: 'localhost',
	exchange: 'amqp.topic',
	queue: 'store.orders',
	options: {
		durable: true,
		autoDelete: false
	},
	routes: {
		consumer: 'orders.*',
		online: 'orders.online',
		retail: 'orders.retail'
	}
};
