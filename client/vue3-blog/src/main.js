import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import './index.css'
import 'github-markdown-css'
// import 'highlight.js/styles/xcode.css'
import 'nprogress/nprogress.css'
// import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App);
app.use(router);

app.mount('#app')