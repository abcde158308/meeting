<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
body,html{
  background: #f5f5f5;
  width :100%
  height :100%;
} 
  
#app
  background #f5f5f5;
  padding 0 0 140px 0;
</style>


