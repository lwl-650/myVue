<template>
  <div class="player">
    <div class="left">
      <video preload="auto" controls src="http://q.vuevideo.lwlsl.top/km.mp4"></video>
    </div>
    <div class="right" @click="govideo">
      <div class="vid_item" v-for="item in vlist" :key="item.vtext">
           <img :src="item.url" data-vid="00" alt="">
           <div class="img_text" data-vid="00">
            {{item.vtext}}
           </div>
      </div>
     
      
    </div>
    

  </div>
</template>

<script>
import { defineComponent, reactive, toRefs ,getCurrentInstance, onMounted} from "vue";
import router from "@/router/index";
export default defineComponent({
  name: "alist",

  setup() {
     const { proxy  } = getCurrentInstance();
    const data = reactive({
        publicPath: process.env.BASE_URL,
        vlist:[
          {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
          {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
          {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
          {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
          {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
          {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
          {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
           {url:"http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
          vtext:"这是视频"
          },
        ]
    });
     onMounted(()=>{
       console.log(data.publicPath)
    })
    
    const methods = {
      govideo(e){
        console.log(e.target.dataset.vid)
          router.push({
            name:'videos',
            params:{
              vid:e.target.dataset.vid
            }
          })
      }
     
    };
   
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>
<style long="less"  scoped  src="./player.css">

</style>