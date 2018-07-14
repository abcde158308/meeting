<template>
  <div class="home-icons">
    <div class="icons" v-for="(item,index) in iconsList" :key="index">
      <router-link :to="{name:item.linkUrl,params:{text:item.des}}">
        <div class="icon">
          <img :src="item.img" alt="">
          <p>{{item.des}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeIcons',
  data() {
    return {
      iconsList:[{
        id: 1,
        des: '大会议程',
        img:require('../../../assets/images/icon1.png'),
        linkUrl:'contArticle'
      },
      {
        id: 1,
        des: '合伙人会议',
        img:require('../../../assets/images/icon2.png'),
        linkUrl:'partner'
      },
      {
        id: 1,
        des: '座次概览',
        img:require('../../../assets/images/icon3.png'),
        linkUrl:'seat'
      },
      {
        id: 1,
        des: '会务指南',
        img:require('../../../assets/images/icon4.png'),
        linkUrl:'guide'
      },
      {
        id: 1,
        des: '房间信息',
        img:require('../../../assets/images/icon5.png'),
        linkUrl:'room'
      },
      {
        id: 1,
        des: '参会名单',
        img:require('../../../assets/images/icon2.png'),
        linkUrl:'delegate'
      }
      ]
    }
  }
}
</script>
<style scoped lang="stylus">
  .home-icons
    width 100%;
    height 0;
    padding-bottom 55.72%;
    background #fff;
    .icons
      width 33.33%;
      height 0;
      padding-bottom 27.86%;
      
      float left;
      text-align center;
      .icon
        margin-top:20px;
        font-size 28px;/*px*/
        color #333333; 
        img 
          width 116px;
          height 116px;
        p 
          margin-top 16px;  
      
</style>