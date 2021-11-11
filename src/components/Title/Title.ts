
import {
    defineComponent,
    reactive,
    toRefs,
    onMounted,
  } from "vue";
  
  // import { ElInputNumber} from 'element-plus'
  import axios from 'axios'
export default defineComponent({
    name: "HeadTitle",
    props: {},
    setup() {
  
      const data = reactive({
        id: 1,
        name: "zs",
        age: 12,
        msg: "这是onMounted",
        btn: "",
      });
     
  
     
      onMounted(() => {
       axios.post('/api/user')
        .then(res=>{
          console.log(res)
          data.msg=res.data
        }).catch(err=>{
         console.log(err);
      })
  
      });
  
      return {
        ...toRefs(data),
        
      };
    },
  });