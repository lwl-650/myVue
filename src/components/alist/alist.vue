<template>
  <div class="alist">
    <div class="left_url">
      <div
        class="url_list"
        v-for="(item, index) in urllist"
        :key="index"
        @click.stop="goOut(item.url)"
      >
        {{ item.title }}
       

    
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "alist",

  setup() {
    const data = reactive({
      id: 1,
      urllist: [
        { title: "gitee", url: "https://gitee.com/" },
        { title: "elementUI", url: "https://element.eleme.cn/2.0/#/zh-CN" },
        { title: "bootstrap", url: "https://www.bootcss.com/" },
        { title: "聚合api", url: "https://www.juhe.cn/" },
        { title: "bilibili", url: "https://www.bilibili.com/" },
      ],
    });
    const methods = {
      goOut(url) {
        window.open(url);
      },
    };
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>
<style long="less"  scoped  src="./alist.css">
/* @import url("./index.less"); */
/* h1{
     color: tomato;
   } */
</style>