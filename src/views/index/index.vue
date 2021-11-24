<template>
  <div class="index">
   <Title/>
   <Listdirectory/>
   <!-- <Music/> -->
  <Foot/>
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue'
import router from '@/router/index'
import Title from "@/components/Title/Title.vue"
import Music from "@/components/music/music.vue"

import Foot from "@/components/foot/foot.vue"
import Listdirectory from "@/components/Listdirectory/Listdirectory.vue"
export default defineComponent({
  name: 'index',
  components: {
    Title,
    Listdirectory,
    Music,
    Foot,
  },
  setup(){
    const data = reactive({
        id: 1,
        name: "zs",
        age: 12,
        msg: "这是onMounted",
      
      });
      const method={
       
      }
      return{
        ...toRefs(data),
        ...method,
      }
  }
});
</script>
<style long="less"  scoped  src="./index.css">
   /* @import url("./index.less"); */
   /* h1{
     color: tomato;
   } */
</style>
