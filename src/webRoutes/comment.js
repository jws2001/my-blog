const Router = require('@koa/router');
const returnData = require('../util/returnData');
const { addRootComment, getCommentList } = require('../services/commentServices');
const imgSec = require('../util/imgsSrc');
const router = new Router({
    prefix: '/web/comment'
})

function ranDomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}


//添加顶级评论
let astrict = 0;
let userID = '';
router.post('/', async ctx => {
    //同一个userID 1分钟只能评论2次
    const data = ctx.request.body;
    if (astrict + 1000 * 60 > Date.now() && userID === data.userId) {
        ctx.body = returnData(null, '禁止刷屏');
        return
    }
    userID = data.userId;
    astrict = Date.now();

    let avatarSrc, avatarIndex;
    //传递了头像就不用自己生成了
    if (!data.avatar) {
        avatarIndex = ranDomNumber(1, 23);
        avatarSrc = imgSec[avatarIndex]
    }
    avatarSrc ? '' : avatarSrc = data.avatar;
    const comment = await addRootComment(data.userId, data.userName, data.content, data.articleId, avatarSrc);
    ctx.body = returnData(comment, '评论成功')
})



//根据文章id分页获取评论
router.get('/', async ctx => {
    const search = ctx.request.query;
    const commentList = await getCommentList(search.articleId, +search.offset, +search.limit)
    ctx.body = returnData(commentList, 'ok')
})


module.exports = router.routes()