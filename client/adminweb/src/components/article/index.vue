<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input placeholder="请输入文章标题" v-model="searchTitle"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="search">搜索</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="getData">返回全部</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%" size="mini">
      <el-table-column align="center" prop="id" label="id" width="180">
      </el-table-column>
      <el-table-column align="center" prop="title" label="文章标题" width="180">
      </el-table-column>
      <el-table-column align="center" prop="content" label="文章内容">
      </el-table-column>
      <el-table-column align="center" prop="visitNum" label="观看次数">
      </el-table-column>
      <el-table-column align="center" prop="createdAt" label="创建时间">
      </el-table-column>
      <el-table-column align="center" prop="updatedAt" label="修改时间">
      </el-table-column>
      <el-table-column>
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
import E from "wangeditor";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      searchTitle: "",
    };
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      const res = await http.get("/api/article");
      this.tableData = res.data.date;
    },
    handleEdit(index, row) {
      this.$router.push(`edit/${row.id}`);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const res = await http.delete(`/api/article/${row.id}`);
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
    async search() {
      const res = await http.get(`/api/article/title/${this.searchTitle}`);
      this.tableData = res.data.date;
    },
  },
};
</script>

<style>
</style>