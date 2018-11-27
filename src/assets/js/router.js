import vueRouter from 'vue-router'
import home from '../../components/home.vue'
import sort from '../../components/sort.vue'
import tro from '../../components/trolley.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
export default new vueRouter({
	routes:[
		{
			path:'/home',component:home
		},
		{
			path:'/',component:home
		},
		{
			path:'/sort',component:sort
		},
		{
			path:'/tro',component:tro
		},
		{
			path:'/my',component:my
		},
		
		{
			path:'/login',component:login
		},
		{
			path:'/*',component:home
		}
	]
})
