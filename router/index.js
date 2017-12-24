import Router from "koa-router"
import userRouter from './user'
console.log(userRouter)

const router = new Router()

router.use(userRouter)

export default router