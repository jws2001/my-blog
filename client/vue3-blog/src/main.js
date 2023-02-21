import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import './index.css'
import 'github-markdown-css'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/xcode.css'
import 'nprogress/nprogress.css'
const app = createApp(App);
app.use(router);

app.mount('#app')