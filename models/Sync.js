require('./ArticleLIst.js'); //文章列表
require('./Article.js'); //文章
require('./LeavingMsg.js'); //留言
require('./User.js'); //用户
require('./Label'); //标签
require('./Admin.js'); //管理员
const sequelize = require('./db.js');

async function Sync() {
   await sequelize.sync({ force: true });
   console.log('所有模型同步完成')
}

Sync()