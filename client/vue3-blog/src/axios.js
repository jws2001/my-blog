import axios from 'axios';
import NProgress from 'nprogress';

const instance = axios.create({
    baseURL: ''
})
NProgress.configure({ showSpinner: false });
instance.interceptors.request.use(function(config) {
    NProgress.start()
    return config
})
instance.interceptors.response.use(function(response) {
    NProgress.done()
    return response;
})
export default instance;