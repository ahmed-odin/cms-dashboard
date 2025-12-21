<script setup>
import Navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
const showpages=false
</script>
<template>
 <div class=" flex flex-col  w-[95%] items-center ml-6 justify-center mt-2">
    <div class="m-2 w-full mt-1 ">
       <navbar 
    width="100%"
    height="75px" 
    icon="icon-park-outline:every-user"
    label="User Management / Roles"
    btn-label2="Add New"
    showBtn2
    to2="/Users Management/New User/NewRole/roles/r"/>
    </div> 
  </div>
</template>