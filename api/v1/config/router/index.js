import Router from "koa-router"

let router = new Router()

router
	.get('/', function (ctx, next) {
		console.log("####")
		ctx.body = 'Hello World!';
	})
	.get('/users', (ctx, next) => {
		console.log(ctx)
		ctx.body = ctx;
	})
	.get('/users/add', (ctx, next) => {
		console.log(ctx)
		ctx.body = ctx.req;
	})
	.del('/users/del/:id', function (ctx, next) {
		// ...
	})
	.all('/users/:id', function (ctx, next) {
		// ...
	});

export default router