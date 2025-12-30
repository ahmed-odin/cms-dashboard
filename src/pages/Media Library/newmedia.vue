<script setup>
import { ref } from 'vue'; 
import navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';

const fileInput = ref(null);
const openFileBrowser = () => {
  fileInput.value.click();
};
const handleFileSelect = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log("Selected file:", file.name);
   
  }
};
const selectedId = ref(null);
const showPreview = ref(false);
const selectedItem = ref(null);

const mediaItems = [
  { id: 1, src: '/src/assets/imges/laptob img.png', name: 'Laptop Setup', size: '1080px x 1080px', author: 'Admin' },
  { id: 2, src: '/src/assets/imges/billbord.png', name: 'Harajuku Billboard', size: '1920px x 1080px', author: 'Editor' },
  { id: 3, src: '/src/assets/imges/cactus.png', name: 'Cactus Plant', size: '800px x 800px', author: 'Admin' },
  { id: 4, src: '/src/assets/imges/persondoll.png', name: 'Clay Character', size: '1080px x 1080px', author: 'Admin' },
  { id: 5, src: '/src/assets/imges/persondoll.png', name: 'Clay Character Copy', size: '1080px x 1080px', author: 'Admin' },
  { id: 6, src: '/src/assets/imges/cactus.png', name: 'Cactus Copy', size: '800px x 800px', author: 'Admin' },
  { id: 7, src: '/src/assets/imges/laptob img.png', name: 'Laptop Copy', size: '1080px x 1080px', author: 'Admin' },
  { id: 8, src: '/src/assets/imges/billbord.png', name: 'Billboard Copy', size: '1920px x 1080px', author: 'Admin' },
];


const selectMedia = (item) => {
  selectedId.value = item.id;
  selectedItem.value = item;
  showPreview.value = true;
};

const closePreview = () => {
  showPreview.value = false;
  selectedId.value = null;
};
</script>

<template>
  <div class="flex flex-col ml-7">
    <div class="w-full mb-5 mt-5">
      <navbar 
        width="98%"
        height="55px" 
        icon="material-symbols:perm-media"
        label="Media library" 
      />
    </div>

    <div class="w-[98%]  py-4 rounded-xl h-72 bg-white mb-5 shadow-sm border border-gray-50">
      <div class="flex justify-between items-center px-7">
        <div class="flex items-center gap-2">
          <Icon icon="material-symbols:perm-media" class="text-[#325CA8] text-[18px]" />
          <p class="text-[#325CA8] text-[14px] font-semibold cursor-pointer">Select Media</p>
        </div>
        <Icon @click="closePreview" icon="material-symbols:close" class="cursor-pointer text-[18px] hover:text-red-600" />
        
      </div>
      <div class="flex items-center justify-center h-[80%]">
         <img 
        @click="openFileBrowser"
        class="mr-11 w-[250px] rounded-xl h-[200px] mt-4 cursor-pointer hover:opacity-90 transition-opacity" 
        src="/src/assets/imges/file.png" 
        alt="Upload Icon"
      >

    <input 
      type="file" 
      ref="fileInput" 
      class="hidden" 
      accept="image/*"
      @change="handleFileSelect"
    >
        </div>
        
   
  </div>
    </div>

    <div class="flex flex-row gap-5 w-[98%]">
      
      <div :class="[showPreview ? 'w-[65%]' : 'w-full']" class="p-6 bg-white rounded-xl transition-all duration-300 shadow-sm border border-gray-50">
        <div class="flex justify-between items-center mb-6 border-b border-gray-50 pb-4">
          <div class="flex items-center gap-2">
            <Icon icon="heroicons:rectangle-stack" class="text-[20px] text-[#325CA8]" /> 
            <p class="text-[#325CA8] text-[16px] font-bold">All Media</p>
          </div>
          <div class="flex gap-4">
            <input type="text" placeholder="Value" class="border border-gray-100 rounded-full px-5 py-1.5 text-sm text-gray-400 focus:outline-none focus:border-blue-300 min-w-[200px]">
            <div class="flex items-center gap-2 border border-gray-100 rounded-xl px-4 py-1.5 bg-[#F9FAFB] text-gray-500 text-sm cursor-pointer shadow-sm">
              <span>Title,...</span>
              <Icon icon="iconamoon:arrow-down-2-light" /> 
            </div>
          </div>
        </div> 

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="item in mediaItems" 
            :key="item.id" 
            @click="selectMedia(item)"
            :class="[
              'relative bg-white rounded-2xl overflow-hidden transition-all cursor-pointer border-2',
              selectedId === item.id ? 'border-[#325CA8] shadow-lg scale-[0.98]' : 'border-transparent shadow-sm hover:shadow-md'
            ]"
          >
            <div class="aspect-square w-full">
              <img :src="item.src" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3 mt-8 text-[12px] font-medium text-gray-400">
          <button class="w-7 h-7 flex items-center justify-center bg-[#325CA8] text-white rounded-md shadow-md">1</button>
          <button class="hover:text-[#325CA8]">2</button>
          <button class="hover:text-[#325CA8]">3</button>
          <span>...</span>
          <button class="hover:text-[#325CA8]">67</button>
          <button class="hover:text-[#325CA8]">68</button>
        </div>
      </div>

      <div v-if="showPreview" class="w-[35%] bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-fit sticky top-5">
        <div class="flex justify-between items-center mb-5">
          <div class="flex items-center gap-2 text-[#325CA8] font-bold text-sm">
            <Icon icon="ph:play-circle" class="text-lg" />
            Preview
          </div>
          <Icon 
            icon="material-symbols:close" 
            class="text-gray-400 cursor-pointer hover:text-black" 
            @click="closePreview"
          />
        </div>

        <div class="rounded-2xl overflow-hidden mb-5 shadow-sm border border-gray-100">
           <img :src="selectedItem?.src" class="w-full h-auto object-cover max-h-[300px]" />
        </div>

        <div class="space-y-2 mb-6">
          <h3 class="text-xl font-bold text-gray-800">{{ selectedItem?.name }}</h3>
          <div class="text-[11px] space-y-1.5">
            <p class="text-gray-400"><span class="font-bold text-gray-600">Size:</span> {{ selectedItem?.size }}</p>
            <p class="text-gray-400 truncate"><span class="font-bold text-gray-600">Link:</span> https://web.iq/image/{{ selectedItem?.id }}</p>
            <p class="text-gray-400"><span class="font-bold text-gray-600">Author:</span> {{ selectedItem?.author }}</p>
          </div>
        </div>

        <div class="flex gap-3">
          <button class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
            Delete
          </button>
          <button class="flex-1 py-2.5 bg-[#325CA8] text-white rounded-xl text-sm font-semibold hover:bg-blue-800 shadow-md transition-colors">
            Close
          </button>
        </div>
      </div>

    </div>
  
</template>