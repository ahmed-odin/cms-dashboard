<script setup>
import { RouterView } from "vue-router";
import login from "./pages/login.vue";
import Sidebar from "./components/layout/sidebar.vue";
</script>
<template>
  <div class="flex justify-start">
    <Sidebar />
    <div class="flex-1 w-full body">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
  .body{
     background-color: #EBF2FBF2 ;
  }
</style>