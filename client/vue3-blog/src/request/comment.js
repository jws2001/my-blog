import axios from '../axios';
import api from './api';

//添加一条顶级评论
export async function addRootComment(userId, userName, content, articleId, avatar) {
    const data = {
        userId,
        userName,
        content,
        articleId
    }
    avatar ? data.avatar = avatar : ''
    const result = await axios({
        method: api.comment.addRootComment.method,
        url: api.comment.addRootComment.path,
        data
    })
    return result.data
}

//分页获取评论
export async function getPageCommentList(articleId, offset, limit) {
    const commentList = await axios({
        method: api.comment.getPageCommentList.method,
        url: api.comment.getPageCommentList.path,
        params: {
            articleId,
            offset,
            limit
        }
    })
    return commentList.data;
}


//添加分页品论
export async function addChildrenComment(...data) {
    const childrenComment = await axios({
        method: api.comment.addChildrenComment.method,
        url: api.comment.addChildrenComment.path,
        data: {
            ...data
        }
    })
    return childrenComment
}