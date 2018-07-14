<template>
  <div class="contArticle">
    <div class="header">
      <router-link to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>
        {{this.$route.params.text}}
      </span>
    </div>
    <div class="container">
      <img v-for="(img,index) in imgs"  :src="img" :key="index">
      <p>点击图片放大</p>
    </div>
     
  </div>
</template>
<script>
export default{
  name: 'seat',
  data() {
    return {
      imgs:[require("../../assets/images/seat.png")]
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
      margin 100px 0 0 0;
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