const lable = require('../models/Label.js');

/**
 * 
 * @param {Object} info
 * 添加标签 
 */
exports.addLable = async function (info) {
    return await lable.create(info)
}

/**
 * 
 * @param {int} id 
 * @param {Object} info
 * 修改标签 
 */
exports.updateLable = async function (id, info) {
    return await lable.update(info, {
        where: {
            id
        }
    })
}

/**
 * 
 * @param {int} id 
 * 删除标签
 */
exports.deleteLable = async function (id) {
    return await lable.destroy({ where: { id } });
}

/**
 * 
 * @param {int} offset 
 * @param {int} limit
 * 分页查询标签 
 */
exports.findLableAll = async function (offset = 1, limit = 10) {
    return await lable.findAll({
        offset: (offset - 1) * limit,
        limit
    })
}

/**
 * 
 * @param {String} txt
 * 根据标签名字查询 
 */
exports.findLableByTxt = async function (txt) {
    return await lable.findAll({
        where: {
            txt
        }
    })
}

/**
 * 
 * @param {int} id 
 * 根据标签id获取
 */
exports.findLableById = async function (id) {
    return await lable.findByPk(id);
}