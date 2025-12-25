
<script setup>
import { Icon } from '@iconify/vue';
defineProps({
  title: String,
  columns: Array,
  data: Array
});
</script>

<template>
  <div class="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
    
    <div class="px-10 py-7 flex justify-between items-center bg-white border-b border-gray-50">
      
      <div class="flex items-center gap-2">
        <iconify-icon icon="fluent:website-24-filled" class="text-[#3B82F6] text-2xl"></iconify-icon>
        <p class="text-[#3B82F6] text-[16px] font-bold text-base">{{ title }}</p>
      </div>

      <input type="text" placeholder="value" class="flex items-center gap-2 border border-gray-100 rounded-full px-5 py-2 text-sm text-gray-400 bg-white min-w-[220px] justify-between">

      <div class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-2 bg-[#F9FAFB] text-gray-500 text-sm cursor-pointer hover:bg-gray-100 transition-all shadow-sm">
        <span>Website Name,...</span>
        <Icon icon="iconamoon:arrow-down-2-light" class="mt-0.5 text-[18px]" /> 
      </div>
    </div>

    <div class="px-10 pb-4 mt-2">
      <table class="w-full border-separate border-spacing-y-4">
        <thead>
          <tr class="text-black text-[12px]  ">
            <th v-for="col in columns" :key="col.key" class="px-6 pb-2 text-left font-bold">
              {{ col.label }}
            </th>
            <th class="px-6 pb-2 text-center font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index" class="group">
            <td class="bg-white border-y border-l border-gray-100 px-6 py-5 rounded-l-[1.5rem]">
              <slot name="website-category" :item="item"></slot>
            </td>

            <td class="bg-white border-y border-gray-100 px-6 py-5 text-sm text-black font-medium">
              {{ item.domain }}
            </td>
            <td class="bg-white border-y border-gray-100 px-6 py-5 text-sm text-black font-medium">
              {{ item.owner }}
            </td>
            <td class="bg-white border-y border-gray-100 px-6 py-5">
               <span :class="item.status === 'Active' ? 'bg-[#ECFDF5] text-[#10B981]' : 'bg-[#FEF2F2] text-[#EF4444]'" 
                    class="px-4 py-1.5 rounded-full text-[11px] font-bold">
                {{ item.status }}
              </span>
            </td>

            <td class="bg-white border-y border-r border-gray-100 px-6 py-5 rounded-r-[1.5rem] text-center">
              <button class="text-gray-400 hover:text-[#3B82F6] transition-all">
                <Icon icon="bi:three-dots" class="mt-0.5 text-[18px]" /> 
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="px-10 pb-10 flex items-center gap-2">
      <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-[#3B82F6] text-white text-xs font-bold shadow-md shadow-blue-200">1</button>
      <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 text-xs font-bold hover:bg-gray-50 transition-colors">2</button>
      <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 text-xs font-bold hover:bg-gray-50 transition-colors">3</button>
      <span class="text-gray-300 px-1 font-bold">...</span>
      <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 text-xs font-bold hover:bg-gray-50 transition-colors">67</button>
      <button class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 text-xs font-bold hover:bg-gray-50 transition-colors">68</button>
    </div>
  </div>
</template>

<style scoped>
/* Important for row card spacing */
.border-separate { border-collapse: separate; }
.border-spacing-y-4 { border-spacing: 0 16px; }
</style>