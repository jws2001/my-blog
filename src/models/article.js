const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Article = sequelize.define('article', {
    //文章内容
    content: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
    //上传的时间
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //文章的标题
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //文章的描述
    describe: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    paranoid: true, //是偏执表
})

module.exports = Article;