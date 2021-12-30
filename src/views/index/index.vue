<template>
  <div class="index">
   <Title/>
   <Listdirectory/>
   <!-- <Music/> -->
   <Player></Player>
 <Alist>
    <template #aurl="slotProps">
       <el-tag style="cursor: pointer" :data-url="slotProps.item.url" :type="slotProps.item.type">
         {{slotProps.item.title}}</el-tag>
     </template>
 </Alist>




  <Foot/>
  </div>
</template>

<script>
import { defineComponent ,reactive,toRefs,onMounted} from 'vue'
// import router from '@/router/index'
import Title from "@/components/Title/Title.vue"
import Music from "@/components/music/music.vue"
import Alist from "@/components/alist/alist.vue"
import Foot from "@/components/foot/foot.vue"
import Player from "@/components/player/player.vue"
import Listdirectory from "@/components/Listdirectory/Listdirectory.vue"
export default defineComponent({
  name: 'index',
  components: {
    Title,
    Listdirectory,
    Music,
    Foot,
    Alist,
    Player
  },
  setup(){
    const data = reactive({
        id: 1,
        name: "zs",
        age: 12,
        msg: "这是onMounted",
        urllist: [],
      
      });
    onMounted(()=>{
    })
      const methods={
     
      }
      return{
        ...toRefs(data),
        ...methods,
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
