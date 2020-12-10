const leavingMsg = require('../models/LeavingMsg');

/**
 * 
 * @param {Object} info
 * 添加留言 
 */
exports.addLeavingMsg = async function (info) {
    return await leavingMsg.create(info)
}

/**
 * 
 * @param {int} id 
 * @param {Object} info
 * 修改留言 
 */
exports.updateLeavingMsg = async function (id, info) {
    return await leavingMsg.update(info, {
        where: {
            id
        }
    })
}

/**
 * 
 * @param {int} id 
 * 删除留言
 */
exports.deleteLeavingMsg = async function (id) {
    return await leavingMsg.destroy({ where: { id } })
}

/**
 * 
 * @param {int} id
 * 根据id查询留言 
 */
exports.findLeavingById = async function (id) {
    return await leavingMsg.findByPk(id);
}

/**
 * 
 * @param {int} id
 * 根据用户id查询留言 
 */
exports.findLeavingByUserId = async function (id) {
    return await leavingMsg.findAndCountAll({
        where: {
            UserId: id
        }
    })
}

/**
 * 
 * @param {int} offset 
 * @param {int} limit
 * 分页查询所有留言 
 */
exports.findLeavingAll = async function (offset = 1, limit = 10) {
    return await leavingMsg.findAndCountAll({
        offset: (offset - 1) * limit,
        limit,
        order:[
            ['createdAt','DESC']
        ]
    })
}

