<template>
	<div class="my">
		<div class="top">
			<span @click="back()"></span>
			<p>Hi,欢迎来到花礼网</p>
			<router-link to='/login'>登录/注册</router-link>
		</div>
		<ul class="one">
			<li v-for='(v,i) in one'>
				<router-link to='/login'>
					<b :style='"background-image:url("+v.url+");"'></b>
					<p>{{v.txt}}</p>
				</router-link>
			</li>
		</ul>
		<ul class="two">
			<li v-for='(v,i) in two'>
				<router-link to='/login'>
					<b :style='"background-image:url("+v.url+");"'></b>
					<p>{{v.txt}}</p>
				</router-link>
			</li>
		</ul>
		<ul class="three">
			<li v-for='(v,i) in three'>
				<router-link to='/login'>
					<b :style='"background-image:url("+v.url+");"'></b>
					<p>{{v.txt}}</p>
				</router-link>
			</li>
		</ul>
		<div class="mid">
			<span>账号管理</span>
			<router-link to='/address'>管理收货地址等</router-link>
		</div>
		<div class="bottom">
			<router-link to='/know'>
				<img src="../assets/images/banner@2x.png" alt="" />
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				one:[
					{
						url:'src/assets/images/iconPcObligation@2x.png',
						txt:'待付款'
					},
					{
						url:'src/assets/images/iconPcExpress@2x.png',
						txt:'今日配送'
					},
					{
						url:'src/assets/images/iconPcEvaluate@2x.png',
						txt:'待评价'
					},
					{
						url:'src/assets/images/iconPcAllOrder@2x.png',
						txt:'全部订单'
					}
				],
				two:[
					{
						url:'src/assets/images/iconPcTicket@2x.png',
						txt:'优惠券'
					},
					{
						url:'src/assets/images/iconPcIntegral@2x.png',
						txt:'积分'
					},
					{
						url:'src/assets/images/iconClock@2x.png',
						txt:'生日/纪念日提醒'
					},
					{
						url:'src/assets/images/iconCollectDefault@2x.png',
						txt:'我的收藏'
					}
				],
				three:[
					{
						url:'src/assets/images/iconPcPay@2x.png',
						txt:'在线付款'
					},
					{
						url:'src/assets/images/bottomIconSeviceDefault@2x.png',
						txt:'联系客服'
					},
					{
						url:'src/assets/images/iconHelp@2x.png',
						txt:'帮助'
					},
					{
						url:'src/assets/images/iconAbout@2x.png',
						txt:'关于花礼'
					}
				]
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	body{
		background:#fff;
	}
	div.top{
		height:0px;
		padding-bottom:35.2%;
		background:url('../assets/images/backgroundv3.png');
		background-size:100% 100%;
		position: relative;
		color:#fff;
		text-align:center;
		overflow: hidden;
	}
	div.top span{
		position: absolute;
		top:10px;
		left:14px;
		width:24px;
		height:24px;
		background:url('../assets/images/goBack.png');
		background-position: 0px 0px;
		background-size:24px 24px;
	}
	div.top p{
		margin-top:34px;
		font-size:14px;
		margin-bottom: 5px;
	}
	div.top a{
		display: inline-block;
		text-decoration:none;
		color:#fff;
		letter-spacing:2px;
		background: #fe6600;
		width:100px;
		line-height:24px;
		border-radius: 12px;
	}
	.my ul{
		display: flex;
		width:100%;
	}
	.my ul li{
		flex:1;
		text-align: center;
		position: relative;
	}
	.my ul a{
		text-decoration: none;
		color:#000;
		font-size:12px;
		text-align:center;
		display: inline-block;
		width:100%;
	}
	.my ul b{
		display: inline-block;
		width:32px;
		height:32px;
		background-size:32px 32px;
		margin-bottom: -7px;
	}
	ul.one li{
		padding:15px 0px;
	}
	ul.one li:last-child{
		border-left:1px solid #eee;
	}
	ul.one li:last-child::before{
		content: "";
	    position: absolute;
	    left: -6px;
	    top: 42%;
	    width: 10px;
	    height: 10px;
	    background: #fff;
	    -webkit-transform: rotate(45deg);
	    -moz-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	    transform: rotate(45deg);
	    border-right: 1px solid #eee;
	    border-top: 1px solid #eee;
	}
	ul.one{
		border-bottom: 8px solid #eee;
	}
	ul.two li,
	ul.three li{
		border-right:1px solid #eee;
		border-bottom:1px solid #eee;
		height:93px;
		padding-top:20px;
		box-sizing: border-box;
	}
	ul.two li:last-child,
	ul.three li:last-child
	{
		border-right:none;
	}
	ul.three{
		border-bottom: 9px solid #eee;
	}
	div.mid{
		overflow:hidden;
		padding:0px 16px;
	}
	div.mid span{
		float:left;
		font-size: 14px;
		color:#494949;
		line-height: 40px;
	}
	div.mid a{
		float:right;
		font-size: 12px;
		color:#000;
		text-decoration:none;
		line-height: 40px;
		padding-right:15px;
		background:url('../assets/images/chevronRight@2x.png') no-repeat right center;
		background-size: 12px 12px;
	}
	div.bottom img{
		width:100%;
		display: block;
	}
	div.bottom{
		border-top:10px solid #eee;
		margin-bottom: 49px;
	}
</style>