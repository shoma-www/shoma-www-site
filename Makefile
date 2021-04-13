clear:
	sudo rm -rf .aleph
	sudo rm -rf dist

up: clear
	docker-compose up

cache-%:
	$(eval VERSION := $*)
	deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/plugins/markdown.ts & \
  deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/types.ts & \
  deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/framework/core/mod.ts & \
  deno cache https://deno.land/x/aleph@v0.3.0-alpha.${VERSION}/framework/react/mod.ts