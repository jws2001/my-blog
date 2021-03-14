const { Sequelize } = require('sequelize');

//连接到数据库
const sequelize = new Sequelize('my_blog', 'root', 'qwer20010107', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = sequelize;