<template>
  <MobileMenu v-if="menuOpen" @closeMenu="closeMenu" v-auto-animate/>

  <div class="main-container" >

    <Header :menuOpen="menuOpen" @openMenu="openMenu" @closeMenu="closeMenu"/>

    <div class="mt-[55px] md:mt-[135px]" >
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script setup>

// функция для открытия корзины (по умолчанию корзина скрыта)
// меняется состояние при клике
import {provide, ref} from "vue";
import MobileMenu from "@/components/MobileMenu.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const menuOpen = ref(false)

// закрыть козину
const closeMenu = () => {
  menuOpen.value = false
}

// открыть корзину
const openMenu = () => {
  menuOpen.value = true
}

provide('menuOpen', menuOpen)
</script>