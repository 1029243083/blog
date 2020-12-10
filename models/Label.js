const sequelize = require('./db.js');
const { DataTypes } = require('sequelize');

const Lable = sequelize.define('Lable', {
    txt: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: true, //创建时间
    updatedAt: true, //修改时间
    paranoid: true    //删除时间
})

module.exports = Lable;