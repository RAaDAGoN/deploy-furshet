<template>
  <div class="relative w-full overflow-hidden">
    <!-- Основной контейнер изображения -->
    <div class="absolute inset-0">
      <img
          src="/image/Food2.png"
          alt="Slide 1"
          class="w-full h-full"
      />
    </div>

    <!-- Затемнение -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Контент -->
    <div class="relative flex items-center max-w-[1746px] px-5 sm:px-5 mx-auto py-14">
      <div class="max-w-[844px]">
        <h1 class="text-white text-left text-[45px] font-comfort font-bold mb-6 leading-[140%]">
          Важное событие,<br/>
          но не знаете как рассчитать?
        </h1>
        <p class="text-white text-2xl font-medium font-montserrat leading-[140%]">
          Заполните заявку и мы поможем рассчитать<br/>меню для вашего мероприятия
        </p>

        <form class="font-montserrat mt-[40px]" action="">
          <div class="flex gap-7 mb-[30px]">
            <input class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                   placeholder="Ваше имя" type="text">
            <input class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                   placeholder="Телефон" type="text">
          </div>
          <div class="flex gap-7">
            <input class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                   placeholder="Количество человек" type="text">
            <input class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                   placeholder="Дата" type="text">
          </div>
        </form>

        <Button class="mt-10" title="Отправить заявку" />

      </div>
    </div>


  </div>

  <div class="bg-[#303030] px-[82px] pt-[50px] pb-[70px]">
    <div class="max-w-[1755px] mx-auto flex justify-between">
      <div class="font-montserrat">
        <h1 class="text-[55px] text-[#F4F6FB]">Фуршет</h1>
        <div class="flex flex-col gap-5 mb-9">
          <p class="text-[22px] text-[#F4F6FB]">г. Вологда, ул. Фуршетная</p>
          <p class="text-[18px] text-[#9096A7]">Ежедневно 24/7 </p>
          <p class="text-[18px] text-[#9096A7]">Поддержка с 10:00 до 21:00</p>
        </div>


        <div class="flex gap-4">
          <img src="/image/icons/VK.png" alt="">
          <img src="/image/icons/Odnokl.png" alt="">
          <img src="/image/icons/Dzen.png" alt="">
          <img src="/image/icons/Telegram.png" alt="">
          <img src="/image/icons/Watsup.png" alt="">
          <img src="/image/icons/Wiber.png" alt="">
        </div>
      </div>

      <div>
        <ul class="font-montserrat text-[#F4F6FB] flex flex-col gap-6">
          <li>О нас</li>
          <li>Меню</li>
          <li>Доставка</li>
          <li>Контакты</li>
          <li>Корзина</li>
        </ul>
      </div>

      <div class="font-montserrat text-[#F4F6FB] w-[405px] ">
        <h1 class="text-xl w-full border-b border-[#5F6577] mb-2 pb-2">Помощь</h1>
        <div class="flex justify-between font-montserrat text-[#9096A7]">
          <ul class=" flex flex-col gap-4">
            <li>Оплата</li>
            <li>Гарантия качества</li>
            <li>Возврат товара</li>
          </ul>

          <ul class="flex flex-col gap-4">
            <li>Персональные данные</li>
            <li>Конфиденциальность</li>
            <li>Публичная оферта</li>
          </ul>
        </div>
      </div>
      <div class="font-montserrat text-white text-2xl">
        <h1 class="mb-3">+7 (817) 393-47-47</h1>
        <h1>furshet@gmail.com</h1>
      </div>
    </div>

  </div>
</template>

<script setup>

import Button from "@/components/ui/Button.vue";
</script>