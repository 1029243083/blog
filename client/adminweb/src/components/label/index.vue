<template>
  <div>
    <el-table size="mini" :data="tableData" stripe style="width: 100%">
      <el-table-column
        align="center"
        prop="txt"
        label="标签内容"
        width="180"
      ></el-table-column>
      <el-table-column align="center" prop="id" label="标签id" width="180">
      </el-table-column>
      <el-table-column align="center" prop="createdAt" label="创建时间">
      </el-table-column>
      <el-table-column align="center" prop="updatedAt" label="修改时间">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="open(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="修改标签"
      :visible="dialogVisible"
      width="30%"
      :before-close="close"
    >
      <el-input v-model="edit"></el-input>
      <el-button class="btn" type="primary" @click="editCommit">提交</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      edit: "",
      id: "",
    };
  },
  async created() {
    const res = await this.getData();
  },
  methods: {
    async getData() {
      const result = await http.get("/api/label");
      this.tableData = result.data.date;
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.edit = row.txt;
      this.id = row.id;
    },
    handleDelete(index, row) {
      console.log(row);
    },
    close() {
      this.dialogVisible = false;
    },
    async editCommit() {
      console.log(this.edit);
      const res = await http.put(`/api/label/${this.id}`, {
        txt: this.edit,
      });
      console.log(res);
      if (res.data.code === 200) {
        this.$message.success("修改成功");
        await this.getData();
        this.dialogVisible = false;
      }
    },
    open(index, row) {
      this.id = row.id;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const res = await http.delete(`/api/label/${this.id}`);
          console.log(res);
          if (res.data.code === 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getData();
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

<style scoped>
.btn {
  margin-top: 15px;
  margin-left: 160px;
}
</style>