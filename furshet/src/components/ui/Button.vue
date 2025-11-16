<template>
  <button class="bg-white w-[298px] h-[60px] cursor-pointer font-montserrat font-semibold text-[#608067]">
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

