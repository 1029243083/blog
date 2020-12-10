const express = require('express');
const router = express.Router();
const { asyncResult, filterObj } = require('../util');
const { addArticle,
        updateArticle,
        delteArticle,
        findArticleAll,
        findArticleById,
        findByTitle
    } = require('../../services/articleSercice');
//添加文章
router.post('/', asyncResult(async (req, res, next) => {
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id'); //添加的数据
    return await addArticle(newObj);
}))

//修改文章
router.put('/:id', asyncResult(async (req, res, next) => {
    const { id: articleId } = req.params; //文章的id
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id'); //文章的数据
    return await updateArticle(articleId, newObj)
}))

//删除文章
router.delete('/:id', asyncResult(async (req, res, next) => {
    const { id: articleId } = req.params; //文章的id
    return await delteArticle(articleId)
}))

//分页查询文章
router.get('/', asyncResult(async (req, res, next) => {
    const { offset, limit } = req.body; //limit每页条数，offset跳过多少数据
    return await findArticleAll(offset, limit);
}))

//根据id查询文章
router.get('/:id', asyncResult(async (req, res, next) => {
    const { id: articleId } = req.params;
    return await findArticleById(articleId);
}))

//想不出路由了，用个title垫一下
router.get('/title/:str', asyncResult(async (req, res, next) => {
    const { str } = req.params; //获取关键字
    return await findByTitle(str);
}))
module.exports = router;