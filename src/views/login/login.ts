import { defineComponent ,reactive,toRefs} from 'vue';
export default defineComponent({
    name: 'login',
   
    setup(){
      const data = reactive({
          
        });
        return{
          ...toRefs(data),
        }
    }
  });