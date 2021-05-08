const DailySentence = require('../models/daily_sentence');

//添加增加接口
async function addDailySentence(en, zh_CN) {
    const info = await DailySentence.create({
        en,
        zh_CN
    });
    return info;
}

//获取每日一句
async function getDaily() {
    const info = await DailySentence.findOne({
        attributes: ['id', 'en', 'zh_CN'],
        order: [
            ['id', 'DESC']
        ]
    });
    return info
}

//批量创建每日一句
async function bulkCreate(data) {
    const info = await DailySentence.create(data, {
        attributes: ['en', 'zh_CN']
    });
    return info;
}


module.exports = {
    addDailySentence,
    getDaily,
    bulkCreate
}