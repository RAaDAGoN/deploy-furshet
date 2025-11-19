<template>
  <div class="relative w-full h-[100vh] overflow-hidden">
    <!-- Основной контейнер изображения -->
    <picture class="absolute inset-0 w-full h-full">
      <!-- Мобильная версия -->
      <source srcset="/image/SlideMobile.png" media="(max-width: 640px)" />

      <!-- Планшет -->
      <source srcset="/image/Slide1.png" media="(max-width: 1024px)" />

      <!-- Десктоп -->
      <img
          src="/image/Slide1.png"
          alt="Slide 1"
          class="w-full h-full object-cover"
      />
    </picture>

    <!-- Затемнение -->
    <div class="absolute z-30 inset-0 bg-black/30"></div>

    <!-- Контент -->
    <div class="max-w-[1746px] mx-auto relative z-40 flex items-end md:items-center h-full px-5 sm:px-5 pb-5">
      <div class="max-w-[1020px]">
        <h1 class="text-white text-left text-2xl md:text-[55px] font-comfort font-semibold mb-6 leading-[110%]">
          Фуршетный мастер — ваш надежный партнер в организации мероприятий!
        </h1>
        <p class="text-white text-[16px] md:text-2xl font-medium font-montserrat leading-[130%]">
          Мы знаем, как важно, чтобы ваше мероприятие прошло на высшем уровне. Именно поэтому я предлагаю профессиональные услуги по организации фуршетов, которые сделают ваш праздник незабываемым.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

