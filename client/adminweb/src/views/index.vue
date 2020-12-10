<template>
  <div class="content-box">
    <header class="header">
      <Header />
    </header>
    <div class="content">
      <div class="menu">
        <Menu></Menu>
      </div>
      <div class="main"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Menu from "../components/Menu";
export default {
  components: {
    Header,
    Menu,
  },
  mounted() {
    console.log(document.cookie);
    if (!document.cookie) {
      this.$message.warning("当前没有登录，跳转到登录");
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.content-box {
  height: 100%;
}
.header {
  width: 100%;
  height: 70px;
}
.content {
  display: flex;
  height: calc(100% - 70px);
}
.menu {
  width: 15%;
  height: 100%;
}
.main {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 15px;
  position: relative;
}
</style>