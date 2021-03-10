const baseUrl = 'http://localhost/api';

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
    }
}

for (const api in apiObj) {
    apiObj[api].path = baseUrl + apiObj[api].path
}

export default apiObj;