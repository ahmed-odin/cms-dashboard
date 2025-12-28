<script setup>
import navbar from '@/components/common/navbar.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';
const myColumns = [
  { key: 'name', label: 'Name' },
  { key: 'domain', label: 'Url Slug', visible: false },
  { key: 'owner', label: 'Parent Category',visible: false },
  { key: 'status', label: 'Description'   }
];

const websiteList = ref([
  { name: 'News', domain: '/News', owner: 'Not Found', status: 'Lorem Ipsum is',},
  { name: 'Technology', domain: '/Sports', owner: 'Latest Updates', status: 'Stay tuned for', icon: 'logos:vue' , },
  { name: 'Health', domain: 'Recent studies ', owner: 'Latest Updates', status: 'Lorem Ipsum is', icon: 'logos:vue' },
  { name: 'Name', domain: '/Sports', owner: 'Latest Updates', status: 'Explore the ', icon: 'logos:vue' },
  { name: 'Name', domain: '/Sports', owner: 'Latest Updates', status: 'Get ready for', icon: 'logos:vue' },
]);
</script>
<template>
  <div class="  ml-5 mt-5 mb-5 ">
      <navbar 
        width="97%"
        height="55px" 
        icon="mdi:tag"
        label="Categories & Tags / Tags"
        btnLabel="Close"
        btn-label2="Add New"
        showBtn2
        to2="/Categories/tags/new"/>
    </div>
    <div class="w-[95%]  ml-5">
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