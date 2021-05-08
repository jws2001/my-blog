export default {
    type: {
        //获取全部的类型
        getType: {
            method: 'GET',
            path: '/web/type'
        }
    },
    article: {
        //关于文章的接口
        getArticle: {
            method: 'GET',
            path: '/web/article'
        },
        //传递Id获取单个文章
        getArticleContent: {
            method: 'GET',
            path: '/web/article/articleContent'
        }
    },
    daily: {
        //获取每日一句的接口
        getDaily: {
            method: "GET",
            path: '/web/daily'
        }
    },
    //评论的接口
    comment: {
        //添加顶级评论
        addRootComment: {
            method: 'POST',
            path: '/web/comment'
        },
        //分页获取评论
        getPageCommentList: {
            method: 'GET',
            path: '/web/comment'
        },
        //子评论
        addChildrenComment: {
            method: 'POST',
            path: '/web/commentChildren'
        }
    }
}