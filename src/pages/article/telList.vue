<template>
  <div class="telList">
   <div class="header">
      <router-link to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>
        电话咨询
      </span>
    </div>
    <div class="container">
       <div class="detail">参会人员有事请与会务组联系：</div>
      <p> 
        <span style="font-weight:700;">秘书组：</span><br>
      <a href="tel:13870668898">杨维华（电话：13870668898）</a><br>  
      <a href="tel:18901052005">田庆颂（电话：18901052005）</a><br> 
      <a href="tel:13581978163">张钰（电话：13581978163）</a><br></p>
      <p><span style="font-weight:700;">服务组：</span><br>
      <a href="tel:13311082116"> 张友斌（电话：13311082116）</a>  <br>  
       <a href="tel:18910052199">周春英（电话：18910052199） </a> <br>
      <a href="tel:13910597427"> 李俊花（电话：13910597427）</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "telList",
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.telList 
  .header {
    height: 100px;
    background: #fff;
    line-height: 100px;
    text-align: center;

    i {
      float: left;
      margin: 0 0 0 20px;
    }

    span {
      font-size: 30px; /* px */
      font-weight: 700;
    }
  }
  .container{
     padding 20px;
     .detail,p{
       font-size 28px;
       line-height 55px;
       a{
         color:#333333;
       }
     }
  } 
   
</style>
