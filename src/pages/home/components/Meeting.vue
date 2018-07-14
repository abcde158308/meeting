<template>
  <div class="home-metting">
    <div class="header">
      <h3>
        <span></span>会议材料
      </h3>
    </div>
    <ul class="main-list">
      <!-- <li class="border-bottom">
        <a href="./static/html/test.pdf">
          <img  class="query" src="../../../assets/images/query.png">
          2018年景区风险保障与发展论坛举行
          <img class="upload" src="../../../assets/images/upload.png">
        </a>
      </li> 
      <li class="border-bottom">
        <a href="./static/html/test.pdf">
          <img  class="query" src="../../../assets/images/query.png">
          2018年景区风险保障与发展论坛举行
          <img class="upload" src="../../../assets/images/upload.png">
        </a>
      </li> 
      <li class="border-bottom">
        <a href="./static/html/test.pdf">
          <img  class="query" src="../../../assets/images/query.png">
          2018年景区风险保障与发展论坛举行
          <img class="upload" src="../../../assets/images/upload.png">
        </a>
      </li>  -->
    </ul>
    <div class="header">
      <h3>
        <span></span>意见反馈
      </h3>

    </div>
          <ul class="main-list">
           <li class="border-bottom" style="font-size:16px;padding:10px 0px;text-align:center;">
             请邮件反馈：zhangyu02@jiangtai.com
             </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeMetting',
  data() {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
  .home-metting
    background #fff;
    .header 
      height 88px;
      line-height 88px;
      h3 
        font-weight 900;
        font-size 32px;/*px*/
        padding 0 0 0 24px;
        display flex;
        span 
          align-self center;
          width 10px;
          height 34px;
          background #198bec;
          margin 0 10px 0 0;
    .main-list 
      li 
        height 64px;
        line-height 64px;
        padding 0 35px;
        a 
          display block;
          font-size 28px;/*px*/
          color #333333;
          .query
            float left;
            width 20px;
            margin 20px 12px 0 0;
          .upload 
            width 30px;
            float right;
            margin 13px 12px 0 0;
           
</style>