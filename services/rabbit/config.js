module.exports = {
	host: 'localhost',
	exchange: 'amqp.topic',
	queue: 'store.orders',
	routes: {
		consumer: 'orders.*',
		online: 'orders.online',
		retail: 'orders.retail'
	}
};
