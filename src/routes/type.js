const Router = require('@koa/router');
const returnData = require('../util/returnData');
const router = new Router({
    prefix: '/api/type'
});

const Type = require('../services/typeServices');

//添加一个类型
router.post('/', async ctx => {
    const reqBody = ctx.request.body;
    const typeInfo = await Type.addType(reqBody.name, reqBody.icon);
    ctx.body = returnData(typeInfo, '添加成功');
})

//删除一个类型
router.delete('/', async ctx => {
    const reqBody = ctx.request.body;
    const remove = await Type.removeType(reqBody.id);
    if (remove) {
        //删除成功
        ctx.body = returnData(undefined, '删除成功');
    } else {
        ctx.body = returnData(undefined, '删除失败', 0)
    }
})

//获取所有的数据
router.get('/', async ctx => {
    const reuslt = await Type.getAllType();
    ctx.body = returnData(reuslt, '全部type数据');
})

//修改
router.put('/', async ctx => {
    const reqBody = ctx.request.body;
    const result = await Type.putType(reqBody.name, reqBody.icon, reqBody.id);

    if (result.length) {
        ctx.body = returnData(undefined, '修改成功', 1)
    } else {
        ctx.body = returnData(undefined, '修改失败', 0)
    }

})

module.exports = router.routes();