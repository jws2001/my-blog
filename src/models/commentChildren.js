const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const CommentChildren = sequelize.define('commentchildren', {
    //用户名
    userName: {
        type: DataTypes.STRING,
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
    avatarSrc: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = CommentChildren;