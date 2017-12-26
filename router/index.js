import Router from "koa-router"
import userRouter from './user'

const router = new Router()

router.prefix('/api/v1')

router.use(userRouter.routes())

export default router