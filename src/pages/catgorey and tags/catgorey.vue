<script setup>
import navbar from '@/components/common/navbar.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';
const myColumns = [
  { key: 'name', label: 'Name' },
  { key: 'domain', label: 'Url Slug' },
  { key: 'owner', label: 'Parent Category' },
  { key: 'status', label: 'Description' }
];

const websiteList = ref([
  { name: 'News', domain: '/News', owner: 'Not Found', status: 'Lorem Ipsum is',},
  { name: 'Sports', domain: '/Sports', owner: 'Latest Updates', status: 'Stay tuned for', icon: 'logos:vue' ,  isVisible: false  },
  { name: 'Name', domain: '/Sports', owner: 'Latest Updates', status: 'Lorem Ipsum is', icon: 'logos:vue' },
  { name: 'Name', domain: '/Sports', owner: 'Latest Updates', status: 'Explore the ', icon: 'logos:vue' },
  { name: 'Name', domain: '/Sports', owner: 'Latest Updates', status: 'Get ready for', icon: 'logos:vue' },
]);

</script>
<template>
  <div class="  ml-5 mt-5 ">
      <navbar class="mb-5"
        width="95%"
        height="55px"  
        icon="mdi:tag"
        label="Categories & Tags / Categories " 
         btnLabel="Draft"
        btn-label2="Add New"
        showBtn2
        to2="/Categories/newcat"/>
    </div>
    <div class="w-[96%]  ml-5">
<TableComponent title="user" icon="" :columns="myColumns" :data="websiteList">
      <template #website-category="{ item }">
        <div class="flex items-center gap-4">
          <div class="   flex items-center justify-center ">
            
          </div>
          <span class="text-[12px] font-medium">{{ item.name }}</span>
        </div>
      </template>
    </TableComponent>
    </div>
    
</template>