module.exports = {
  devServer: {
    port: 9000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://java.lwlsl.top:8000', // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  }
}