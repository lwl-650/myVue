module.exports = {
  devServer: {
    port: 80,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: "http://localhost:9002",
        // target: 'http://java.lwlsl.top:8000', // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': ''
        }
      },
      // '/api': {
      //   target: "http://parent.lwlsl.top:9002",
      //   // target: 'http://java.lwlsl.top:8000', // 要跨域的域名
      //   changeOrigin: true, // 是否开启跨域
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // },
      '/xyz': {
        target: "http://node.lwlsl.top:3000",
        // target: 'http://java.lwlsl.top:8000', // 要跨域的域名
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/xyz': ''
        }
      },
    },
  }
}