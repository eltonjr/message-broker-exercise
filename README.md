# A Message-broker Exercise

Postgrad exercise of an architecture with a message broker

## Instructions

You must have `node`, `npm` and `docker` installed.

First start the environment with a RabbitMQ:
```
make rabbit
```

Then you can install the needed packages:
```
make install
```

After that your system is ready to run.

Start by creating a consumer for your messages:
```
make consumer
```

Then you can create a producer (either online or retail):
```
make producer-online
make producer-retail
```

You can play adding more producers or adding more consumers to see them interacting with each other.

Have fun :)
