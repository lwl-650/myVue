<template>
  <div class="HeadTitle">
    <!-- <img src="../../../public/img/head.png" alt=""> -->
    <div class="head">
      <div class="left">
        <div class="left_list" v-for="(item,index) in list" :key="index">{{item.name}}</div>
      </div>
      <div class="cent"></div>
      <div class="right">
        <div class="left_list" v-for="(item,index) in list" :key="index">{{item.name}}</div>
      </div>
    </div>
 

   
  </div>
</template>


<script lang="ts">
import Title from './Title'
export default Title
// import './Title.less'
</script>


<style src="./Title.css" long="less"  scoped >

    
</style> 