//上传接口

const Router = require('@koa/router');
const returnData = require('../util/returnData');
const multer = require('@koa/multer');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const Article = require('../services/articleServices');

//上传文章配置

const uploadMD = multer.diskStorage({
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.md')
    },
    destination(req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/uploadMd'));
    }
})

const upload = multer({
    fileFilter(req, file, cb) {
        const fileSuffix = file.originalname;
        if (fileSuffix.substring(fileSuffix.lastIndexOf('.') + 1) === 'md') {
            //只能上传这个MD类型的文件
            cb(null, true)
        } else {
            cb(null, false)
        }
    },
    storage: uploadMD
});



const router = new Router({
    prefix: '/api/article'
})

// 上传文章接口
router.post('/', upload.single('content'), async ctx => {
    if (!ctx.file) {
        ctx.body = returnData(null, '不支持这个后缀的文件名');
        return
    }
    const fileName = path.resolve(__dirname, '../../public/uploadMd', ctx.file.filename);
    //获取当前的utc时间戳
    const dateTime = moment().utc().valueOf();
    const content = fs.readFileSync(fileName, 'utf-8');
    const ArticleInfo = await Article.addArticle(content, dateTime, ctx.request.body.typeId, ctx.request.body.title, ctx.request.body.describe);
    ctx.body = returnData(ArticleInfo, '上传成功');

})

const uploadIMG = multer.diskStorage({
    filename: function(req, file, cb) {
        const suffix = file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + suffix)
    },
    destination(req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/imgs'));
    }
})

//上传图片配置
const imgUplod = multer({
    fileFilter(req, file, cb) {
        const fileSuffix = file.originalname;
        if (['bmp', 'gif', 'jpg', 'png'].includes(fileSuffix.substring(fileSuffix.lastIndexOf('.') + 1))) {
            //只能上传以上的文件类型
            cb(null, true)
        } else {
            cb(null, false)
        }
    },
    storage: uploadIMG
})

//上传图片接口 返回图片地址
router.post('/img', imgUplod.single('img'), async ctx => {
    if (!ctx.file) {
        ctx.body = returnData(null, '不支持这个后缀的文件名');
        return
    }
    //返回服务器地址
    ctx.body = returnData({
        address: `/imgs/${ctx.file.filename}`
    }, '上传成功');
})


module.exports = router.routes();