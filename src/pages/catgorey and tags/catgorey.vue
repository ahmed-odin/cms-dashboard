<script setup>
import Navbar from '@/components/common/navbar.vue';
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
 <div class="flex ml-6 w-[95%] mt-5 flex-col ">
  
  <div class="flex mb-5  flex-col" >
    <Navbar 
    width="100%"
    height="55px" 
    icon="mdi:tag"
    label="Categories & Tags / Categories"
    :show-btn2="true"
    btnLabel2="Add New"
    to2="/Categories/newcat"
     />  
  </div>
   <TableComponent  title="user" icon="heroicons:rectangle-stack" :columns="myColumns" :data="websiteList">
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