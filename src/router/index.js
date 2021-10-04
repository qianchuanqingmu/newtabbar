import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '../views/home/Home'
import Category from '../views/category/category'
import Cart from '../views/cart/cart'
import Profile from '../views/profile/profile'

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push;
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err);
   }

const routes = [
    {
      path: '',
      redirect: '/home'
    },
	{
		path: '/home',
		component:Home
	},
	{
		path: '/category',
		component:Category
	},
	{
		path: '/cart',
		component:Cart
	},
	{
		path: '/profile',
		component:Profile
	}
  ]

export default new Router({
  routes,
  mode:'history'
})
