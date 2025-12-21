<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '56px' },
  label: { type: String, default: 'Websites' },
  icon: { type: String, default: 'mdi:web' },
  
  
  showBtn: { type: Boolean, default: false },
  btnLabel: { type: String, default: 'Add New' },
  to1: { type: String, default: '/' },
  
  showBtn2: { type: Boolean, default: false },
  btnLabel2: { type: String, default: 'Settings' },
  to2: { type: String, default: '/settings' }, 

  btnWidth: { type: String, default: '120px' },
  btnHeight: { type: String, default: '40px' },
  btnbackgroundcolor:{ttype: String, default: "bg-white"}
});
</script>

<template>
  <div 
    class="flex justify-between items-center bg-white px-6 rounded-2xl shadow-sm"
    :style="{ width: props.width, height: props.height }"
  >
    <div class="flex items-center gap-3">
      <Icon :icon="props.icon" class="text-[24px] text-[#325CA8]" />
      <p class="font-semibold text-[12px] text-[#325CA8]">{{ props.label }}</p>
    </div>

    <div class="flex items-center gap-3">
      <router-link 
        v-if="props.showBtn"
        :to="props.to1"
        class=" border border-[#325CA8] text-[#325CA8]  rounded-xl font-light text-sm flex items-center justify-center transition-opacity hover:opacity-90 no-underline"
        :style="{ width: props.btnWidth, height: props.btnHeight }"
      >
        {{ props.btnLabel }}
      </router-link>

      <router-link 
        v-if="props.showBtn2"
        :to="props.to2"
        class="border border-[#325CA8] bg-[#325CA8] text-white rounded-xl font-light text-sm flex items-center justify-center transition-opacity hover:opacity-90 no-underline"
        :style="{ width: props.btnWidth, height: props.btnHeight }"
      >
        {{ props.btnLabel2 }}
      </router-link>
    </div>
  </div>
</template>