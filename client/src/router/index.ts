import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import QrGenerator from '../pages/QrGenerator.vue'
import NotFound from "../pages/NotFound.vue";

const routes = [
    {
        path: '/',
        children: [
            {path: '', name: 'home', component: Home },
            {path: 'qr', name: 'qr', component: QrGenerator },
            {path: ':notfound', name: 'not_found', component: NotFound },
        ]}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router