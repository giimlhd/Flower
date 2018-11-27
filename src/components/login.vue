<template>
	<div class="login">
		<p class="close"><b @click='back()'>X</b></p>
		<section>
			<div class="logo">
				<img src="../assets/images/m_hualogo.png" alt="" />
			</div>
			<div class="inp fi">
				<input type="text" placeholder="请输入手机号"/>
				<div class="mar">
					<b></b>
				</div>
			</div>
			<div class="wrapin">
				<div class="inp">
					<input type="text" placeholder="请输入短信验证码"/>
					<div class="mar">
						<b></b>
					</div>
				</div>
				<div class="get">
					获取验证码
				</div>
			</div>
			<button>手机登陆/注册</button>
			<div class="bubtom">
				<router-link to='/lo'>账号密码登录</router-link>
				<router-link to='/reg'>注册</router-link>
			</div>
		</section>
		<footer>
			<ul>
				<li>
					<router-link to='/qq'>QQ</router-link>
				</li>
				<li>
					<router-link to='/zhi'>支付宝</router-link>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	div.login{
		position: fixed;
		width:100%;
		height:100%;
		background:#fff;
		z-index: 4;
	}
	section{
		padding:0px 16px;
		margin-top:12px;
		width:100%;
		box-sizing: border-box;
	}
	p.close{
		padding-left:11px;
		overflow: hidden;
		height: 44px;
	}
	p.close b{
		float:left;
		width:20px;
		height:20px;
		font-size:20px;
		line-height: 44px;
		font-weight: 100;
		color:#494949;
	}
	div.logo{
		text-align: center;
		margin-bottom: 44px;
	}
	 div.logo img{
		width:190px;
	}
	div.fi,
	div.wrapin{
		width:100%;
		overflow: hidden;
		border-bottom: 1px solid #e9ecf0;
		line-height: 44px;
	}
	div.inp input{
		border:none;
		outline: none;
		line-height: 44px;
		display: block;
		width:100%;
		padding-right:44px;
		box-sizing: border-box;
		font-size: 14px;
	}
	div.wrapin{
		display: flex;
		margin-top:8px;
	}
	div.wrapin div.inp{
		flex: 1;
	}
	div.get{
		color: #71797f;
		font-size: 13px;
		text-align: center;
	}
	div.mar{
		position: absolute;
		width:44px;
		line-height: 44px;
		height:44px;
		right:0px;
		top:0px;
	}
	div.inp{
		position: relative;
	}
	button{
		display: block;
		margin-top:45px;
		text-align:center;
		color: hsla(0,0%,100%,.5);
		width:100%;
		line-height:46px;
		font-size: 16px;
	    box-shadow: 0 4px 8px 0 #ffb6a2;
	    border-radius: 100px;
	    outline: none;
	    background: #ff734c;
	    border:none;
	}
	div.bubtom{
		overflow: hidden;
		margin-top:16px;
	}
	div.bubtom a{
		text-decoration:none;
		color: #71797f;
		font-size: 14px;
		padding-right:14px;
		float:left;
		line-height: 36px;
		background:url('../assets/images/chevronRight@2x (1).png') no-repeat;;
		background-size:14px 14px;
		background-position:right center;
	}
	div.bubtom a:nth-child(2){
		float:right;
	}
</style>