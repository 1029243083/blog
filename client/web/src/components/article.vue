<template>
  <div class="box" @click="handleClick">
    <div class="title">
      <span class="blue">【原创】</span>
      <span>{{ title }}</span>
      <span class="size">{{ date }}</span>
    </div>
    <div class="hr-box">
      <div class="hr"></div>
      <div>
        <span>{{ month }}月</span>
        <span class="year">{{ year }}年</span>
      </div>
    </div>
    <div class="content">
      <div class="img-box">
        <img :src="img" alt="" />
      </div>
      <div class="text">asdf</div>
    </div>
    <div class="bhr">
      <div>继续阅读</div>
      <div class="hr2"></div>
    </div>
    <div class="label">
      标签:<span>{{ label ? label : "空" }}</span>
    </div>
  </div>
</template>

<script>
import mooment from "moment";
import { http } from "../../../adminweb/src/axios";
export default {
  data() {
    return {
      label: "",
    };
  },
  props: [
    "id",
    "title",
    "img",
    "articleId",
    "content",
    "leavingMsgNum",
    "typeId",
    "visitNum",
    "updatedAt",
  ],
  async created() {
    await this.getLabel();
  },
  methods: {
    async getLabel() {
      const res = await http.get(`/api/label/${this.typeId}`);
      this.label = res.data.date.txt;
    },
   handleClick(){
      this.$router.push(`/article/${this.articleId}`)
    }
  },
  computed: {
    date() {
      return new mooment(this.updatedAt).date();
    },
    month() {
      return new mooment(this.updatedAt).month();
    },
    year() {
      return new mooment(this.updatedAt).year();
    },
  },
};
</script>

<style scoped>
.box {
  position: relative;
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
  animation: box 0.5s;
}
.blue {
  color: #42a9e0;
  margin-right: 8px;
}
.size {
  position: absolute;
  right: 61px;
  color: #71c517;
  top: 13px;
  font-size: 30px;
}
.hr-box {
  margin-top: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #989997;
  font-weight: bold;
}
.hr {
  width: 760px;
  margin-right: 15px;
  height: 1px;
  background: #ecedeb;
}
.year {
  padding-left: 15px;
}
.content {
  display: flex;
}
.content .img-box {
  width: 300px;
  height: 180px;
  background: red;
}
.content .img-box img {
  width: 100%;
  height: 100%;
}
.content .text {
  box-sizing: border-box;
  padding-left: 20px;
  font-weight: 100;
}
.bhr {
  margin-top: 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
}
.hr2 {
  width: 795px;
  height: 1px;
  background: #b6b6b6;
  margin-left: 18px;
}
.label {
  margin-top: 10px;
  font-weight: bold;
}
.label span {
  display: inline-block;
  background-color: #2e8b57;
  margin-left: 10px;
  padding: 0 8px;
  padding-bottom: 3px;
  border-radius: 8px;
  color: #fff;
}
@keyframes box {
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
}
</style>