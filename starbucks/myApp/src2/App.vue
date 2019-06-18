<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import request from './utils/request'
export default {
  name: 'App',
  computed: {
      
  },
  created () {
      
  },
  methods: {
    
  }
};
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
  *{
    box-sizing: border-box;
  }
</style>
