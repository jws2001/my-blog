const Router = require('@koa/router');
const returnDate = require('../util/returnData');
const YOUDAO = require('../util/getYOUDAO');
const router = new Router({
    prefix: '/api/youdao'
})

router.get('/', async ctx => {
    const info = await YOUDAO();
    ctx.body = returnDate(info, '获取成功');
})

module.exports = router.routes();