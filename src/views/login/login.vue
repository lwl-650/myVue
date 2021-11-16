<template>
  <div class="login">
    <Title />
  <div class="take">
    <el-input v-model="username" placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    <el-button type="primary" @click="sure">登录</el-button>
    <div class="qqlogin">
      <img src="../../../public/img/qq.jpg" alt="">
      <div class="qq">QQ登录</div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs,getCurrentInstance} from "vue";
import Title from "@/components/Title/Title.vue";

import { ElMessage} from 'element-plus'
export default defineComponent({
  name: "login",
  components: {
    Title,
  },
  setup() {
    // let { proxy } = getCurrentInstance();
    const data = reactive({
      username:'zs',
      password:'123',
    });
    const methods = {
      sure(){
          console.log("login")
          // router.push('/login')
          ElMessage({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
       })
      },
      
    }
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>
<style long="less"  scoped  src="./login.css">
</style>