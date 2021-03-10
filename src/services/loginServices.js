const LoginUser = require('../models/loginUser');
const Md5 = require('md5');
const returnJsonString = require('../util/returnData');
//添加一个用户
async function addLoginUser(loginId, loginPwd) {
    //判断用户名是否存在
    const beforeLoginId = await selectUser(loginId);
    //用户名存在
    if (beforeLoginId) {
        return returnJsonString(null, '用户名已存在')
    }
    //经过md5加密的密码
    const md5Password = Md5(loginPwd);
    //添加一个用户
    const info = await LoginUser.create({
        loginId,
        loginPwd: md5Password
    })
}

//判断用户名 有没有被注册过
async function selectUser(loginId) {
    let uInfo = await LoginUser.findOne({
        where: {
            loginId,
        },
        attributes: ['loginId', 'id']
    })
    return uInfo.toJSON()
}


module.exports = {
    addLoginUser
}