<template>
  <div class="map">
      <div class="header">
        <router-link to="/">
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <span>
          地图
        </span>
      </div>
      <div class="container">

        <p class="center">
          北苑大酒店
        </p>
        <p>
          地址：北京市朝阳区双营路甲6号院
        </p>
        <p>
          联系电话：010-85904399 010-84932266    
        </p>
        <div class="img">
          <a href='http://api.map.baidu.com/geocoder?address=北京市朝阳区双营路甲6号院&output=html&src=liudasan' target='_blank'> <img style="margin:2px" width="100%" src="../../assets/images/baidumap.png" />  
          </a>
        </div>
           
  
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  components: {
    'mapComment': () =>import('./components/MapComponent.vue')
  }
}
</script>
<style lang="stylus" scoped>
  

  .map 
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
      padding 10px 20px;
      p 
        font-size 30px;
        line-height 50px;
      .center
        text-align center;
        margin 30px 0;
        font-weight 700;
        font-size 40px;
      .img 
        margin:20px 0 0 0;  

      
      
</style>
