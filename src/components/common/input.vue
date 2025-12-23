<script setup>
const props = defineProps(["type","placeholder, fontSize, backgroundcolor"])
</script>
<template>
   <input class="rounded-lg bg-[#FAFAFA] w-[90%] mt-3 text-black-200 h-9 text-wrap text-[11px] px-3" :fontSize="fontSize" :backgroundcolor="backgroundcolor"  :type="type" :placeholder="placeholder" name="" id="" :style="{ 
      backgroundColor: props.backgroundcolor, 
      fontSize: props.fontSize,
      borderRadius: props.borderRadius 
    }" >
</template>