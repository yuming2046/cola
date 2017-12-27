import ArticleModel from '../models/article'

class ArticleService {
    static async list(ctx, next) {
        ctx.body = "Hello World!!!"
    }

    static async add(ctx, next) {

    }

    static async update(ctx, next) {

    }

    static async del(ctx, next) {

    }
}

export default ArticleService