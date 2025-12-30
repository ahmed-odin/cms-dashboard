<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import Navbar from '@/components/common/navbar.vue';
import Input from '@/components/common/input.vue';
import Button from '@/components/common/button.vue';
</script>

<template>
  <div class="flex flex-col w-[95%] items-center ml-6 justify-center mt-5">
    <div class="w-full mb-5">
      <Navbar  
        width="100%"
        height="55px" 
        icon="fa6-brands:wpforms"
        label="Form / New Form"
        :show-btn="true"
        btnLabel="Inactive"
        btn-label2="Active"
        showBtn2
      />
    </div>

    <div class="w-full flex flex-col rounded-lg bg-white h-fit shadow-sm border border-gray-100">
      
      <div class="flex ml-7 justify-between items-center pr-8">
        <p class="text-[#325CA8] mt-5 text-[15px] flex gap-2 font-medium"> 
          <Icon icon="fa6-brands:wpforms" class="mt-0.5 text-[18px]" />  
          New Form
        </p>
      </div>
      
      <div class="flex ml-7 gap-4 mt-5">
        <div class="flex items-center gap-1 cursor-pointer">
          <Icon icon="simple-icons:googletranslate" class="text-[#325CA8] text-[16px]" />
          <p class="text-[#325CA8] text-[12px]">English</p>
        </div>
        <p class="text-[#BDBDBD] text-[12px] cursor-pointer hover:text-[#325CA8] transition-colors">Arabic</p>
      </div>

      <div class="flex flex-col px-7 mt-2 pb-8 gap-1">
        
        <div class="w-[92.5%] mt-6">
           <Input class="w-full h-12 text-black" placeholder="Form Title" />
        </div>
        
        <p class="text-[11px] text-[#5A5A5A] ml-2 mt-6 mb-1">Lable Name</p>

        <div class="flex justify-between gap-4 items-center w-[92.5%]">
          <div class="flex-1 min-w-0">
            <Input 
              class="w-full h-[48px] text-black rounded-xl border-gray-100 bg-[#F9FAFB]" 
              placeholder="Parent Category" 
            />
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between w-full h-[48px] bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 cursor-pointer group hover:bg-white transition-all shadow-sm">
              <span class="text-gray-400 text-[13px] font-medium truncate">Select Fields Type</span>
              <Icon icon="iconamoon:arrow-down-2-light" class="text-[#325CA8] text-xl shrink-0" />
            </div>
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between w-full h-[48px] bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 cursor-pointer group hover:bg-white transition-all shadow-sm">
              <span class="text-gray-400 text-[13px] font-medium truncate">Size %</span>
              <Icon icon="iconamoon:arrow-down-2-light" class="text-[#325CA8] text-xl shrink-0" />
            </div>
          </div>
        </div>
          
        <div class="w-[92.5%] ">
            <Button 
              height="49px" 
              width="100%" 
              borderRadius="8px" 
              label="Add Component"
              class="font-semibold hover:bg-blue-300 text-blue-600 bg-[#E9EEF6]"
            />
        </div>
      </div>
      
    </div>
  </div>
</template>

