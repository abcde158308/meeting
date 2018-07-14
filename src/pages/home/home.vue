<template>
  <div>
    <home-swiper></home-swiper> 
    <HomeIcons></HomeIcons>
    <HomeWeather></HomeWeather>
    <HomeMeeting></HomeMeeting>
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeWeather from './components/weather'
import HomeMeeting from './components/Meeting'
import HomeFooter from './components/Footer'
export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  components: {
    HomeSwiper,
    HomeIcons,
    HomeWeather,
    HomeMeeting,
    HomeFooter
  }
}
</script>

