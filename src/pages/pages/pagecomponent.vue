<script setup>
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
    <div class="flex flex-col gap-4 ml-6 ">
      <div class=" w-full mt-5">
      <navbar 
        width="95%"
        height="75px" 
        icon="heroicons:rectangle-stack"
        label="Pages / Components"
        btn-label2="Add New"
        showBtn2
        to2="/pages/addnewpage"
      />
    </div>
    <div class="w-[95%] rounded-xl flex flex-col bg-white h-96 ">
       <div class="header flex ml-6 mt-5  ">
        <Icon icon="heroicons:rectangle-stack" class="mt-0.5 text-[22px] text-blue-700" />
        <p class="text-blue-700 text-[14px] font-extralight ml-2 mt-0.5">All Components</p>
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