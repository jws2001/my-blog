import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './route/index'
import './store/articleData';
import 'github-markdown-css';
import 'highlight.js/styles/xcode.css'
const app = createApp(App).use(router).mount('#app')