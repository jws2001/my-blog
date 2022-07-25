export default {
    proxy: {
        '/web': {
            target: 'http://songhua.icu',
            changeOrigin: true,
        }
    }
}