<template>
  <div class="index">
   <Title/>
   <Listdirectory/>
  <button type="default" @click="btn"> Button </button>
  </div>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs} from 'vue';
import Title from "@/components/Title/Title.vue";
import router from '@/router/index'
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
      const method={
        btn(){
            router.push("/css_s")
        }
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
