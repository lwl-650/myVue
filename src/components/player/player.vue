<template>
  <div class="player">
    <div class="left">
      <video preload="auto" controls :src="bigUrl.vurl"></video>
    </div>
    <div class="right" @click="govideo">
      <div class="vid_item" v-for="item in vlist" :key="item.vtext">
           <img :src="item.vurl" :data-vid="item.vid" alt="">
           <div class="img_text" :data-vid="item.vid">
            {{item.vtext}}
           </div>
      </div>
     
      
    </div>
    

  </div>
</template>

<script>
import { defineComponent, reactive, toRefs ,getCurrentInstance, onMounted} from "vue";
import router from "@/router/index";
import {allVid} from "@/http/api";
export default defineComponent({
  name: "alist",

  setup() {
     const { proxy  } = getCurrentInstance();
    const data = reactive({
        publicPath: process.env.BASE_URL,
        bigUrl:"",
        vlist:[]
    });
     onMounted(()=>{
       console.log(data.publicPath)
       methods.allVid()
    })
    
    const methods = {
      allVid(){
allVid().then(res=>{
  console.log(res.data)
  data.bigUrl=res.data.shift()
  data.vlist=res.data
  console.log(res.data)
  console.log(data.bigUrl)
  console.log(data.vlist)
})
      },
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