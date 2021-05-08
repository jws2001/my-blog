const Router = require('@koa/router');
const jwt = require('../util/verifyJws')
const returnData = require('../util/returnData');
const router = new Router({
    prefix: '/api/admin'
});
const Admin = require('../services/adminServices');


//获取个人信息
router.get('/', async ctx => {
    let token = await jwt.verify(ctx);
    //token不存在或已经过期
    if (!token) {
        ctx.body = returnData({
            isLogin: false
        }, '请登录在访问', 0);
        return;
    }

    //token 存在获取个人信息
    const id = token.data.id
    const result = await Admin.whoAmI(id)
    ctx.body = returnData(result, '用户信息', 1);
});


//登录
router.post('/', async ctx => {
    const reqBody = ctx.request.body;
    const uInfo = await Admin.loginAdmin(reqBody.loginId, reqBody.loginPwd);
    //颁发JWT
    jwt.publish(ctx, uInfo);
    ctx.body = uInfo;
});

//添加管理员
router.post('/add', async ctx => {
    const reqBody = ctx.request.body;
    const uInfo = await Admin.addAdmin(reqBody.loginId, reqBody.loginPwd);
    ctx.body = uInfo
});

module.exports = router.routes();