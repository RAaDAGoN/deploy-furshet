<template>
<!--  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-65">-->

<!--  </div>-->

  <div class="bg-[#97AB94] w-full h-full fixed right-0 top-14 z-20 p-10 text-white flex flex-col items-center">
    <h1 class="cursor-pointer " @click="()=> emit('closeMenu')">Закрыть</h1>

    <ul class="max-w-[1755px] mx-auto flex items-center justify-center sm:justify-end gap-12  text-base sm:text-lg w-full font-montserrat font-normal mt-3">
      <li>Вологда</li>
      <li>+7 (817) 393-47-47</li>
      <li>Ежедневно 24/7</li>
    </ul>

    <ul class="flex flex-col items-center gap-6 text-lg font-montserrat font-semibold lg:gap-12 md:gap-8 mt-12 ">
      <li>О нас</li>
      <li>Меню</li>
      <li>Доставка</li>
      <li>Контакты</li>
    </ul>

    <Button class="mt-12" title="Заказать звонок"/>
  </div>
</template>

<script setup>
import Button from "@/components/ui/Button.vue";



const emit = defineEmits(["closeMenu"]);
</script>

