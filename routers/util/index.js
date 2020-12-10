//处理异步 如果异步报错这个函数可以把错误移交到后面
exports.asyncResult = function (fun) {
    return async (req, res, next) => {
        try {
            const result = await fun(req, res, next);
            res.send(successResult(result))
        } catch (error) {
            next(error)
        }
    }
}

const successResult = function (date) {
    return {
        code: 200,
        msg: 'success',
        date
    }
}

exports.filterObj = function (date, ...obj) {
    const newObj = {};
    for (const key in date) {
        if (!obj.includes(key))
            newObj[key] = date[key];
    }
    return newObj;
}

exports.errorResult = function (msg = '服务器错误',code = 500) {
    return {
        code,
        msg
    }
}