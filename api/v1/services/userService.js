'use strict';
import UserModel from '../models/user'
const logger = require('../../../util/log')('UserService');

class UserService {
    static async list(ctx, next) {
        ctx.body = "Hello User!!!"
    }

    static async add(ctx, next) {

    }

    static async update(ctx, next) {

    }

    static async del(ctx, next) {

    }
}

export default UserService