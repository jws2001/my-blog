import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/web': {
                target: 'http://songhua.icu',
                changeOrigin: true,
            }
        }
    }
})
