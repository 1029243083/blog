const express = require('express');
const router = express.Router();
const {asyncResult} = require('../util');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,'../../public/portraitImg/upload') ) //图片保存到那个位置
    },
    filename: function (req, file, cb) {
      const timeNow = Date.now();
      const str = Math.random().toString(32).slice(-6);
      const ext = path.extname(file.originalname);
      const fileName = `${timeNow}-${str}${ext}`;
      cb(null,fileName);  //配置文件名
    }
  })
  
const upload = multer({ 
    storage: storage,
    limits:{
        fileSize:5242880, //最大5M
    }
})


//Multer 会添加一个 body 对象 以及 file 或 files 对象 到 express 的 request 对象中。 
//body 对象包含表单的文本域信息，file 或 files 对象包含对象表单上传的文件信息。
router.post('/',upload.single('img'),asyncResult(async(req,res,next) => {
  console.log(req.file)
  console.log('ss')
    return `http://localhost:925/portraitImg/upload/${req.file.filename}`;

}));

module.exports = router