<script setup>
import { RouterView, useRoute } from "vue-router";
import login from "./pages/login.vue";
import Sidebar from "./components/layout/sidebar.vue";
</script>
<template>
  <div class="flex justify-start">
    <Sidebar v-if="useRoute().fullPath != '/'"  />
    <div class="flex-1 body ">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
  .body{
     background-color: #EBF2FBF2 ;
  }
</style>