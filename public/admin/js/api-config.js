// const baseUrl = '';
const baseUrl = '/api';

const apiObj = {
    // 登录
    login: {
        method: "POST",
        path: "/admin"
    },
    // 获取自己的信息
    whoAmI: {
        method: "GET",
        path: "/admin"
    },
    // type
    getTypeAll: {
        method: "GET",
        path: '/type'
    },
    removeType: {
        method: "delete",
        path: '/type'
    },
    addType: {
        method: "POST",
        path: '/type'
    },
    putType: {
        method: "PUT",
        path: '/type'
    },
    //文章
    addArticle: {
        method: 'POST',
        path: '/article'
    },
    //添加每日一句
    addDaily: {
        method: "POST",
        path: '/daily'
    },
    //获取有道每日一句
    getYOUDAO: {
        method: "GET",
        path: "/youdao"
    },
    //获取全部文章
    getArticleAll: {
        method: "GET",
        path: "/articledit"
    },
    //删除文章
    deleteArticle: {
        method: "POST",
        path: "/articledit"
    },
    //获取文章详情
    getContent: {
        method: "POST",
        path: "/articledit/content"
    },
    //修改文章接口
    editContent: {
        method: "POST",
        path: "/articledit/editContent"
    }
}

for (const api in apiObj) {
    apiObj[api].path = baseUrl + apiObj[api].path
}

export default apiObj;