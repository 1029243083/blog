//颁发jwtwebtoken
const jwt = require('jsonwebtoken');
const secrekey = 'szc';
const cookieKey = 'token';

/**
 * 
 * @param {*} res 响应对象 
 * @param {*} info  发送的数据
 * @param {*} maxAge  最大保留时间
 */
exports.sing = function (res, info, maxAge = 3600 * 24 * 1000) {
   const token =  jwt.sign(info, secrekey, {
        expiresIn: maxAge
    });
    //适配游览器
    res.cookie(cookieKey,token,{
        maxAge:maxAge,
        path:'/'
    });

    //适配其他设备
    res.header('authorization', token);
}

//解析jwt

exports.verify = function(req){
    let token = req.cookies[cookieKey]; //获取token
    if(!token){
        token = req.headers['authorization'];
        if(!token){
            return null; //没有token 
        }
    }

    token = token.split(' ');
    token = token.length === 1 ? token[0] : token[1];
    console.log(token);
    try {
        const result = jwt.verify(token,secrekey); //解析token
        return result;
    } catch (error) {
        return null;
    }
}