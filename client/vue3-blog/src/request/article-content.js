/**
 * @param {文章的id} id
 * 获取文章内容 
 */
import axios from '../axios';
import api from './api';
export async function getArticleContnet(id) {
    const result = await axios.get(api.article.getArticleContent.path, {
        params: {
            id
        }
    })
    const data = result.data.data;
    console.log(data);
    return data;
}