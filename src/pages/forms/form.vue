<script setup>
import Navbar from '@/components/common/navbar.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';
const myColumns = [
  { key: 'name', label: 'Form Title' },
  { key: 'domain', label: 'Link',  },
  { key: 'owner', label: 'Entrey', },
  { key: 'status', label: 'Description', visible: false   }
];

const websiteList = ref([
  { name: 'Contact Form', domain: '/contact-form', owner: '22', status: 'Lorem Ipsum is',},
  { name: 'About us ', domain: '/about-us', owner: '22', status: 'Stay tuned for', icon: 'logos:vue' , },
  { name: 'Services', domain: '/services ', owner: '1.5K', status: 'Lorem Ipsum is', icon: 'logos:vue' },
  
]);
</script>
<template>
 <div class="flex ml-6 w-[95%] mt-5 flex-col ">
  
  <div class="flex mb-5  flex-col" >
    <Navbar 
    width="100%"
    height="55px" 
    icon="fa6-brands:wpforms"
    label="Forms"
    :show-btn2="true"
    btnLabel2="Add New"
   to2="/form/contactform""
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