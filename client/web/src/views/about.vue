<template>
  <div>
      <Header />
      <div class="logo">
          <h1>一只菜鸟</h1>
          <p>一入代码深似海，从此妹子是路人</p>
      </div>
      <div class="content">
          <div class="my">
              <div class="title">关于我</div>
              <p>大专人,大专魂,大专都是人上人</p>
              <p>沉迷撸码，日渐消瘦。</p>
              <p>可以通过以下方式联系到我：</p>
              <p>qq邮箱:<span>1029243083@qq.com</span></p>
          </div>
          <div class="b">
              <div class="title">关于本站</div>
              <p>建于2020年12月9日,主要是个人爱好写着玩。</p>
              <p>本站结构</p>
              <p>前端
                  <span>Vue</span>

                </p>
                <p>
                    后端
                    <span>NodeJs</span>
                    <span>Express</span>
                    <span>Sequelize</span>
                </p>
                <p>数据库
                    <span>Mysql</span>
                </p>
          </div>
          <div class="person">
              <div class="title">特别说明</div>
              <p>本站文章仅代表个人观点，和任何组织或个人无关。</p>
              <p>本站前端开发代码没有考虑对IE浏览器的兼容。</p>
              <p>用户邮箱仅作回复消息用，不对外使用。</p>
          </div>
          <div class="box-b">
      <div></div>
      <div></div>
      <div></div>
    </div>
      </div>
  </div>
</template>

<script>
import Header from '../components/header'
export default {
    components:{
        Header
    }
}
</script>

<style scoped>
.logo{
    width: 100%;
    height: 200px;
    border: 1px solid #000;
    background-image: url('../assets/22.gif');
    background-size: 150px;
    color: #fff;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}
.logo h1{
    margin-top: 45px;
    margin-bottom: 20px;
}
.content{
    width: 1000px;
    margin: 20px auto;
}
.my .title{
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    border-radius: 3px;
    font-size: 30px;
    margin-bottom: 15px;
    border-left: 5px solid #6BC30D;
}
.my,.b,.person{
    background: gainsboro;
    padding: 10px;
    border-radius: 10px;
}
.my p{
    margin-bottom: 15px;
    width: 250px;
    font-weight: 100;
    padding-left: 35px;
}
.b{
    margin-top: 15px;
}
.title{
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    border-radius: 3px;
    font-size: 30px;
    margin-bottom: 15px;
    border-left: 5px solid #6BC30D;
}
.b p{
    font-weight: 100;
    padding-left: 35px;
    margin-bottom: 13px;
}
span{
    color: #0467D6;
    font-weight: bold;
    padding: 2px 5px;
    margin-right: 2px;
    border-radius: 5px;
    /* background: rgb(190, 231, 255); */
}
.person {
    margin-top: 20px;
}
.person p{
    margin-bottom: 15px;
    padding-left: 20px;
    font-weight: 200;
}
.box-b{
  width: 1200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
}
.box-b div{
  width: 20px;
  margin: 0 15px;
  border-radius: 40%;
  height: 20px;
  animation: rote 1s linear infinite;
}
.box-b div:nth-of-type(1){
    margin-left: 441px;
  background: #67C23A;
}

.box-b div:nth-of-type(2){
  background: #E6A23C;
}

.box-b div:nth-of-type(3){
  background: #F56C6C;
}


@keyframes rote {
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
}
</style>