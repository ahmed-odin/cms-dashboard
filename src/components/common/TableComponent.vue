<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  columns: Array, 
  data: Array,
  pageSize: { type: Number, default: 6 },
  showAction: { type: Boolean, default: true }
});


const activeColumns = computed(() => {
  return props.columns.filter(col => col.visible !== false);
});


const filteredData = computed(() => {
  return props.data ? props.data.filter(item => item.isVisible !== false) : [];
});


const totalVisibleCols = computed(() => {
  return activeColumns.value.length + (props.showAction ? 1 : 0);
});


const emptyRowsCount = computed(() => {
  const count = props.pageSize - filteredData.value.length;
  return count > 0 ? count : 0;
});
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col min-h-[600px]">
    <div class="px-10 pb-4 mt-2 flex-grow">
      <table class="w-full border-separate border-spacing-y-4">
        <thead>
          <tr class=" font-extralight text-[12px]">
            <th v-for="col in activeColumns" :key="col.key" class="px-6 pb-2 text-left font-semibold">
              {{ col.label }}
            </th>
            <th v-if="showAction" class="px-6 pb-2 text-center font-bold">Action</th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="(item, index) in filteredData" :key="index">
            <td 
              v-for="(col, colIndex) in activeColumns" 
              :key="col.key"
              :class="[
                'bg-white border-y px-6 py-5 text-[12px] font-medium',
                colIndex === 0 ? 'border-l rounded-l-[1.5rem]' : '',
                (!showAction && colIndex === activeColumns.length - 1) ? 'border-r rounded-r-[1.5rem]' : 'border-gray-100'
              ]"
            >
              <slot v-if="col.key === 'name'" name="website-category" :item="item"></slot>
              <span v-else>{{ item[col.key] }}</span>
            </td>

            <td v-if="showAction" class="bg-white border-y border-r border-gray-100 px-6 py-5 rounded-r-[1.5rem] text-center">
              <button class="text-gray-400 hover:text-[#3B82F6]">
                <Icon icon="bi:three-dots" class="text-[18px]" /> 
              </button>
            </td>
          </tr>

          <tr v-for="n in emptyRowsCount" :key="'empty-' + n">
            <td :colspan="totalVisibleCols" class="py-5">
              <div class="h-[64px] w-full"></div> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>