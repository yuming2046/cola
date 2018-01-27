'use strict';

import Router from "koa-router"
import UserController from '../api/v1/controllers/userController'

const router = new Router();

router
    .get('/', UserController.list)
    .get('/:articleId', UserController.list)
    .post('/', UserController.add)
    .put('/:articleId', UserController.update)
    .del('/:articleId', UserController.del);

export default router
