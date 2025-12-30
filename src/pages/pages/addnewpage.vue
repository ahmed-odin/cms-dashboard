<script setup>
  import navbar from '@/components/common/navbar.vue';
  import { Icon } from '@iconify/vue';
  import Input from '@/components/common/input.vue';
</script>
<template>
    <div class="flex flex-col  ml-6 mt-5"> 
      <div class="m-2  mb-5">
      <navbar 
        width="96%"
        height="55px" 
        icon="heroicons:rectangle-stack"
        label="Pages / New Components"
        btnLabel="Draft"
        btn-label2="Publish"
        showBtn2
       
      />
    </div>
    <div class="flex ">
      <div class="w-[50%] h-fit ml-3 bg-white rounded-xl flex flex-col  ">
        <div class="flex justify-between ml-6 mt-3 ">
         <p class="text-[#325CA8] text-[15px] flex gap-1 font-medium"> 
            <Icon icon="heroicons:rectangle-stack" class="mt-0.5 text-[18px]" />  
            New Components
          </p>
          <Icon icon="material-symbols:open-in-full-rounded" class="mt-1 mr-6 text-[#757575] text-[16px] cursor-pointer" />
        </div>
        <div class="ml-6 flex flex-col pb-5 gap-2">
          <Input class="w-[60%] h-[50px] rounded-lg  text-black" 
          placeholder="Component Name"/> 
          <div class="flex gap-1" >
             <Icon icon="iconoir:html5" class="mt-0.5 text-[14px]" />
             <p class="text-[14px] text-black font-semibold">HTML</p>
             <Icon icon="ep:arrow-up" class="mt-0.5 text-[14px] text-black" />
          </div>  
          <Input class="w-[60%] h-[100px] rounded-lg   text-black" 
          /> 
          <div class="flex gap-1" >
             <Icon icon="hugeicons:css-3" class="mt-0.5 text-[14px]" />
             <p class="text-[14px] text-black font-semibold">CSS</p>
             <Icon icon="ep:arrow-down" class="mt-0.5 text-[14px] text-black" />
          </div> 
          <div class="flex gap-1" >
             <Icon icon="teenyicons:javascript-outline" class="mt-0.5 text-[14px]" />
             <p class="text-[14px] text-black font-semibold">Javascribt</p>
             <Icon icon="ep:arrow-down" class="mt-0.5 text-[14px] text-black" />
          </div> 
        </div>    
      </div>
      <div class="w-[43%] h-fit ml-3 bg-white rounded-xl flex flex-col pb-8 ">
        <div class="flex justify-between ml-6 mt-3 ">
         <p class="text-[#325CA8] text-[15px] flex gap-1 font-medium"> 
            <Icon icon="mingcute:video-line" class="mt-0.5 text-[18px]" />  
            Preview
          </p>
          <Icon icon="material-symbols:open-in-full-rounded" class="mt-1 mr-6 text-[#757575] text-[16px] cursor-pointer" />
        </div>
        <div class=" w-[95%] ml-3 mt-2 p-6 h-56 bg-white border  border-gray-200 rounded-2xl shadow-sm ">
            <div class="flex flex-col items-center gap-1 ">
              <img src="/src/assets/imges/Avatar.png" class="w-20" alt="">
              <h1 class="">CARD NAME</h1>
              <p class="text-[12px] text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
      </div>
    </div>
    <div class="w-[95%] flex flex-col mt-5 ml-2 rounded-lg bg-white h-52">
        <div class="flex justify-between mt-4">
          <div class="flex ml-4">
            <Icon icon="simple-line-icons:arrow-right" class="mt-1 text-[#325CA8]  text-[16px] cursor-pointer" />    <p class="text-[#325CA8] text-[15px]  flex gap-1 font-medium">  
            _  Console
              </p>
            </div>
           
          <Icon icon="material-symbols:open-in-full-rounded" class="mt-1 mr-6 text-[#757575] text-[16px] cursor-pointer" />
        </div>
         
              <Input class="w-[95%] ml-5 h-[70%] mt-4 rounded-xl  bg-[#F5F5F5]"/>
          
    </div>
    </div>
</template>