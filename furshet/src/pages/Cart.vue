<template>
  <div class="max-w-[1746px] mx-auto p-5">

    <h1 class="font-comfort font-bold text-4xl md:text-[60px] text-[#97AB94] mb-6 md:mb-10">Корзина</h1>
    <div class="flex justify-between font-comfort">
      <div>
        <img src="" alt="">
        <h1 class="font-bold text-[28px]">Жульены</h1>
      </div>

      <div class="text-[18px] font-medium text-[#929292] ">
        <p>Количество</p>
        <div class="flex justify-between items-center border-2 border-[#CECECEEB] py-3 px-[25px] max-h-[56px] w-[140px]">

          <button @click="increment" class="text-[30px] text-[#3C3C3C] text-opacity-50">+</button>
          <p>{{count}}</p>
          <button v-if="increment > 1" @click="decrement" class="text-[30px] text-[#3C3C3C] text-opacity-0">-</button>
          <button v-else @click="decrement" class="text-[30px] text-[#3C3C3C] text-opacity-50">-</button>
        </div>
      </div>

      <div class="text-[18px] font-medium text-[#929292] ">
        <p>Итого:</p>
        <h1 class="text-[30px] font-bold text-[#2E2F2A]">3 490 ₽</h1>
      </div>

      <img src="/image/icons/close.svg" alt="">

    </div>

    <div>
      <h1>Оформление заказа</h1>
      <div>

      </div>
    </div>

  </div>
</template>

<script setup>
  import {ref} from "vue";

  const count =ref(1)

  const increment= () => {
    count.value++

  }

  const decrement = () => {
    if (count.value > 1) {
      count.value--;
    }
  }

</script>

