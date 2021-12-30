<template>
  <div class="videos">
      <Title/>
   <div class="video_box">
      <div class="video_vid">
          <video  preload="auto"  controls src="http://q.vuevideo.lwlsl.top/km.mp4"></video>
      </div>
   </div>
  
  </div>
</template>

<script>
import { defineComponent ,onMounted,reactive,toRefs} from 'vue';
import router from "@/router/index";
import Title from "@/components/Title/Title.vue"
export default defineComponent({
  name: 'videos',
  components: {
    Title,
  },
  setup(){

    const data = reactive({
        id: 1,
        
      });
    onMounted(()=>{
        console.log(router.currentRoute.value.params.vid)
    })
      return{
        ...toRefs(data),
      }
  }
});
</script>
<style long="less"  scoped  src="./videos.css">

</style>
