<script setup>
  import { RouterLink, createWebHistory, useRoute } from 'vue-router';
  import { RouterView } from 'vue-router';
  import { Icon } from "@iconify/vue";
  import { ref } from 'vue';
  const sidebar = ref([
    {
      title:"Dashbord",
      path:"/Dashbord",
      icon:"mdi:view-dashboard-outline",
      
    },
    {
      title:"Website",
      path:"/Website",
      icon:"gg:website",
    },
    {
      title:"UserMangment",
      path:"/UserMangment",
      icon:"icon-park-outline:every-user",
    },
    {
      title:"Pages",
      path:"/pages",
      icon:"qlementine-icons:pages-last-16",
    },
    {
      title:"Media Library",
      path:"/Media Library",
      icon:"material-symbols:perm-media",
    },
    {
      title:"Categories & Tags",
      path:"/Categories & Tags",
      icon:"mdi:tag",
    },
    {
      title:"Forms",
      path:"/Forms",
      icon:"fa6-brands:wpforms",
    },
  ])
  const route = useRoute()
</script>

<template>
  <div class="body ">
    <div class="flex ">
      <!-- col navbar-->
      <div class="flex flex-col w-56 h-screen bg-white items-center gap-3">
         <!-- header text-->
        <div class="flex  mr-6">
          <div class="flex">
             <!--header img-->
             <img class="w-12 mt-6 mr-4  " src="/src/assets/imges/Avatar.png" alt="">
             <div class="flex flex-col mt-8 mr-4 text-[12px]">
              <!--header text-->
            <p class="text-[#4F4F4F]">Welcome Back,</p>
            <p class="mt-0.5 text-black ">Admin!</p>
          </div>
          </div>  
        </div>
        <!--nav buttons -->
        <div class="flex flex-col  mt-1 ml-0.5">
          <div v-for="item in sidebar" :key="item.title " >
            <div class="flex flex-col w-full ">
             <RouterLink
             
             :class="route.fullPath == item.path ? 'bg-blue-500 text-white' : ''"
             :to="item.path" class="flex m-1 pl-5 mr-8 text-[14px] p-1.5 active:bg-blue-600  rounded-lg "> <Icon class="mt-0.5 mr-3" size="50" :icon="item.icon" />  {{ item.title}}   </RouterLink>
             
             
            </div>
 
          </div>
         
          
        </div>
       
      </div>
    </div>
  </div>
</template>
