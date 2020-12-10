//文章表
const sequelize = require('./db.js');
const { DataTypes } = require('sequelize');

const article = sequelize.define('article',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    img:{
        type:DataTypes.STRING,
        allowNull:true
    },
    content:{
        type:DataTypes.TEXT('long'),
        allowNull:false
    },
    visitNum:{
        type:DataTypes.STRING,
        allowNull:false
    },

    //标签id
},{
    createdAt: true, //创建时间
    updatedAt: true, //修改时间
    paranoid:true    //删除时间
})

module.exports = article;