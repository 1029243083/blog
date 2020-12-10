<template>
  <div class="box-blog">
    <div class="header">
      <Header />
    </div>
    <div class="main-box">
      <div class="main">
        <Article
          v-for="item in $store.state.articleList"
          :key="item.id"
          v-bind="item"
        />
      </div>
      <div class="right">
        <div class="search-box">
          <Search />
        </div>
        <div class="date-box">
          <Date />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Article from "../components/article";
import Search from "../components/search";
import Date from '../components/date';
import { http } from "../axios";
export default {
  components: {
    Header,
    Article,
    Search,
    Date
  },
  data() {
    return {
      articleData: [],
    };
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      const res = await http.get("/api/articleList");
      this.$store.commit("changeList", res.data.date.rows);
    },
  },
};
</script>

<style scoped>

.main-box {
  width: 1300px;
  margin: 0 auto;
  margin-top: 62px;
  display: flex;
}
.main {
  width: 70%;
  /* background: burlywood; */
}
.right {
  width: 30%;
  /* background: brown; */
  box-sizing: border-box;
  padding-left: 15px;
}
.header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
}
.date-box{
  margin-top: 20px;
  height: 400px;
}
</style>