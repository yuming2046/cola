import Router from "koa-router"
const router = new Router()

import ArticleController from '../api/v1/controllers/articleController'

router
    .get('/', ArticleController.list)
    .get('/:articleId', ArticleController.list)
    .post('/', ArticleController.add)
    .put('/:articleId', ArticleController.update)
    .del('/:articleId', ArticleController.del)

export default router