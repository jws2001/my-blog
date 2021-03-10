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
    }
}