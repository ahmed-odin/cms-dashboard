<script setup>
import Navbar from '@/components/common/navbar.vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


const myColumns = [
  { key: 'name', label: 'Website Name' },
  { key: 'domain', label: 'Domain' },
  { key: 'owner', label: 'Owner' },
  { key: 'status', label: 'Status' }
];

const websiteList = ref([
  { name: 'Daw Alfada', domain: 'Daw Alfada.iq', owner: 'User Name', status: 'Active', icon: 'logos:html-5' },
  { name: 'Daw Alfada', domain: 'LaylaZahir.iq', owner: 'User Name', status: 'Inactive', icon: 'logos:vue' },
  { name: 'Daw Alfada', domain: 'LaylaZahir.iq', owner: 'User Name', status: 'Active', icon: 'logos:vue' },
  { name: 'Layla Zahir', domain: 'LaylaZahir.iq', owner: 'User Name', status: 'Inactive', icon: 'logos:vue' },
  { name: 'Omar Yassin', domain: 'OmarYassin.iq', owner: 'User Name', status: 'Active', icon: 'logos:vue' },
]);
</script>

<template>

  <!-- <button class="btn btn-sm btn-outline-primary ">JUI Button</button> -->
  
  <div class="flex ml-6 w-[95%] flex-col ">
    <div class="flex mt-5 flex-col mb-5 ">
      <Navbar 
        width="100%" height="55px" 
        icon="ic:round-web" label="Websites"
        :show-btn2="true" btnLabel2="Add New" to2="/website/newebsit"
           /> 
    </div> 

    <TableComponent title="All Websites" :columns="myColumns" :data="websiteList">
      <template #website-category="{ item }">
        <div class="flex items-center gap-4">
          <div class=" flex items-center justify-center ">
            <img src="../assets/imges/random logo.png" alt="">
          </div>
          <span class="text-[12px] font-medium">{{ item.name }}</span>
        </div>
      </template>
    </TableComponent>
  </div>
</template>