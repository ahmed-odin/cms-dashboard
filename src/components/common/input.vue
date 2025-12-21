<script setup>
const props = defineProps(["type","placeholder, fontSize"])
</script>
<template>
   <input class="rounded-lg bg-[#FAFAFA] w-[90%] mt-3 text-black-200 h-8 text-wrap text-[11px] px-3" :fontSize="fontSize"  :type="type" :placeholder="placeholder" name="" id="" >
</template>