clear:
	sudo rm -rf .aleph
	sudo rm -rf dist

up: clear
	docker-compose up
