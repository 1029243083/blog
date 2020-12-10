const express = require('express');
const router = express.Router();
const { asyncResult, filterObj } = require('../util');
const { addLable, updateLable, deleteLable, findLableAll, findLableById, findLableByTxt } = require('../../services/lableService.js');
const { async } = require('validate.js');

//添加一个标签
router.post('/', asyncResult(async (req, res, next) => {
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await addLable(newObj);
}))

//修改一个标签
router.put('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await updateLable(id, newObj)
}))

//删除标签
router.delete('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await deleteLable(id);
}))

//分页查询标签
router.get('/', asyncResult(async (req, res, next) => {
    const { offset, limit } = req.body;
    return await findLableAll(offset, limit);
}))

//根据id查询标签
router.get('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await findLableById(id)
}))

//根据标签名查询标签  这里不是模糊查询
router.get('/txt/:str', asyncResult(async (req, res, next) => {
    const { str } = req.params;
    return await findLableByTxt(str);
}))
module.exports = router;