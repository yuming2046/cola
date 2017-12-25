import Router from "koa-router"

const router = new Router()

router.prefix('/user')

router
    .get('/list', (ctx, next) => {
        ctx.body = "Hello World"
    })
    .post('/add', (ctx, next) => {

    })
    .put('/update', (ctx, next) => {

    })
    .del('/delete', (ctx, next) => {

    })

export default router