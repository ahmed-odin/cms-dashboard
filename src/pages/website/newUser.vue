<script setup>
import Navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
</script>
<template>
 <div class=" flex flex-col  w-[95%] items-center ml-6 justify-center mt-5">
    <div class=" w-full  mb-5">
       <navbar 
    width="100%"
    height="55px" 
    icon="ic:round-web"
    label="Websites/ NewWebsite / NewUser"
    :show-btn="true"
    btnLabel="Inactive"
    btn-label2="Active"
    showBtn2
   />
    </div>
      <div class="flex w-full rounded-xl bg-white h-fit pb-7   flex-col" >
        <div class="flex gap-1 ml-7 mt-4" >  <Icon icon="icon-park-outline:every-user" class=""  style="color: #325CA8;" /> <p class="text-[#325CA8] text-[12px] font-semibold">New User</p> </div>
        <div class="flex items-center gap-2 mt-4">
          <Input class="w-[50%]  h-16 ml-8 text-black" 
          placeholder="Full name*" /> <Input class="w-[50%]   h-16 mr-3 " 
          placeholder="Role*" iconColor="#3b82f6" to="/website/newuser/newrole" icon="mdi:shield-account" top="18px" />
        </div>
        
        <div class="flex items-center gap-2">
          <Input class="w-[50%] h-12 ml-8 text-black" 
          placeholder="Email"/> <Input class="w-[50%]  h-12 mr-3 " 
          placeholder="Password"/>
        </div>
       
      </div>
  </div>
</template>