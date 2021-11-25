<template>
  <div class="HeadTitle">
    <!-- <img class="HeadTitle_img" src="../../../public/img/head.png" alt="" /> -->
    <div class="HeadTitle_img">
<div class="head">
      <div class="left">
        <div class="left_list" v-for="(item, index) in list" :key="index">
          {{ item.name }}
        </div>
      </div>
      <div class="cent"></div>
      <div class="right">
        <div class="right_list" @click="goLogin">
          <img @click="lookme"  @mouseenter="imgenter" @mouseleave="imgleave" class="title_img" src="../../../public/img/B.png" alt="" />登录
        </div>
        <div class="right_list" v-for="(item, index) in mylist" :key="index">
          {{ item.name }}

          <!-- <img class="k" src="../../../public/img/B.png" alt="" /> -->
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import router from '@/router/index'
// import { ElInputNumber} from 'element-plus'
// import axios from "axios";
export default defineComponent({
  name: "HeadTitle",
  props: {},
  setup() {
    const data = reactive({
      list: [
        {name: "主页",},
        {name: "番剧",},
        {name: "直播",},
        {name: "漫画",},
        {name: "我的",},
        {name: "小程序",},
      ],
      mylist: [
        { name: "登录登录" },
        { name: "登录登录" },
        { name: "登录登录" },
        { name: "登录登录" },
      ],
    });
 const methods = {
      goLogin(){
          console.log("login")
          router.push('/login')
      },
      lookme(){
        
      }
    }
    onMounted(() => {
      // axios
      //   .get("/xyz/get")
      //   .then((res) => {
      //     console.log(res.data);
      //     // data.msg = res.data
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // axios
      //   .post("/api/user")
      //   .then((res) => {
      //     console.log(res.data);
      //     // data.msg = res.data
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    });

    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>


<style src="./Title.css" long="less"  scoped >
</style> 