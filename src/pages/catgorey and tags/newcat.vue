<script setup>
import navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
</script>
<template>
  <div class=" flex flex-col  w-[95%] items-center ml-6 justify-center mt-5">
    <div class=" w-full mb-5  ">
       <navbar  
    width="100%"
    height="55px" 
    icon="mdi:tag"
    label="Categories & Tags / New Category"
    :show-btn="true"
    btnLabel="Inactive"
    btn-label2="Active"
    showBtn2
    />
    </div>
      <div class="w-[100%]  flex-col rounded-lg bg-white h-fit pb-6">
        <div class="flex  ml-7 font-extralight text-[12px] justify-between">
          <p class="text-[#325CA8] mt-5 text-[15px] flex gap-1 font-medium"> 
            <Icon icon="mdi:tag" class="mt-0.5 text-[18px]" />  
            New Page
          </p>
         
        </div>
        
        <div class="flex ml-7 gap-4 mt-5">
          <div class="flex items-center gap-1 cursor-pointer">
            <Icon icon="simple-icons:googletranslate" class="text-[#325CA8] text-[16px]" />
            <p class="text-[#325CA8] text-[12px]">English</p>
          </div>
          <p class="text-[#BDBDBD] text-[12px] cursor-pointer">Arabic</p>
        </div>

        <Input class="w-[92%] h-12 ml-7 text-black mt-6" placeholder="Category Name"/>
        <Input class="w-[92%] h-14 ml-7 text-black " placeholder="Parent Category"/>
        <Input class=" inputclass input w-[92%]  ml-7 text-black  text-start"   placeholder="Description" />
      </div>
  </div>
 
</template>
<style scoped>
  .inputclass{
    background-color: #F7F7F7 ;
    height: 150px;
    border-radius: 14px;
    
  }
</style>