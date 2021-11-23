<template>
  <div class="nodejs_s">
   node.js
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'nodejs_s',
 
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
<style long="less"  scoped  src="./nodejs_s.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>