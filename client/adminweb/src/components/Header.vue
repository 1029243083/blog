<template>
  <div class="header-box">
    <div class="img-box">
      <img src="../assets/logo.jpg" alt="" />
    </div>
    <div class="txt">
        个人博客后台管理系统
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-box {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: rgb(92, 92, 92); */
  background-image: linear-gradient(90deg, #0D6DFF,#FF81FF);
}
.img-box {
  width: 80px;
  height: 80px;
}
img {
  width: 100%;
  height: 100%;
}
.txt{
    color: #fff;
    font-weight: bold;
    font-size: 20px;
}
</style>