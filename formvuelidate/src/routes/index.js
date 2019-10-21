import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import main from '../features/auth/main'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})