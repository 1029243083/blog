<template>
  <div>
    <el-row>
      <el-col>
        <el-input placeholder="请输入标题" v-model="title"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input placeholder="请输入观看次数" v-model="visitNum"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input placeholder="请输入留言数" v-model="leavingMsgNum"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input placeholder="请输标签id" v-model="typeId"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input
          type="textarea"
          placeholder="请输入文章描述"
          v-model="content"
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input placeholder="请输文章id" v-model="articleId"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <input type="file" ref="inp" accept="image/*" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
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
      imgUrl: "",
      title: "",
      visitNum: "",
      leavingMsgNum: "",
      typeId: "",
      articleId: "",
      content: "",
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
      this.imgUrl = url;
      const {
        imgUrl,
        title,
        visitNum,
        leavingMsgNum,
        typeId,
        articleId,
        content,
      } = this;
      console.log(imgUrl);
      const result = await http.post("/api/articleList", {
        img: imgUrl,
        title,
        visitNum,
        leavingMsgNum,
        typeId,
        articleId,
        content,
      });
      console.log(result);
      if (result.data.code === 200) {
        this.$message.success("添加成功");
        this.$router.push("/list");
      }
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 15px;
}
</style>