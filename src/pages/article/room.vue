<template>
  <div class="contArticle">
    <div class="header">
      <router-link to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>
        房间信息
      </span>
    </div>
    <div class="container">
      <img v-for="(img,index) in imgs"  :src="img" :key="index">
    </div>
     
  </div>
</template>
<script>
export default{
  name: 'room',
  data() {
    return {
      imgs:[require("../../assets/images/biao1.png"),require("../../assets/images/biao2.png"),require("../../assets/images/biao3.png")]
    }
  }
  
  
}
</script>
<style lang="stylus" scoped>
  .contArticle
    .header
      height 100px;
      line-height 100px;
      text-align center;
      background #fff;
      i 
        float left;
        margin 0 0 0 20px;
      span 
        font-size 30px;/*px*/
        font-weight 700;
    .container
      margin 50px 0 0 0;
      padding 0 20px;
      img 
        width 100%;
        text-align center
      p 
        margin 30px 0 0 0;
        text-align center;
        font-size 30px;
        font-weight 700;       
      
</style>