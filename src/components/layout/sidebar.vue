<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { Icon } from "@iconify/vue";
import { ref } from 'vue';

const route = useRoute();

const sidebar = ref([
  { title: "Dashboard", path: "/Dashbord", icon: "mdi:view-dashboard-outline" },
  { title: "Websites", path: "/Website", icon: "gg:website" },
  {
    title: "User Management",
    path: "/UserMangment",
    icon: "icon-park-outline:every-user",
    children: [
      { title: "All Users", path: "/UserMangment" },
      { title: "Roles & Permissions", path: "/Users Management/New User/NewRole/roles" }
    ]
  },
  {
    title: "Pages",
    path: "/pages",
    icon: "qlementine-icons:pages-last-16",
    children: [
      { title: "All Pages", path: "/pages" },
      { title: "Components", path: "/pages/pagecomponent" }
    ]
  },
  { title: "Media Library", path: "/Media", icon: "material-symbols:perm-media" },
  {
    title: "Categories & Tags",
    path: "/Categories&Tags",
    icon: "mdi:tag",
    children: [
      { title: "Categories", path: "/Categories&Tags" },
      { title: "Tags", path: "/Categories/tags" }
    ]
  },
  { title: "Forms", path: "/Forms", icon: "fa6-brands:wpforms" },
]);

// Helper to check if a section is active
const isSectionActive = (item) => {
  return route.path.startsWith(item.path);
};
</script>

<template>
  <aside class="w-64 h-screen bg-white border-r border-gray-100 fixed left-0 top-0 flex flex-col z-50">
    
    <div class="flex items-center px-6 py-8 gap-3">
      <img class="w-12 h-12 rounded-full object-cover" src="/src/assets/imges/Avatar.png" alt="Admin">
      <div class="flex flex-col text-[12px]">
        <p class="text-gray-400">Welcome Back,</p>
        <p class="text-black font-bold">Admin!</p>
      </div>
    </div>

    <nav class="flex-1 px-4 space-y-1 overflow-y-auto">
      <div v-for="item in sidebar" :key="item.title">
        
        <RouterLink
          :to="item.path"
          class="flex items-center text-black  px-4 py-3 mb-1 rounded-xl transition-all text-[13px] font-medium"
          :class="isSectionActive(item) ? 'bg-blue-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'"
        >
          <Icon :icon="item.icon" class="text-[20px] mr-3 text-blue-800" />
          {{ item.title }}
        </RouterLink>

        <div v-if="item.children && isSectionActive(item)" class="ml-6 flex flex-col mb-2">
          <RouterLink
            v-for="child in item.children"
            :key="child.title"
            :to="child.path"
            class="flex items-center py-2 px-4 text-[12px]"
          >
            <span 
              class="w-2 h-2 rounded-full mr-3" 
              :class="route.path === child.path ? 'bg-gray-400' : 'bg-gray-200'"
            ></span>
            <span :class="route.path === child.path ? 'text-black font-bold' : 'text-gray-400'">
              {{ child.title }}
            </span>
          </RouterLink>
        </div>

      </div>
    </nav>
  </aside>
</template>