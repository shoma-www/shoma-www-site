clear:
	sudo rm -rf .aleph
	sudo rm -rf dist

up: clear
	deno run --unstable --allow-read --allow-write scripts/createArticleData.ts && \
	docker-compose up web

up-static: clear
	deno run --unstable --allow-read --allow-write scripts/createArticleData.ts && \
	aleph build && \
	docker-compose up static

cache-%:
	$(eval VERSION := $*)
	deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/plugins/markdown.ts & \
  deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/types.ts & \
  deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/framework/core/mod.ts & \
  deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/framework/react/mod.ts

blog:
	./scripts/blog_write.sh