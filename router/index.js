'use strict';

import Router from "koa-router"
import userRouter from './user'
import articleRouter from './article'
import goodsRouter from './goods'
import couponRouter from './coupon'

const router = new Router();

router.prefix('/api/v1');

router.use('/goods', goodsRouter.routes());
router.use('/user', userRouter.routes());
router.use('/coupon', couponRouter.routes());
router.use('/article', articleRouter.routes());

export default router