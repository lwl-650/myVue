<template>
  <div class="foot">
    <div class="foot_bottom">
      <div class="box_bto">
        <div class="left">
          ICP备案：<span @click="goicp">蜀ICP备2021027146号-1</span>
        </div>
        <div class="cen"></div>
        <div class="right">
          蜀公网安备<span @click="gogong">51070302110490</span>号
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "foot",

  setup() {
    const data = reactive({
      id: 1,
    });
    const mothed = {
      goicp() {
        window.location.href = "https://beian.miit.gov.cn/";
      },
      gogong() {
        window.location.href =
          "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=" +
          51070302110490;
      },
    };
    return {
      ...toRefs(data),
      ...mothed,
    };
  },
});
</script>
<style lang="less" scoped>
.foot {
  margin: 0 auto;
  margin-bottom: 0px;
  width: 100%;
  min-width: 1300px;
  height: 260px;
  // border: 1px solid red;
  position: relative;
  background: #f6f9fa;
  .foot_bottom {
    width: 100%;
    height: 50px;
    //  border: 1px solid red;
    position: absolute;
    bottom: 0px;
    background: #222222;

    .box_bto {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;
      width: 700px;
      margin: 0 auto;
      .cen {
        border: 1px solid gray;
        height: 60%;
        margin: 0 20px;
      }
      span:hover {
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>