'use strict';
import GoodsModel from '../models/goods'
const logger = require('../../../util/log')('GoodsService');

class GoodsService {
    static async list(ctx, next) {
        ctx.body = "Hello Goods!!!"
    }

    static async add(ctx, next) {

    }

    static async update(ctx, next) {

    }

    static async del(ctx, next) {

    }
}

export default GoodsService