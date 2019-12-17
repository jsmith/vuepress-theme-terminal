dev:
	npm run dev

deploy:
	npm run build
	git add .
	git commit -m "deploy"
	git push
