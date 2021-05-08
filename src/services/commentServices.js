const Comment = require('../models/comment');
const CommentChildren = require('../models/commentChildren');
const moment = require('moment');



/**
 * 添加一条顶级评论
 * @param {用户id} userId 
 * @param {评价的内容} contment 
 */
async function addRootComment(userId, userName, content, articleId, avatarSrc) {
    const comment = await Comment.create({
        userId,
        userName,
        content,
        createTime: moment.utc().valueOf(),
        articleId,
        avatar: avatarSrc
    })
    return comment
}

/**
 * 根据文章id分页获取评论
 */
async function getCommentList(articleId, offset, limit) {
    //分页获取评论
    const commentList = await Comment.findAndCountAll({
        offset: (offset - 1) * limit,
        limit,
        where: {
            articleId
        },
        include: [{
            model: CommentChildren,
            attributes: ['avatarSrc', 'commentId', 'content', 'createTime', 'id', 'userId', 'userName']
        }],
        order: [
            ['id', 'DESC']
        ]
    })
    return commentList
}


module.exports = {
    addRootComment,
    getCommentList,
}