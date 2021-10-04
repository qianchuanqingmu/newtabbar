<template>
	<tabbar>
		  <tar-bar-item path="/home">
	<!-- 		  <img slot="item-icon" src="./assets/img/tabbar/home1.svg"  alt="">
			  <img slot="item-icon-active" src="./assets/img/tabbar/home2.svg" alt="" />
			  <div slot="item-text">首页</div> -->
			  	  <!-- 新版v-slot写法，必须用template包裹起来 -->
			  	  <template #item-icon>
			  		  <img src="~assets/img/tabbar/home1.svg" />
			  	  </template>
				  <template #item-icon-active>
					  <img src="~assets/img/tabbar/home2.svg" />
				  </template>
			  	  <template #item-text>
			  		  <div>首页</div>
			  	  </template>
		  </tar-bar-item>
		  <tar-bar-item path="/category" activeColor="blue">
		  		  <img slot="item-icon" src="~assets/img/tabbar/1.svg"  alt="">
				   <img slot="item-icon-active" src="~assets/img/tabbar/2.svg" alt="" />
		  		  <div slot="item-text">分类</div>
		  </tar-bar-item>
		  <tar-bar-item path="/cart">
		  		  <img slot="item-icon" src="~assets/img/tabbar/car1.svg"  alt="">
				   <img slot="item-icon-active" src="~assets/img/tabbar/car2.svg" alt="" />
		  		  <div slot="item-text">购物车</div>
		  </tar-bar-item>
		  <tar-bar-item path="/profile">
		  		  <img slot="item-icon" src="~assets/img/tabbar/my1.svg"  alt="">
				   <img slot="item-icon-active" src="~assets/img/tabbar/my2.svg" alt="" />
		  		  <div slot="item-text">我的</div>
		  </tar-bar-item>
	  </tabbar>
</template>

<script>
	import Tabbar from 'components/tabbar/TabBar.vue'
	import TarBarItem from 'components/tabbar/TarbBarItem.vue'
	export default {
		name:'MainTabbar',
		components:{
			  Tabbar,
			  TarBarItem
		}
	}
</script>

<style>
</style>
