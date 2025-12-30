<script setup>
import { Icon } from '@iconify/vue';
const props = defineProps(["type", "placeholder", "fontSize", "backgroundcolor", "icon", "to", "top", "iconColor"]);
</script>

<template>
  <div class=" relative w-[90%] ">
    <input 
      class="rounded-lg bg-[#F7F7F7] w-full text-black-200 h-9 text-wrap text-[11px] px-3" 
      :type="type" 
      :placeholder="placeholder" 
      :style="{ 
        backgroundColor: props.backgroundcolor, 
        fontSize: props.fontSize,
        paddingRight: props.icon ? '35px' : '12px' 
      }" 
    />
    
    <router-link 
     v-if="icon" 
      :to="to || '#'" 
      class="absolute right-3 flex items-center"
      :style="{ top: props.top, transform: 'translateY(-50%)', color: props.iconColor || '#6B7280' }"
    >
      <Icon :icon="icon" class="text-lg cursor-pointer hover:opacity-70" />
    </router-link>
  </div>
</template>