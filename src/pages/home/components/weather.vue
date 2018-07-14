<template>
  <div class="home-weather">
    <div class="header">
      <i class="iconfont"></i>
      <h3><span></span>天气信息</h3>
    </div>
    <div class="container">

      <img src="../../../assets/images/weather.png" alt="">
      <br/>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeWeather',
  data (){
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
.home-weather 
  height 0;
  padding-bottom 65.94%;
  margin-top 20px; 
  background #fff;
  .header 
    height 88px;
    line-height 88px;
    box-sizing border-box;
    h3 
      font-weight 900;
      font-size 32px;/*px*/
      padding 0 0 0 24px;
      display:flex;
      span 
        align-self center;
        width 10px;
        height 34px;
        background #198bec;
        margin 0 10px 0 0;

  .container 
    height 0;
    padding-bottom 53.75%;
    background #ccc; 
    img
     width 100%;   

</style>

