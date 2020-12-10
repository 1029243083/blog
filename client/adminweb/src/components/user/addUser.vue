<template>
  <div>
    <el-alert title="头像最大上传5M" type="error"> </el-alert>
    <div class="box">
      <input type="file" ref="inp" accept="image/*" />
    </div>
    <!-- <div class="box">
      <span>portrait:</span>
      <el-input size="mini" v-model="imgUrl"></el-input>
    </div> -->
    <div class="box">
      <span>name:</span>
      <el-input size="mini" v-model="name"></el-input>
    </div>
    <div class="box">
      <span>address:</span>
      <el-input size="mini" v-model="address"></el-input>
    </div>
    <div class="box">
      <span>loginId:</span>
      <el-input size="mini" v-model="loginId"></el-input>
    </div>
    <div class="box">
      <span>loginPwd:</span>
      <el-input size="mini" v-model="loginPwd"></el-input>
    </div>
    <el-button type="primary" size="mini" round @click="commit">提交</el-button>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data() {
    return {
      imgUrl: "",
      name: "",
      address: "",
      loginId: "",
      loginPwd: "",
    };
  },
  methods: {
    async commit() {
      const { inp } = this.$refs; //获取input
      const formData = new FormData(); //获取form对象 主要是会自动生成格式
      formData.append("img", inp.files[0], inp.files[0].name); //往这个对象值添加图片数据
      const config = {
        headers: { "Content-Type": "multipart/form-data" }, //设置消息头
      };
      const res = await http.post("/api/upload", formData, config); //等待返回的路劲
      const url = res.data.date;
      const { name, address, loginId, loginPwd } = this;
      const userRes = await http.post("/api/user", {
        portrait: url,
        name,
        address,
        loginId,
        loginPwd,
      });
      console.log(userRes)
      if(userRes.data.code === 200){
        this.$message.success('添加用户成功');
        this.$router.push('/user');
      }
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: 15px;
}
.box span {
  display: inline-block;
  width: 100px;
  margin-right: 15px;
}
.el-alert {
  margin-bottom: 15px;
}
.el-button {
  margin-left: 130px;
}
</style>