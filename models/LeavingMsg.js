const sequelize = require('./db.js');
const { DataTypes } = require('sequelize');

//留言表
const LeavingMsg = sequelize.define('leavingMsg',{
    content:{
        type:DataTypes.TEXT,
        allowNull:true
    }
    //还有一个userId 用关联方法添加了
},{
    createdAt: true, //创建时间
    updatedAt: true, //修改时间
    paranoid:true    //删除时间
});

module.exports = LeavingMsg;