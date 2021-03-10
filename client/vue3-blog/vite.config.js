export default {
    proxy: {
        '/web': {
            target: 'http://localhost',
            changeOrigin: true,
        }
    }
}