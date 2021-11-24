<template>
  <div id="nav">
    <!-- 
外网面板地址: http://162.14.70.198:8888/04096fd0
内网面板地址: http://10.0.0.11:8888/04096fd0
username: qq650610
password: qq650610

     -->
    <!-- <router-view/> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view v-wechat-title='$route.meta.title'/>
  </div>
  
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // margin: 0 auto;
}

</style>
