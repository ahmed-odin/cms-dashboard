<script setup>
import Navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
import { ref } from 'vue';
import TableComponent from '@/components/common/TableComponent.vue';
const myColumns = [
  { key: 'name', label: 'Full Name' },
  { key: 'domain', label: 'Allowed Modules' },
  { key: 'owner', label: 'Permissions' },
  { key: 'status', label: 'Status' }
];

const websiteList = ref([
  { name: 'Content Editor', domain: '1,2,3...', owner: 'create, read, update,', status: 'Active',  },
  { name: 'Author', domain: '1,2,3...', owner: 'create, read, update,', status: 'Inactive',   },
  { name: 'Viewer', domain: '1,2,3...', owner: 'read', status: 'Active',  },
  { name: 'Admin', domain: '1,2,3...', owner: 'manage, create, ', status: 'Inactive',   },
  { name: 'Subscriber', domain: '1,2,3...', owner: 'read', status: 'Active',   },
]);
</script>
<template>
 <div class=" flex flex-col  w-[95%] items-center ml-6 justify-center mt-2">
    <div class="m-2 w-full mt-1 ">
       <navbar 
    width="100%"
    height="75px" 
    icon="icon-park-outline:every-user"
    label="User Management / Roles"
    btn-label2="Add New"
    showBtn2
    to2="/Users Management/New User/NewRole/roles/r"/>
    </div> 
    <div class="w-full">
      <TableComponent  title="All Roles" icon="" :columns="myColumns" :data="websiteList">
      <template #website-category="{ item }">
        <div class="flex items-center gap-4">
          <div class="   flex items-center justify-center ">
            
          </div>
          <span class="font-bold text-black text-[15px]">{{ item.name }}</span>
        </div>
      </template>
    </TableComponent>
    </div>
    
  </div>
</template>