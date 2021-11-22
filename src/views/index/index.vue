<template>
  <div class="index">
   <Title/>
   <Listdirectory/>
  
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';
import Title from "@/components/Title/Title.vue";
import Listdirectory from "@/components/Listdirectory/Listdirectory.vue";
export default defineComponent({
  name: 'index',
  components: {
    Title,
    Listdirectory,
  },
  setup(){
    const data = reactive({
        id: 1,
        name: "zs",
        age: 12,
        msg: "这是onMounted",
        btn: "",
      });
      
      return{
        ...toRefs(data),
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
