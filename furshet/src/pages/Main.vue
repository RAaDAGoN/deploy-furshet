<template>
  <div>

    <Slider/>

    <Content1/>

    <div class="bg-[#EBF0E8]">
      <BlockMenu title="Ознакомьтесь с нашим разнообразным меню для вашего фуршетного стола"/>
    </div>
    <div class="bg-[#30592A80] mt-[213px] relative ">
      <div class="max-w-[1755px] mx-auto flex flex-col justify-start ">
        <div class="text-white sm:px-5 py-6">
          <h1 class="font-comfort font-semibold text-2xl md:text-5xl">Не знаете что выбрать?</h1>
          <p class="font-montserrat text-base md:text-2xl">Поможем выбрать фуршетные боксы, которые понравятся всем!</p>
          <Button class="mt-[30px]" title="Заказать звонок"/>
        </div>

        <img class="md:absolute bottom-0 right-0 z-10 " src="/image/Food.png" alt="Food">
      </div>

    </div>

    <Content2/>

    <Content3/>


  </div>
</template>

<script setup>

import Slider from "@/components/main/Slider.vue";
import Content1 from "@/components/main/Content1.vue";
import BlockMenu from "@/components/main/BlockMenu.vue";
import Button from "@/components/ui/Button.vue";
import Content2 from "@/components/main/Content2.vue";
import Content3 from "@/components/main/Content3.vue";
</script>