<template>
  <div class="Listdirectory">
    <div class="listR" @click.stop="gourl">
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        :data-url="item.gotourl"
        effect="dark"
      >
     {{ item.label }}
      </el-tag>
    </div>
    <div class="downlist">
      <div class="swip">
        <el-carousel height="220px" interval="3000" trigger="click" indicator-position="outside">
          <el-carousel-item v-for="item in elimg" :key="item">
            <img class="el_img" :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="other">
          <div class="other_a">
            <div class="swip">
        <el-carousel height="220px" interval="3000" trigger="click" indicator-position="outside">
          <el-carousel-item v-for="item in elimg" :key="item">
            <img class="el_img" :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
            <!-- 222 -->
            <!-- <a href="https://lol.qq.com/act/a20211213renamed/index.html" target="_target">英雄联盟改名</a> -->
          </div>
          <div class="other_b">
            <div class="getTime">
              <div>{{lottery_date}}</div>
              <div>第{{lottery_no}}期(<span style="color:red">当期</span>)</div>
            </div>
            <div class="ssq">
              <div style="font-size:18px;font-weight: bold;color: #E6A23C;">本期开奖：</div>
              <div class="ssq_num" v-for="item in ap" :key="item">{{item}}</div>
            </div>
            <div class="tuissq">
              <div style="font-size:18px;font-weight: bold;font-size: 14px;color:#67C23A;">当期推荐红球{{beforBall.length}}码：</div>
              <div class="tui_ball" v-for="item in beforBall" :key="item">{{item}}</div>
            </div>
            <div class="tuiTime">
              <div>第{{lottery_no+1}}期(<span style="color:red">下期</span>)</div>
            </div>
            <div class="tuissq">
              <div style="font-size:18px;font-weight: bold;font-size: 14px;color:#67C23A;">推荐红球{{redBall.length}}码：</div>
              <div class="tui_ball" v-for="item in redBall" :key="item">{{item}}</div>
            </div>
            <div class="gossq" @click="goX_ssq">
           去选号
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script >
import { defineComponent, reactive, toRefs,onMounted } from "vue";
import demo from "./Listdirectory.js";
import router from '@/router/index';
import { ssq,getStu } from "@/http/api";
export default defineComponent({
  name: "Listdirectory",

  setup() {
    const data = reactive({
      lottery_date:"",
      lottery_no:0,
      elimg: [
        "http://q.vuetitle.lwlsl.top/2b9fa82159cb4329a74c3cc08e2bb732null",
        "http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
        "http://q.vuetitle.lwlsl.top/2b9fa82159cb4329a74c3cc08e2bb732null",
        "http://q.vuetitle.lwlsl.top/1bd42c6a745540ff94cd146e2abe98ffa.png",
      ],
      items: [
        // { type: "", label: "text",goto:"text" },
        // { type: "", label: "JavaScript",goto:"javaScript_s" },
        // { type: "success", label: "Java",goto:"java_s" },
        // { type: "info", label: "Php" ,goto:"php_s"},
        // { type: "danger", label: "git" ,goto:"git_s"},
        // { type: "warning", label: "Css" ,goto:"css_s"},
        // { type: "", label: "Html",goto:"html_s" },
        // { type: "success", label: "Vue",goto:"vue_s" },
        // { type: "info", label: "SpringBoot" ,goto:"springboot_s"},
        // { type: "danger", label: "Webpack" ,goto:"webpack_s"},
        // { type: "warning", label: "React" ,goto:"react_s"},
        // { type: "", label: "node.js" ,goto:"nodejs_s"},
        // { type: "success", label: "Uniapp" ,goto:"uniapp_s"},
        // { type: "info", label: "Mysql" ,goto:"mysql_s"},
      ],
      redBall:[],
      beforBall:[],
      ap:[],
      ap2:[],
     
    });
    const methods = {
      gourl(e) {
        console.log(e.target.dataset.url)
        router.push(e.target.dataset.url)
      },
      getStu(){
         getStu().then(res=>{
           console.log(res)
           data.items=res.data
         })
      },
      goX_ssq(){
      window.open("https://datachart.500.com/ssq/")
      },
     same(aa, bb) {
				let cc = [...bb];
				for (let item in aa) {
					for (let it in cc) {
						if (aa[item] === cc[it]) {
							cc.splice(it, 1)
							// console.log(cc);
						}
					}
				}
				return cc.length < 1 ? true : false;
			},

      getssq(a, b, c, d, e, f){
        let Sumsum=demo.Sumsum(a,b,c,d,e,f)
        let arr1=demo.Sumsum(a,b,c,d,e,f).data
        let Sumvalueplustailsum= demo.Sumvalueplustailsum(a,b,c,d,e,f)
        let arr2=demo.Sumvalueplustailsum(a,b,c,d,e,f).data
        let Summinuspolespacing= demo.Summinuspolespacing(a,b,c,d,e,f)
        let arr3=demo.Summinuspolespacing(a,b,c,d,e,f).data
        let ACsumvalue= demo.ACsumvalue(a,b,c,d,e,f)
        let arr4=demo.ACsumvalue(a,b,c,d,e,f).data
        let allArr=[... new Set([...arr1,...arr2,...arr3,...arr4].sort((n1, n2) => n1 - n2))]
        return allArr


        // console.log(methods.same(allArr,JSON.parse(localStorage.getItem('Ball'))))

        // localStorage.setItem('Ball',JSON.stringify(allArr));

      }
 
    };
    onMounted(() => {
      methods.getStu()
    ssq().then(res=>{
      console.log(res)
      let obj=JSON.parse(res.data[0].ssqtext)
      data.lottery_date=obj.result.lottery_date
      data.ap=obj.result.lottery_res.split(",")
      data.lottery_no=parseInt(obj.result.lottery_no)
      let obj2=JSON.parse(res.data[1].ssqtext)
      data.ap2=obj2.result.lottery_res.split(",")
      
    }).finally(()=>{
     data.redBall=  methods.getssq(Number(data.ap[0]),Number(data.ap[1]),Number(data.ap[2]),Number(data.ap[3]),Number(data.ap[4]),Number(data.ap[5]))
     data.beforBall=methods.getssq(Number(data.ap2[0]),Number(data.ap2[1]),Number(data.ap2[2]),Number(data.ap2[3]),Number(data.ap2[4]),Number(data.ap2[5]))
    })
    
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