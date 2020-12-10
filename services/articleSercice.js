const Article = require('../models/Article');
const { Op } = require('sequelize');
/**
 * 
 * @param {Object} articleInfo
 * 添加文章 
 */
exports.addArticle = function (articleInfo) {
    return Article.create(articleInfo);
}

/**
 * 
 * @param {int} id 
 * @param {Object} articleInfo
 * 修改文章 
 */
exports.updateArticle = function (id, articleInfo) {
    return Article.update(articleInfo, {
        where: {
            id
        }
    })
}

/**
 * 
 * @param {int} id
 * 删除文章 
 */
exports.delteArticle = function (id) {
    return Article.destroy({ where: { id } });
}

/**
 * 
 * @param {int} offset 
 * @param {int} limit
 * 分页查询文章 
 */
exports.findArticleAll = function (offset = 1, limit = 10) {
    return Article.findAll({
        offset: (offset - 1) * limit,
        limit
    })
}

/**
 * 
 * @param {int} id
 * 根据id查询文章 
 */
exports.findArticleById = function (id) {
    return Article.findByPk(id);
}

/**
 * 
 * @param {String} str
 * 根据title关键字查询 
 */
exports.findByTitle = function (str) {
    return Article.findAll({
        where: {
            title: {
                [Op.like]: `%${str}%`
            }
        }
    })
}
//测试完成