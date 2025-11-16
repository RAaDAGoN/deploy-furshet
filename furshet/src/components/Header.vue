<template>
  <header class="bg-[#30592A80] text-white">
    <div class="w-full h-full py-[10px] border-b border-white border-opacity-50 hidden md:block ">
      <ul class="max-w-[1755px] mx-auto flex items-center justify-center sm:justify-end gap-12  text-base sm:text-lg w-full font-montserrat font-normal">
        <li>Вологда</li>
        <li>+7 (817) 393-47-47</li>
        <li>Ежедневно 24/7</li>
      </ul>
    </div>

    <div class="max-w-[1755px] mx-auto py-[10px] flex justify-between">
      <h1 class="font-comfort font-normal text-3xl sm:text-3xl lg:text-4xl xl:text-5xl ">Фуршет</h1>

      <div class="flex ">
        <ul class="hidden items-center justify-end gap-6 text-lg font-montserrat font-semibold lg:gap-12 md:gap-8 md:flex ">
          <li>О нас</li>
          <li>Меню</li>
          <li>Доставка</li>
          <li>Контакты</li>
        </ul>

        <img class="mx-[25px]" src="/image/icons/cart.svg" alt="cart">

        <img v-if="!menuOpen"  class="md:hidden" src="/image/icons/Burger.png" alt="Menu1" @click="()=> emit('openMenu')">

        <img v-else class="md:hidden" src="/image/icons/Burger.png" alt="Menu2" @click="()=> emit('closeMenu')">

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