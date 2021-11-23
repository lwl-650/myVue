<template>
  <div class="css_s">
   css
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'css_s',
 
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
<style long="less"  scoped  src="./css_s.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>
