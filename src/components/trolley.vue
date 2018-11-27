<template>
	<main>
		<div class="tohea">
			<router-link to='/home'>
			</router-link>
			<span @click='toggle()'></span>
			<p>购物车</p>
		</div>
		<div class="hidnav" :style='"display:"+sh+";"'>
			<ul>
			   	<li v-for='(v,i) in list' @click='toggle()'>
			   		<router-link :to='v.jump'>
			   			<img :src="v.src2" alt=""/>
			   			<p>{{v.tit}}</p>
			   		</router-link>
			   	</li>
			</ul>
		</div>
		<section>
			<div class="blank">
				<aside>
				</aside>
				<p>别让你的心意空空如也...</p>
				<router-link to='/home'>去挑选礼物</router-link>
			</div>
			<h3>为你推荐</h3>
			<div class="tui">			
				<ul>
					<li v-for='(v,i) in tui'>
						<router-link to='/pro'>
							<img :src="v.src" alt="" />
							<p>{{v.p1}}</p>
							<p>￥{{v.p2}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				sh:'none',
				sendhome:0,
				list:[
			  		{
			  			src2:'src/assets/images/home_icon_new.png',
			  			
			  			tit:'首页',
			  			jump:'/home'
			  		},
			  		{
			  			src2:'src/assets/images/classify_icon_new.png',
			  		
			  			tit:'分类',
			  			jump:'/sort'
			  		},
			  		{
			  			src2:'src/assets/images/cart_icon_new.png',
			  			tit:'购物车',
			  			jump:'/tro'
			  		},
			  		{
			  			src2:'src/assets/images/my_icon_new.png',
			  			tit:'我的',
			  			jump:'/my'
			  		}
		  	
		  		],
		  		tui:[
		  			{
		  				src:'src/assets/images/9012288.jpg_220x240.jpg',
			  			p1:'心连心',
			  			p2:'239'
		  			},
		  			{
		  				src:'src/assets/images/9012288.jpg_220x240.jpg',
			  			p1:'心连心',
			  			p2:'239'
		  			},
		  			{
		  				src:'src/assets/images/9012288.jpg_220x240.jpg',
			  			p1:'心连心',
			  			p2:'239'
		  			},
		  			{
		  				src:'src/assets/images/9012288.jpg_220x240.jpg',
			  			p1:'心连心',
			  			p2:'239'
		  			},
		  			{
		  				src:'src/assets/images/9012288.jpg_220x240.jpg',
			  			p1:'心连心',
			  			p2:'239'
		  			},
		  			{
		  				src:'src/assets/images/9012288.jpg_220x240.jpg',
			  			p1:'心连心',
			  			p2:'239'
		  			}
		  		]
			}
		},
		methods:{
			toggle(){
				if(this.sh=='none'){
					this.sh='block';
				}else{
					this.sh='none';
				}
			}
		}
	}
</script>

<style>
	body{
		background:#fff;
	}
	ul.dis{
		display: none;
	}
	main{
		width:100%;
		height:100%;
		background:#fff;
	}
	section{
		height:89%;
		overflow:hidden;
	}
	div.hidnav{
		border-bottom:1px solid #ccc;
		display: none;
	}
	.hidnav ul{
		display: flex;
		padding: 4px 0px;
		width:100%;
		background:#fff;
	}
	.hidnav li{
		flex:1;
		font-size:12px;
		color: #494949;
		text-align:center;
	}
	.hidnav img{
		width:24px;
	}
	.hidnav a{
		float:left;
		color: #494949;
		text-decoration: none;
		width:100%;
		height:100%;
	}
	div.tohea{
		background:#fff;
		height:24px;
		padding:10px 11px;
		border-bottom:1px solid #ccc;
	}
	div.tohea a
	{
		float:left;
		width:24px;
		height:24px;
		background:url('../assets/images/iconChevronLeft@2x.png');
		background-size:24px 24px;
	}
	div.tohea span{
		float:right;
		width:24px;
		height:24px;
		background:url('../assets/images/iconMore@2x.png');
		background-size:24px 24px;
	}
	div.tohea p{
		text-align:center;
		font-size: 16px;
		
	}
	div.blank{
		text-align: center;
		width:100%;
		background:#fff;
		height:69%;
		border-bottom: 8px solid #eee;
		overflow: hidden;
	}
	div.blank aside{
		width:100%;
		height:0px;
		padding-bottom: 66.4%;
		background:url('../assets/images/empty_cart3.png');
		background-size: 100% 100%;
		margin:30px 0px 10px;
	}
	div.blank p{
		text-align: center;
		font-size:14px;
		color: rgb(75,75,75);
	}
	div.blank a{
		display: inline-block;
		margin:20px 0px;
		font-size: 14px;
		color: #ff6a00;
	    border: 1px solid #ff6a00;
	    border-radius: 3px;
	    text-decoration:none;
	    line-height:32px;
	    padding:0px 20px;
	}
	div.tui{
		background:#fff;
		overflow-x:scroll;
	}
	 h3{
		color:#111;
		font-size:14px;
		padding-left:16px;
		line-height:38px;
	}
	div.tui ul{
		width:512px;
	}
	div.tui ul::after{
		content:'';
		display: block;
		clear:both;
	}
	div.tui li{
		width:64px;
		float:left;
		margin-right:20px;
	}
	div.tui img{
		width:100%;
	}
	div.tui a{
		color: #232323;
		font-size:12px;
		text-decoration: none;
	}
	div.tui p{
		text-align:center;		
	}
	
</style>