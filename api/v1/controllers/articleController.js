import ArticleService from '../services/articleService'

class ArticleController {
    static async list(ctx, next) {
        ArticleService.list(ctx)
    }

    static async add(ctx, next) {
        ArticleService.add(ctx)
    }

    static async update(ctx, next) {
        ArticleService.update(ctx)
    }

    static async del(ctx, next) {
        ArticleService.del(ctx)
    }
}

export default ArticleController