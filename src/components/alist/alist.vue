<template>
  <div class="alist">
    
    <div class="left_url" @click.stop="goOut">
      <div
        class="url_list"
        v-for="item in urllist"
        :key="item.url" 
      >
      <slot name="aurl" :item="item"></slot>
        
      </div>
    </div>

    

  </div>
</template>

<script>
import { defineComponent, reactive, toRefs ,getCurrentInstance, onMounted} from "vue";

export default defineComponent({
  name: "alist",

  setup() {
     const { proxy  } = getCurrentInstance();
    const data = reactive({
      id: 1,
      urllist: [],
    });
     onMounted(()=>{
        methods.getGoUrls()
    })
    
    const methods = {
      goOut(e) {
        if(e.target.dataset.url) window.open(e.target.dataset.url)
      },
     getGoUrls(){
       proxy.http.getGoUrl().then(res=>{
          //  console.log(res)
           data.urllist=res.data
         })
     }
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