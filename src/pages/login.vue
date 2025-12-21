<script setup>
  import Input from '../components/common/input.vue';
  import Button from '../components/common/button.vue';
  import { RouterLink, createWebHistory } from 'vue-router';
  import { RouterView } from 'vue-router';
</script>

<template>
<div class=" body   w-screen h-screen flex items-center ">
  <div class=" w-[320px] h-fit pb-8 bg-white m-auto flex flex-col items-center gap-1 rounded-lg  ">
    <img class="mt-4 w-20 " src="/src/assets/imges/Avatar.png" alt="">
    <p class=" font-sans text-[12px] mt-3 font-semibold ">Welcome Back!</p>
        <Input type="email" placeholder="User Name" />
        <Input type="password" placeholder="password" />
        <p class="text-[#325CA8] mt-3.5 text-[12px] font-semibold ">Forget Password?</p>
        <div class="w-[100%] ml-8 ">
        <router-link to="/dashbord"> <Button /> </router-link>
       </div>
  </div>
</div>
  
</template>
<style scoped>
    .body{
      background-color: #EBF2FBF2 ;
    }
</style>