<template>
  <div>
    <el-table :data="formData" stripe style="width: 100%">
      <el-table-column align="center" prop="id" label="用户id" width="160%">
      </el-table-column>
      <el-table-column align="center" prop="name" label="用户名" width="160%">
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="用户地址"
        width="160%"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="createdAt"
        label="用户创建时间"
        width="160%"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="updatedAt"
        label="用户修改时间"
        width="160%"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="loginId"
        label="用户账号"
        width="160%"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="loginPwd"
        label="用户密码"
        width="160%"
      >
      </el-table-column>
      <el-table-column
        align="center"
        prop="loginPwd"
        label="用户头像"
        width="160%"
      >
        <template slot-scope="scope">
          <!-- {{ scope.row }} -->
          <img :src="scope.row.portrait" alt="" class="img" />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @prev-click="preClick"
      @next-click="nextClick"
      @current-change="currentClick"
    >
    </el-pagination>
  </div>
</template>

<script>
import { http } from "../../axios";
export default {
  data() {
    return {
      formData: [],
      now: 0,
      size: 5,
      total: 0,
    };
  },
  async created() {
    await this.getData();
  },
  methods: {
    preClick(i) {
      this.now = i - 1;
      this.getData();
    },
    nextClick(i){
      this.now = i;
      this.getData();
    },
    currentClick(i){
      this.now = i -1;
      this.getData();
    },
    async getData() {
      const res = await http.get(
        `/api/user?offset=${this.now}&limit=${this.size}`
      );
      this.formData = res.data.date.rows;
      this.total = res.data.date.count;
    },
  },
};
</script>

<style scoped>
.el-table {
  font-size: 12px;
}
.img {
  width: 50px;
  height: 50px;
}
</style>