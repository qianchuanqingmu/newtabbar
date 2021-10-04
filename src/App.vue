<template>
  <div id="app">
	  <router-view></router-view>
	  <mai-tar-bar></mai-tar-bar>
  </div>
</template>

<script>
	
	import MaiTarBar from './components/maintabbar/MainTabbar.vue'

export default {
  name: 'App',
  components:{
	  MaiTarBar
  }
}
</script>

<style>
@import url("./assets/css/base.css");

</style>
