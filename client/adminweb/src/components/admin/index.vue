<template>
  <div v-loading="loading">
    <el-row class="inp">
      <el-col :span="12">
        <el-input
          placeholder="根据管理员id查询"
          prefix-icon="el-icon-search"
          v-model="search"
        >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleSearch"
            slot="append"
            >搜索</el-button
          >
        </el-input>
      </el-col>
    </el-row>
    <el-table :data="data" style="width: 100%" size="mini" stripe>
      <el-table-column
        align="center"
        prop="id"
        label="id"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="loginId"
        label="loginId"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="loginPwd"
        label="loginPwd"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="createdAt"
        label="创建时间"
        width="180"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="updatedAt"
        label="修改时间"
        width="180"
      ></el-table-column>
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

    <el-dialog :title="title" :visible="visible">
      <el-form :model="newData" ref="ruleForm" :rules="rules" status-icon>
        <el-form-item prop="loginId">
          <el-col :span="3">
            <span>loginID</span>
          </el-col>
          <el-col :span="11">
            <el-input v-model="newData.loginId"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item prop="loginPwd">
          <el-col :span="3">
            <span>loginPWD</span>
          </el-col>
          <el-col :span="11">
            <el-input v-model="newData.loginPwd"></el-input>
          </el-col>
        </el-form-item>
      </el-form>

      <div class="dialog-footer">
        <el-button type="warning" @click="closeClick">取 消</el-button>
        <el-button type="primary" @click="okClick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data() {
    return {
      data: [],
      title: "",
      visible: false,
      formData: {},
      newData: {},
      id: "",
      loading: false,
      search: "",
      rules: {
        loginId: [
          { required: true, message: "请输入管理员id", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
        ],
        loginPwd: [
          { required: true, message: "请输入管理员id", trigger: "blur" },
          {
            min: 1,
            max: 15,
            message: "长度在 1 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  async created() {
    await this.getDate();
    this.loading = false;
  },
  mounted() {
    this.loading = true;
  },
  methods: {
    handleEdit(index, info) {
      this.title = "修改管理员";
      this.visible = true;
      this.formData = info;
      this.newData = { ...info };
      this.id = info.id;
    },
    handleDelete(index, info) {
      this.title = "删除管理员";
      this.id = info.id;
      this.$confirm("此操作将永久删除该管理员, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          this.loading = true;
          await http.delete(`/api/admin/${this.id}`);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          await this.getDate();
          this.loading = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    closeClick() {
      this.visible = false;
      this.newData = this.formData;
    },
    async okClick() {
      const { id, loginId, loginPwd } = this.newData;
      this.loading = true;
      this.visible = false;
      await http.put(`/api/admin/${id}`, { loginId, loginPwd });
      await this.getDate();
      this.loading = false;
    },
    async getDate() {
      const res = await http.get("/api/admin");
      this.data = res.data.date;
    },
    async handleSearch() {
      this.loading = true;
      const res = await http.get(`/api/admin/${this.search}`);
      this.loading = false;
      this.data = [res.data.date];
    },
  },
};
</script>

<style scoped>
.dialog-footer {
  margin-left: 500px;
}
.inp {
  margin-bottom: 20px;
}
</style>