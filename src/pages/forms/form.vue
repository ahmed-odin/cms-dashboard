<script setup>
import navbar from '@/components/common/navbar.vue';
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
  <div class="ml-7 mt-5 mb-5 ">
      <navbar 
       width="96%"
        height="55px" 
        icon="fa6-brands:wpforms"
        label="Forms"
        btnLabel="Close"
        btn-label2="Add New"
        showBtn2
        to2="/form/contactform"/>
    </div>
    <div class="w-[94%] ml-7  ">
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