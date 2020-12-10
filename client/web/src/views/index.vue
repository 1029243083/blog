<template>
  <div class="box">
    <div class="bg"></div>
    <div class="center">
      <h2>一只菜鸟</h2>
      <p>一入代码深似海，从此妹子是路人</p>
      <button class="btn" @click="jump">Enter&nbsp;Blog</button>

      <div class="circle-box">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump() {
      this.$router.push("/blog");
    },
  },
};
</script>

<style scoped>
.box {
  position: relative;
  background-color: #000;
  height: 100%;
}
.bg {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url("../assets/11.jpg");
  opacity: 0.5;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  color: #fff;
  text-align: center;
  transform: translate(-50%, -50%);
  animation: box 0.5s;
}
.center h2 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 10px;
}
.center p {
  letter-spacing: 10px;
  font-weight: bold;
}
.center .btn {
  margin-top: 35px;
  border: none;
  padding: 9px 10px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #1e9efe;
  color: #fff;
  outline: none;
  transition: 0.5s;
}
.center .btn:hover {
  background-color: #146aac;
}
.circle-box {
  margin-top: 15px;
  display: flex;
}
.circle {
  width: 10px;
  height: 10px;
  margin-right: 15px;
  border-radius: 50%;
}
.circle:nth-of-type(1) {
  margin-left: 165px;
  background-color: #67c23a;
  animation: circle1 2s infinite;
}
.circle:nth-of-type(2) {
  background-color: #e6a23c;
  animation: circle2 2s infinite;
}
.circle:nth-of-type(3) {
  background-color: #f56c6c;
  animation: circle3 2s infinite;
}
@keyframes circle1 {
  0% {
    box-shadow: 0px 0px 0px rgba(103, 194, 58, 0);
  }
  100% {
    box-shadow: 0px 0px 3px 5px rgba(103, 194, 58, 0.5);
  }
}
@keyframes circle2 {
  0% {
    box-shadow: 0px 0px 0px rgba(230, 162, 60, 0);
  }
  100% {
    box-shadow: 0px 0px 3px 5px rgba(230, 162, 62, 0.5);
  }
}
@keyframes circle3 {
  0% {
    box-shadow: 0px 0px 0px rgba(245, 108, 108, 0);
  }
  100% {
    box-shadow: 0px 0px 3px 5px rgba(245, 108, 108, 0.5);
  }
}
@keyframes box {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>