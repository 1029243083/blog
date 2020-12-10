const express = require('express');
const app = express();
const cors = require('cors');
const handleCookie = require('cookie-parser');

//允许所有跨域
app.use(cors({
    origin: function (origin, callback) {
        console.log(origin)
        callback(null, true)
    },
    credentials: true,
    // allowedHeaders:['token','authorization','Set-Cookie']
    exposedHeaders: ['authorization', 'Set-Cookie']
}));

app.use(express.static('public'))

//处理cookie
app.use(handleCookie());

//验证token
app.use(require('./toekenHandel.js'));

//会把传递的参数，放在body中，只能解析json格式 【数据处理】
app.use(express.json());

//会把传递的参数，放在body中，只能解析"application/x-www-form-urlencoded"格式 【数据处理】
app.use(express.urlencoded());

//图片处理的中间件
app.use('/api/upload', require('./api/upload.js'));

//admin中间件 处理登录...
app.use('/api/admin', require('./api/admin.js'));

//article文章的处理...
app.use('/api/article', require('./api/article.js'));

//articleList文章列表的处理
app.use('/api/articleList', require('./api/articleList.js'));

//label标签的处理
app.use('/api/label', require('./api/lable.js'));

//leavingMsg留言的处理
app.use('/api/leavingmsg', require('./api/leaving.js'));



//user用户的处理
app.use('/api/user', require('./api/user.js'));

app.use(require('./errorResult'));

/**
 * 开启服务 监听0925端口
 */
app.listen(0925, () => {
    console.log('listen server http://localhost:0925');
})