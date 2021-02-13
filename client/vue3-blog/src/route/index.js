import { createRouter, createWebHistory } from 'vue-router'

// 导入路由组件
import home from '../components/home.vue';
import container from '../components/container.vue';
import admin from '../back-system/backSystem.vue';
//定义路由规则
const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/type/:id',
        component: container
    },
    {
        path: '/admin',
        component: admin
    }
]

//创建一个router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;