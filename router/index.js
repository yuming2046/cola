import Router from "koa-router"
import userController from '../../'

let router = new Router()

router
	.get('/', userController)
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