.PHONY: producer-online producer-retail consumer rabbit install

install:
	npm install

producer-retail:
	node services/index.js retail

producer-online:
	node services/index.js online

consumer:
	node services/index.js consumer

rabbit:
	./install.sh
