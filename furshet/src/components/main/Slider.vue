<template>
  <div class=" relative w-full h-screen overflow-hidden">
    <!-- Основной контейнер изображения -->
    <div class="absolute inset-0">
      <img
          src="/image/Slide1.png"
          alt="Slide 1"
          class="w-full h-full object-cover object-center"
      />
    </div>

    <!-- Затемнение -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Контент -->
    <div class="max-w-[1755px] mx-auto relative z-10 flex items-center h-full ">
      <div class="max-w-[1020px]">
        <h1 class="text-white text-left text-[55px] font-comfort font-semibold mb-6 leading-[110%]">
          Фуршетный мастер — ваш надежный партнер в организации мероприятий!
        </h1>
        <p class="text-white text-2xl font-medium font-montserrat leading-[140%]">
          Мы знаем, как важно, чтобы ваше мероприятие прошло на высшем уровне. Именно поэтому я предлагаю профессиональные услуги по организации фуршетов, которые сделают ваш праздник незабываемым.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

