<template>
  <div class="javaScript_s">
   javascript
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'javaScript_s',
  
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
<style long="less"  scoped  src="./javaScript_s.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>
