<template>
  <div class="home-footer">
    <div class="btn tel">
      <router-link to="/telList">
        电话咨询
      </router-link>
    </div>
    <div class="btn map">
      <router-link to="/bmap">
        地图  
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeFooter',
  data() {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
.home-footer
  height 106px;
  position fixed;
  left 0;
  bottom 0;
  width 100%;
  display flex;
  text-align center;
  line-height 106px;
  .btn 
    flex 1;
    height 100%;
    a 
      font-size 28px;/*px*/ 
  .tel 
    background linear-gradient(#62d0fb,#37a8f2,#1a8ced);
    a
      color #fff   
  .map 
    background linear-gradient(#01b4c9,#1acbdc,#3bebf4); 
    a
      color #333333  
</style>
