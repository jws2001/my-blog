const Router = require('@koa/router');
const returnData = require('../util/returnData');
const { addCommentChildren } = require('../services/commentChildrenServices');
const imgSec = require('../util/imgsSrc');

const router = new Router({
    prefix: '/web/commentChildren'
});

function ranDomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

//添加一条子评论
router.post('/', async ctx => {
    const data = ctx.request.body;
    let avatarSrc, avatarIndex;
    //传递了头像就不用自己生成了
    if (!data[5]) {
        avatarIndex = ranDomNumber(1, 23);
        avatarSrc = imgSec[avatarIndex]
    }
    avatarSrc ? '' : avatarSrc = data[5];
    const commentChildren = await addCommentChildren(data[0], data[1], data[2], avatarSrc, data[3], data[4])
    ctx.body = returnData(commentChildren, 'yes')
})


module.exports = router.routes()