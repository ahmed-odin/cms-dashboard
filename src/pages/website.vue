<script setup>
import Navbar from '@/components/common/navbar.vue';
import Button from '@/components/common/button.vue';
import custome from '@/components/common/custome.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';


</script>
<template>
  
<div class="flex ml-6 w-[95%]  flex-col">
  
  <div class="flex mt-5 flex-col" >
    <Navbar 
    width="100%"
    height="75px" 
    icon="ic:round-web"
    label="websites"
    :show-btn2="true"
    btnLabel2="Add New"
    to2="/website/newwebsite"/> 
  </div> 
</div>
</template>