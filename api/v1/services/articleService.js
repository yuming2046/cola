'use strict';
import ArticleModel from '../models/article'
const logger = require('../../../util/log')('ArticleService');

class ArticleService {
    static async list(ctx, next) {
        logger.info('Hello Article List: ' + JSON.stringify(ctx))
        ctx.body = "Hello Article"
    }

    static async add(ctx, next) {

    }

    static async update(ctx, next) {

    }

    static async del(ctx, next) {

    }
}

export default ArticleService