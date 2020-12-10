const express = require('express');
const router = express.Router();
const { asyncResult, filterObj } = require('../util');
const { addLeavingMsg, updateLeavingMsg, deleteLeavingMsg, findLeavingById, findLeavingByUserId, findLeavingAll } = require('../../services/leavingMsgService.js');

//添加留言 记得传用户id
router.post('/', asyncResult(async (req, res, next) => {
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await addLeavingMsg(newObj);
}))

//修改留言
router.put('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await updateLeavingMsg(id, newObj);
}))

//删除留言
router.delete('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await deleteLeavingMsg(id);
}))

//获取留言 根据id
router.get('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await findLeavingById(id);
}))

//获取留言 根据用户id
router.get('/user/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await findLeavingByUserId(id);
}))

//分页查询所有留言 
router.get('/', asyncResult(async (req, res, next) => {
    const { offset, limit } = req.body;
    return await findLeavingAll(offset, limit)
}))

//测试完成
module.exports = router;