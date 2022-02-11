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
          <div class="qqlogin" @click="login">
            <img src="../../../public/img/qq.jpg" alt="" />
            <div class="qq">QQ登录</div>
          </div>
          <router-link class="linkzhu" to="/">去注册...</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  getCurrentInstance,
  onMounted,
} from "vue";
import Title from "@/components/Title/Title.vue";
import router from "@/router/index";
import { login, qqlogin } from "@/http/api";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
export default defineComponent({
  name: "login",
  components: {
    Title,
  },
  setup() {
    let proxy = getCurrentInstance();
    let store = useStore();
    const data = reactive({
      username: "zs",
      password: "123",
    });
    onMounted(() => {
      if (methods.GetQueryString("code") != null) {
        qqlogin({
          code: methods.GetQueryString("code"),
          redirect_uri: "https://www.lwlsl.top/login",
        }).then((res) => {
          console.log(res);
          if (res.code == 0) {
            localStorage.setItem("user", JSON.stringify(res.data.data));
            localStorage.setItem("token", res.data.token);
            ElMessage({
              message: "登录成功",
              type: "success",
            });
          } else {
            ElMessage.error("失败");
          }
        });
      }
    });
    const methods = {
      GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      },

      login() {
        //  https://www.lwlsl.top/login
        //  console.log(encodeURIComponent())
        //  window.open("http://www.lwlsl.top/login")

        window.open(
          "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101990958&redirect_uri=http%3A%2F%2Ftext.lwlsl.top%2Flogin&state=state"
        );
      },
      sure() {
        // console.log("login");
        console.log(proxy);
        login({ username: data.username, password: data.password }).then(
          (res) => {
            console.log(res);
            if (res.code === 0) {
              ElMessage({
                message: res.msg,
                type: "success",
              });
              router.push("/");
            } else {
              ElMessage.error("失败");
            }
          }
        );
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