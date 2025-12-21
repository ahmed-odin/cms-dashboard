<script setup>
import Navbar from '@/components/common/navbar.vue';
import { Icon } from '@iconify/vue';
import Input from '@/components/common/input.vue';
import Button from '@/components/common/button.vue';
const showpages=false
</script>
<template>
 <div class=" flex flex-col  w-[100%]  ml-6 justify-center mt-2">
    <div class="m-2 w-full mt-1 ">
       <navbar 
    width="95%"
    height="75px" 
    icon="heroicons:rectangle-stack"
    label="Pages / New Page"
    :show-btn="true"
    btnLabel="Draft"
    btn-label2="Publish"
    showBtn2
    to2="/pages/newpage"/>
    </div>
     <div class="flex mt-2  gap-2.5 ">
        <div class="w-[60%] ml-2 flex-col rounded-lg bg-white h-fit pb-6">
          <div class="flex mt-4 ml-7 font-extralight text-[12px] justify-between">
            <p class="text-[#325CA8] text-[15px] flex gap-1"> <Icon icon="heroicons:rectangle-stack" class=" mt-0.5 text-[18px]" />  New Page</p>
            <Icon icon="material-symbols:home-outline" class="mt-0.5 mr-6  text-[#325CA8] text-[18px]" />
          </div>
          <div class="flex ml-7 gap-2 mt-2">
            <Icon icon="simple-icons:googletranslate" class="mt-0.5  text-[#325CA8] text-[16px]" />
            <p class="text-[#325CA8] mt-0.5 text-[12px] " >English</p>
             <p class="text-[#BDBDBD] mt-0.5 text-[12px] " >Arabic</p>
          </div>
           <Input class="w-[92%] h-10 ml-7 text-black" 
          placeholder="Page Title*"/>
          <Button  height="49px" width="92%" borderRadius="5px" label="Add Component "
          class=" font-semibold  ml-7 text-blue-600 bg-[#E9EEF6]" />
        </div>
        <div  class="w-[34%] h-96 pb-24 flex flex-col rounded-xl bg-white">
          <div class="flex gap-4  mt-4 ml-8  ">
            <Icon icon="fluent-mdl2:settings" class=" mt-0.5  text-[#325CA8] text-[16px]" />
           <p class="text-[#325CA8] mt-0.5 text-[12px] " >Component</p>
             <p class="text-[#BDBDBD] mt-0.5 text-[12px] " >Page setting</p>
          </div>
        </div>
     </div>
  </div>
</template>