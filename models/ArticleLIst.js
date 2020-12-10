const sequelize = require('./db.js');
const { DataTypes } = require('sequelize');
/**
 * 创建文章列表数据
 */
const articleList =  sequelize.define('articleList', {
    //标题
    title:{
        type:DataTypes.TEXT, //txt类型
        allowNull:false //不能是null
    },

    //图片地址
    img:{
        type:DataTypes.TEXT,
        allowNull:true
    },

    //游览数量
    visitNum:{
        type:DataTypes.STRING,
        allowNull:false
    },

    //留言数量
    leavingMsgNum:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    
    //标签id
    typeId:{
        type:DataTypes.STRING,
        allowNull:false
    },

    //文章简介
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    }

    //文章对应id

},{
    createdAt: true, //创建时间
    updatedAt: true, //修改时间
    paranoid:true    //删除时间
})

module.exports = articleList;