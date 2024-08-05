import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardView from '../views/DashboardView.vue';
import ApiView from '../views/ApiView.vue';
import AboutView from '../views/AboutView.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/api',
        name: 'Api',
        component: ApiView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;