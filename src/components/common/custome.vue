<script setup>
  const pops= defineProps({
  width:{type: String, default:"12px"},
  height:{type:String, default:"10px"},
  borderRadius:{type:String,default:"50px"},
  padding:{type:String,default:"12px"},
  color:{type:String,default:"red"},
  border:{type:String,default:"solid"}
})
</script>
<template>
  <button :style="{
    width: pops.width,
    height:pops.height,
    borderRadius:pops.borderRadius,
    color:pops.color,
    border:pops.border,
  }" class="flex">
     {{ label || 'Login' }}
  </button>
</template>