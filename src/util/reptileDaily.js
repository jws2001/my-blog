//爬取每日一句的数据 保存到数据路

const { default: axios } = require("axios");
const cheerio = require('cheerio');
const DailySentence = require('../services/daily_sentence');
axios.get('https://www.douban.com/note/244854670/').then(async res => {
    const $ = cheerio.load(res.data);
    const div = $('#link-report div.note');
    let htmlStr = div.html();
    htmlStr = htmlStr.split('<br>');
    const data = [];
    htmlStr.forEach((item, index) => {
        if (index % 2 === 0) {
            data.push({
                en: item
            })
        } else {
            data[data.length - 1].zh_CN = item
        }
    })
    await DailySentence.bulkCreate(data);
    console.log('爬虫获取数据完成')
})