<template>
  <div id="app">
        <keep-alive include="home">
          <router-view></router-view>
        </keep-alive>
  </div>
</template>

<script>
import request from './uitls/request'
export default {
  created() {
    
  }
}
</script>
<style lang="scss" scoped>
html, body, #app {
  width: 100%;
  height: 100%;
}

</style>

