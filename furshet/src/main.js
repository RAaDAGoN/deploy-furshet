

import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue";

const app = createApp(App)

const routes = [
    { path: '/', component: Main, name: 'Main' },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)

app.mount('#app')
