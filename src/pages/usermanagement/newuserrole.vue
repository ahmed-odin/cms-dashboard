<script setup>
import Navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
const showpages=false
</script>
<template>
 <div class=" flex flex-col  w-[95%] items-center ml-6 justify-center mt-5">
    <div class=" w-full mb-5 ">
       <navbar 
    width="100%"
    height="55px" 
    icon="icon-park-outline:every-user"
    label="Users Management / New Role"
    :show-btn="true"
    btnLabel="Inactive"
    btn-label2="Active"
    showBtn2
    />
    </div>
      <div class="flex w-full rounded-xl bg-white h-fit pb-7  flex-col" >
        <div class="flex gap-1 ml-7 mt-4" >  <Icon icon="icon-park-outline:every-user" class=""  style="color: #325CA8;" /> <p class="text-[#325CA8] text-[12px] font-semibold">New Role</p>
         </div>
        <div class="flex items-center mt- gap-2">
          <Input class="w-[95%] h-12 ml-8 text-black" 
          placeholder="Roll Name*"/>
        </div>
         <hr class=" w-[95%] ml-8 mt-6">
        <div class="flex justify-between mt-5 text-[#5A5A5A]   items-center text-[12px] gap-2">
          <p class="  ml-8 ">Module Name</p>
           <p class=" mr-8 ">Actions</p>
        </div>
        <div class="flex mt-3 ml-8 text-[12px] text-[#5A5A5A]  flex-col">
          <p class=" flex gap-1  ">Pages <Icon class="mt-0.5" icon="lucide:chevron-up" /> </p>
          <div class="text-[10px] flex text-[#5A5A5A] flex-col gap-1 mt-2">
            <p class="flex mr-11 justify-between">View Pages  <input type="checkbox" >  </p>
            <p class="flex mr-11 justify-between">Edit Pages  <input type="checkbox" >  </p>
            <p class="flex mr-11 justify-between">Delete Pages  <input type="checkbox" >  </p>
          </div>
        </div>
        <div class="flex mt-2 ml-8 text-[12px] text-[#5A5A5A]  flex-col">
          <p class=" flex gap-1  ">Pages / Components <Icon class="mt-0.5" icon="lucide:chevron-down" /> </p>
          <p class=" flex gap-1 mt-2  ">User Managment <Icon class="mt-0.5" icon="lucide:chevron-down" /> </p>
         
           
        </div>
      </div>
  </div>
</template>