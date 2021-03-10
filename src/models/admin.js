const { DataTypes } = require('sequelize');
const sequelize = require('./index');

//定义标签类别的模型
const Admin = sequelize.define('admin', {
    //字体图标的编码
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //标签名
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    paranoid: true
})

module.exports = Admin;