<template>
  <div class="Listdirectory">
    <div class="listR">
      <el-tag
        v-for="item in items"
        :key="item.label"
        @click="chank"
        :type="item.type"
        effect="dark"
      >
        {{ item.label }}
      </el-tag>
    </div>
    <div class="downlist">
      <div class="swip">
        <el-carousel interval="3000" trigger="click">
          <el-carousel-item v-for="item in elimg" :key="item">
            <img class="el_img" :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="other">
          <div class="ssq">
            <div class="ssq_num">
              <div class="num_a">01</div>
              <div class="num_a">02</div>
              <div class="num_a">03</div>
              <div class="num_a">04</div>
              <div class="num_a">05</div>
              <div class="num_a">06</div>
              <div class="num_a">07</div>
            </div>
          </div>
          <div class="music"></div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Listdirectory",

  setup() {
    const data = reactive({
      elimg: [
        "http://q.vuetitle.lwlsl.top/2b9fa82159cb4329a74c3cc08e2bb732null",
        "http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
        "http://q.vuetitle.lwlsl.top/2b9fa82159cb4329a74c3cc08e2bb732null",
        "http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
      ],
      items: [
        { type: "", label: "JavaScript" },
        { type: "success", label: "Java" },
        { type: "info", label: "Php" },
        { type: "danger", label: "Git" },
        { type: "warning", label: "Css" },
        { type: "", label: "Html" },
        { type: "success", label: "Vue" },
        { type: "info", label: "SpringBoot" },
        { type: "danger", label: "Webpack" },
        { type: "warning", label: "React" },
        { type: "", label: "node.js" },
      ],
    });
    const methods = {
      chank() {
        console.log("fskjdfhskfhs");
      },
    };
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>
<style src="./Listdirectory.css" long="less"  scoped >
</style> 