<template>
  <div class="max-w-[1746px] mx-auto p-5 pt-10">

    <h1 class="font-comfort font-bold text-4xl md:text-[60px] text-[#97AB94] mb-6 md:mb-10">Корзина</h1>


    <div class="flex flex-col md:flex-row justify-between ">

      <div class="flex flex-1 justify-between items-center font-comfort max-w-[1272px] max-h-[105px] border-t-2 pt-10 border-[#97AB94]">
        <div class="flex justify-between items-center gap-11">
          <img class="w-[105px] h-[105px]" src="/image/Menu2.png" alt="">
          <h1 class="font-bold text-[28px]">Жульены</h1>
        </div>

        <div class="text-[18px] font-medium text-[#929292] flex justify-between items-center gap-28">
          <div>
            <p>Количество</p>
            <div class="flex justify-between items-center border-2 border-[#CECECEEB] py-3 px-[25px] max-h-[56px] w-[140px]">

              <button @click="increment" class="text-[30px] text-[#3C3C3C] text-opacity-50">+</button>
              <p>{{ count }}</p>
              <button v-if="increment > 1" @click="decrement" class="text-[30px] text-[#3C3C3C] text-opacity-0">-</button>
              <button v-else @click="decrement" class="text-[30px] text-[#3C3C3C] text-opacity-50">-</button>
            </div>
          </div>

          <div>
            <div class="text-[18px] font-medium text-[#929292] ">
              <p>Итого:</p>
              <h1 class="text-[30px] font-bold text-[#2E2F2A]">3 490 ₽</h1>
            </div>
          </div>

        </div>



        <div class="max-w-[35px] max-h-[35px]">
          <img src="/image/icons/close.svg" alt="">
        </div>


      </div>

      <div class="border border-[#ECEBE4] rounded-[15px] p-[32px]">
        <h1 class="font-comfort font-bold text-[30px] text-[#2E2F2A] mb-3">Оформление заказа</h1>
        <div class="flex flex-col justify-between gap-5 py-5 border-y-[2px] border-[#ECEBE4] font-montserrat mb-10">
          <div class="flex justify-between text-[22px]">
            <h2>Товары (1)</h2>
            <p>3 490 ₽</p>
          </div>

          <div class="flex justify-between text-[22px]">
            <h2>Скидки</h2>
            <p>-</p>
          </div>
        </div>

        <div class="font-comfort font-bold flex justify-between text-[22px] items-center">
          <h2 class="text-[30px]">Итого:</h2>
          <p class="text-2xl">3 490 ₽</p>
        </div>
        <p class="font-montserrat font-medium text-lg text-[#929292]">Без учета стоимости доставки</p>

        <CartButton class="mx-auto w-full mt-7" title="Оформить заказ"/>

      </div>

    </div>


  </div>
</template>

<script setup>
import {ref} from "vue";
import Button from "@/components/ui/Button.vue";
import CartButton from "@/components/ui/CartButton.vue";

const count = ref(1)

const increment = () => {
  count.value++

}

const decrement = () => {
  if (count.value > 1) {
    count.value--;
  }
}

</script>

