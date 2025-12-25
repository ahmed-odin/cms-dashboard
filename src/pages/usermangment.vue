<script setup>
import Navbar from '@/components/common/navbar.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
const myColumns = [
  { key: 'name', label: 'Full Name' },
  { key: 'domain', label: 'Email' },
  { key: 'owner', label: 'Role' },
  { key: 'status', label: 'Status' }
];

const websiteList = ref([
  { name: 'Name', domain: 'test@email.com', owner: 'Admin', status: 'Active', icon: 'logos:html-5' },
  { name: 'Name', domain: 'test@email.com', owner: 'Author', status: 'Inactive', icon: 'logos:vue' },
  { name: 'Name', domain: 'test@email.com', owner: 'Admin', status: 'Active', icon: 'logos:vue' },
  { name: 'Name', domain: 'test@email.com', owner: 'Admin', status: 'Inactive', icon: 'logos:vue' },
  { name: 'Name', domain: 'test@email.com', owner: 'Admin', status: 'Active', icon: 'logos:vue' },
]);
</script>
<template>
 <div class="flex ml-6 w-[95%]  flex-col">
  
  <div class="flex mt-5 flex-col mb-5" >
    <Navbar 
    width="100%"
    height="75px" 
    icon="icon-park-outline:every-user"
    label="User Management"
    :show-btn2="true"
    btnLabel2="Add New"
    to2="/Users Management/New User" />  
  </div>
  <TableComponent title="user" icon="" :columns="myColumns" :data="websiteList">
      <template #website-category="{ item }">
        <div class="flex items-center gap-4">
          <div class="   flex items-center justify-center ">
            <img src="../assets/imges/website logo.png" alt="">
          </div>
          <span class="font-bold text-black text-[15px]">{{ item.name }}</span>
        </div>
      </template>
    </TableComponent>
</div>
</template>