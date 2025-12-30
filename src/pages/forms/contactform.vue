<script setup>
import Navbar from '@/components/common/navbar.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
const myColumns = [
  { key: 'name', label: 'Name' },
  { key: 'domain', label: 'Email' },
  { key: 'owner', label: 'Messages ' },
  { key: 'status', label: 'Status' , visible: false   }
];

const websiteList = ref([
  { name: 'Othman Luqman', domain: 'othman.l@daw-alfada.iq', owner: 'Admin', status: 'Active', icon: 'logos:html-5',  },
  { name: 'Name', domain: 'test@email.com', owner: 'Author', status: 'Inactive', icon: 'logos:vue' },
  { name: 'Name', domain: 'test@email.com', owner: 'Admin', status: 'Active', icon: 'logos:vue' },
  { name: 'Name', domain: 'test@email.com', owner: 'Admin', status: 'Inactive', icon: 'logos:vue' },
  { name: 'Name', domain: 'test@email.com', owner: 'Admin', status: 'Active', icon: 'logos:vue' },
]);
</script>
<template>
 <div class="flex ml-6 w-[95%] mt-5 flex-col ">
  
  <div class="flex mb-5  flex-col" >
    <Navbar 
    width="100%"
    height="55px" 
    icon="fa6-brands:wpforms"
    label="Forms /Contact Form "
    :show-btn2="true"
    btnLabel2="Add New"
     to2="/form/newform"
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