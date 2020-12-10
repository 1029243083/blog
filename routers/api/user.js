const express = require('express');
const router = express.Router();
const url = require('url');
const { asyncResult, filterObj } = require('../util');
const { addUser, updataUser, deleteUser, findUser, findUserAll, findUserById,loginUser } = require('../../services/userService.js');
//添加用户
router.post('/', asyncResult(async (req, res, next) => {
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await addUser(newObj);
}))

//修改用户
router.delete('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await deleteUser(id);
}))

//修改用户
router.put('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await updataUser(id, newObj);
}))

//查询用户 根据id
router.get('/:id', asyncResult(async (req, res, next) => {
    const { id } = req.params;
    return await findUserById(id);
}))

//分页查询用户也可以用用户名  
/**
 * {
 *  offset:分页，
 *  limit：分页，
 *  name:根据名字，不传入就分页查询所有
 * }
 */
router.get('/', asyncResult(async (req, res, next) => {
    const { name, offset, limit } = req.body;
    const query = url.parse(req.url).query;
    const obj = {};
    const queryArr= query.split('&');
    queryArr.forEach(item => {
       const tem = item.split('=');
       obj[tem[0]] = +tem[1];
    })
    return await findUser(obj.offset, obj.limit, name);
}))

router.post('/loginUser',asyncResult(async(req,res,next) => {
    const {loginId,loginPwd} = req.body;
    return await loginUser(loginId,loginPwd);

}))
//没有测试
module.exports = router;