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

      <img src="../../assets/images/yicheng1.png" alt="">
      <img src="../../assets/images/yicheng2.png" alt="">
      <img src="../../assets/images/yicheng3.png" alt="">
      
    </div>
  </div>
</template>
<script>
export default{
  name: 'contArticle',
  data() {
    return {
      
    }
  }
}
</script>
<style lang="stylus" scoped>
  .contArticle
    .header
      height 100px;
      background #fff;
      line-height 100px;
      text-align center;
      i 
        float left;
        margin 0 0 0 20px;
      span 
        font-size 30px;/*px*/
        font-weight 700;
    .container
      padding 30px 20px;
      div 
       font-size 28px;
      img 
        width 100%;
      
</style>