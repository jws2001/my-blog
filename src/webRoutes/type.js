const Router = require('@koa/router');
const returnData = require('../util/returnData');
const router = new Router({
    prefix: '/web/type'
});
const Type = require('../services/typeServices');

router.get('/', async ctx => {
    const id = ctx.query.id;
    const reuslt = await Type.getAllType(id);
    ctx.body = returnData(reuslt, '获取成功');
})


module.exports = router.routes();