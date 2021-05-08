const { Sequelize } = require('sequelize');
const confg = require('../../config');
//连接到数据库
const sequelize = new Sequelize(confg.database, 'root', confg.passworld, {
    host: confg.host,
    dialect: confg.dialect,
    logging: false
})

module.exports = sequelize;