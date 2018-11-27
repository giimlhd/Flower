<template>
	<div class="hediv">
		<div>
			<header>
				<router-link to='/home' class='fir'><img src="src/assets/images/logo@2x.png" alt="" /></router-link>
				<router-link to='/home' class='sec'><span></span>感恩回馈</router-link>
				<router-link to='/login' class='thir'>登陆</router-link>
			</header>
			<div class="banner">
				<mt-swipe :auto="4000">
				  <mt-swipe-item><img src="src/assets/images/18_thanksday_m.jpg" alt="" /></mt-swipe-item>
				  <mt-swipe-item><img src="src/assets/images/18_birthday_m.jpg" alt="" /></mt-swipe-item>
				  <mt-swipe-item><img src="src/assets/images/17_banner_tx_m.jpg" alt="" /></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="banbottom">
				<ol>
					<li class="firli">
						<b></b>
						<span>认证龙头企</span>
					</li>
					<li>
						<b></b>
						<span>13年品牌</span>
					</li>
					<li>
						<b></b>
						<span>3小时送花</span>
					</li>
					<li class="lali">
						<b></b>
						<span>最近<router-link to='/comnum'>276423</router-link>条</span>
					</li>
				</ol>
			</div>
			<ul class="xian">
				<li v-for='(v,i) in list'>
					<router-link to='/pro'>
						<span class="pic" :style='"background-image:url("+ v.url+");"'></span>
						<p>{{v.txt}}</p>
					</router-link>
				</li>
			</ul>		
		</div>
		<div class="lianren">
			<aside>
				<router-link to='/lian'><p>送恋人</p></router-link>
				<router-link to='/lian'><p>送父母长辈</p></router-link>
				<router-link to='/lian'><p>送朋友</p></router-link>
			</aside>
			<ul>
				<li v-for='(v,i) in lianli'>
					<router-link to='/birth'>{{v.txt}}</router-link>
				</li>
			</ul>
		</div>
		<!--热销排行榜-->
		<div class="rend">
			<ul class="top">
				<li v-for='(v,i) in renlist1'>
					<router-link to='/hot' :style='"background-image:url("+ v.url+");"'>
						<p class="wrp">
							<b>{{v.b}}</b><br />{{v.dec}}
						</p>
					</router-link>
				</li>
			</ul>
			<ul class="bottom">
				<li v-for='i in 2'>
					<router-link to='/hot' :style='"background-image:url("+ renlist2[i-1].url+");"'>
						<p class="wrp">
							<b>{{renlist2[i-1].b}}</b><br />{{renlist2[i-1].dec}}
						</p>
					</router-link>
				</li>
				<li>
					<router-link to='/hot' :style='"background-image:url("+ renlist2[2].url+");"'>
						<p class="wrp">
							<b>{{renlist2[2].b}}</b><br />{{renlist2[2].dec}}
						</p>
						<p class="wrp lap">30多个城市已开通</p>
					</router-link>
				</li>
			</ul>
		</div>
		<!--爱情鲜花热线单品-->
		<div class="love">
			<div class="head">
				<hr /><h4>爱情鲜花热线单品</h4>
			</div>
			<div class="pro1" v-for='(v,i) in lovlist'>
				<aside v-for='(x,j) in v'>
					<router-link to='/shop'>
						<span class="pic">
							<img :src="x.src" alt="" />
						</span>
						<span class="che" :style='"display:"+x.dis+";"'>{{x.che}}</span>
						<div class="pre">
							<b>{{x.b}}</b><i></i><span>{{x.sp}}</span>
						</div>
						<p class="dec">{{x.dec}}</p>
						<p class="price"><b>￥</b>{{x.price}}</p>
					</router-link>
				</aside>
			</div>
			<div class="foot">
				<router-link to='/more'>
					更多爱情鲜花 >
				</router-link>
			</div>
		</div>
		
		<!--送长辈鲜花-->
		<div class="parent love">
			<div class="head">
				<hr /><h4>送长辈鲜花热线单品</h4>
			</div>
			<div class="pro1" v-for='(v,i) in parlist'>
				<aside v-for='(x,j) in v'>
					<router-link to='/shop'>
						<span class="pic">
							<img :src="x.src" alt="" />
						</span>
						<span class="che" :style='"display:"+x.dis+";"'>{{x.che}}</span>
						<div class="pre">
							<b>{{x.b}}</b><i></i><span>{{x.sp}}</span>
						</div>
						<p class="dec">{{x.dec}}</p>
						<p class="price"><b>￥</b>{{x.price}}</p>
					</router-link>
				</aside>
			</div>
			<div class="foot">
				<router-link to='/more'>
					更多亲情鲜花 >
				</router-link>
			</div>
		</div>
		<!--永生鲜花-->
		<div class="foever love">
			<div class="head">
				<hr /><h4>永生花热销单品</h4>
			</div>
			<div class="pro1" v-for='(v,i) in evelist'>
				<aside v-for='(x,j) in v'>
					<router-link to='/shop'>
						<span class="pic">
							<img :src="x.src" alt="" />
						</span>
						<span class="che" :style='"display:"+x.dis+";"'>{{x.che}}</span>
						<div class="pre">
							<b>{{x.b}}</b><i></i><span>{{x.sp}}</span>
						</div>
						<p class="dec">{{x.dec}}</p>
						<p class="price"><b>￥</b>{{x.price}}</p>
					</router-link>
				</aside>
			</div>
			<div class="foot">
				<router-link to='/more'>
					更多永生花 >
				</router-link>
			</div>
		</div>
		<!--蛋糕-->
		<div class="foever love">
			<div class="head">
				<hr /><h4>蛋糕热销单品</h4>
			</div>
			<div class="pro1" v-for='(v,i) in cakelist'>
				<aside v-for='(x,j) in v'>
					<router-link to='/shop'>
						<span class="pic">
							<img :src="x.src" alt="" />
						</span>
						<span class="che" :style='"display:"+x.dis+";"'>{{x.che}}</span>
						<div class="pre">
							<b>{{x.b}}</b><i></i><span>{{x.sp}}</span>
						</div>
						<p class="dec">{{x.dec}}</p>
						<p class="price"><b>￥</b>{{x.price}}</p>
					</router-link>
				</aside>
			</div>
			<div class="foot">
				<router-link to='/more'>
					更多蛋糕 >
				</router-link>
			</div>
		</div>
		<!--礼品-->
		<div class="foever love">
			<div class="head">
				<hr /><h4>礼品热销单品</h4>
			</div>
			<div class="pro1" v-for='(v,i) in giftlist'>
				<aside v-for='(x,j) in v'>
					<router-link to='/shop'>
						<span class="pic">
							<img :src="x.src" alt="" />
						</span>
						<span class="che" :style='"display:"+x.dis+";"'>{{x.che}}</span>
						<div class="pre">
							<b>{{x.b}}</b><i></i><span>{{x.sp}}</span>
						</div>
						<p class="dec">{{x.dec}}</p>
						<p class="price"><b>￥</b>{{x.price}}</p>
					</router-link>
				</aside>
			</div>
			<div class="foot">
				<router-link to='/more'>
					更多礼品 >
				</router-link>
			</div>
		</div>
		<!--巧克力-->
		<div class="foever love">
			<div class="head">
				<hr /><h4>巧克力热销单品</h4>
			</div>
			<div class="pro1" v-for='(v,i) in cholist'>
				<aside v-for='(x,j) in v'>
					<router-link to='/shop'>
						<span class="pic">
							<img :src="x.src" alt="" />
						</span>
						<span class="che" :style='"display:"+x.dis+";"'>{{x.che}}</span>
						<div class="pre">
							<b>{{x.b}}</b><i></i><span>{{x.sp}}</span>
						</div>
						<p class="dec">{{x.dec}}</p>
						<p class="price"><b>￥</b>{{x.price}}</p>
					</router-link>
				</aside>
			</div>
			<div class="foot">
				<router-link to='/more'>
					更多巧克力 >
				</router-link>
			</div>
		</div>
		<div class="compa">
			<router-link to='/combuy'>
				<img src="../assets/images/18_qiyetuangou_m_bottom.jpg" alt="" />
			</router-link>
		</div>
		<div class="reso">
			<router-link to='/reso'>
				<img src="../assets/images/m-brand.png" alt="" />
			</router-link>
		</div>
		<!--花语大全-->
		<footer>
			<ul>
				<li><router-link to='/lan'>花语大全</router-link></li>
				<li><router-link to='/lan'>企业团购</router-link></li>
				<li><router-link to='/lan'>常见问题</router-link></li>
				<li><router-link to='/lan'>关于我们</router-link></li>
			</ul>
			<div class="mid">
				<span class="client">
					<router-link to='/client'></router-link>
				</span>
				<span class="kefu">
					<router-link to='/kefu'></router-link>
				</span>
			</div>
			<div class="bot">Copyright © 2005~2018 花礼网(中国鲜花礼品网) 版权所有<br />中国鲜花网领先品牌，鲜花速递专家！</div>
		</footer>
	</div>
</template>

<script>	
	export default{		
		data(){
			return{
				list:[
					{
						url:'src/assets/images/xianhua_icon.png',
						txt:'鲜花'
					},
					{
						url:'src/assets/images/yongshenghua_icon.png',
						txt:'鲜花'
					},
					{
						url:'src/assets/images/cake_icon.png',
						txt:'鲜花'
					},
					{
						url:'src/assets/images/gift_icon.png',
						txt:'鲜花'
					},
					{
						url:'src/assets/images/choclate_icon.png',
						txt:'鲜花'
					}
				],
				lianli:[
					{
						txt:'生日祝贺'
					},
					{
						txt:'表白/求婚'
					},
					{
						txt:'开业/商务'
					},
					{
						txt:'周年纪念'
					}
				],
				renlist1:[
					{
						url:'src/assets/images/m-home-recommend01.jpg',
						b:'热销排行榜',
						dec:'集万千宠爱'
					},
					{
						url:'src/assets/images/m-home-recommend02.jpg',
						b:'新品来袭',
						dec:'新品有新意'
					}
				],
				renlist2:[
					{
						url:'src/assets/images/m-home-recommend03.jpg',
						b:'特价专区',
						dec:'超值好货'
					},
					{
						url:'src/assets/images/m-home-recommend04.jpg',
						b:'品味之选',
						dec:'精致优雅'
					},
					{
						url:'src/assets/images/m-home-recommend05.jpg',
						b:'设计师甄选',
						dec:'稀有花材 高端鲜花'
					}
				],
				lovlist:[
					[
						{
							src:'src/assets/images/9012177.jpg_220x240.jpg',
							che:'限时特惠',
							b:'不变的承诺',
							sp:'即将恢复599',
							dec:'99枝红玫瑰',
							price:'499',
							dis:'inline-block'
						},
						{
							src:'src/assets/images/9010966.jpg_220x240.jpg',
							che:'热销爆款',
							b:'一往情深',
							sp:'经典爆款，年年销售冠军！',
							dec:'精品玫瑰礼盒:19枝红玫瑰，勿忘我适量',
							price:'249',
							dis:'inline-block'
						}
					
					],
					[
						{
							src:'src/assets/images/9010011.jpg_220x240.jpg',
							che:'限时特惠',
							b:'一心一意',
							sp:'已优惠10元',
							dec:'玫瑰11枝，粉色勿忘我0.3扎',
							price:'129',
							dis:'inline-block'
						},
						{
							src:'src/assets/images/9012154.jpg_220x240.jpg',
							che:'限时特惠',
							b:'甜美公主',
							sp:'已优惠30元',
							dec:'白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝',
							price:'359',
							dis:'inline-block'
						}
					
					],
					[
						{
							src:'src/assets/images/9012060.jpg_220x240.jpg',
							che:'限时特惠',
							b:'眷念',
							sp:'特惠款',
							dec:'戴安娜粉玫瑰33枝，石竹梅围绕',
							price:'298',
							dis:'none'
						},
						{
							src:'src/assets/images/9012243.jpg_220x240.jpg',
							che:'热销爆款',
							b:'恋恋情深',
							sp:'',
							dec:'11枝香槟玫瑰，白百合2枝',
							price:'199',
							dis:'none'
						}
					
					],
					[
						{
							src:'src/assets/images/9010855.jpg_220x240.jpg',
							che:'限时特惠',
							b:'99枝玫瑰赠德芙心语巧克力',
							sp:'特惠款',
							dec:'33枝戴安娜、66枝红玫瑰、1扎满天星',
							price:'599',
							dis:'inline-block'
						},
						{
							src:'src/assets/images/9010947.jpg_220x240.jpg',
							che:'热销爆款',
							b:'你最珍贵',
							sp:'',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'255',
							dis:'none'
						}
					
					]	
				],
				parlist:[
					[
						{
							src:'src/assets/images/9010947.jpg_220x240.jpg',
							che:'热销爆款',
							b:'你最珍贵',
							sp:'',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'255',
							dis:'none'
						},
						{
							src:'src/assets/images/9010947.jpg_220x240.jpg',
							che:'热销爆款',
							b:'你最珍贵',
							sp:'',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'255',
							dis:'none'
						}
					],
					[
						{
							src:'src/assets/images/9010947.jpg_220x240.jpg',
							che:'热销爆款',
							b:'你最珍贵',
							sp:'',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'255',
							dis:'none'
						},
						{
							src:'src/assets/images/9010947.jpg_220x240.jpg',
							che:'热销爆款',
							b:'你最珍贵',
							sp:'',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'255',
							dis:'inline-block'
						}
					]
				],
				evelist:[
					[
						{
							src:'src/assets/images/1073033.jpg_220x240.jpg',
							che:'热销爆款',
							b:'一生一世',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'198',
							dis:'none'
						},
						{
							src:'src/assets/images/1073186.jpg_220x240.jpg',
							che:'热销爆款',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'inline-block'
						}
					],
					[
						{
							src:'src/assets/images/1073033.jpg_220x240.jpg',
							che:'热销爆款',
							b:'一生一世',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'198',
							dis:'none'
						},
						{
							src:'src/assets/images/1073186.jpg_220x240.jpg',
							che:'新品',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'inline-block'
						}
					]
				],
				cakelist:[
					[
						{
							src:'src/assets/images/5301019.jpg_220x240.jpg',
							che:'热销爆款',
							b:'一生一世',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'198',
							dis:'none'
						},
						{
							src:'src/assets/images/5181029.jpg_220x240.jpg',
							che:'热销爆款',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'none'
						}
					],
					[
						{
							src:'src/assets/images/5181029.jpg_220x240.jpg',
							che:'热销爆款',
							b:'一生一世',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'198',
							dis:'none'
						},
						{
							src:'src/assets/images/5181029.jpg_220x240.jpg',
							che:'新品',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'none'
						}
					]
				],
				giftlist:[
					[
						{
							src:'src/assets/images/1061039.jpg_220x240.jpg',
							che:'热销爆款',
							b:'一生一世',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'198',
							dis:'none'
						},
						{
							src:'src/assets/images/1060002.jpg_220x240.jpg',
							che:'热销爆款',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'none'
						}
					],
					[
						{
							src:'src/assets/images/1061039.jpg_220x240.jpg',
							che:'热销爆款',
							b:'一生一世',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'198',
							dis:'inline-block'
						},
						{
							src:'src/assets/images/1060002.jpg_220x240.jpg',
							che:'新品',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'inline-block'
						}
					]
				],
				cholist:[
					[
						{
							src:'src/assets/images/1204040.jpg_220x240.jpg',
							che:'新品',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'none'
						},
						{
							src:'src/assets/images/1201019.jpg_220x240.jpg',
							che:'新品',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'none'
						}
					],
					[
						{
							src:'src/assets/images/1204040.jpg_220x240.jpg',
							che:'新品',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'none'
						},
						{
							src:'src/assets/images/1201019.jpg_220x240.jpg',
							che:'新品',
							b:'我如此爱你-口红款520',
							sp:'爆款特惠！',
							dec:'精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量',
							price:'588',
							dis:'none'
						}
					]
				]
			}
		},
		created(){
			this.$emit('hom',0);
		}
	}
</script>

<style>
	div.hediv{
		margin-bottom: 50px;
	}
	div.hediv div{
		background:#fff;
	}
	div.banner div.mint-swipe-indicators{
		background:none;
	}
	header{
		display: flex;
		width:100%;
		padding-left:16px;
		box-sizing: border-box;
		padding-top:6px;
		padding-bottom:6px;
		line-height:28px;
		
	}
	header a{
		font-size:12px;
		color: #494949;
		text-decoration: none;
	}
	header a.fir{
		float:left;
		margin-right:16px;
	}
	header a.sec{
		flex:4;
    	border-radius: 5px;
    	background-color: #f5f5f5;
	}
	header a.thir{
		flex:1;
		text-align:center;
	}
	header img{
		display: inline-block;
		width:70px;
		vertical-align: middle;
	}
	header a.sec span{
		width:12px;
		height:12px;
		display: inline-block;
		vertical-align: middle;
		background: url('../assets/images/icon_Search.png') no-repeat;
		background-size: 24px 24px;
		background-position:-6px -6px;
		margin:0px 8px;
	}
	.banner img{
		width:100%;
	}
	.banner .mint-swipe-items-wrap{
		height:0px;
		padding-bottom:48%;
	}
	.banner .mint-swipe-indicator{
		background:none;
		border:1px solid #fff;
		opacity:1;
		width:6px;
		height:6px;
	}
	.banner .mint-swipe-indicators .is-active{
		background:#fff;
	}
	.banbottom ol{
		display: flex;
		width:100%;
		border-bottom:1px solid #eee;
	}
	.banbottom li{
		flex: 1;
		font-size:12px;
		text-align:center;
		color: #9b9b9b;
		line-height:28px;
	}
	.banbottom b{
		display: inline-block;
		width:4px;
		height:4px;
		background:#333;
		border-radius:50%;
		vertical-align: middle;
		opacity:0.4;
	}
	.banbottom .lali{
		flex:1.3;
	}
	.banbottom .firli{
		flex:1.1;
	}
	.banbottom .lali a{
		color: #494949;
	}
	ul.xian{
		display: flex;
		width:100%;
		padding:7px 0px;
	}
	ul.xian li{
		flex:1;
		text-align: center;
	}
	ul.xian a{
		display: inline-block;
		width:49px;
	}
	ul.xian a{
		text-decoration: none;
	}
	ul.xian p{
		color: #494949;
		font-size:13px;
	}
	ul.xian span.pic{
		float:left;
		width:48px;
		height:48px;
		background-size:48px 48px;
	}
	div.lianren{
		margin-top:8px;
		background:#fff;
	}
	div.lianren aside,
	div.lianren ul
	{
		display: flex;
		width:100%;
	}
	div.lianren ul{
		box-sizing:border-box;
		padding:12px 3px;
	}
	div.lianren li{
		flex:1;
		margin:0px 5px;
		line-height: 25px;
		text-align: center;
		border-radius:2px;
	}
	div.lianren ul a{
		font-size:12px;
		text-decoration:none;
		color:#fff;
	}
	div.lianren li:first-child{
		background-color: #FEB4C3;
	}
	div.lianren li:nth-child(2){
		background-color:#C99787;
	}
	div.lianren li:nth-child(3){
		background-color: #AFCBF2;
	}
	div.lianren li:nth-child(4){
		background-color: #FFA76B;
	}
	div.lianren aside a{
		height:0px;
		flex:1;
		padding-bottom:33.3%;
		color:#fff;
		text-decoration:none;
		text-align:center;
		font-size:12px;
		
	}
	div.lianren p{
		margin-top:10px;
	}
	div.lianren aside a:nth-child(1){
		background:url('../assets/images/m-home-flowercate01.jpg');
		background-size:100% 100%;
	}
	div.lianren aside a:nth-child(2){
		background:url('../assets/images/m-home-flowercate02.jpg');
		margin-left:2px;
		background-size:100% 100%;
	}
	div.lianren aside a:nth-child(3){
		background:url('../assets/images/m-home-flowercate03.jpg');
		background-size:100% 100%;
		margin-left:2px;
	}
	
	/*热销排行榜*/
	div.hediv div.rend{
		background-color:#eee;
		margin:8px 0px;
	}
	div.rend ul.top{
		display: flex;
		width:100%;
		margin-bottom:1px;
	}
	div.rend ul.top li{
		flex:1;
	}
	div.rend ul.top li:first-child{
		margin-right:1px;
	}
	div.rend a{
		float:left;
		width:100%;
		height:0px;
		text-decoration:none;
		color: #777;
		font-size:12px;
		background-size:100% 100%;
		padding-bottom:66.3%;
	}
	div.rend ul.bottom a{
		padding-bottom:133.3%;
	}
	div.rend ul.bottom li:nth-child(3) a{
		padding-bottom:66.3%;
	}
	div.rend p.wrp{
		margin-top:14px;
		margin-left:12px;
	}
	div.rend ul.bottom{
		display: flex;
		width:100%;
	}
	div.rend ul.bottom li{
		flex:1;
	}
	div.rend ul.bottom li:nth-child(3){
		flex:2;
		margin-left:1px;
		position: relative;
	}
	div.rend ul.bottom li:nth-child(2){
		margin-left:1px;
	}
	div.rend p.lap{
		position: absolute;
		left:12px;
		bottom:13px;
		margin-top:0px;
		margin-left:0px;
	}
	/*鲜花热销单品*/
	div.love hr{
		width:70%;
		height:2px;
		background:#BCBCBC;
		margin:28px auto;
		
	}
	div.love div.head{
		position:relative;
		overflow: hidden;
	}
	div.love h4{
		position:absolute;
		top:16px;
		left:50%;
		margin-left:-56px;
		font-size:14px;
		line-height:28px;
		padding:0px 7px;
		box-sizing:border-box;
		background:#fff;
	}
	div.love div.pro1{
		display: flex;
		width:100%;
		padding:0px 4px;
		box-sizing:border-box;
	}
	div.love aside{
		flex:1;
		position: relative;
		margin:0px 3px 16px;
		overflow:hidden;
	}
	div.love span.pic{
		float:left;
		width:100%;
		height:0px;
		padding-bottom:109%;
		overflow: hidden;
	}
	div.love img{
		width:100%;
	}
	div.love a{
		text-decoration:none;
		font-size:12px;
	}
	div.love span.che{
		position:absolute;
		top:10px;
		left:5px;
		color:#fff;
		background-color: #fe6600;
    	padding: 1px 8px;
	}
	div.love div.pre,
	div.love p.dec
	{
		width:100%;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	div.love i{
		display: inline-block;
		vertical-align:middle;
		width:4px;
		height:4px;
		border-radius:50%;
		background:#333;
		margin:0px 3px;
	}
	div.love b{
		color: #232323;
	}
	div.love div.pre span{
		color: #fe6600;
	}
	div.love p.dec{
		color: #777;
	}
	div.love p.price{
		color: #232323;
	}
	div.love{
		margin-bottom:8px;
	}
	div.foot{
		border-top:1px solid #eee;
		line-height:41px;
		text-align: center;
	}
	div.foot a{
		color: #9B9B9B;
		text-decoration:none;
	}
	div.compa,
	div.reso
	{
		margin-bottom: 8px;
	}
	div.compa img,
	div.reso img
	{
		width:100%;
		margin-bottom:-3px;
	}
	footer{
		background:#fff;
		border-bottom:1px solid #ccc;
	}
	footer ul{
		display: flex;
		width:100%;
		padding:16px 0px;
	}
	footer li{
		flex:1;
		background: #eee;
		text-align: center;
		line-height: 30px;
	}
	footer a{
		color: #444;
	    font-size: 12px;
	    text-decoration:none;
	}
	footer div.mid{
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		display: flex;
		padding:14px 0px;
	}
	footer div.mid span{
		flex:1;
		text-align:center;
		
	}
	footer span a{
		display: inline-block;
		height:0px;
		width:38px;
		padding-bottom:59px;
	}
	footer span.client a{
		background:url('../assets/images/icon-phonenew.png');
		background-size:100% 100%;
	}
	footer span.kefu a{
		background:url('../assets/images/icon-kefu.png');
		background-size:100% 100%;
	}
	footer div.bot{
		font-size: 12px;
	    text-align: center;
	    color: #ccc;
	    padding: 16px 0;
	}
</style>