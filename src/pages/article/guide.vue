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
      <div class="title"> 会议注意事项</div>
      <div class="small">（敬请仔细阅读）</div>
      <div>各位参会代表：</div>
      <p>为保证本次会议顺利进行，达到预期目的，请参会人员本着高标准、严要求的原则，共同遵守以下规定：</p>
      <p><span>一、</span>参会人员应严格按照会议议程，<span>必须</span>提前10分钟到达会场,不得迟到、早退。为了体现公司形象<span>，会议期间请您着正装出席会议。</span></p>
      <p><span>二、</span><span>酒店内严禁吸烟，会议进行中不得随意走动。</span>进入会场请<span>将手机关闭或铃声调至静音状态，禁止接打电话</span>。听从会议主持人的安排，保持会场秩序。</p>
      <p><span>三、</span>在参加会议期间，由于大会采取全程视频直播的方式，请您注意着装。<span>开闭幕式时，请着正装出席，男员工着西裤配长袖或短袖正装衬衣，女员工着职业装，主席台男领导为西裤配长袖正装衬衣，女领导着职业套装。</span>会议其他时间可以着商务休闲服装，禁止着运动装、牛仔裤、短裤等服装。</p>
      <p><span>四、</span>在酒店住宿期间，除上网、内线电话免费以外，其它康体娱乐项目、使用长途电话、洗衣服务等费用自理。</p>
      <p><span>五、</span>退房截止日期：<span>公司领导、京外参会代表为7月18日14时前，在京代表为7月17日14时前（在京代表7月15日办理参会报到和入住），</span>退房前所有参会人员<span>务必将门卡钥匙交到酒店前台</span>或<span>会务组，</span>特殊情况的需通知会务组协调延时退房。</p>
      <p><span>六、</span>用餐时间：早餐7:00-8:30 、午餐12:00—13:00、晚餐18:30—19:30 。<span>15日--18日早餐地点：一层四季厅；15日-17日午、晚餐地点：在一层宴会南厅。</span></p>
      <p><span>七、</span>用餐时请自行携带好餐票，每餐撕下相对应日期餐票交给餐厅服务人员。</p>
      <p><span>八、</span>由于会议结束后代表返程比较集中，请各位代表根据自己回执报送航班起飞时间至少提前两个半小时乘车，火车站需提前三个小时出发，<span>有特殊情况和送站要求的请务必在17日12:00之前与会务组沟通确认，敬请理解和给予配合！</span></p>
      <p><span>九、</span>请各位代表注意保管好个人钱物，休会后请勿忘带衣物、文件、手机等，保管好所有会议材料，注意保密，不得外泄，如有泄密将追究责任。</p>
    </div>
  </div>
</template>
<script>
export default{
  name: 'guide',
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
      p
        text-indent 2em;  
        font-size 28px;
        line-height 55px;  
        span 
          font-weight 700;
      .title 
        font-size 40px;
        font-weight 700;
        text-align center; 
      .small 
        text-align  center;
        margin 20px 0;     
      
</style>