<script setup>
import { ref } from 'vue'; 
import navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import button from '@/components/common/button.vue';

const selectedIndex = ref(null);
const showPreview = ref(false);

const componentsList = [
  { name: 'Card', icon: 'ph:identification-card' },
  { name: 'Silder', icon: 'ph:monitor' },
  { name: 'Header', icon: 'ph:layout' },
  { name: 'image', icon: 'ph:image' },
  { name: 'Footer', icon: 'ph:browser' },
  { name: 'Section', icon: 'ph:columns' },
  { name: 'Navbar', icon: 'ph:caret-circle-up' },
  { name: 'Navbar', icon: 'ph:caret-circle-up' },
];


const handleCardClick = (index) => {
  selectedIndex.value = index;
  showPreview.value = true;
};


const closePreview = () => {
  showPreview.value = false;
  selectedIndex.value = null;
};
</script>

<template>
  <div class="flex flex-col ml-6 mt-5">
    <div class="w-full mb-5">
      <navbar 
        width="97%"
        height="55px" 
        icon="heroicons:rectangle-stack"
        label="Pages / Components"
        btn-label2="Add New"
        showBtn2
        to2="/pages/addnewpage"
      />
    </div>

    <div class="flex flex-row gap-5 w-[97%]">
      
      <div :class="[showPreview ? 'w-[65%]' : 'w-full']" class="rounded-xl flex flex-col bg-white h-fit pb-10 transition-all duration-300">
        <div class="px-10 rounded-lg py-7 flex justify-between items-center bg-white border-gray-50">
          <div class="flex items-center gap-2">
            <Icon icon="heroicons:rectangle-stack" class="mt-0.5 text-[22px] text-[#325CA8]" /> 
            <p class="text-[#325CA8] text-[16px] font-bold">All Components</p>
          </div>
          <input type="text" placeholder="value" class="border border-gray-100 rounded-full px-5 py-2 text-sm text-gray-400 bg-white min-w-[220px]">
          <div class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-2 bg-[#F9FAFB] text-gray-500 text-sm cursor-pointer shadow-sm">
            <span>Title,...</span>
            <Icon icon="iconamoon:arrow-down-2-light" class="mt-0.5 text-[18px]" /> 
          </div>
        </div>

        <div class="grid grid-cols-4 gap-y-8 px-10">
          <div 
            v-for="(item, index) in componentsList" 
            :key="index"
            @click="handleCardClick(index)"
            class="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div 
              class="w-24 h-24 border rounded-2xl flex items-center justify-center transition-all duration-200 shadow-sm"
              :class="[
                selectedIndex === index 
                ? 'bg-[#325CA8] border-[#325CA8]' 
                : 'bg-white border-gray-100 hover:bg-blue-50 hover:border-blue-200'
              ]"
            >
              <Icon 
                :icon="item.icon" 
                :class="selectedIndex === index ? 'text-white' : 'text-[#325CA8]'" 
                class="text-4xl" 
              />
            </div>
            <span 
              class="text-[12px] font-medium transition-colors"
              :class="selectedIndex === index ? 'text-[#325CA8]' : 'text-gray-500'"
            >
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>

      <div v-if="showPreview" class="w-[35%] bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-fit sticky top-5">
        <div class="flex justify-between items-center mb-6">
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

        <div class="border border-gray-200 rounded-2xl p-6 text-center">
          <div class="flex justify-center mb-4">
             <img src="/src/assets/imges/Avatar.png" class="w-20 h-20 rounded-full bg-orange-100" />
          </div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Card Name</h3>
          <p class="text-[10px] text-gray-500 leading-relaxed px-4">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div class="flex gap-3 mt-6">
          <button class="flex-1 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Delete</button>
          <button class="flex-1 py-2 bg-[#325CA8] text-white rounded-lg text-sm font-medium hover:bg-blue-700">Edit</button>
        </div>
      </div>

    </div>
  </div>
</template>