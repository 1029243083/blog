<template>
  <div class="box">
    <div class="center">
      <div class="img-box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="nav">
        <div>
          <router-link to="/">首页</router-link>
        </div>
        <div>
          <router-link to="/blog">博客</router-link>
        </div>
        <div>
          <router-link to="/message">留言</router-link>
        </div>
        <div>
          <router-link to="/about">关于</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #ff6347;
  background: #FFFFE0;
}
.center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  height: 100%;
  margin: 0 auto;
}
.img-box {
  width: 137px;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.nav {
  display: flex;
  align-items: center;
}
.nav a {
  display: inline-block;
  text-decoration: none;
  color: #000;
  margin-left: 15px;
  padding: 0 15px;
}
a.router-link-exact-active {
  color: #ff6347;
}
</style>