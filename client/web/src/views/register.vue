<template>
  <div class="box">
    <div class="center">
      <div>
        <input type="text" placeholder="请输入loginId" v-model="loginId" />
      </div>
      <div>
        <input type="password" placeholder="请输入密码" v-model="loginPwd" />
      </div>
      <div>
        <input type="text" placeholder="请输入地址" v-model="address" />
      </div>
      <div>
        <input type="text" placeholder="name" v-model="name" />
      </div>
      <div>
        <input
          type="file"
          ref="inp"
          :style="{ color: '#fff' }"
          accept="image/*"
        />
      </div>
      <div>
        <button @click="commit">注册</button>
      </div>
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
      address: "",
      name: "",
      portrait: "",
    };
  },
  created(){
      console.log(this.window)
  },
  methods: {
    async commit() {
      const { inp } = this.$refs; //获取input
      const formData = new FormData(); //获取form对象 主要是会自动生成格式
      formData.append("img", inp.files[0], inp.files[0].name); //往这个对象值添加图片数据
      const config = {
        headers: { "Content-Type": "multipart/form-data" }, //设置消息头
      };
      const resurl = await http.post("/api/upload", formData, config); //等待返回的路劲
      const url = resurl.data.date;
      console.log(url);
      this.portrait = url;
      const { loginId, loginPwd, address, name, portrait } = this;
      const res = await http.post('/api/user',{
          loginId,
          loginPwd,
          address,
          name,
          portrait
      })
      console.log(res)
      if(res.data.code === 200){
        this.window.alert('注册成功');
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-image: url("../assets/11.jpg");
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
input {
  border: none;
  outline: none;
  width: 300px;
  height: 30px;
  padding-left: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
}
button {
  outline: none;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  color: #fff;
  background: rgb(90, 144, 243);
}
</style>