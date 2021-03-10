import api from './api';
import axios from '../axios';
import moment from 'moment';
//根据id获取type信息
export async function getType(id) {
    const result = await axios.get(api.type.getType.path + `?id=${id}`);
    return result.data.data
}

//获取列表信息
export async function getArticle(offset, limit, typeId) { //不传递typeId就是首页的获取信息
    const params = {
        offset,
        limit
    }
    typeId ? params.typeId = typeId : '';
    const result = await axios.get(api.article.getArticle.path, {
        params
    });
    const data = result.data.data;
    data.rows.forEach(item => {
        item.time = moment(+item.time).format('YYYY年MM月DD日')
    })
    return result.data.data;
}