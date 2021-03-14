//每日一句模型
const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const DailySentence = sequelize.define('dailySentence', {
    //英文
    en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //中文
    zh_CN: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    paranoid: true
})

module.exports = DailySentence;