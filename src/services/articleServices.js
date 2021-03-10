const Article = require('../models/article');
const Type = require('../models/type');

//添加文章
async function addArticle(content, time, typeId, title, describe) {
    const info = await Article.create({
        content,
        time,
        typeId,
        title,
        describe
    })
    return info
}

//分页获取文章列表
async function getPageArticle(offset, limit, typeId) {
    const where = {};
    if (typeId) {
        where.typeId = typeId
    }
    const info = await Article.findAndCountAll({
        where,
        offset: (offset - 1) * limit,
        limit,
        attributes: ['id', 'title', 'describe', 'time', 'typeId'],
        include: {
            model: Type,
            attributes: ['id', 'title']
        },
        order: [
            ['id', 'DESC']
        ]
    });
    return info
}

//根据id候取文章内容
async function getArticleContent(id) {
    const info = await Article.findByPk(id, {
        attributes: ['id', 'title', 'time', 'typeId', 'content', 'updatedAt'],
        include: {
            model: Type,
            attributes: ['id', 'title']
        }
    })
    return info;
}


module.exports = {
    addArticle,
    getPageArticle,
    getArticleContent
}