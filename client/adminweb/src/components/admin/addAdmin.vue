<template>
  <div class="box">
    <el-row>
      <el-col class="text" :offset="7" :span="1">loginId:</el-col>
      <el-col :span="6">
        <el-input size="mini" placeholder="请输入账号" v-model="loginId"></el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col class="text" :offset="7" :span="1">loginPwd:</el-col>
      <el-col :span="6">
        <el-input size="mini" placeholder="请输入密码" v-model="loginPwd"></el-input>
      </el-col>
    </el-row>

    <el-row class="btn">
      <el-button type="primary" plain size="mini" @click="ok">提交</el-button>
      <el-button type="danger" plain size="mini" @click="no">重置</el-button>
    </el-row>
  </div>
</template>

<script>
import {http} from '../../axios';
export default {
  data(){
    return{
      loginId:'',
      loginPwd:''
    }
  },
  methods:{
   async ok(){
     const res = await http.post('/api/admin',{
       loginId:this.loginId,
       loginPwd: this.loginPwd
     });
     console.log(res)
     if(res.data.code === 200){
       this.$message.success('添加成功');
       this.no();
       this.$router.push('/admin')
     }
    },
    no(){
      this.loginId = '',
      this.loginPwd = ''
    }
  }
};
</script>

<style scoped>
.el-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.text {
  margin-right: 25px;
}
.btn {
  padding-top: 20px;
  padding-left: 520px;
}

.box {
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 15px;
  background-color: #fff;
  animation: box 0.5s;
  /* border-bottom: 1px solid #f56c6c;
  border-top: 1px solid #f56c6c;
  border-left: 1px solid #67c23a;
  border-right: 1px solid #67c23a; */
  box-shadow: 0px 1px 50px rgba(0, 0, 0, 0.5);
}
@keyframes box {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>