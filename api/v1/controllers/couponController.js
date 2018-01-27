import CouponService from '../services/couponService'

class CouponController {
    static async list(ctx, next) {
        CouponService.list(ctx)
    }

    static async add(ctx, next) {
        CouponService.add(ctx)
    }

    static async update(ctx, next) {
        CouponService.update(ctx)
    }

    static async del(ctx, next) {
        CouponService.del(ctx)
    }
}

export default CouponController