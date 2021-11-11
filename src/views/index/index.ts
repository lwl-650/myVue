import { defineComponent ,reactive,toRefs} from 'vue';
import Title from "@/components/Title/Title.vue";

export default defineComponent({
  name: 'index',
  components: {
    Title,
    
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