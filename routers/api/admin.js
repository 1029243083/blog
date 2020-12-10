const express = require('express');
const router = express.Router(); //创建路由
const { login, addAdmin, updataAdmin, deleteAdmin, findAdminById, findAdminAll } = require('../../services/adminService.js');
const { asyncResult, filterObj } = require('../util/index');
const { sing } = require('../api/jwt.js');
//登录
router.post('/login', asyncResult(async (req, res, next) => {
    const { loginId, loginPwd } = req.body;
    console.log(req.body)
    const result = await login(loginId, loginPwd);
    if(result){
        console.log(result[0].id)
        sing(res,{userId:result[0].id},undefined);
    }
    return result;
}))

//添加管理员 
router.post('/', asyncResult(async (req, res, next) => {
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    return await addAdmin(newObj);
}))

//修改管理员 id有地址传入
router.put('/:id', asyncResult(async (req, res, next) => {
    const newObj = filterObj(req.body, 'createdAt', 'updatedAt', 'deletedAt', 'id');
    const { id: userId } = req.params;
    return await updataAdmin(userId, newObj);
}))

//删除管理员id是地址传入
router.delete('/:id', asyncResult(async (req, res, next) => {
    const { id: userId } = req.params;
    return await deleteAdmin(userId);
}))

//根据id查找管理员
router.get('/:id', asyncResult(async (req, res, next) => {
    const { id: userId } = req.params;
    return await findAdminById(+userId); //这里设置了必须是数字类型的id
}))

//查找所有管理员
router.get('/', asyncResult(async (req, res, next) => {
    return await findAdminAll();
}))
module.exports = router;