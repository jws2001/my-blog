const Router = require('@koa/router');
const returnData = require('../util/returnData');
const DailySentence = require('../services/daily_sentence');
const router = new Router({
        prefix: '/api/daily'
    })
    //添加每日一句

router.post('/', async ctx => {
    const reqBody = ctx.request.body;
    const info = await DailySentence.addDailySentence(reqBody.en, reqBody.zh_CN);

    ctx.body = returnData(info, '添加成功')
})

module.exports = router.routes();