'use strict';
import CouponModel from '../models/coupon'
const logger = require('../../../util/log')('CouponService');

class CouponService {
    static async list(ctx, next) {
        ctx.body = "Hello Coupon!!!"
    }

    static async add(ctx, next) {

    }

    static async update(ctx, next) {

    }

    static async del(ctx, next) {

    }
}

export default CouponService