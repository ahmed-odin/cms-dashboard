<script setup>
import { RouterView, useRoute } from "vue-router";
import Sidebar from "./components/layout/sidebar.vue";
import { computed } from "vue";

const route = useRoute();

// Only show sidebar if we are NOT on the login page ('/')
const showSidebar = computed(() => route.path !== '/');
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar v-if="showSidebar" />

    <div 
      class="flex-1 min-h-screen body transition-all duration-300"
      :class="{ 'ml-64': showSidebar }" 
    >
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.body {
  
  background-color: #f3f7ff; 
  
}
</style>