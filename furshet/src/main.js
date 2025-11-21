import {createApp} from 'vue'
import App from './App.vue'
import {autoAnimatePlugin} from '@formkit/auto-animate/vue'

import './assets/main.css'

import {createRouter, createWebHistory} from 'vue-router'
import Main from "@/pages/Main.vue";
import AboutUs from "@/pages/AboutUs.vue";
import Menu from "@/pages/Menu.vue";
import Delivery from "@/pages/Delivery.vue";
import Contacts from "@/pages/Contacts.vue";
import Cart from "@/pages/Cart.vue";

const app = createApp(App)

const routes = [
    { path: '/', component: Main, name: 'Main', meta: { breadcrumb: 'Главная'} },
    { path: '/about', component: AboutUs, name: 'About', meta: { breadcrumb: 'О нас'} },
    { path: '/menu', component: Menu, name: 'Menu', meta: { breadcrumb: 'Меню'} },
    { path: '/delivery', component: Delivery, name: 'Delivery', meta: { breadcrumb: 'Доставка'} },
    { path: '/contacts', component: Contacts, name: 'Contacts', meta: { breadcrumb: 'Контакты'} },
    { path: '/cart', component: Cart, name: 'Cart', meta: { breadcrumb: 'Корзина'} },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
