<template>
  <div class="swiper-change">
    <swiper :options="swiperOption" ref="mySwiper" class="homeSwiper">
      <swiper-slide v-for="(item,index) in imgList" :key="index"><img class="swiper-img" :src="item.img" alt=""></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>
<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {     
        loop: true
        
      },
      imgList:[{
        img:require('../../../assets/images/swiper.png')
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.homeSwiper >>> .swiper-pagination-bullet-active
   background:#fff !important
  .homeSwiper
    height 0
    width 100%
    padding-bottom 51.7333%
    .swiper-img
      width 100%
</style>
