/**
 * 验证token 中间件
 */

const jwt = require('../util/verifyJws');
const returnData = require('../util/returnData');

//不需要token验证的api
const posts = [{
        method: 'POST',
        path: '/api/admin'
    },
    {
        method: "POST",
        path: '/api/admin/add'
    },
    {
        method: "GET",
        path: "/api/admin"
    },
    {
        method: "GET",
        path: "/web/type"
    },
    {
        method: 'GET',
        path: '/web/article'
    }, {
        method: 'GET',
        path: '/web/type/id'
    }, {
        method: 'GET',
        path: '/web/article/articleContent'
    }, {
        method: 'GET',
        path: '/web/daily'
    }, {
        method: 'POST',
        path: '/web/comment'
    },
    {
        method: 'GET',
        path: '/web/comment'
    },
    {
        method: 'POST',
        path: '/web/commentChildren'
    }
];

module.exports = async function(ctx, next) {
    //首先判断 这个接口需不需要验证
    const isVerify = posts.filter(item => {
        return item.method === ctx.method && item.path === ctx.path;
    })
    console.log(isVerify)
    if (isVerify.length) {
        //不需要验证token
        await next();
        return;
    } else {
        const token = jwt.verify(ctx);
        if (token) {
            await next();
            return;
        }

        ctx.body = returnData({
            isLogin: false
        }, '请登录在访问', 0);
    }
}