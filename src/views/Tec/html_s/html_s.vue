<template>
  <div class="html_s">
   html
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'html_s',
 
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
<style long="less"  scoped  src="./html_s.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>