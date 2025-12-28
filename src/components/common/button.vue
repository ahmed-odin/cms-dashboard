<script setup>
  const props = defineProps(["type", "placeholder", "width", "height", "borderRadius", "label"]);
   
</script>
<template>
  
  <button 
    :type="type"
    class="bg-blue-500 mt-3 text-white  text-[12px] flex items-center justify-center"
    :style="{ 
      width: width || '90%', 
      height: height || '2rem', 
      borderRadius: borderRadius || '10px' 
     
    }"
  >
    {{ label || 'Login' }}
  </button>
  </template>
<style scoped>
   
</style>
