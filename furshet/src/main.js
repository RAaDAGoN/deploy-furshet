

import { createApp } from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue";
import AboutUs from "@/pages/AboutUs.vue";

const app = createApp(App)

const routes = [
    { path: '/', component: Main, name: 'Main', meta: { breadcrumb: 'Главная'} },
    { path: '/about', component: AboutUs, name: 'About', meta: { breadcrumb: 'О нас'} },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
