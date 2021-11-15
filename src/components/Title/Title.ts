
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
          name: "番剧"
        }, {
          name: "直播"
        }, {
          name: "漫画"
        }, {
          name: "我的"
        }, {
          name: "小程序"
        }
      ]
    });



    onMounted(() => {
      axios.get('/xyz/get')
        .then(res => {
          console.log(res.data)
          // data.msg = res.data
        }).catch(err => {
          console.log(err);
        })
        axios.post('/api/user')
        .then(res => {
          console.log(res.data)
          // data.msg = res.data
        }).catch(err => {
          console.log(err);
        })

    });

    return {
      ...toRefs(data),

    };
  },
});