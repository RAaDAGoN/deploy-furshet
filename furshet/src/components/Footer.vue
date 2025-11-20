<template>
  <div class="relative w-full bg-[url(/image/FooterMobile.png)] bg-cover bg-no-repeat bg-center aspect-[380/665] max-w-[380px] mx-auto md:bg-[url(/image/Food2.png)] md:max-w-none md:aspect-auto md:h-auto
               mt-12 md:mt-28 pt-5 md:pt-[55px] pb-16" >
    <!-- затемнение -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- контент -->
    <div class="relative z-10 max-w-[1746px] mx-auto px-4 md:px-8 h-full flex ">
      <div class="py-5">
        <h1 class="text-white text-[22px] md:text-[45px] font-comfort font-bold mb-2 md:mb-6 leading-[130%]">
          Важное событие,<br class="hidden md:block" />
          но не знаете как рассчитать?
        </h1>

        <p class="text-white text-base md:text-2xl font-medium font-montserrat leading-[130%]">
          Заполните заявку и мы поможем рассчитать<br />меню для вашего мероприятия
        </p>

        <form class="font-montserrat mt-[40px] ">
          <div class="flex flex-col ju md:flex-row gap-5 mb-[30px] text-[16px] md:text-[18px]">
            <input
                name="userName"
                class="outline-none border-b border-white/40 bg-transparent pl-5 pb-3 text-white placeholder-white/70"
                placeholder="Ваше имя" type="text"
            />
            <input
                name="userPhone"
                class="outline-none border-b border-white/40 bg-transparent pl-5 pb-3 text-white placeholder-white/70"
                placeholder="Телефон" type="text"
            />
          </div>

          <div class="flex flex-col ju md:flex-row gap-5 mb-[30px] text-[16px] md:text-[18px]">
            <input
                name="userCount"
                class="outline-none border-b border-white/40 bg-transparent pl-5 pb-3 text-white placeholder-white/70"
                placeholder="Количество человек" type="text"
            />
            <input
                name="userDate"
                class="outline-none border-b border-white/40 bg-transparent pl-5 pb-3 text-white placeholder-white/70"
                placeholder="Дата" type="text"
            />
          </div>
        </form>

        <Button class="mt-10 " title="Отправить заявку" />
      </div>
    </div>
  </div>


  <!-- ===== FOOTER BOTTOM ===== -->
  <div class="bg-[#303030]">
    <div class="flex flex-col md:flex-row px-5 justify-between max-w-[1746px] mx-auto pt-5 pb-5 md:pt-12 md:pb-16">

      <!-- контакты -->
      <div class="font-montserrat">
        <h1 class="text-[55px] font-semibold text-white">Фуршет</h1>

        <div class="flex flex-col gap-5 mb-5 md:mb-9 text-white">
          <p class="text-[22px]">г. Вологда, ул. Фуршетная</p>
          <p class="text-[18px] text-[#595959]">Ежедневно 24/7</p>
          <p class="text-[18px] text-[#595959]">Поддержка с 10:00 до 21:00</p>
        </div>

        <div class="hidden md:flex gap-4 items-center">
          <img src="/image/icons/vk.svg" class="w-8 h-8 object-contain" />
          <img src="/image/icons/ok.svg" class="w-8 h-8 object-contain" />
          <img src="/image/icons/dzen.svg" class="w-8 h-8 object-contain" />
          <img src="/image/icons/telegram.svg" class="w-8 h-8 object-contain" />
          <img src="/image/icons/whatsapp.svg" class="w-8 h-8 object-contain" />
          <img src="/image/icons/viber.svg" class="w-8 h-8 object-contain" />
        </div>
      </div>

      <!-- меню -->
      <nav>
        <ul class="hidden md:flex flex-col gap-6 text-[#F4F6FB] font-montserrat">
          <li>О нас</li>
          <li>Меню</li>
          <li>Доставка</li>
          <li>Контакты</li>
          <li>Корзина</li>
        </ul>
      </nav>

      <!-- помощь -->
      <div class="font-montserrat text-[#595959]">
        <h1 class="text-xl w-full border-b border-[#5F6577] mb-2 pb-2 text-white">Помощь</h1>

        <div class="flex flex-col gap-4 md:flex-row justify-between">
          <ul class="flex flex-col gap-4">
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

      <!-- телефон -->
      <div class="font-montserrat text-white mt-5 text-lg md:text-2xl">
        <h1 class="mb-3">+7 (817) 393-47-47</h1>
        <h1>furshet@gmail.com</h1>
      </div>
    </div>
  </div>


</template>

<script setup>

import Button from "@/components/ui/Button.vue";
</script>