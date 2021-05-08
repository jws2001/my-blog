import { createRouter, createWebHistory } from 'vue-router';

// 导入路由组件
import container from '../components/container.vue';
import article from '../components/artilce-content.vue';
import error from '../components/error.vue';
//前端页面router
const webRoutes = [{
        path: '/',
        component: container,
        name: "Home"
    },
    {
        path: '/type/:id',
        component: container,
        name: "Type"
    },
    {
        path: '/article/:id',
        component: article,
        name: "Article"
    },
    {
        path: '/:catchAll(.*)',
        component: error,
        name: 'error'
    }
];



//创建一个router
const router = createRouter({
    history: createWebHistory(),
    routes: webRoutes
});

export default router;