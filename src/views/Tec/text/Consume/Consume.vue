<template>
  <div class="Consume">
  Consume
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'Consume',
 
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
<style long="less"  scoped >
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>