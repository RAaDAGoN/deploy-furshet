<template>
  <footer class="max-w-[1746px] mx-auto ">
    <!-- Первая линия-->
    <div class="relative w-full h-[100vh] ">
      <!-- Основной контейнер изображения -->
      <picture class="absolute inset-0 ">
<!--        Мобильная картинка-->
        <source srcset="/image/FooterMobile.png" media="(max-width: 640px)"/>

        <img
            src="/image/Food2.png"
            alt="Slide 1"
            class="w-full h-full"
        />
      </picture>

      <!-- Затемнение -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Контент -->
      <div class="relative flex items-center px-5 sm:px-5 pt-5">
        <div class="md:max-w-[844px]">
          <h1 class="text-white text-left text-xl md:text-[45px] font-comfort font-bold mb-2 md:mb-6 leading-[140%]">
            Важное событие,<br/>
            но не знаете как рассчитать?
          </h1>
          <p class="text-white text-base md:text-2xl font-medium font-montserrat leading-[140%]">
            Заполните заявку и мы поможем рассчитать<br/>меню для вашего мероприятия
          </p>

          <form class="font-montserrat mt-[40px]" action="">
            <div class="flex flex-col md:flex-row gap-7 mb-[30px]">
              <input name="userName"
                     class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                     placeholder="Ваше имя" type="text">
              <input name="userPhone"
                     class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                     placeholder="Телефон" type="text">
            </div>
            <div class="flex flex-col md:flex-row gap-7">
              <input name="userCount"
                     class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                     placeholder="Количество человек" type="text">
              <input name="userDate"
                     class="outline-none border-b border-[#E4E4E480] bg-transparent pl-[20px] pb-[12px]  text-white"
                     placeholder="Дата" type="text">
            </div>
          </form>

          <Button class="mt-10" title="Отправить заявку"/>

        </div>
      </div>
    </div>



    <!--    Вторая линия-->
    <div class="bg-[#303030]">
      <div class="flex flex-col md:flex-row justify-between px-5 py-[60px]">
        <div class="font-montserrat">
          <h1 class="text-[55px] font-semibold text-white">Фуршет</h1>
          <div class="flex flex-col gap-5 mb-9">
            <p class="text-[22px] text-white">г. Вологда, ул. Фуршетная</p>
            <p class="text-[18px] text-[#595959]">Ежедневно 24/7 </p>
            <p class="text-[18px] text-[#595959]">Поддержка с 10:00 до 21:00</p>
          </div>


          <div class="hidden md:flex gap-4">
            <img src="/image/icons/VK.png" alt="">
            <img src="/image/icons/Odnokl.png" alt="">
            <img src="/image/icons/Dzen.png" alt="">
            <img src="/image/icons/Telegram.png" alt="">
            <img src="/image/icons/Watsup.png" alt="">
            <img src="/image/icons/Wiber.png" alt="">
          </div>
        </div>

        <div>
          <ul class="hidden md:flex font-montserrat text-[#F4F6FB] flex-col gap-6">
            <li>О нас</li>
            <li>Меню</li>
            <li>Доставка</li>
            <li>Контакты</li>
            <li>Корзина</li>
          </ul>
        </div>

        <div class="font-montserrat text-[#595959] ">
          <h1 class="text-xl w-full border-b text-white border-[#5F6577] mb-2 pb-2">Помощь</h1>
          <div class="flex flex-col gap-4 md:gap-7 md:flex-row justify-between font-montserrat text-[#595959]">
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
        <div class="font-montserrat text-white text-lg md:text-2xl mt-5">
          <h1 class="mb-3">+7 (817) 393-47-47</h1>
          <h1>furshet@gmail.com</h1>
        </div>
      </div>

    </div>
  </footer>


</template>

<script setup>

import Button from "@/components/ui/Button.vue";
</script>