const Router = require('@koa/router');
const returnData = require('../util/returnData');
const DailySentence = require('../services/daily_sentence');
const router = new Router({
    prefix: '/web/daily'
})

router.get('/', async ctx => {
    const info = await DailySentence.getDaily();
    ctx.body = returnData(info, '获取成功')
})

module.exports = router.routes();