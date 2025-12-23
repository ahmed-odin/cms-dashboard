<script setup>
import Navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
import Button from '@/components/common/button.vue';
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
  <div class="flex flex-col w-[100%] ml-6 justify-center mt-2">
    <div class="m-2 w-full mt-1">
      <navbar 
        width="95%"
        height="75px" 
        icon="heroicons:rectangle-stack"
        label="Pages / New Page"
        :show-btn="true"
        btnLabel="Draft"
        btn-label2="Publish"
        showBtn2
        to2="/pages/newpage/addpage"
      />
    </div>

    <div class="flex mt-2 gap-2.5">
      <div class="w-[60%] ml-2 flex-col rounded-lg bg-white h-fit pb-6">
        <div class="flex mt-4 ml-7 font-extralight text-[12px] justify-between">
          <p class="text-[#325CA8] text-[15px] flex gap-1 font-medium"> 
            <Icon icon="heroicons:rectangle-stack" class="mt-0.5 text-[18px]" />  
            New Page
          </p>
          <Icon icon="material-symbols:home-outline" class="mt-0.5 mr-6 text-[#325CA8] text-[18px]" />
        </div>
        
        <div class="flex ml-7 gap-4 mt-2">
          <div class="flex items-center gap-1 cursor-pointer">
            <Icon icon="simple-icons:googletranslate" class="text-[#325CA8] text-[16px]" />
            <p class="text-[#325CA8] text-[12px]">English</p>
          </div>
          <p class="text-[#BDBDBD] text-[12px] cursor-pointer">Arabic</p>
        </div>

        <Input class="w-[92%] h-10 ml-7 text-black mt-6" placeholder="Page Title*"/>
        
        <Button 
          height="49px" 
          width="92%" 
          borderRadius="5px" 
          label="Add Component"
          class="font-semibold ml-7 text-blue-600 bg-[#E9EEF6] mt-4" 
        />
      </div>

      <div class="w-[34%] h-fit min-h-[500px] pb-10 flex flex-col rounded-xl bg-white shadow-sm">
        <div class="flex gap-4 mt-6 ml-8 mb-8 border-b border-gray-50 pb-4">
          <div class="flex items-center gap-2">
            <Icon icon="fluent-mdl2:settings" class="text-[#325CA8] text-[16px]" />
            <p class="text-[#325CA8] text-[13px] font-semibold">Component</p>
          </div>
          <p class="text-[#BDBDBD] text-[13px] cursor-pointer hover:text-gray-600 transition-colors">Page setting</p>
        </div>

        <div class="grid grid-cols-2 gap-y-8 px-4">
          <div 
            v-for="(item, index) in componentsList" 
            :key="index"
            :class="{'col-span-2 flex justify-center': item.name === 'Navbar'}"
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
  </div>
</template>