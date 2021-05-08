const jwt = require('jsonwebtoken');
const cookieKey = "token";
const secrect = '焦文松的博客-(blog)';
//颁发JWT
/**
 * 
 * @param {ctx} ctx 
 * @param {过期时间} maxAge 
 * @param {主要信息} info 
 */
exports.publish = function(ctx, info = {}, maxAge = 3600 * 1000) {
    const token = jwt.sign(info, secrect, {
        expiresIn: maxAge, //过期时间
    });
    //添加到cookie
    ctx.cookies.set(cookieKey, token, {
        maxAge,
        path: '/'
    });
    //添加其他传输
    ctx.append('authorization', token);
}


//验证JWT
exports.verify = async function(ctx) {
    //尝试从cookie中获取jwt
    const cookies = ctx.cookie;
    let token = cookies ? cookies[cookieKey] : null;
    if (!token) {
        //cookie中不存在 去authorization 获取 token
        token = ctx.headers.authorization;
        if (!token) {
            //从cookie 和 authorization 都没有获取到值 证明没有登录
            return null;
        }
        token = token.split(' ');
        token = token.length === 1 ? token[0] : token[1];
    }
    //有token 验证token是否过期
    try {
        //token有效
        const result = jwt.verify(token, secrect);
        return result;
    } catch {
        //token无效
        return null;
    }
}