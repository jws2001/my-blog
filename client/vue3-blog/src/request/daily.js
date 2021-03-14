import api from './api';
import axios from '../axios';


async function getDaily() {
    const info = await axios.get(api.daily.getDaily.path);
    return info
}

export default getDaily;