<template>
  <div class="box-message">
    <div class="img-box-message">
      <img :src="portrait" alt="" />
    </div>
    <div class="info">
      <div class="name">{{ name }}</div>
      <div class="content">{{ this.content }}</div>
    </div>
  </div>
</template>

<script>
import { http } from "../axios";
export default {
  data() {
    return {
      portrait: "",
      name: "",
    };
  },
  props: ["UserId", "content"],
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await http.get(`/api/user/${this.UserId}`);
    //   console.log(res.data.date);
      this.portrait = res.data.date.portrait ? res.data.date.portrait : '../assets/33.jpg';
      this.name = res.data.date.name;
    },
  },
};
</script>

<style scope>
.box-message {
  margin-top: 15px;
  padding: 10px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.116);
  display: flex;
  align-items: center;
}
.info {
  margin-left: 10px;
}
.img-box-message {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
.img-box-message img {
  width: 100%;
  height: 100%;
}
.name {
  color: #11afee;
  font-weight: bold;
}
.content {
  font-size: 12px;
  margin-top: 8px;
}
</style>