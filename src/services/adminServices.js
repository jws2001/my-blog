const Admin = require('../models/admin');
const md5 = require('md5');
const returnData = require('../util/returnData');
//添加后台管理员
async function addAdmin(loginId, loginPwd) {
    const Md5Password = md5(loginPwd);
    const info = await Admin.create({
        loginId,
        loginPwd: Md5Password
    })
    return info;
}

//管理员登录验证
async function loginAdmin(loginId, loginPwd) {
    const md5Password = md5(loginPwd);
    let uInfo = await Admin.findOne({
        where: {
            loginId,
            loginPwd: md5Password
        },
        attributes: ['id']
    })
    if (uInfo) {
        //账号密码正确
        uInfo = uInfo.toJSON();
        return returnData(uInfo, '登录成功');
    } else {
        return returnData('', '账号或密码错误', 0);
    }
}

//获取个人信息
async function whoAmI(id) {
    const result = await Admin.findByPk(id);
    return {
        id: result.id,
        userName: result.loginId
    }
}
module.exports = {
    loginAdmin,
    addAdmin,
    whoAmI
}