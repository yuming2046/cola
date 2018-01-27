'use strict';

import Router from "koa-router"
import ArticleController from '../api/v1/controllers/articleController'

const router = new Router();

router
    .get('/', ArticleController.list)
    .get('/:articleId', ArticleController.list)
    .post('/', ArticleController.add)
    .put('/:articleId', ArticleController.update)
    .del('/:articleId', ArticleController.del);

export default router