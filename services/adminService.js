const Admin = require('../models/Admin.js');
const validate = require('validate.js');
/**
 * 
 * @param {} id
 * 根据管理员id找找 
 */
exports.findAdminById = async function (id) {
    const err = validate.single(id, {  //必须要填，必须是数字类型
        presence: true,
        type: 'number'
    });
    if (err) { //这个不能自动报错，当err有值时代表有错误，直接抛出错误
        throw new Error(err);
    } else {
        return await Admin.findByPk(id);
    }
}

/**
 * 获取全部管理员
 */
exports.findAdminAll = async function () {
    return await Admin.findAll();
}

/**
 * 
 * @param {Object} adminInfo
 * 添加一个管理员
 * 需要admin信息作为参数传入 
 */
exports.addAdmin = async function (adminInfo) {
    const rule = {
        loginId: { //必须要填 必须是字符串，长度是1-10个字符 不能为空字符串
            presence: {
                allowEmpty: false
            },
            type: 'string',
            length: {
                minimum: 1,
                maximum: 10
            }
        },
        loginPwd: { //必须要传递
            presence: {
                allowEmpty: false
            }
        }
    }
    await validate.async(adminInfo, rule); //没有错误什么都不干，有错误就报错
    return await Admin.create(adminInfo); //上面没有错误就执行到这句;
}

/**
 * 
 * @param {int} id  管理员id
 * @param {Object} adminInfo 修改的管理员信息
 * 根据id修改管理员 
 */
exports.updataAdmin = async function (id, adminInfo) {
    return await Admin.update(adminInfo, {
        where: {
            id
        }
    })
}

/**
 * 
 * @param {int} id
 * 根据id删除gly 
 */
exports.deleteAdmin = async function (id) {
    return await Admin.destroy({
        where: {
            id
        }
    })
}

/**
 * 
 * @param {String} loginId  管理员账户
 * @param {String} loginPwd 管理员密码
 * 登录
 */
exports.login = async function (loginId, loginPwd) {
    return await Admin.findAll({
        where: {
            loginId,
            loginPwd
        }
    })
}

//全部测试完成