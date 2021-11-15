import { defineComponent ,reactive,toRefs} from 'vue';
export default defineComponent({
    name: 'Listdirectory',
   
    setup(){
      const data = reactive({
          
        });
        return{
          ...toRefs(data),
        }
    }
  });