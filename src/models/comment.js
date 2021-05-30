const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Comment = sequelize.define('comment', {
    //用户名
    userName: {
        type: DataTypes.STRING, //一篇文章中 不能存在相同的用户名
        allowNull: false
    },
    //评论用户ID
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //评论内容
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //评论时间
    createTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //头像图片地址
    avatar: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
module.exports = Comment