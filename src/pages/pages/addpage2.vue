<script setup>
import Navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
import Button from '@/components/common/button.vue';
</script>
<template>
  <div class="flex flex-col w-[100%] ml-6 justify-center mt-2">
    <div class="m-2 w-full mt-1">
      <navbar 
        width="95%"
        height="55px" 
        icon="heroicons:rectangle-stack"
        label="Pages / New Pages"
        :show-btn="true"
        btnLabel="Draft"
        btn-label2="Publish"
        showBtn2
        
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

        <Input class="w-[92%] h-16 ml-7 text-black mt-6" placeholder="Page Title*"/>
        <div class="w-[92%] ml-7 mt-6 border border-gray-200 rounded-xl bg-white p-4 shadow-sm relative">
  
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-400 text-[11px] font-medium">Section (1)</span>
          <Icon icon="material-symbols:close" class="text-gray-400 cursor-pointer hover:text-red-500 text-[16px]" />
        </div>

        <div class="w-full border border-blue-200 rounded-lg bg-white p-6 flex justify-between items-center">
          <span class="text-gray-400 text-[11px] ml-4">image (1)</span>
          <Icon icon="material-symbols:close" class="text-gray-400 cursor-pointer hover:text-red-500 text-[16px]" />
        </div>

      </div>
              <Button 
                height="49px" 
                width="92%" 
                borderRadius="5px" 
                label="Add Component"
                class="font-semibold ml-7 hover:bg-blue-300 text-blue-600 bg-[#E9EEF6] mt-4" 
              />
            </div>

      <div class="w-[34%] h-fit pb-10 flex flex-col rounded-xl bg-white shadow-sm">
        <div class="flex gap-4 mt-6 ml-8   border-b border-gray-50 pb-4">
          <div class="flex items-center gap-2">
            <Icon icon="fluent-mdl2:settings" class="text-[#325CA8] text-[16px]" />
            <p class="text-[#325CA8] text-[13px] font-semibold cursor-pointer">Component</p>
          </div>
          <p class="text-[#BDBDBD] text-[13px] cursor-pointer hover:text-gray-600 transition-colors">Page setting</p>
        </div>
        <div class=" ml-8 mt-3 gap-4 flex flex-col ">
          <p class="text-[#325CA8]  text-[13px] font-semibold">Image (1) Setting</p>
          <img class="mr-11 w-72 mt-4" src="/src/assets/imges/colord background.png" alt="">
          <p class="text-[#5A5A5A] text-[14px] gap-1 flex">Style <Icon icon="lucide:chevron-up" class="text-gray-500 text-[14px] mt-0.5" />  </p>


          <div class="flex flex-col gap-4  ml-2">


            <div class="flex">
              <p class="text-[12px] flex gap-1 font-semibold">Size <span class="text-[#5A5A5A] text-[10px]">(Px)</span></p>
           <div class="text-[12px] font-semibold flex ml-10 gap-4 "   >
            <p class="text-[#5A5A5A]">Width</p>
            <div class="w-5 bg-[#F7F7F7] rounded-lg">
              0
            </div>
           </div>
           <div class="text-[12px] font-semibold flex ml-10  gap-3 ">
            <p class="text-[#5A5A5A]">Height</p>
            <div class="w-5 bg-[#F7F7F7] rounded-lg">
              0
            </div>
           </div>   
            </div>
            <div class="flex just   ">
              <p class="text-[12px] flex gap-1 font-semibold">Radius <span class="text-[#5A5A5A] text-[10px]">(%)</span></p>
             <div class="text-[12px] font-semibold flex text-[#5A5A5A]  gap-4 ml-[140px] "   >
             All
            <div class="w-10 items-center justify-center   bg-[#F7F7F7] rounded-lg">
              <p class="text-black ml-3">0%</p>
            </div>
           </div>
            </div> 
            <div class="flex    ">
              <p class="text-[12px] flex gap-1 font-semibold">Image type</p>
             <div class="text-[12px] font-semibold flex text-[#5A5A5A]  gap-4 ml-[140px] "   >
             
            <div class="w-18 items-center justify-center   bg-[#F7F7F7] rounded-lg">
              <p class="text-black ml-3 flex  ">Fiexd <Icon icon="lucide:chevron-down" class="text-[#5A5A5A] text-[20px]" /></p>
            </div>
           </div>
            </div>        
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>