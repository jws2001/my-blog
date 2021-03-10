const sequelize = require('./index');
//同步模型文件


//同步所有模型
(async() => {
    await sequelize.sync({
        alter: true
    })
    console.log('全部模型 同步成功');
})()