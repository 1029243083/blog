<template>
  <div class="content">
    <div class="center"></div>
    <div class="login">
      <p>个人博客后台系统</p>
      <!-- -------------------------------------------------------------- -->
      <div>
        <i class="el-icon-user-solid"></i>
        <input type="text" v-model="loginId" placeholder="请输入账号" />
      </div>
      <!-- -------------------------------------------------------------- -->
      <div>
        <i class="el-icon-lock"></i>
        <input type="password"  v-model="loginPwd" placeholder="请输入密码" />
      </div>
      <!-- -------------------------------------------------------------- -->
      <div>
        <button class="btn" @click="handleClick">Login</button>
      </div>
      <!-- -------------------------------------------------------------- -->
      <div>-------欢迎你--------</div>
      <!-- -------------------------------------------------------------- -->
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!-- -------------------------------------------------------------- -->
    </div>
  </div>
</template>

<script>
import { http } from "../axios";
export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  methods: {
    async handleClick() {
      const { loginId, loginPwd } = this;
      const res = await http.post("/api/admin/login", {
        loginId,
        loginPwd,
      });
      const code = res.data.code;
      if(code === 200) {
          //登录成功
          this.$message.success('登录成功');
          this.$router.push('/');
      }else{
          //登录失败
          this.$message.error('账号密码错误')
      }
    },
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  background-image: url("../assets/timg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  background-color: #000;
  opacity: 0.5;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  animation: login 0.5s;
  padding: 10px;
}
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #fff;
  animation: login 0.5s;
  text-align: center;
}
.login p {
  margin-bottom: 15px;
}
.login div {
  position: relative;
  margin-bottom: 15px;
  border-radius: 18px;
}
.login div input {
  padding: 0 15px;
  padding-left: 25px;
  box-sizing: border-box;
  width: 285px;
  height: 45px;
  border: 1px solid #fff;
  border-radius: 18px;
  outline: none;
  color: #fff;
  background-color: transparent;
}
input::-webkit-input-placeholder {
  color: #fff;
}
.el-icon-user-solid {
  position: absolute;
  left: 15px;
  top: 13px;
}
.el-icon-lock {
  position: absolute;
  top: 13px;
  left: 15px;
}
.btn {
  width: 280px;
  height: 46px;
  background-color: #409eff;
  outline: none;
  border: none;
  color: #fff;
  transition: all 0.5s;
  border-radius: 23px;
}
.btn:hover {
  font-size: 20px;
}
.box {
  padding-left: 116px;
  display: flex;
}
.box div {
  width: 10px;
  height: 10px;
  background-color: teal;
  margin-right: 15px;
}
.box div:nth-of-type(1) {
  background-color: #67c23a;
  box-shadow: 0 0 3px 3px rgba(103, 194, 58, 0.5);
  animation: shadow1 1s infinite;
}
.box div:nth-of-type(2) {
  background-color: rgba(230, 162, 60);
  box-shadow: 0 0 3px 3px rgba(230, 162, 60, 0.5);
  animation: shadow2 1s infinite;
}
.box div:nth-of-type(3) {
  background-color: #f56c6c;
  box-shadow: 0 0 3px 3px rgba(245, 108, 108, 0.5);
  animation: shadow3 1s infinite;
}
@keyframes login {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes shadow1 {
  0% {
    box-shadow: 0 0 3px 3px rgba(103, 194, 58, 0.5);
  }
  100% {
    box-shadow: 0 0 3px 5px rgba(103, 194, 58, 0.5);
  }
}
@keyframes shadow2 {
  0% {
    box-shadow: 0 0 3px 3px rgba(230, 162, 60, 0.5);
  }
  100% {
    box-shadow: 0 0 3px 5px rgba(230, 162, 60, 0.5);
  }
}
@keyframes shadow3 {
  0% {
    box-shadow: 0 0 3px 3px rgba(245, 108, 108, 0.5);
  }
  100% {
    box-shadow: 0 0 3px 5px rgba(245, 108, 108, 0.5);
  }
}
</style>