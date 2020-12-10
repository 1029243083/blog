<template>
  <div>
    <el-row>
      <el-col :span="15">
        <el-input v-model="str" placeholder="请入文章标题"></el-input>
      </el-col>
      <el-col :span="5">
        <el-button type="primary" @click="sreach">搜索</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="all">搜索全部</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%" size="mini">
      <el-table-column align="center" prop="id" label="列表id" width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="articleId"
        label="文章id"
        width="180"
      >
      </el-table-column>
      <el-table-column align="center" prop="typeId" label="标签id">
      </el-table-column>
      <el-table-column align="center" prop="img" label="图片地址">
      </el-table-column>
      <el-table-column align="center" prop="title" label="标题">
      </el-table-column>
      <el-table-column align="center" prop="visitNum" label="观看次数">
      </el-table-column>
      <el-table-column align="center" prop="leavingMsgNum" label="留言条数">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data() {
    return {
      tableData: [],
      count: 0,
      str: "",
    };
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      const res = await http.get("/api/articleList");
      console.log(res);
      this.count = res.data.date.count;
      this.tableData = res.data.date.rows;
    },
    async sreach() {
      const res = await http.get(`/api/articleList/title/${this.str}`);
      console.log(res);
      this.tableData = res.data.date;
    },
    async all() {
      await this.getData();
      this.str = "";
    },
    handleEdit(index, row) {
      this.$router.push("listedit/1");
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const res = await http.delete(`/api/articleList/${row.id}`);
          console.log(res);
          if (res.data.code === 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            await this.getData();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
</style>