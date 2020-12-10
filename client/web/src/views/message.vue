<template>
  <div>
    <Header />
    <div class="edit-box">
      <div ref="edit"></div>
      <div>
        <button class="btn" @click="commit">提交</button>
      </div>
      <div class="hr"></div>
      <Msg v-for="item in messageData" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import E from "wangeditor";
import { http } from "../axios";
import Msg from "../components/msg";

export default {
  components: {
    Header,
    Msg,
  },
  data() {
    return {
      edit: {},
      messageData: [],
      userId: "",
      content: "",
    };
  },
  async created() {
    await this.getData();
  },
  mounted() {
    this.edit = new E(this.$refs.edit);
    // 默认情况下，显示所有菜单
    this.edit.config.menus = [
      "head",
      "bold",
      "fontSize",
      "fontName",
      "italic",
      "underline",
      "strikeThrough",
      "indent",
      "lineHeight",
      "foreColor",
      "backColor",
      "link",
      "list",
      "justify",
      "quote",
      "emoticon",
      "video",
      "table",
      "code",
      "splitLine",
      "undo",
      "redo",
    ];
    this.edit.create();
  },
  methods: {
    async commit() {
      this.userId = this.$store.state.User.id;
      this.content = this.edit.txt.text();
      const res = await http.post(`/api/leavingmsg`, {
        UserId: this.userId,
        content: this.content,
      });
      if (res.data.code === 200) {
        //提交成功
        await this.getData();
        this.edit.txt.html("");
      }
    },
    async getData() {
      const res = await http.get(`/api/leavingmsg`);
      if (this.$store.state.User.id === undefined) {
        this.$router.push("/login");
      }
      this.messageData = res.data.date.rows;
    },
  },
};
</script>

<style scoped>
.edit-box {
  width: 1000px;
  margin: 0 auto;
  margin-top: 15px;
}
.btn {
  border: none;
  outline: none;
  padding: 5px 19px;
  margin-top: 15px;
  border-radius: 5px;
  background: skyblue;
  color: #fff;
}
.hr {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.274);
  margin-top: 15px;
}
</style>