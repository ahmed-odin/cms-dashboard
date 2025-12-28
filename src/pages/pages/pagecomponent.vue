<script setup>
import Input from '@/components/common/input.vue';
import navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';

const componentsList = [
  { name: 'Card', icon: 'ph:identification-card' },
  { name: 'Silder', icon: 'ph:monitor' },
  { name: 'Header', icon: 'ph:layout' },
  { name: 'image', icon: 'ph:image' },
  { name: 'Footer', icon: 'ph:browser' },
  { name: 'Section', icon: 'ph:columns' },
  { name: 'Navbar', icon: 'ph:caret-circle-up' },
];
</script>
<template>
    <div class="flex flex-col  ml-6 mt-5 ">
      <div class=" w-full mb-5 ">
      <navbar 
        width="97%"
        height="55px" 
        icon="heroicons:rectangle-stack"
        label="Pages / Components"
        btn-label2="Add New"
        showBtn2
        to2="/pages/addnewpage"
      />
    </div>
    <div class="w-[97%] rounded-xl flex  flex-col bg-white h-96 ">
       <div class="px-10 py-7 flex justify-between items-center bg-white border-gray-50">
      
      <div class="flex items-center gap-2">
        <Icon icon="heroicons:rectangle-stack" class="mt-0.5 text-[22px] text-[#325CA8]" /> 
        <p class="text-[#325CA8] text-[16px] font-bold text-base">All Components</p>
      </div>

      <input type="text" placeholder="value" class="flex items-center gap-2 border border-gray-100 rounded-full px-5 py-2 text-sm text-gray-400 bg-white min-w-[220px] justify-between">

      <div class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-2 bg-[#F9FAFB] text-gray-500 text-sm cursor-pointer hover:bg-gray-100 transition-all shadow-sm">
        <span>Title,...</span>
        <Icon icon="iconamoon:arrow-down-2-light" class="mt-0.5 text-[18px]" /> 
      </div>
    </div> 
        <div class="flex flex-row gap-10 mt-4 ml-4 " >
          <div 
            v-for="(item, index) in componentsList" 
            :key="index"
            :class="{' flex justify-center ': item.name === 'Navbar'}"
            class="flex flex-col items-center gap-2 group"
          >
            <div class="w-24 h-24 border border-gray-100 rounded-2xl flex items-center justify-center bg-white hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm group-hover:shadow-md">
              <Icon :icon="item.icon" class="text-[#325CA8] text-4xl" />
            </div>
            <span class="text-[12px] text-gray-500 font-medium group-hover:text-[#325CA8] transition-colors">
              {{ item.name }}
            </span>
          </div>
        </div>
        <div class="flex flex-row gap-10 mt-4 ml-4 " >
          <div 
            v-for="(item, index) in componentsList" 
            :key="index"
            :class="{' flex justify-center ': item.name === 'Navbar'}"
            class="flex flex-col items-center gap-2 group"
          >
            <div class="w-24 h-24 border border-gray-100 rounded-2xl flex items-center justify-center bg-white hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all duration-200 shadow-sm group-hover:shadow-md">
              <Icon :icon="item.icon" class="text-[#325CA8] text-4xl" />
            </div>
            <span class="text-[12px] text-gray-500 font-medium group-hover:text-[#325CA8] transition-colors">
              {{ item.name }}
            </span>
          </div>
        </div>
    </div>
    </div>
</template>