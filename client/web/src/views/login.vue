<template>
  <div class="box">
      <div class="center">
          <div>
            <input type="text" placeholder="请输入Id" v-model="loginId">
        </div>
        <div>
          <input type="password" placeholder="请输入密码" v-model="loginPwd">
        </div>
        <div>
            <button @click="login">登录</button>
            <button @click="$router.push('/register')" :style="{marginLeft:'15px'}">去注册</button>
        </div>
      </div>
  </div>
</template>

<script>
import {http} from '../axios'
export default {
    data(){
        return{
            loginId:'',
            loginPwd:''
        }
    },
    methods:{
       async login(){
           const res = await http.post('/api/user/loginUser',{
               loginId:this.loginId,
               loginPwd:this.loginPwd
           })
           console.log(res)
           if(res.data.code === 200){
               this.window.alert('登录成功');
               //跳转留言页
               
               this.$router.push('/blog');
               this.window.localStorage.setItem('login','true');
               this.$store.commit('changeUser',res.data.date[0]);
           }
        //    console.log(this.window.alert());
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 100%;
    background-image: url('../assets/11.jpg');
}
.center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
input{
    border: none;
    outline: none;
    width: 300px;
    height: 30px;
    padding-left: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
}
button{
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
    background: rgb(90, 144, 243);
}
</style>