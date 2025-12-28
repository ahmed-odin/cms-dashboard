<script setup>
import navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
</script>
<template>
<div class=" ml-5 mt-5 mb-5 ">
      <navbar 
        width="99%"
        height="55px" 
        icon="fa6-brands:wpforms"
        label="Form / New Form"
        :show-btn="true"
        btnLabel="Close"
        btn-label2="Publish"
        showBtn2
        to2="/form/contactform"/>
    </div>
    <div class="w-[96%] ml-7 flex-col rounded-lg bg-white h-fit pb-6">
        <div class="flex mt-5 ml-7 font-extralight text-[12px] justify-between">
          <p class="text-[#325CA8] mt-5 text-[15px] flex gap-1 font-medium"> 
            <Icon icon="mdi:tag" class="mt-0.5 text-[18px]" />  
            New Page
          </p>
         
        </div>
        
        <div class="flex ml-7   gap-4 mt-5">
          <div class="flex items-center gap-1 cursor-pointer">
            <Icon icon="simple-icons:googletranslate" class="text-[#325CA8] text-[16px]" />
            <p class="text-[#325CA8] text-[12px]">English</p>
          </div>
          <p class="text-[#BDBDBD] text-[12px] cursor-pointer">Arabic</p>
        </div>
        <div class="ml-7">
          <Input class="w-[92%] h-12 ml-7 text-black mt-6" placeholder="Category Name"/>
        </div>
        
        
        
      </div>
</template>