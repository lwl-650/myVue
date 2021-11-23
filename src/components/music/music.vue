<template>
  <div class="music">
   music
  <!--音乐播放 https://aplayer.netlify.app/docs/guide/ -->
  <!-- http://www.zgei.com/ -->
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';

export default defineComponent({
  name: 'music',
 
  setup(){
    const data = reactive({
        id: 1,
        
      });
      
      return{
        ...toRefs(data),
      }
  }
})
</script>
<style long="less"  scoped >
   .music{
       width: 300px;
       height: 200px;
       border: 1px solid red;
       position: fixed;
       bottom: 0px;
       left: 0px;
       z-index: 10;
   }
</style>