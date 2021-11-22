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
            <div class="redballyes">
              <div class="red_text">本期红球推荐{{redBall.length}}码：</div>
              <div class="red_arr">
                <div class="red_ball" v-for="item in redBall" :key="item">{{item}}</div>
                <div class="red_ball" v-for="item in redBall" :key="item">{{item}}</div>
              </div>
            </div>
          </div>
          <div class="music"></div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs,onMounted } from "vue";
import demo from "./Listdirectory";
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
      redBall:[]as any[],
      ap:[1,4,6,14,20,28],
    });
   
    console.log(demo.Sumsum(1,4,6,14,20,28).data)
    console.log(demo.Sumvalueplustailsum(1,4,6,14,20,28).data)
    console.log(demo.Summinuspolespacing(1,4,6,14,20,28).data)
    console.log(demo.ACsumvalue(1,4,6,14,20,28).data)
   
    const methods = {
      chank() {
        console.log("fskjdfhskfhs");
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
      console.log('mounted!')
     methods.getssq(data.ap[0],data.ap[1],data.ap[2],data.ap[3],data.ap[4],data.ap[5])
    //  console.log(methods.getssq(data.ap[0],data.ap[1],data.ap[2],data.ap[3],data.ap[4],data.ap[5]))
    //  data.redBall=[...methods.getssq(data.ap[0],data.ap[1],data.ap[2],data.ap[3],data.ap[4],data.ap[5])]
     console.log(data.redBall)
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