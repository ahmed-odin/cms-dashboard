<script setup>
import navbar from '@/components/common/navbar.vue';

</script>
<template>
  <div class="flex flex-col w-[100%] ml-6 justify-center mt-5">
   <navbar 
        width="95%"
        height="75px" 
        icon="heroicons:rectangle-stack"
        label="Pages / New Page"
        
        btnLabel="Draft"
        btn-label2="Add New"
        showBtn2
        to2="/pages/newpage/addpage/addpage2"
      />
  </div>
</template>