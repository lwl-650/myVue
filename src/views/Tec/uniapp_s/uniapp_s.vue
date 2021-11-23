<template>
  <div class="uniapp_s">
   uni-app
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'uniapp_s',
 
  setup(){
    const data = reactive({
        id: 1,
        
      });
      
      return{
        ...toRefs(data),
      }
  }
});
</script>
<style long="less"  scoped  src="./uniapp_s.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>