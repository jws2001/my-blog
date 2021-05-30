const Router = require('@koa/router');
const reutrnData = require('../util/returnData');
const articleServices = require('../services/articleServices');
const returnData = require('../util/returnData');
const router = new Router({
    prefix: '/api/articledit'
})


router.get('/', async ctx => {
    const data = await articleServices.getArticleAll();
    ctx.body = reutrnData(data, 'yes')
})

router.post('/', async ctx => {
    const id = ctx.request.body.id;
    const data = await articleServices.delArticle(id);
    if (data) {
        ctx.body = reutrnData(data, 'yes')
    } else {
        ctx.body = reutrnData(data, 'no', 0)
    }
})


router.post('/content', async ctx => {
    const id = ctx.request.body.id;
    const data = await articleServices.getContent(id);
    ctx.body = returnData(data, 'yes')
})

router.post('/editContent', async ctx => {
    const id = ctx.request.body.id;
    const newContent = ctx.request.body.newContent;
    const data = await articleServices.editContent(id, newContent);
    ctx.body = reutrnData(data, 'yes');
})

module.exports = router.routes();