<template>
  <header class="bg-[#30592A80] text-white" >
    <div class="border-b border-white border-opacity-50 hidden md:block ">
      <ul class="max-w-[1746px] mx-auto py-[10px] flex items-center justify-center gap-12 lg:justify-end sm:text-lg w-full font-montserrat font-normal px-4 sm:px-5">
        <li>Вологда</li>
        <li>+7 (817) 393-47-47</li>
        <li>Ежедневно 24/7</li>
      </ul>
    </div>

    <div class="max-w-[1746px] mx-auto py-[10px] flex justify-between items-center px-4 sm:px-5">
      <h1 class="font-comfort font-normal text-xl sm:text-2xl lg:text-4xl xl:text-5xl ">Фуршет</h1>

      <div class="flex flex-1 justify-end items-center gap-4">
        <ul class="hidden md:flex items-center justify-end gap-2 font-montserrat font-semibold text-sm md:gap-2 md:text-lg lg:text-xl lg:gap-6">
          <li>О нас</li>
          <li>Меню</li>
          <li>Доставка</li>
          <li>Контакты</li>
        </ul>

        <img class="mx-[25px]" src="/image/icons/cart.svg" alt="cart">

        <div v-auto-animate>
          <img v-if="!menuOpen" class="md:hidden" src="/image/icons/Burger.svg" alt="Menu1"
               @click="()=> emit('openMenu')">

          <img v-else class="md:hidden" src="/image/icons/BurgerClose.svg" alt="Menu2" @click="()=> emit('closeMenu')">
        </div>


        <Button class="hidden md:block" title="Заказать звонок"/>
      </div>
    </div>
  </header>
</template>

<script setup>

import Button from "@/components/ui/Button.vue";

defineProps(["menuOpen"]);
const emit = defineEmits(["openMenu", "closeMenu"]);


</script>