import Router from "koa-router"
import CouponController from '../api/v1/controllers/couponController'

const router = new Router();

router
    .get('/', CouponController.list)
    .get('/:couponId', CouponController.list)
    .post('/', CouponController.add)
    .put('/:couponId', CouponController.update)
    .del('/:couponId', CouponController.del);

export default router