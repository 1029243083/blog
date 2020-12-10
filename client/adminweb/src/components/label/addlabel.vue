<template>
  <div class="box">
      <div class="txt">
          标签内容
      </div>
      <div class="inp">
          <el-input v-model="txt"></el-input>
      </div>
      <div class="btn">
          <el-button type='primary' @click="commit">提交</el-button>
      </div>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data() {
    return {
      txt:''
    };
  },
  methods: {
   async commit(){  
       const res = await http.post('/api/label',{
           txt:this.txt
       })
       console.log(res)
       if(res.data.code === 200){
           this.$message.success('添加成功');
           this.$router.push('/label');
       }else{
           this.$message.error('添加失败');
       }
    }
  },
};
</script>

<style scoped>
.txt{
    width: 100px;
}
.box{
    display: flex;
    align-items: center;
}
.btn{
    margin-left: 15px;
}
</style>