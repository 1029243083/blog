const express = require('express');
const routre = express.Router();
const { asyncResult, filterObj } = require('../util');
const { addArticleList, updateArticleList, deleteArticleList, findArticleListAll, findArticleListById, findArticleListByTitle,findArticleListLable } = require('../../services/articleListService.js');
// const { default: router } = require('../../client/web/src/router');

//添加文章列表
routre.post('/', asyncResult(async (req, res, next) => {
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await addArticleList(newObj);
}))

//修改文章列表
routre.put('/:id', asyncResult(async (req, res, next) => {
    const { id: articleListId } = req.params;
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await updateArticleList(articleListId, newObj);
}))

//删除文章列表
routre.delete('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await deleteArticleList(id);
}))

//分页获取文章列表 
routre.get('/', asyncResult(async (req, res, next) => {
    const { offset, limit } = req.body;
    return await findArticleListAll(offset, limit);
}))

//根据id查询文章列表
routre.get('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await findArticleListById(id);
}))


//根据title关键字查询文章列表 
routre.get('/title/:str', asyncResult(async (req, res, next) => {
    const { str } = req.params;
    return await findArticleListByTitle(str)
}))

routre.get('/lable/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await findArticleListLable(id);
}))
module.exports = routre;