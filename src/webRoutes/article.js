const Router = require('@koa/router');
const returnData = require('../util/returnData');
const router = new Router({
    prefix: '/web/article'
});
const Article = require('../services/articleServices');
//分页获取文章内容
router.get('/', async ctx => {
    const query = ctx.request.query
    const result = await Article.getPageArticle(+query.offset, +query.limit, query.typeId)
    ctx.body = returnData(result, 'yes')
})

router.get('/articleContent', async ctx => {
    const query = ctx.request.query
    const result = await Article.getArticleContent(+query.id);
    ctx.body = returnData(result, 'yes');
})

module.exports = router.routes()