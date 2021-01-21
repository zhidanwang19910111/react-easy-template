module.exports = {
  dev: {
    port: '3456',
    proxyTable: {
      '/api/**': {
        target: 'http://127.0.0.1:6789/',
        changeOrigin: true,
      },
    },
  }
}