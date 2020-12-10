<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column align="center" prop="id" label="留言id" width="180"> </el-table-column>
      <el-table-column align="center" prop="content" label="留言内容" width="180"> </el-table-column>
      <el-table-column align="center" prop="UserId" label="用户id"> </el-table-column>
      <el-table-column align="center" prop="createdAt" label="创建时间"> </el-table-column>
      <el-table-column align="center" prop="updatedAt" label="修改时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data(){
    return{
      tableData:[]
    }
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      const res = await http.get("/api/leavingmsg");
      console.log(res);
      this.tableData = res.data.date.rows;
    },
  },
};
</script>

<style>
</style>