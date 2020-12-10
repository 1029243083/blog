const {errorResult} = require('./util');
const multer = require('multer');
module.exports = (err,req,res,next) => {
    if(err){
        if(err instanceof multer.MulterError){
            res.send(errorResult(err.message,500))
            return;
        }
        res.send(errorResult(err.message,500))
    }else{
        next();
    }
}