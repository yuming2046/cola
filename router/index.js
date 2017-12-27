import Router from "koa-router"
import userRouter from './user'
import articleRputer from './article'

const router = new Router()

router.prefix('/api/v1')

router.use(userRouter.routes())

export default router