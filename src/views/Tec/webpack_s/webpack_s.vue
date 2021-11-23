<template>
  <div class="webpack_s">
   webpack
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'webpack_s',
 
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
<style long="less"  scoped  src="./webpack_s.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>