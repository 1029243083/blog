<template>
  <div>
    <el-input placeholder="请输入标题" v-model="title"></el-input>
    <div ref="edit"></div>
    <el-button type="primary" @click="commit">提交</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
import { http } from "../../axios";
export default {
  data() {
    return {
      content: "",
      id: "",
      title: "",
      imgUrl: "",
      visitNum: "",
    };
  },
  async created() {
    const id = this.$route.params.id;
    this.id = id;
    await this.getData();
  },
  methods: {
    async getData() {
      const res = await http.get(`/api/article/${this.id}`);
      this.title = res.data.date.title;
      this.editor = new E(this.$refs.edit);
      this.editor.config.uploadImgServer = "http://localhost:0925/api/upload";
      this.editor.config.uploadFileName = "img";
      this.editor.config.uploadImgHooks = {
        customInsert: function (insertImgFn, result) {
          insertImgFn(result.date); //插入图片
          this.imgUrl = result.date; //保存图片路劲
        },
      };
      this.editor.create();
      this.editor.txt.html(res.data.date.content); // 重新设置编辑器内容
    },
    async commit() {
      const res = await http.put(`/api/article/${this.id}`, {
        title: this.title,
        img: this.imgUrl,
        content: this.editor.txt.html(),
        visitNum: this.visitNum,
      });
      if (res.data.code === 200) {
        this.$message.success("修改成功");
        this.$router.push("/article");
      }
    },
  },
};
</script>

<style scoped>
.el-input {
  margin-bottom: 15px;
}
</style>