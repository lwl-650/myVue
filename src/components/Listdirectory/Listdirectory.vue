<template>
  <div class="Listdirectory">
     <div class="swip">
       <el-carousel interval="3000" trigger="click" >
      <el-carousel-item v-for="item in elimg" :key="item">
          <img class="el_img" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
     </div>
    <div class="listR">
       <el-tag
    v-for="item in items"
    :key="item.label" @click="chank"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </el-tag>

    </div>
 

   
  </div>
</template>


<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';
export default defineComponent({
    name: 'Listdirectory',
   
    setup(){
      const data = reactive({
          elimg:["http://q.vuetitle.lwlsl.top/2b9fa82159cb4329a74c3cc08e2bb732null",
          "http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png","http://q.vuetitle.lwlsl.top/2b9fa82159cb4329a74c3cc08e2bb732null",
          "http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",],
          items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' },
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' },
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ],
        });
        const methods={
chank(){
  console.log("fskjdfhskfhs")
}
        }
        return{
          ...toRefs(data),
          ...methods,
        }
    }
  });
</script>
<style src="./Listdirectory.css" long="less"  scoped >

    
</style> 