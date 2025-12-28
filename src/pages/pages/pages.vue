<script setup>
import Navbar from '@/components/common/navbar.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';
const myColumns = [
  { key: 'name', label: 'Title' },
  { key: 'domain', label: 'Url Slug' },
  { key: 'owner', label: 'Author' },
  { key: 'status', label: 'Status' }
];

const websiteList = ref([
  { name: 'Home Page', domain: '/', owner: 'Admin', status: 'Active',  },
  { name: 'About us', domain: '/About Us', owner: 'create, read, update,', status: 'Inactive',   },
  { name: 'Contact Us', domain: '/Contact Us', owner: 'read', status: 'Active',  },
  { name: 'Careers', domain: '/Careers', owner: 'manage, create, ', status: 'Inactive',   },
  { name: '/projects', domain: '/projects', owner: 'read', status: 'Active',   },
]);

</script>
<template>
 <div class="flex ml-6 w-[95%] mt-5 flex-col ">
  
  <div class="flex mb-5  flex-col" >
    <Navbar 
    width="100%"
    height="55px" 
    icon="heroicons:rectangle-stack"
    label="Pages"
    :show-btn2="true"
    btnLabel2="Add New"
    to2="/pages/newpage" />  
  </div>
   <TableComponent  title="user" icon="heroicons:rectangle-stack" :columns="myColumns" :data="websiteList">
      <template #website-category="{ item }">
        <div class="flex items-center gap-4">
          <div class="   flex items-center justify-center ">
            <img src="/src/assets/imges/website logo.png" alt="">
          </div>
          <span class="text-[12px] font-medium">{{ item.name }}</span>
        </div>
      </template>
    </TableComponent>
</div>
</template>