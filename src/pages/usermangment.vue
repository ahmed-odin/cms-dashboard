<script setup>
import Navbar from '@/components/common/navbar.vue';


</script>
<template>
 <div class="flex ml-6 w-[95%]  flex-col">
  
  <div class="flex mt-5 flex-col" >
    <Navbar 
    width="100%"
    height="75px" 
    icon="icon-park-outline:every-user"
    label="User Management"
    :show-btn2="true"
    btnLabel2="Add New"
    to2="/Users Management/New User" />  
  </div>
</div>
</template>