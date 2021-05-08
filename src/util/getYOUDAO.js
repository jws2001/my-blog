const axios = require('axios');
const DailySentence = require('../services/daily_sentence');
module.exports = async function() {
    const date = Date.now();
    let daily = [];
    const result = await axios.get(`https://dict.youdao.com/infoline?mode=publish&date=${date}&update=auto&apiversion=5.0`);
    for (const key in result.data) {
        if (key === 'toDelete') {
            continue;
        }
        result.data[key].forEach((item, index) => {
            if (item.type === '壹句' && index % 2 === 0) {
                daily.push({
                    en: item.title,
                    zh_CN: item.summary
                })
            }
        })
    }
    DailySentence.bulkCreate(daily[0]);
    return daily;
}