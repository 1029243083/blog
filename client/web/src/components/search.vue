<template>
  <div class="box">
      <div class="inp">
          <input type="text" placeholder='请输入关键字' v-model="value">
          <button @click="sreach">搜索</button>
      </div>
      <div class="label-box">
          <ul>
              <li @click="getAll">全部文章</li>
              <li v-for="item in tableList" :key="item.id" @click="labelClick(item.id)">{{ item.txt }}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import {http} from '../axios'
export default {
    created(){
        this.getTable();
    },
    data(){
        return{
            tableList:[],
            value:''
        }
    },
    methods:{
        async getTable(){
           const res =await http.get('/api/label');
           this.tableList = res.data.date;
        },
        async labelClick(id){
            const res= await http.get(`/api/articleList/lable/${id}`);
            this.$store.commit('changeList',res.data.date.rows)
        }, 
        async getAll(){
            const res = await http.get('/api/articleList');
            this.$store.commit('changeList',res.data.date.rows)
        },
        async sreach(){
            console.log()
           const { value } = this;
           if(!value){
               return;
           }
            const res = await http.get(`/api/articleList/title/${value}`);
            this.$store.commit('changeList',res.data.date);
            this.value = '';
        }
    }
}
</script>

<style scoped>
.box{
    margin-top: 20px;
}
.inp{
    height: 100px;
    background: #666;
    line-height: 100px;
    text-align: center;
}
.inp input{
    border: none;
    outline: none;
    height: 30px;
    width: 200px;
    border-radius: 20px;
    box-sizing: border-box;
    padding-left: 10px;
}
.inp button{
    margin-left: 15px;
    width: 50px;
    background: #fff;
    border: none;
    padding: 5px 0;
    outline: none;
    border-radius: 5px;
    transition: 0.5s;
}
.inp button:hover{
    background: #0081ff;
    color: #fff;
}
.label-box ul{
    background: rgb(121, 121, 121);
}
.label-box li{
    width: 100%;
    color: #fff;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
    transition: 0.3s;
    box-sizing: border-box;
    padding-left: 15px;
    /* background: aqua; */
}
.label-box li:hover{
    background: #479AC7;
    color: #fff;
}
</style>