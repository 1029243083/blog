const articleList =require('./ArticleLIst.js'); //文章列表
const article = require('./Article.js'); //文章
const leavingMsg  =require('./LeavingMsg.js'); //留言
const user = require('./User.js'); //用户

article.hasOne(articleList); 
leavingMsg.belongsTo(user); //一个 一条留言属于一个用户
user.hasMany(leavingMsg); //一个用户有多个留言

console.log('关联完成')

 