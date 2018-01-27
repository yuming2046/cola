import Router from "koa-router"
import GoodsController from '../api/v1/controllers/goodsController'

const router = new Router();

router
    .get('/', GoodsController.list)
    .get('/:goodsId', GoodsController.list)
    .post('/', GoodsController.add)
    .put('/:goodsId', GoodsController.update)
    .del('/:goodsId', GoodsController.del);

export default router