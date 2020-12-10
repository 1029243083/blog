const { pathToRegexp } = require('path-to-regexp');//对路径的匹配
const { errorResult } = require('./util/index');
const { verify } = require('./api/jwt.js');
const needPath = [
    {method: 'POST', path: "/api/admin"}
]

module.exports = (req, res, next) => {
    const needArr = needPath.filter(api => {
        const exp = pathToRegexp(req.path); //根据需要验证的路劲生成匹配的正则
        return api.method === req.method && exp.test(api.path);
    })
    if (needArr.length === 0) {
        //没有要验证的
        next();
        return;
    }

    //需要验证的
    const result = verify(req); //解析tokenreq.cookies.token;有值的话代表验证通过，null的话表示验证不通过
    if (result) {
        req.userId = result.id;
        next();
    } else {
        NotToken(req, res, next);
        return;
    }
}

function NotToken(req, res, next) {
    res.status(403).send(403, errorResult('没有通过验证', 403))
}