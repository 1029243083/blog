const e = require('express');
const { async } = require('validate.js');
const User = require('../models/User.js');

/**
 * 
 * @param {Object} userInfo
 * 添加用户 
 */
exports.addUser = async function (userInfo) {
    return await User.create(userInfo);
}

/**
 * 
 * @param {int} id
 * 删除用户 
 */
exports.deleteUser = async function (id) {
    return await User.destroy({ where: { id } });
}

/**
 * 
 * @param {int} id 
 * @param {Object} userInfo
 * 修改用户 
 */
exports.updataUser = async function (id, userInfo) {
    return await User.update(userInfo, { where: { id } })
}

/**
 * 
 * @param {int} id
 * 根据id查询 
 */
exports.findUserById = async function (id) {
    return await User.findByPk(id)
}

/**
 * 
 * @param {String} name 
 * @param {int} offset 
 * @param {int} limit
 * 根据用户名字分页查询用户 
 */
exports.findUser = async function (offset = 1,limit = 10,name) {
    const where = {};
    if(name){
        where.name = name;
    }
    return await User.findAndCountAll({
        where:where,
        offset,
        limit
    })
}

exports.loginUser = async function (loginId,loginPwd){
    return await User.findAll({
        where:{
            loginId,
            loginPwd
        }
    })
}

// /**
//  * 
//  * @param {int} offset 
//  * @param {int} limit 
//  * 查询所有用户 分页查询
//  */
// exports.findUserAll = async function (offset = 1, limit = 10) {
//     return await User.findAndCountAll({
//         offset:(offset - 1) * limit,
//         limit
//     })
// }

//测试完成