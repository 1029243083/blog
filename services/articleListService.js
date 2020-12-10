
const articleList = require('../models/ArticleLIst');
const { Op } = require('sequelize')
/**
 * 
 * @param {Object} info
 * 添加文章列表 
 */
exports.addArticleList = async function (info) {
    return await articleList.create(info);
}

/**
 * 
 * @param {int} id 
 * @param {Object} info
 * 修改文章列表 
 */
exports.updateArticleList = async function (id, info) {
    return await articleList.update(info, {
        where: {
            id
        }
    })
}

/**
 * 
 * @param {int} id
 * 删除文章列表 
 */
exports.deleteArticleList = async function (id) {
    return await articleList.destroy({ where: {id} });
}

/**
 * 
 * @param {int} offset 
 * @param {int} limit
 * 分页获取文章列表 
 */
exports.findArticleListAll = async function (offset = 1, limit = 10) {
    return await articleList.findAndCountAll({
        offset: (offset - 1) * limit,
        limit
    })
}

exports.findArticleListLable = async function(lableId){
    return await articleList.findAndCountAll({
        where:{
            typeId:lableId
        }
    })
}

/**
 * 
 * @param {int} id 
 * 根据id查询
 */
exports.findArticleListById = async function (id) {
    return articleList.findByPk(id);
}

/**
 * 
 * @param {String} str
 * 根据title关键字查询文章列表 
 */
exports.findArticleListByTitle = async function (str) {
    return articleList.findAll({
        where: {
            title: {
                [Op.like]: `%${str}%`
            }
        }
    })
}