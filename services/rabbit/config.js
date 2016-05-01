module.exports = {
	host: 'localhost',
	exchange: 'amqp.topic',
	queue: 'store.orders',
	routes: {
		consumer: '#',
		online: 'orders.online',
		retail: 'orders.retail'
	}
};
