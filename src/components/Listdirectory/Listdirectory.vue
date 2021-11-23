<template>
  <div class="Listdirectory">
    <div class="listR">
      <el-tag
        v-for="item in items"
        :key="item.label"
        @click="gourl(item.goto)"
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
          <div class="other_a"></div>
          <div class="other_b">
            <div class="getTime">
              <div>2021.11.22</div>
              <div>第122期(当期)</div>
            </div>
            <div class="ssq">
              <div style="font-size:18px;font-weight: bold;">本期开奖：</div>
              <div class="ssq_num" v-for="item in ap" :key="item">{{item}}</div>
            </div>
            <div class="tuiTime">
              <div>第123期(下期)</div>
            </div>
            <div class="tuissq">
              <div style="font-size:18px;font-weight: bold;font-size: 14px;">推荐红球{{redBall.length}}码：</div>
              <div class="tui_ball" v-for="item in redBall" :key="item">{{item}}</div>
              <div class="tui_ball" v-for="item in redBall" :key="item">{{item}}</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs,onMounted } from "vue";
import demo from "./Listdirectory";
import router from '@/router/index';
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
        { type: "", label: "text",goto:"text" },
        { type: "", label: "JavaScript",goto:"javaScript_s" },
        { type: "success", label: "Java",goto:"java_s" },
        { type: "info", label: "Php" ,goto:"php_s"},
        { type: "danger", label: "Git" ,goto:"git_s"},
        { type: "warning", label: "Css" ,goto:"css_s"},
        { type: "", label: "Html",goto:"html_s" },
        { type: "success", label: "Vue",goto:"vue_s" },
        { type: "info", label: "SpringBoot" ,goto:"springboot_s"},
        { type: "danger", label: "Webpack" ,goto:"webpack_s"},
        { type: "warning", label: "React" ,goto:"react_s"},
        { type: "", label: "node.js" ,goto:"nodejs_s"},
        { type: "success", label: "Uniapp" ,goto:"uniapp_s"},
        { type: "info", label: "Mysql" ,goto:"mysql_s"},
      ],
      redBall:[]as any[],
      ap:[1,4,6,14,20,28,2],
    });
   
    // console.log(demo.Sumsum(1,4,6,14,20,28).data)
    // console.log(demo.Sumvalueplustailsum(1,4,6,14,20,28).data)
    // console.log(demo.Summinuspolespacing(1,4,6,14,20,28).data)
    // console.log(demo.ACsumvalue(1,4,6,14,20,28).data)
   
    const methods = {
      gourl(url:string) {
        router.push(url)
      },
      getssq(a: any, b: any, c: any, d: any, e: any, f: any){
        let Sumsum=demo.Sumsum(a,b,c,d,e,f)
        let arr1=demo.Sumsum(a,b,c,d,e,f).data
        let Sumvalueplustailsum= demo.Sumvalueplustailsum(a,b,c,d,e,f)
        let arr2=demo.Sumvalueplustailsum(a,b,c,d,e,f).data
        let Summinuspolespacing= demo.Summinuspolespacing(a,b,c,d,e,f)
        let arr3=demo.Summinuspolespacing(a,b,c,d,e,f).data
        let ACsumvalue= demo.ACsumvalue(a,b,c,d,e,f)
        let arr4=demo.ACsumvalue(a,b,c,d,e,f).data
        // let newArr=[...arr1,...arr2,...arr3,...arr4].sort((n1, n2) => n1 - n2)
        let allArr=[... new Set([...arr1,...arr2,...arr3,...arr4].sort((n1, n2) => n1 - n2))]
        // console.log(newArr)
        // console.log(allArr)
        // return allArr
        data.redBall=allArr
      }
 
    };
    onMounted(() => {
      // console.log('mounted!')
     methods.getssq(data.ap[0],data.ap[1],data.ap[2],data.ap[3],data.ap[4],data.ap[5])
    //  console.log(methods.getssq(data.ap[0],data.ap[1],data.ap[2],data.ap[3],data.ap[4],data.ap[5]))
    //  data.redBall=[...methods.getssq(data.ap[0],data.ap[1],data.ap[2],data.ap[3],data.ap[4],data.ap[5])]
    //  console.log(data.redBall)
    })
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>
<style src="./Listdirectory.css" long="less"  scoped >
</style> 