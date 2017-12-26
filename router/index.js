import Router from "koa-router"
import userRouter from './user'

const router = new Router()

router.use(() => {return userRouter})

router.get('/', (ctx, next) => {
    console.log("========>>>>>>>")
    ctx.body = 'helle world!!'
})

export default router