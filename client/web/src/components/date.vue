<template>
  <div class="box">
      <div class="title">
          疫情防控|人人有则
      </div>
      <div class="date-box">
        <div class="year">{{ year }}年</div>
        <div class="moth">{{ moth }}月</div>
        <div class="date">{{ date }}日</div>
        <div class="s">
            <div class="hour">{{ hour }}</div>
            <div class="minute">{{ minute }}</div>
            <div class="second">{{ second }}</div>
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    data(){
        return{
            year:'', //年
            moth:'', //月
            date:'', //日
            hour:'', //小时
            minute:'', //分钟
            second:'' //秒
        }
    },
    created(){
       this.year = moment().weekYear();
       this.date = moment().date();
       this.moth = moment().month() + 1;
       this.hour = moment().hour();
       this.minute = moment().minute();
       this.second = moment().second();
       setInterval(() => {
           this.hour = moment().hour();
            this.minute = moment().minute();
            this.second = moment().second();
       },1000)
    }
}
</script>

<style scoped>
.box{
    background: #5c5c5c;
    padding: 5px;
}
.title{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #F56C6C;
}
.date-box{
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
    color: #fff;

}
.year{
    background: #F56C6C;
    padding: 5px;
    font-size: 30px;
    border-radius: 5px;
    margin-bottom: 5px;
}
.moth{
    background: #F56C6C;
    border-radius: 5px;
    font-size: 30px;
    padding: 5px;
    margin-bottom: 5px;
}
.date{
    background: #F56C6C;
    font-size: 30px;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
}
.s{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.hour{
    padding: 5px;
    background: #fff;
    color: #000;
    border-radius: 5px;
}
.minute{
    padding: 5px;
    background: rgb(118, 107, 221);
    border-radius: 5px;

}
.second{
    padding: 5px;
    background: rgb(38, 124, 91);
    border-radius: 5px;

}

</style>