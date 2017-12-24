import Router from "koa-router"

const userRouter = new Router()

userRouter.prefix('/user')

userRouter
    .get('/list', (ctx, next) => {

    })
    .post('/add', (ctx, next) => {

    })
    .put('/update', (ctx, next) => {

    })
    .del('/delete', (ctx, next) => {

    })