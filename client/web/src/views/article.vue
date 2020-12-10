<template>
  <div class="content-box">
    <div class="header">
      <Header />
    </div>
    <div class="content" v-html="content"></div>
    <div class="box">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import {http} from '../axios'
export default {
  data(){
    return{
      content:''
    }
  },
  components:{
    Header
  },
  created(){
    this.getData();
},
  methods:{
   async getData(){
      const res= await http.get(`/api/article/${this.$route.params.id}`) ;
      console.log(res);
      this.content = res.data.date.content;
    }
  }
}
</script>

<style scoped>
.header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #FFFFE0;
}
.content{
  width: 1200px;
  margin: 0 auto;
  padding: 15px;
  margin-top: 119px;
  background: rgb(206, 250, 208);
  border-radius: 10px;
  line-height: 44px;
}
.box{
  width: 1200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box div{
  width: 20px;
  margin: 0 15px;
  border-radius: 40%;
  height: 20px;
  animation: rote 1s linear infinite;
}
.box div:nth-of-type(1){
  background: #67C23A;
}

.box div:nth-of-type(2){
  background: #E6A23C;
}

.box div:nth-of-type(3){
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