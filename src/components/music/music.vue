<template>
  <div class="music" ref="goodInfo">
    <!--音乐播放 https://aplayer.netlify.app/docs/guide/ -->
    <!-- http://www.zgei.com/ -->
    <!-- http://q.lwlsl.lwlsl.top/star.mp3 -->

    <audio
      ref="audio"
      @timeupdate="updata"
      @durationchange="durationchange"
      @seeked="seeked"
      preload
      controls
    >
      <source :src="musicList[0].musrc" type="audio/mp3" />
    </audio>
    <div class="bof">
      <img :src="musicList[0].mutitle" alt="" />
      <div class="right">
        <div class="right_a">
          <div class="title">{{musicList[0].muname}}</div>
          <div class="auto">{{musicList[0].muauto}}</div>
        </div>
        <div class="right_b">
          <el-progress
            style="width: 120px"
            :percentage="num"
            :text-inside="true"
            :stroke-width="5"
          ></el-progress>
          <div class="time">{{ ntime }}/{{ ztime }}</div>
        </div>
        <div class="right_c"></div>
        <el-button style="border:1px solid red;display:inline-block;font-size:16px;" class="bttn" size="mini" type="danger" icon="el-icon-caret-left" circle></el-button>
        <!-- <el-button style="border:1px solid red;display:inline-block;font-size:16px;" class="bttn" size="mini" type="danger" icon="el-icon-video-pause" circle></el-button> -->
        <el-button @click="play" style="border:1px solid red;display:inline-block;font-size:16px;" class="bttn" size="mini" type="danger" icon="el-icon-video-play" circle></el-button>
        <el-button style="border:1px solid red;display:inline-block;font-size:16px;" class="bttn" size="mini" type="danger" icon="el-icon-caret-right" circle></el-button>
        <el-button style="border:1px solid red;display:inline-block;font-size:16px;" class="bttn" size="mini" type="warning" icon="el-icon-refresh-right" circle></el-button>
        <el-button style="border:1px solid red;display:inline-block;font-size:16px;" class="bttn" size="mini" type="danger" icon="el-icon-s-operation" circle></el-button>
      </div>
     
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";

export default defineComponent({
  name: "music",

  setup() {
    let goodInfo = ref<null | HTMLElement>(null);
    const data = reactive({
      id: 1,
      audio: (<null | HTMLElement>null) as HTMLAudioElement,
      num: 0,
      ztime: <null | number | string>null,
      ntime: "00:00",
      znum: <null | number | string>null,
      musicList:[
        {
          musrc:"http://q.lwlsl.lwlsl.top/star.mp3",
          mutitle:"../../../public/img/B.png",
          muname:"lalala",
          muauto:"123"
        }
      ],
    });
    onMounted(() => {});
    const method = {
      updata() {
        // console.log("播放");
        // data.audio.duration; //获取总播放时间
        // data.audio.currentTime; //获取播放进度
        // console.log(data.audio.currentTime); //控制台显示
        console.log(data.audio.currentTime / (<number>data.znum / 100));
        data.znum = data.audio.duration;
        data.num = data.audio.currentTime / (<number>data.znum / 100);
        let nmin: any = Math.floor((data.audio.currentTime / 60) << 0);
        let nsec: any = Math.floor(data.audio.currentTime % 60);
        if (nmin < 10) nmin = "0" + nmin;
        if (nsec < 10) nsec = "0" + nsec;
        //  console.log(min + ':' + sec);
        data.ntime = nmin + ":" + nsec;
      },
      play() {
        data.audio.play();
      },
      seeked() {
        // data.audio.seeked()
        // console.log(data.audio.currentTime);
      },
      durationchange() {
        data.znum = data.audio.duration;
        let zmin: any = Math.floor((<number>data.znum / 60) << 0);
        let zsec: any = Math.floor(<number>data.znum % 60);
        if (zmin < 10) zmin = "0" + zmin;
        if (zsec < 10) zsec = "0" + zsec;
        data.ztime = zmin + ":" + zsec;
        
        console.log(data.audio.volume,233)
      },
    };
    return {
      ...toRefs(data),
      ...method,
      goodInfo,
    };
  },
});
</script>
<style scoped lang="less">
.music {
  width: 300px;
  height: 200px;
  border: 1px solid red;
  background: #fff;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 10;
  
  .bof {
    width: 300px;
    height: 100px;
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid red;
    }
    .right {
      width: 200px;
      height: 100px;
      border: 1px solid red;
      .right_a {
        width: 200px;
        height: 30px;
        border: 1px solid red;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        
      }
      .right_b {
        width: 200px;
        height: 30px;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .time {
          font-size: 12px;
        }
        }
        .right_c {
        width: 200px;
        height: 30px;
        border: 1px solid red;
        display: flex;
        align-items: center;
        // justify-content: space-between;
       
        }
    }
  }
}
// .el-icon-caret-left{
//   font-size: 30px !important;
// }
</style>