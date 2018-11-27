<template>
	<div class="sort">
		<form action="#">
			<input type="text" placeholder="搜索鲜花、蛋糕、礼品"/>
			<router-link to='/pro'></router-link>
		</form>
		<section>
			<div class="left">
				<ul>
					<li v-for='(v,i) in left' :class='{curr:selected==i}' @click='change(i)'>{{v}}</li>
					
				</ul>
			</div>
			<div class="right">
				<div :class='{show:query(0)}'>
					<aside class="top">
						<router-link to='/pic'>
							<img src="../assets/images/18_thanksday_all_m.jpg" alt="" />
						</router-link>
						<span>
							<span class="wen">大家都在找</span>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in hot'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
					</aside>
				</div>
				<div :class='{show:query(1)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
							<div>
								<p>浪漫告白·卡罗拉红玫瑰11枝 ¥245</p>
							</div>
							<img src="../assets/images/all_cla_ban_business flower.jpg" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">用途</span>
							<router-link to='/bang'>鲜花排行榜></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in xian'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
						<p class="title">花材</p>
						<ul v-for='(v,i) in xian2.huacai'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
						<p class="title">类别</p>
						<ul v-for='(v,i) in xian2.style'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
						<p class="title">颜色</p>
						<table class="color">
							<tr v-for='(v,i) in xian2.color'>
								<td v-for='(x,j) in v'>
									<router-link to='/cor'>
										<b :style='"background:"+x.bac+";"'></b>
										<span>{{x.txt}}</span>
									</router-link>
									
								</td>
							</tr>
						</table>
						<p class="title">价格</p>
						<table class="color">
							<tr v-for='(v,i) in xian2.price'>
								<td v-for='(x,j) in v'>
									<router-link to='/cor'>
										<span>{{x.txt}}</span>
									</router-link>
									
								</td>
							</tr>
						</table>
						<p class="title">枝数</p>
						<table class="color">
							<tr v-for='(v,i) in xian2.num'>
								<td v-for='(x,j) in v'>
									<router-link to='/cor'>
										<span>{{x.txt}}</span>
									</router-link>
									
								</td>
							</tr>
						</table>
					</aside>
				</div>
				<div :class='{show:query(2)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
							<div>
								<p>永生花盒·维多利亚的花园 ¥329</p>
							</div>						
							<img src="../assets/images/all_cla_ban_freflowers.jpg" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">永生花</span>
							<router-link to='/bang'>永生花排行榜></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in flowevr'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
					</aside>
				</div>
				<div :class='{show:query(3)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
							<div>
								<p>永生花盒·维多利亚的花园 ¥329</p>
							</div>						
							<img src="../assets/images/all_cla_ban_cake.jpg" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">精选品牌蛋糕</span>
							<router-link to='/bang'></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in xian'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src4" alt="" />
									<p>{{x.p4}}</p>
								</router-link>
							</li>
						</ul>
						<p class="title">按城市选购</p>
						<table class="color">
							<tr v-for='(v,i) in xian2.city'>
								<td v-for='(x,j) in v'>
									<router-link to='/cor'>
										<span>{{x.txt}}</span>
									</router-link>
									
								</td>
							</tr>
						</table>
						<p class="title">全国配送蛋糕</p>
						<ul v-for='(v,i) in xian2.style'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src4" alt="" />
									<p>{{x.p4}}</p>
								</router-link>
							</li>
						</ul>
					</aside>
				</div>	
				<div :class='{show:query(4)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
							<div>
								<p>永生花盒·维多利亚的花园 ¥329</p>
							</div>						
							<img src="../assets/images/all_cla_ban__choclate.jpg" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">巧克力分类</span>
							<router-link to='/bang'>巧克力排行榜></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in flowevr'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
					</aside>
				</div>
				<div :class='{show:query(5)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
							<div>
								<p>永生花盒·维多利亚的花园 ¥329</p>
							</div>						
							<img src="../assets/images/all_cla_ban_gift.jpg" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">礼品分类</span>
							<router-link to='/bang'>巧克力排行榜></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in flowevr'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
						<p class="title">礼品用途</p>
						<table class="color">
							<tr v-for='(v,i) in xian2.price'>
								<td v-for='(x,j) in v'>
									<router-link to='/cor'>
										<span>{{x.txt6}}</span>
									</router-link>
									
								</td>
							</tr>
						</table>
					</aside>
				</div>
				<div :class='{show:query(6)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
							<div>
								<p>永生花盒·维多利亚的花园 ¥329</p>
							</div>						
							<img src="../assets/images/all_cla_ban_freflowers.jpg" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">品牌公仔</span>
							<router-link to='/bang'>永生花排行榜></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in flowevr'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
					</aside>
				</div>
				<div :class='{show:query(7)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
							<div>
								<p>永生花盒·维多利亚的花园 ¥329</p>
							</div>						
							<img src="../assets/images/all_cla_ban_freflowers.jpg" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">礼蓝</span>
							<router-link to='/bang'>永生花排行榜></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in flowevr'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
					</aside>
				</div>
				<div :class='{show:query(8)}'>
					<aside class="top">
						<router-link to='/pic' class='p'>
												
							<img src="../assets/images/plant_banner.png" alt="" />
						</router-link>
						<span class="wenwrap">
							<span class="wen">礼蓝</span>
							<router-link to='/bang'>永生花排行榜></router-link>
						</span>
					</aside>
					<aside class="mid">
						<ul v-for='(v,i) in flowevr'>
							<li v-for='(x,j) in v'>
								<router-link to='/pic'>
									<img :src="x.src" alt="" />
									<p>{{x.p}}</p>
								</router-link>
							</li>
						</ul>
					</aside>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				left:['热门推荐','鲜花','永生花','蛋糕','巧克力','特色礼品','品牌公仔','礼篮','绿植花卉'],
				selected:0,
				hot:[
					[
						{
							src:'src/assets/images/rose.png',
							p:'鲜花'
						},
						{
							src:'src/assets/images/rose.png',
							p:'鲜花'
						},
						{
							src:'src/assets/images/rose.png',
							p:'鲜花'
						}
					],
					[
						{
							src:'src/assets/images/yongshenghua.png',
							p:'永生花'
						},
						{
							src:'src/assets/images/yongshenghua.png',
							p:'鲜花'
						},
						{
							src:'src/assets/images/yongshenghua.png',
							p:'鲜花'
						}
					]
				
				],
				xian:[
					[
						{
							src:'src/assets/images/more_btn.png',
							src4:'src/assets/images/more_btn.png',				
							p4:'全部',
							p:'全部'
						},
						{
							src:'src/assets/images/aiqing.png',
							p:'爱情鲜花',
							src4:'src/assets/images/ganso.png',				
							p4:'元祖'
						},
						{
							src:'src/assets/images/rose.png',
							p:'鲜花',
							src4:'src/assets/images/21cake.jpg',				
							p4:'廿一客'
						}
					],
					[
						{
							src:'src/assets/images/aiqing.png',
							p:'永生花',
							src4:'src/assets/images/21cake.jpg',				
							p4:'廿一客'
						},
						{
							src:'src/assets/images/yongshenghua.png',
							p:'鲜花',
							src4:'src/assets/images/more_btn.png',				
							p4:'全部'
						},
						{
							src:'src/assets/images/yongshenghua.png',
							p:'鲜花',
							src4:'src/assets/images/more_btn.png',				
							p4:'全部'
						}
					]
				
				],
				xian2:{
					huacai:[
						[
							{
								src:'src/assets/images/redrose.png',
								p:'红玫瑰'
							},
							{
								src:'src/assets/images/redrose.png',
								p:'红玫瑰'
							},
							{
								src:'src/assets/images/redrose.png',
								p:'红玫瑰'
							}
						],
						[
							{
								src:'src/assets/images/fulang.png',
								p:'扶朗'
							},
							{
								src:'src/assets/images/fulang.png',
								p:'扶朗'
							},
							{
								src:'src/assets/images/fulang.png',
								p:'扶朗'
							}
						]	
					],
					style:[
						[
							{
								src:'src/assets/images/pingchahua.png',
								p:'瓶插花',
								src4:'src/assets/images/shuiguo.png',
								p4:'水果蛋糕'
							},
							{
								src:'src/assets/images/pingchahua.png',
								p:'瓶插花',
								src4:'src/assets/images/shuiguo.png',
								p4:'水果蛋糕'
							},
							{
								src:'src/assets/images/pingchahua.png',
								p:'瓶插花',
								src4:'src/assets/images/shuiguo.png',
								p4:'水果蛋糕'
							}
						],
						[
							{
								src:'src/assets/images/pingchahua.png',
								p:'瓶插花',
								src4:'src/assets/images/shuiguo.png',
								p4:'水果蛋糕'
							},
							{
								src:'src/assets/images/pingchahua.png',
								p:'瓶插花',
								src4:'src/assets/images/shuiguo.png',
								p4:'水果蛋糕'
							},
							{
								src:'src/assets/images/pingchahua.png',
								p:'瓶插花',
								src4:'src/assets/images/shuiguo.png',
								p4:'水果蛋糕'
							}
						]
					],
					color:[
						[
							{
								txt:'红色',
								bac:'red'
							},
							{
								txt:'粉色',
								bac:'pink'
							},
							{
								txt:'香槟色',
								bac:'orange'
							}
						],
						[
							{
								txt:'黄色',
								bac:'yellow'
							},
							{
								txt:'白色',
								bac:'#fff'
							},
							{
								txt:'紫色',
								bac:'purple'
							}
						],
						[
							{
								txt:'蓝色',
								bac:'blue'
							}
						]
					],
					price:[
						[
							{
								txt:'特价鲜花',
								txt6:'生日礼品'
							},
							{
								txt:'150元以下',
								txt6:'生日礼品'
							},
							{
								txt:'150-250元',
								txt6:'生日礼品'
							}
						],
						[
							{
								txt:'250-350元',
								txt6:'生日礼品'
							},
							{
								txt:'250-350元',
								txt6:'生日礼品'
							},
							{
								txt:'250-350元',
								txt6:'生日礼品'
							}
						],
						[
							{
								txt:'880元以上',
								txt6:'生日礼品'
							}
						]
					],
					num:[
						[
							{
								txt:'9枝'
							},
							{
								txt:'10枝'
							},
							{
								txt:'11枝'
							}
						],
						[
							{
								txt:'12枝'
							},
							{
								txt:'16枝'
							},
							{
								txt:'18枝'
							}
						],
						[
							{
								txt:'19枝'
							},
							{
								txt:'20枝'
							},
							{
								txt:'22枝'
							}
						],
						[
							{
								txt:'29枝'
							},
							{
								txt:'33枝'
							},
							{
								txt:'36枝'
							}
						],
						[
							{
								txt:'50枝'
							},
							{
								txt:'66枝'
							},
							{
								txt:'99枝以上'
							}
						]
					],
					city:[
						[
							{
								txt:'北京'
							},
							{
								txt:'上海'
							},
							{
								txt:'深圳'
							}
						],
						[
							{
								txt:'广州'
							},
							{
								txt:'重庆'
							},
							{
								txt:'成都'
							}
						],
						[
							{
								txt:'沈阳'
							},
							{
								txt:'青岛'
							},
							{
								txt:'大连'
							}
						],
						[
							{
								txt:'杭州'
							},
							{
								txt:'南京'
							},
							{
								txt:'苏州'
							}
						],
						[
							{
								txt:'济南'
							},
							{
								txt:'天津'
							},
							{
								txt:'长沙'
							}
						],
						[
							{
								txt:'武汉'
							},
							{
								txt:'郑州'
							},
							{
								txt:'贵阳'
							}
						],
						[
							{
								txt:'南昌'
							},
							{
								txt:'合肥'
							},
							{
								txt:'更多'
							}
						]
					]
				},
				flowevr:[
					[
						{
							src:'src/assets/images/more_btn.png',
							p:'全部'
						},
						{
							src:'src/assets/images/jingdianhuahe.png',
							p:'经典花盒'
						},
						{
							src:'src/assets/images/juxingmeigui.png',
							p:'巨型玫瑰'
						}
					],
					[
						{
							src:'src/assets/images/yongshenghua.png',
							p:'永生花'
						},
						{
							src:'src/assets/images/yongshenghua.png',
							p:'鲜花'
						},
						{
							src:'src/assets/images/yongshenghua.png',
							p:'鲜花'
						}
					]
				
				]
			}
		},
		methods:{
			change(n){
				this.selected=n;
			},
			query(n){
				if(this.selected==n){
					return true;
				}else{
					return false;
				}
			}
		},
		created(){
			this.$emit('sor',1);
		}
	}
</script>

<style scoped>
	div.sort form{
		text-align:center;
		padding:7px 0px;
		position: relative;
	}
	div.sort form input{
		width:90%;
		line-height:30px;
		outline: none;
		border:1px solid #fff;
		text-indent: 5px;
    	font-size: 12px;
	}
	div.sort form a{
		position: absolute;
		right:30px;
		top:12px;
		background-size:24px;
		width:24px;
		height:24px;
		background-position:0px 0px;
		background-image:url('../assets/images/icon_Search.png')
	}
	section{
		font-size:12px;
		overflow: hidden;
		background:#fff;
	}
	div.left{
		width:25%;
		line-height: 48px;
		text-align: center;
		font-size:12px;
		color:#333;
		float:left;
		padding-bottom:21px;
		background:#eee;
	}
	div.left .curr{
		background:#fff;
		color: #f60;
	}
	div.right{
		width:75%;
		float:right;
		background:#fff;
		padding:0px 8px;
		box-sizing:border-box;
		height:453px;
		overflow-y:scroll;
	}
	div.right aside.top{
		overflow: hidden;
	}
	div.right aside.top a div{
		position: absolute;
		width:100%;
		height:100%;
		top:0px;
		left:0px;
		background:rgba(0,0,0,0.3);
	}
	div.right aside.top a.p{
		position:relative;
	}
	div.right aside.top p{
		color:#fff;
		text-align:center;
		position: absolute;
		top:50%;
		left:0px;
		width:100%;
		margin-top:-8px;
	}
	div.right aside.top span.wenwrap{
		color:#333;
		overflow: hidden;
		float:left;
		width:100%;
	}
	div.right aside.top span a{
		text-decoration: none;
		color:#333;
		margin:19px 0px 21px;
		float:right;
	}
	div.right aside.top span.wen{
		margin:19px 0px 21px;
		float:left;
	}
	div.right aside.top a{
		float:right;
		text-decoration:none;
		color:#333;
	}
	div.right aside.top img{
		width:100%;
		display: block;
	}
	div.right aside.mid ul{
		display: flex;
		width:100%;
	}
	div.right aside.mid li{
		flex:1;
		text-align: center;
	}
	div.right aside.mid a{
		text-decoration: none;
		font-size: 12px;
		color: #666;
		text-align: center;
	}
	div.right aside.mid p{
		margin-bottom: 5px;
	}
	div.right aside.mid p.title{
		text-align: left;
		margin:19px 0px 21px;
	}
	div.right aside.mid img{
		width:56px;
	}
	
	table{
		border-collapse:collapse;
	}
	table,
	table tr
	{
		width:100%;	
	}
	table td{
		width:33.3%;
		text-align: center;
		line-height:48px;
		border:1px solid #ccc;
	}
	table.color b{
		display: inline-block;
		width:20px;
		height:20px;
		vertical-align: middle;
		border:1px solid #ccc;
	}
	table a{
		text-decoration:none;
		font-size:12px;
		color: #666;
	}
	div.right>div.show{
		display: block;
	}
	div.right>div{
		display: none;
	}
</style>