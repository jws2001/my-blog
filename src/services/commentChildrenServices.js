const CommentChildren = require('../models/commentChildren');
const moment = require('moment');

//添加一条子评论

async function addCommentChildren(userId, userName, content, avatarSrc, commentId, articleId) {
    const commentChildren = await CommentChildren.create({
        userId,
        userName,
        content,
        createTime: moment.utc().valueOf(),
        avatarSrc,
        commentId,
        articleId
    })
    return commentChildren;
}

module.exports = {
    addCommentChildren
}