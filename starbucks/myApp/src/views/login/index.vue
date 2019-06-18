<template>
  <div class="wrap">
    <div class="top">
      <p class="back">X</p>
      <h2 class="tit">欢迎来到星享俱乐部</h2>
    </div>
    <div class="cont">
        <div>
            <input type="text" placeholder="手机号码" class="inp" v-model="phone_value">
            <input type="password" placeholder="密码" class="inp" v-model="pwd_value"><label for="">获取验证码</label>
        </div>
        <button class="btn" @click="loginClick">登录/注册</button>
        <p class="deng">使用账号密码登录</p>
        <div class="bottom">
            <p>使用以下方式进行登录/注册</p>
            <span class="iconfont icon-taobao-copy
 tao"></span>
            <span class="iconfont icon-zhifubao"></span>
        </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/'
const iphone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
export default {
    data() {
        return {
            phone_value: "",
            pwd_value: ""
        }
    },
    methods: {
        loginClick() {
            if(iphone.test(this.phone_value) && this.pwd_value != "") {
                api.userlogin( {
                    phone: this.phone_value,
                    password: this.pwd_value
                }).then(res=>{
                    window.localStorage.setItem("token", res.token)
                    this.$router.push("/home")
                }).catch(error=>{
                    console.log(error.response.data.message)
                })
            } else if (this.phone_value === "" && this.pwd_value === "") {
                alert("请输入账号和密码")
            } else {
                alert("请输入正确的手机号或者密码！")
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import '../../uitls/scss/_minix';
@import '../../uitls/font_login/iconfont.css';
html,
body,
.wrap {
  width: 100%;
  height: 100%;
}
.wrap {
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
    height: 200px;
    .back {
      font-size: 50px;
      margin-left: 20px;
      margin-top: 10px;
    }
    .tit {
      margin-left: 20px;
      margin-top: 10px;
      font-size: 50px;
      font-weight: 900;
    }
  }
  .cont {
      flex: 1;
      overflow: hidden;
      background: #F8F8F6;
      box-shadow: 0 -20px 0 -0 #f4f4f4;
      .inp {
          width: 94%;
          height: 70px;
          border-bottom: 1px solid #ccc;
          line-height: 70px;
          margin-left: 20px;
          margin-top: 40px;
          font-size: 30px;
          color: #ABABAB;
      }
      label {
          margin-left: -120px;
          color: #ABABAB;
      }
      .btn {
          width: 94%;
          height: 100px;
          background: #D4D4D4;
          border-radius: 50px;
          margin-top: 200px;
          margin-left: 20px;
          color: #fff;
          font-size: 40px;
          text-align: center;
          line-height: 100px;
          outline: none;
          border: none
      }
      .deng {
          color: #04A363;
          font-size: 30px;
          margin-top: 100px;
          margin-left: 240px;
      }
      .bottom {
          width: 100%;
          height: 200px;
          margin-top: 200px;
          p {
              font-size: 28px;
              text-align: center;
              color: #676767;
          }
          span {
              display: inline-block;
              margin-top: 50px;
              font-size: 80px;
              color: #01AEF2
          }
          .tao {
              margin-left: 260px;
              margin-right: 50px;
              font-size: 85px;
              color: #FCA301;
          }
      }
  }
}
</style>
