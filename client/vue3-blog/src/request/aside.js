//获取侧边栏标签的数据

import axios from '../axios';
import api from './api';
export async function getType(dataRef) {
    axios.get(api.type.getType.path).then(res => {
        const data = res.data;
        dataRef.value = data.data;
    })
}