<script setup>
  import Navbar from '@/components/common/navbar.vue';
  import Input from '@/components/common/input.vue';
  import { Icon } from '@iconify/vue';

</script>
<template>
<div class=" flex flex-col  w-[95%] items-center ml-6 justify-center ">
    <div class="m-2 w-full mt-5 mb-5">
       <navbar 
    width="100%"
    height="55px" 
    icon="icon-park-outline:every-user"
    label="Users Management / New User"
    :show-btn="true"
    btnLabel="Inactive"
    btn-label2="Active"
    showBtn2
    />
    </div>
      <div class="flex w-full gap-2 rounded-xl bg-white h-fit pb-7  flex-col" >
        <div class="flex gap-1 ml-7 mt-4" >  <Icon icon="icon-park-outline:every-user" class=""  style="color: #325CA8;" /> <p class="text-[#325CA8] text-[12px] font-semibold">New User</p> </div>
        <div class="flex items-center gap-2 mt-4">
          <Input class="w-[50%] h-[42px] ml-8 text-black" 
          placeholder="Full name*"/> <Input class="w-[50%]  h-[42px] mr-3 " 
          placeholder="Role*" iconColor="#3b82f6" to="/Users Management/New User/NewRole"" icon="mdi:shield-account" top="18px"/>
        </div>
        
        <div class="flex items-center gap-2">
          <Input class="w-[50%] h-[42px] ml-8 text-black" 
          placeholder="Email"/> <Input class="w-[50%]  h-[42px] mr-3 " 
          placeholder="Password"/>
        </div>
       
      </div>
  </div>
</template>