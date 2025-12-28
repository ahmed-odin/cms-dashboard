<script setup>
import navbar from '@/components/common/navbar.vue';
import Input from '@/components/common/input.vue';
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class=" flex flex-col  w-[95%] items-center ml-6 justify-center mt-5">
    <div class=" w-full mb-5  ">
       <navbar  
    width="100%"
    height="55px" 
    icon="ic:round-web"
    label="Websites/ NewWebsite"
    :show-btn="true"
    btnLabel="Inactive"
    btn-label2="Active"
    showBtn2
    to2="/website/newuser"/>
    </div>
      <div class="flex w-full rounded-xl bg-white h-fit pb-6  flex-col" >
        <div class="flex gap-1 ml-7 mt-4" >  <Icon icon="ic:round-web" class=""  style="color: #325CA8;" /> <p class="text-[#325CA8] text-[12px]">New Website</p> </div>
        <div class="flex items-center gap-2">
          <Input class="w-[50%] h-12 ml-8 text-black" 
          placeholder="Website Name*"/> <Input class="w-[50%]  h-12 mr-3 " 
          placeholder="Site title*"/>
        </div>
        <Input class="w-[95.5%] ml-8 h-12" 
        placeholder="Domain*"/>
        <div class="flex items-center gap-2">
          <Input class="w-[50%] h-12 ml-8 text-black" 
          placeholder="Owner"/> <Input class="w-[50%]  h-12 mr-3 " 
          placeholder="Contact Email"/>
        </div>
        <Input class="w-[95.5%] ml-8 h-12" 
        placeholder="Default Language"/>
      </div>
  </div>
 
</template>