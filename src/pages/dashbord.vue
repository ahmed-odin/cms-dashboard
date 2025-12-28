<script setup>
import navbar from '../components/common/navbar.vue';
import { Icon } from "@iconify/vue";
import Input from '../components/common/input.vue';
import Button from '../components/common/button.vue';
</script>
<template>
  <!--main nav-->
    <div class="flex ml-6  flex-col ">
      <div class=" w-[95%] mt-5 mb-5">
         <navbar class=""
         width=""
         height="55px"
         label="Dashbord"
         icon="material-symbols:dashboard-outline"
          />
      </div>
      <!--activity card-->
      <div class="w-[95%] flex justify-evenly items-center h-44 rounded-lg bg-white  ">
        <div class="flex-col mb-9 ">
          <div class="flex gap-3 ">
            <div class="bg-blue-100 rounded-full p-1 ">
               <Icon icon="ic:round-web" class=""  style="color: #325CA8" />
            </div>
           <p class="text-[#325CA8] mt-1 text-[12px]" >Website Number</p>
          </div>
          <div class="flex mt-5 text-3xl  gap-4 ml-5">
              <h1>1.5K</h1>
              <img class="rounded-full mt-2.5 w-5 h-5" src="../assets/imges/trending_up.png" alt="">
          </div>
        </div>
        <div class="flex-col mb-9 ">
          <div class="flex gap-3 ">
            <div class="bg-blue-100 rounded-full p-1 ">
               <Icon icon="ic:round-web" class=""  style="color: #325CA8" />
            </div>
           <p class="text-[#325CA8] mt-1 text-[12px]" >Website Active</p>
          </div>
          <div class="flex mt-5 text-3xl gap-4 ml-5">
              <h1>100</h1>
              <img class="rounded-full   mt-2.5 w-5 h-5" src="../assets/imges/trending_down.png" alt="">
          </div>
        </div>
        <div class="flex-col mb-9 ">
          <div class="flex gap-3 ">
            <div class="bg-blue-100 rounded-full p-1 ">
               <Icon icon="ic:round-web" class=""  style="color: #325CA8" />
            </div>
           <p class="text-[#325CA8] mt-1 text-[12px]" >Website Inactive</p>
          </div>
          <div class="flex mt-5 text-3xl gap-4 ml-5">
              <h1>1.5K</h1>
              <img class="rounded-full mt-2.5 w-5 h-5" src="../assets/imges/trending_up.png" alt="">
          </div>
        </div>
      </div>
      <!---persentges-->
      <div class="flex gap-7 mt-5">
        <div class="w-[44%] flex-col h-72 rounded-lg  bg-white">
          <div class="ml-5 mt-3 flex flex-col gap-4">
             <p class="text-black text-[14px] ">Monthly Website Number</p>
             <div class="flex flex-row gap-3">
              <h1 class="text-3xl">1.3K</h1>
              <div class="bg-[#F2F2F2] w-16 rounded-full gap-1 flex justify-center items-center">
               <p>230</p>
               <img class="w-5 h-5" src="../assets/imges/trending___up.png" alt=""> 
              </div>
             </div>
             <p class="text-[#8D9092] text-[12px]">Current Month</p>
             <img class="w-80 ml-6" src="../assets/imges/Frame 15.png" alt="">
          </div>
       
        </div>
        <div class="w-[48%] flex-col  h-72 rounded-lg bg-white">
         <div class="ml-5 mt-3 flex flex-col gap-1">
             <p class="text-black text-[14px] ">Quick draft</p> 
             <div class="flex flex-col gap-0.5">
              <Input class="inputclass pl-2  rounded-xl text-[12px] " type="text" placeholder="Title" />
              <Input class="inputclass2 pl-2  text-[12px] rounded-xl " type="text" placeholder="Whats on your mind" />
              <Button 
                  label="Save Draft" 
                  width="100px" 
                  height="35px" 
                  borderRadius="12px"
                   
                />
                <hr class="mt-3">
               <p class="text-[11px] text-[#4F4F4F] mt-0.5">Your Recent Drafts</p>
               <div class="flex mt-1 gap-1  ">
                <div class="bg-[#325CA8] w-2 h-2 rounded-full mb-2 " ></div>
                <p class=" text-[8px] text-[#4F4F4F] underline-offset-1 ml-0.5  ">Test Draft</p>
               </div>
             </div>
          </div>
       
        </div>
        
      </div>
    </div>
    
</template>
<style scoped>
  .inputclass{
    background-color: #EDEFEF ;
    width: 95%;
    height: 34px;
    border-radius: 14px;
    
  }
  .inputclass2{
    background-color: #EDEFEF ;
    width: 95%;
    height: 85px;
    padding-bottom:55px;

  }
</style>