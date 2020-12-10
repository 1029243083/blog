<template>
  <div class="box">
    <el-row>
      <el-col :span="2">
        <span>内容:</span>
      </el-col>
      <el-col :span="20">
        <el-input v-model="content"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <span>用户id:</span>
      </el-col>
      <el-col :span="20">
        <el-input v-model="userId"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="10">
        <el-button type="primary" @click="commit">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data() {
    return {
      content: "",
      userId: "",
    };
  },
  methods: {
    async commit() {
      const res = await http.post("/api/leavingmsg", {
        content: this.content,
        UserId: +this.userId,
      });
      if(res.data.code === 200){
          this.$message.success('添加成功');
          this.$router.push('/message')
      }
    },
  },
};
</script>

<style scoped>
.box {
  margin: 0 auto;
  width: 600px;
}
.el-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
</style>