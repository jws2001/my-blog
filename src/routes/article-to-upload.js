const Router = require('@koa/router');
const returnData = require('../util/returnData');
const multer = require('@koa/multer');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const Article = require('../services/articleServices');
const upload = multer({
    dest: path.resolve(__dirname, '../../public/uploadMd')
});


const router = new Router({
    prefix: '/api/article'
})

router.post('/', upload.single('content'), async ctx => {
    const fileName = path.resolve(__dirname, '../../public/uploadMd', ctx.file.filename);
    //获取当前的utc时间戳
    const dateTime = moment().utc().valueOf();
    const content = fs.readFileSync(fileName, 'utf-8');
    const ArticleInfo = await Article.addArticle(content, dateTime, ctx.request.body.typeId, ctx.request.body.title, ctx.request.body.describe);
    ctx.body = returnData(ArticleInfo, '上传成功');

})

module.exports = router.routes();