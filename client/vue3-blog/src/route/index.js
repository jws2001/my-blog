import { createRouter, createWebHistory } from 'vue-router'

// 导入路由组件
import container from '../components/container.vue';
import article from '../components/artilce-content.vue';
//前端页面router
const webRoutes = [{
        path: '/',
        component: container
    },
    {
        path: '/type/:id',
        component: container
    },
    {
        path: '/article/:id',
        component: article
    }
];



//创建一个router
const router = createRouter({
    history: createWebHistory(),
    routes: webRoutes
});

export default router;