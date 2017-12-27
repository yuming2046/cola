import Router from "koa-router"
const router = new Router()

import ArticleController from '../api/v1/controllers/articleController'

router
    .get('/list', ArticleController.list)
    .post('/add', ArticleController.add)
    .put('/update', ArticleController.update)
    .del('/delete', ArticleController.del)

export default router