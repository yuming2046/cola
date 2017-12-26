import UserService from '../services/userService'

class UserController {
    static async list(ctx, next) {
        UserService.list(ctx)
    }

    static async add(ctx, next) {
        UserService.add(ctx)
    }

    static async update(ctx, next) {
        UserService.update(ctx)
    }

    static async del(ctx, next) {
        UserService.del(ctx)
    }
}

export default UserController