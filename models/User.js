const sequelize = require('./db.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User',{
    portrait:{
        type:DataTypes.STRING,
        allowNull:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:true
    },
    loginId:{
        type:DataTypes.STRING,
        allowNull:false
    },
    loginPwd:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    createdAt: true, //创建时间
    updatedAt: true, //修改时间
    paranoid:true    //删除时间
})

module.exports = User;