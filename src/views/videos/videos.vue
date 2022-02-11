<template>
  <div class="videos">
    <Title />
    <div class="video_box">
      <div class="video_vid">
        <video
          preload="auto"
          controls
          src="http://q.vuevideo.lwlsl.top/km.mp4"
        ></video>

        <div class="com">
          <div class="sendtext" style="margin-bottom: 30px; padding-top: 20px">
            <img src="../../../public/img/B.png" alt="" />
            <el-input
              class="textarea"
              style="width: 750px"
              v-model="textarea"
              :rows="3"
              type="textarea"
              placeholder="请输入..."
            />
            <el-button
              style="width: 100px; height: 53px"
              type="primary"
              @click="sendR()"
              >发送</el-button
            >
          </div>
          <!-- video评论 -->
          <div class="getText" @click="delR">
            <div class="textlist" v-for="(item, index) in replys" :key="index">
              <img :src="item.avatar" alt="" />
              <div class="textlist_r">
                <div class="textname">{{ item.name}}</div>
                <div class="texts">
                  {{ item.text }}
                </div>
                <div class="textTime">
                  <span>{{ item.rtime }}</span>
                  <img src="../../../public/img/B.png" alt="" />
                  <span class="span2" @click.stop="reply(item,index)">回复</span>
                  <div class="del" :data-delid="item.id">删除</div>
                </div>

                <div
                  class="textlist_ans"
                  v-for="(ans_item, k) in item.ans"
                  :key="k"
                >
                  <img :src="ans_item.avatar" alt="" />
                  <div class="textlist_r">
                    <div class="textname">
                      {{ ans_item.name }} :&nbsp;&nbsp;&nbsp;
                      <span>{{ ans_item.text }}</span>
                    </div>
                    <div class="textTime">
                      <span>{{ ans_item.rtime }}</span>
                      <img src="../../../public/img/B.png" alt="" />
                      <span class="span2" @click.stop="reply(ans_item,index, k)"
                        >回复</span
                      >
                      <div class="del">删除</div>
                    </div>

                    <div
                      class="sendtext"
                      v-if="ans_item.showReply"
                      style="margin-top: 5px;width:820px"
                    >
                      <img src="../../../public/img/B.png" alt="" />
                      <el-input
                        class="textarea"
                        style="width: 660px"
                        v-model="textarea_ans"
                        :rows="2"
                        type="textarea"
                        :placeholder="'回复'+replyPlaceholder+':'"
                      />
                      <el-button
                        style="width: 100px; height: 53px"
                        type="primary"
                        >发送</el-button
                      >
                    </div>
                  </div>
                </div>

                <div
                  class="sendtext"
                  v-if="item.showReply"
                  style="margin-top: 5px;width:870px"
                >
                  <img src="../../../public/img/B.png" alt="" />
                  <el-input
                    class="textarea"
                    style="width: 680px"
                    v-model="textarea_re"
                    :rows="2"
                    type="textarea"
                    :placeholder="'回复'+replyPlaceholder+':'"
                  />
                  <el-button style="width: 100px; height: 53px" type="primary"
                    >发送</el-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video_vid_r"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, nextTick } from "vue";
import router from "@/router/index";
import Title from "@/components/Title/Title.vue";
import { ElMessage } from "element-plus";
import {
  findByVid,
  getByVid,
  findAllAns,
  addReply,
  delReply,
} from "@/http/api";
export default defineComponent({
  name: "videos",
  components: {
    Title,
  },
  setup() {
    // q.vuetitle.lwlsl.top
    const data = reactive({
      id: 1,
      vid: 1,
      textarea: "",
      textarea_re: "",
      textarea_ans: "",
      showReply: false,
      replys: [],
      replyPlaceholder:"",
      
    });
    onMounted(() => {
      // console.log(router.currentRoute.value.params.vid);
      // data.vid=router.currentRoute.value.params.vid
      methods.getAll();
      // console.log(data.vid)
      // methods.getByVids()
    });
    const methods = {
      reply(item,index, k) {
        console.log(item)
        data.replyPlaceholder=item.name
        if (k == undefined) {
          console.log(index, k);
          data.replys[index].showReply
            ? (data.replys[index].showReply = false)
            : (data.replys[index].showReply = true);
        } else {
          console.log(index, k);
          data.replys[index].ans[k].showReply
            ? (data.replys[index].ans[k].showReply = false)
            : (data.replys[index].ans[k].showReply = true);
        }
      },
      sendR() {
        if (data.textarea != "") {
          let obj = {
            videos_id: data.vid,
            user_id: 2,
            text: data.textarea,
            last_id: 1,
          };
          addReply(
            obj,
         ).then((res) => {
            console.log(data.replys);
            if (res.code == 0) {
              console.log(res.data.id)
              obj.rtime = "刚刚";
              obj.id=res.data.id
              data.replys.unshift(obj);
              ElMessage({
                message: "发送成功",
                type: "success",
              });
              data.textarea = "";
            } else {
              ElMessage.error("失败");
            }
          });
        } else {
          ElMessage.error("不能为空");
        }
        console.log(this.vid);
      },
      delR(e) {
        console.log(e.target.dataset.delid);
        if (e.target.dataset.delid == undefined) return;
        delReply({ id: e.target.dataset.delid }).then((res) => {
          console.log(res);
          if (res.code == 0) {
            data.replys.forEach((item, index) => {
              if (item.id == e.target.dataset.delid)
                data.replys.splice(index, 1);
            });
            ElMessage({
              message: "删除成功",
              type: "success",
            });
          }
        });
        console.log("del");
      },
      findByVids() {
        return new Promise((resolve, reject) => {
          findByVid({ vid: data.vid }).then((res) => {
            // 视频
            resolve(res);
          });
        });
      },
      getA(item) {
        // 必须promise
        return new Promise((resolve) => {
          findAllAns({ rid: item.id }).then((res) => {
            item.ans = res.data;
            resolve(item);
          });

          // setTimeout(()=>{
          //    item.a="4546456456"
          //  },2000)
        });
      },
      async forE(res, resolve) {
        for (var item of res.data) {
          // console.log(item);
          await methods.getA(item);
        }
        // 也可以
        // for (let i = 0; i < res.data.length; i++) {
        //   await methods.getA(res.data[i]);
        // }
        // console.log("打印");
        resolve(res);
      },
      getByVids() {
        return new Promise((resolve, reject) => {
          getByVid({ vid: data.vid }).then((res) => {
            methods.forE(res, resolve);
          });
        });
      },
      getAll() {
        // 两种方式
        Promise.all([methods.findByVids(), methods.getByVids()]).then((res) => {
          data.replys = res[1].data;
          data.replys.forEach((item) => {
            item.showReply = false;
          });
          //  console.log(data.reply)
        });
        // 直接调api
        // Promise.all([
        //   findByVid({ vid: data.vid }),
        //   getByVid({ vid: data.vid }),
        // ]).then((res) => {
        //   console.log(res);
        // });
      },
    };
    return {
      ...toRefs(data),
      ...methods,
    };
  },
});
</script>
<style long="less"  scoped  src="./videos.css">
</style>
