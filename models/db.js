/**
 * 创建连接 返回sequelize对象
 */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bolg','root','123123',{
    host:'localhost',
    dialect:'mysql',
    logging:null
});

module.exports = sequelize;