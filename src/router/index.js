import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/faq',
        name: 'Faq',
        component: () => import('../views/Faq.vue'),
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: () => import('../views/Quiz.vue'),
    },
]

const router = new VueRouter({
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})

export default router
