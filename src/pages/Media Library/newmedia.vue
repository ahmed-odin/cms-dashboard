<script setup>
import navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
const mediaItems = [
  { id: 1, src:'/src/assets/imges/laptob img.png', },
  { id: 2, src: '/src/assets/imges/billbord.png',  },
  { id: 3, src: '/src/assets/imges/cactus.png',  },
  { id: 4, src: '/src/assets/imges/persondoll.png',  },
  { id: 5, src: '/src/assets/imges/persondoll.png',  },
  { id: 6, src: '/src/assets/imges/cactus.png', },
  { id: 7, src: '/src/assets/imges/laptob img.png',  },
  { id: 8, src: '/src/assets/imges/billbord.png',  },
];
</script>
<template>
  <div class="flex flex-col  ml-7">
    <div class=" w-full mb-5 mt-5 ">
      <navbar 
        width="98%"
        height="55px" 
        icon="material-symbols:perm-media"
        label="Media library " />
    </div>
    <div class="w-[98%] h-56 rounded-xl bg-white">
      <div class="flex justify-between mt-5 ml-7">
        <div class="flex items-center gap-2">
            <Icon icon="material-symbols:perm-media" class="text-[#325CA8] text-[16px]" />
            <p class="text-[#325CA8] text-[13px] font-semibold cursor-pointer">Select Media</p>
          </div>
          <Icon icon="material-symbols:close" class=" cursor-pointer text-[18px] mr-5 hover:text-red-600 " />
      </div>
    </div>
    <div class="p-6 w-[98%] bg-white rounded-xl mt-5">
  <div class="px-10 py-7 flex justify-between items-center bg-white border-b border-gray-50">
      
      <div class="flex items-center gap-2">
        <Icon icon="heroicons:rectangle-stack" class="mt-0.5 text-[22px] text-[#325CA8]" /> 
        <p class="text-[#325CA8] text-[16px] font-bold text-base">All Components</p>
      </div>

      <input type="text" placeholder="value" class="flex items-center gap-2 border border-gray-100 rounded-full px-5 py-2 text-sm text-gray-400 bg-white min-w-[220px] justify-between">

      <div class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-2 bg-[#F9FAFB] text-gray-500 text-sm cursor-pointer hover:bg-gray-100 transition-all shadow-sm">
        <span>Title,...</span>
        <Icon icon="iconamoon:arrow-down-2-light" class="mt-0.5 text-[18px]" /> 
      </div>
    </div> 

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div 
      v-for="item in mediaItems" 
      :key="item.id" 
      class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div class="aspect-square w-full">
        <img 
          :src="item.src" 
          :alt="item.alt" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <div class="flex items-center gap-4 mt-8 text-sm text-gray-500">
    <button class="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md">1</button>
    <button class="hover:text-blue-600">2</button>
    <button class="hover:text-blue-600">3</button>
    <span>...</span>
    <button class="hover:text-blue-600">67</button>
    <button class="hover:text-blue-600">68</button>
  </div>
</div>
  </div>
</template>