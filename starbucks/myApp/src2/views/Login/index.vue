<template>
    <div class="info">
        <section >
            <p>
                <input type="text" placeholder="请输入手机号码" v-model="phone_value">
            </p>
            <p>
                <input type="password" placeholder="请输入密码" v-model="pwd_value">
            </p>
            <button class="loginbtn" @click="handleLogin">登录</button>
        </section>
    </div>
</template>
<script>
import request from '@/utils/request';
const phonereg=/^1[3579]\d{9}$/;
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            phone_value:'',
            pwd_value:''
        }
    },
    computed:{

    },
    methods:{
        handleLogin(){
            if(phonereg.test(this.phone_value)&&this.pwd_value.trim()!==''){
                request.post('/api/login',{
                    phone:this.phone_value,
                    password:this.pwd_value
                }).then(res=>{
                    console.log(res)
                    window.localStorage.setItem('token',res.token)
                    this.$router.back()
                }).catch(error=>{
                    console.log(error)
                })
            }else{
                alert('亲输入正确的用户名或密码')
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '@/static/common.scss';
    .info{
        width: 100%;
        height: 100%;
        section{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            p{
                width: 100%;
                height: pxTorem(50px);
                display: flex;
                justify-content: center;
                align-items: center;
                input{
                    width: 80%;
                    height: pxTorem(40px);
                    border:solid 1px #bbb;  
                    padding-left: pxTorem(10px);
                    font-size: pxTorem(15px);
                }
            }
            button{
                width: pxTorem(100px);
                height: pxTorem(30px);
                font-size: pxTorem(15px);
                margin-top: pxTorem(10px);
            }
        }
    }
</style>