<template>
  <div class="react_s">
   react
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'react_s',
 
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
<style long="less"  scoped  src="./react_s.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>