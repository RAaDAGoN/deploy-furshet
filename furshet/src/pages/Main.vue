<template>
  <div>
    <Header />
    <Slider />

    <Content />

    <BlockMenu />

    <div class="bg-[#30592A80] px-[85px] py-[23px] mt-[213px] relative ">
      <div class="max-w-[1755px] mx-auto flex flex-col justify-start ">
        <div >
          <h1 class="font-comfort font-semibold text-5xl text-white">Не знаете что выбрать?</h1>
          <p class="font-montserrat text-2xl text-[#EDEDED]">Поможем выбрать фуршетные боксы, которые понравятся всем!</p>
          <button class="outline-none border-transparent bg-white w-[298px] h-[60px] cursor-pointer font-montserrat font-semibold text-[#608067] mt-[20px]">Заказать звонок</button>
        </div>

        <img class="absolute bottom-0 right-0 z-10" src="/image/Food.png" alt="Food">
      </div>

    </div>

    <Content />

    <Content />

    <Footer />
  </div>
</template>

<script setup>

import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Content from "@/components/Content.vue";
import BlockMenu from "@/components/BlockMenu.vue";
import Footer from "@/components/Footer.vue";
</script>