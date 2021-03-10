const Koa = require('koa');
const Static = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const cookie = require('koa-cookie').default;
const app = new Koa();

//返回后台管理页面
app.use(Static(path.resolve(__dirname, './public')));



//解析cookie
app.use(cookie());

//验证有没有登录
app.use(require('./src/middleware/token'));

//解析请求体
app.use(bodyParser());

//验证后台是否登录
app.use(require('./src/routes/admin'));

//处理type的路由
app.use(require('./src/routes/type'));

//文章的上传
app.use(require('./src/routes/article-to-upload'));

/**
 * 前端获取数据接口
 */

//接口
app.use(require('./src/webRoutes/type'));
//文章
app.use(require('./src/webRoutes/article'));





app.listen(80);