const Type = require('../models/type');


//创建一个博客的类型
async function addType(title, iconText) {
    const typeInfo = await Type.create({
        title,
        iconText
    })
    return typeInfo.toJSON()
}

//删除一个博客类型
async function removeType(id) {
    const removeInfo = await Type.destroy({
        where: {
            id
        }
    })
    return removeInfo
}

//获取博客类型 传递了id就是获取单个博客类型 没有就是全部的博客类信
async function getAllType(typeId) {
    let result;
    if (typeId) {
        result = await Type.findByPk(+typeId, {
            attributes: ['id', 'title']
        })
    } else {
        result = await Type.findAll({
            attributes: ['id', 'title', 'iconText']
        })

    }
    return result
}

//修改一个博客的类型信息
async function putType(title, iconText, id) {
    const result = await Type.update({
        title,
        iconText
    }, {
        where: {
            id
        }
    })
    return result;
}

module.exports = {
    addType,
    removeType,
    getAllType,
    putType,
}