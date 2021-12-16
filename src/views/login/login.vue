<template>
  <div class="login">
    <Title />
    <div class="take">
      <div class="login">
        <div class="islogin">登录</div>
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <el-input
          style="margin-top: 12px"
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
        <el-button
          style="margin-top: 12px; width: 218px"
          type="primary"
          @click="sure"
          >登录</el-button
        >
        <div class="gozhu">
          <div class="qqlogin">
            <img src="../../../public/img/qq.jpg" alt="" />
            <div class="qq">QQ登录</div>
          </div>
          <router-link class="linkzhu" to="/">去注册...</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, getCurrentInstance } from "vue";
import Title from "@/components/Title/Title.vue";
import router from "@/router/index";
import { login } from "@/http/api";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "login",
  components: {
    Title,
  },
  setup() {
    let  proxy  = getCurrentInstance();
    const data = reactive({
      username: "zs",
      password: "123",
    });
    const methods = {
      sure() {
        // console.log("login");
console.log(proxy)
        login({username:data.username,password:data.password}).then((res:any) => {
        console.log(res);
        if (res.code === 0) {
       ElMessage({
          message: res.msg,
          type: "success",
        });
        router.push('/')
        } else {
         ElMessage({
          message: res.msg,
          type: "error",
        });
        }
      })
        
        
      },

      // console.log(qs.stringify(data))
      
    };
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>
<style long="less"  scoped  src="./login.css">
</style>