run-local:
	docker-compose up --build

git-origin:
	git add .
	git commit -m "$(message)"
	git pull origin "$(branch)"
	git push origin "$(branch)"
