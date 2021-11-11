
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
      list: [
        {
          name: "主页"
        },
        {
          name: "主页"
        }, {
          name: "主页"
        }, {
          name: "主页"
        }, {
          name: "主页"
        }, {
          name: "主页"
        }
      ]
    });



    onMounted(() => {
      // axios.post('/api/user')
      //   .then(res => {
      //     console.log(res)
      //     data.msg = res.data
      //   }).catch(err => {
      //     console.log(err);
      //   })

    });

    return {
      ...toRefs(data),

    };
  },
});