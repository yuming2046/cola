import Router from "koa-router"
const router = new Router()

import UserController from '../api/v1/controllers/userController'

router
    .get('/list', UserController.list)
    .post('/add', UserController.add)
    .put('/update', UserController.update)
    .del('/delete', UserController.del)

export default router
