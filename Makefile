serve:
	docker build -t dating-app-image .
	docker run -d -p 8080:80 dating-app-image:latest
