const { DataTypes } = require('sequelize');
const sequelize = require('./index');

//定义标签类别的模型
const Type = sequelize.define('Type', {
    //字体图标的编码
    iconText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //标签名
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Type;