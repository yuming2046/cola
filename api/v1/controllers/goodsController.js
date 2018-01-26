import GoodsService from '../services/goodsService'

class GoodsController {
    static async list(ctx, next) {
        GoodsService.list(ctx)
    }

    static async add(ctx, next) {
        GoodsService.add(ctx)
    }

    static async update(ctx, next) {
        GoodsService.update(ctx)
    }

    static async del(ctx, next) {
        GoodsService.del(ctx)
    }
}

export default GoodsController