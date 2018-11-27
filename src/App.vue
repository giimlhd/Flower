<template>
  <div id="app">
  	<ul :class='{dis:tro==2}'>
	   	<li @click="select(i)" v-for='(v,i) in list'>
	   		<router-link :to='v.jump'>
	   			<img :src="v.src2" alt="" :class='{show:!(selected==i)}'/>
	   			<img :src="v.src1" alt="" :class='{show:selected==i}'/>
	   			<p :class="{current:selected==i}">{{v.tit}}</p>
	   		</router-link>
	   	</li>
   </ul>
   <router-view @hom='get' @sor='sorget'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return{
  		tro:0,
  		dis:true,
  		selected:0,
  		list:[
	  		{
	  			src2:'src/assets/images/home_icon_new.png',
	  			src1:'src/assets/images/home_icon_click_new.png',
	  			tit:'首页',
	  			jump:'/home'
	  		},
	  		{
	  			src2:'src/assets/images/classify_icon_new.png',
	  			src1:'src/assets/images/classify_icon_click_new.png',
	  			tit:'分类',
	  			jump:'/sort'
	  		},
	  		{
	  			src1:'src/assets/images/cart_icon_new.png',
	  			src2:'src/assets/images/cart_icon_new.png',
	  			tit:'购物车',
	  			jump:'/tro'
	  		},
	  		{
	  			src2:'src/assets/images/my_icon_new.png',
	  			src1:'src/assets/images/my_icon_click_new.png',
	  			tit:'我的',
	  			jump:'/my'
	  		}
  	
  		]
  		
  	}
  },
  methods:{
  	toggle(){
  		this.dis=!this.dis;
  	},
  	select(i){
  		this.selected=i;
  		this.tro=i;
  	},
  	get(n){
  		this.selected=parseInt(n);
  		this.tro=parseInt(n);
  	},
  	sorget(n){
  		this.tro=parseInt(n);
  		this.selected=parseInt(n);
  	}
  }
}
</script>

<style scoped>
	ul.dis{
		display: none;
	}
	ul{
		display: flex;
		padding: 4px 0px;
		border-top:1px solid #ccc;
		position: fixed;
		bottom:0px;
		left:0px;
		width:100%;
		background:#fff;
		z-index:2;
	}
	li{
		flex:1;
		font-size:12px;
		color: #494949;
		text-align:center;
	}
	img{
		width:24px;
		display: none;
	}
	a{
		float:left;
		color: #494949;
		text-decoration: none;
		width:100%;
		height:100%;
	}
	.show{
		display: inline-block;
	}
	p.current{
		color: #fe6600;
	}
</style>
