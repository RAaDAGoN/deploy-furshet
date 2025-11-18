<template>
  <button class="bg-white text-[#608067] font-montserrat font-semibold cursor-pointer
      px-6 py-3
      text-sm
      sm:text-xs
      md:text-base
      md:px-1 md:py-4
      lg:px-8 ">
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

