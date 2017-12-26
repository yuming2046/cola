import Router from "koa-router"
const router = new Router()

router
    .get('/list', (ctx, next) => {
        console.log("======>>>>>>>>")
        ctx.body = "Hello World"
    })
    .post('/add', (ctx, next) => {

    })
    .put('/update', (ctx, next) => {

    })
    .del('/delete', (ctx, next) => {

    })

export default router
