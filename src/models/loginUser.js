//用户登录模型
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const LoginUser = sequelize.define('loginuser', {
    //用户名
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //登录密码
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    paranoid: true
})

module.exports = LoginUser