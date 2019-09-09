module.exports = {
  devServer: {
    // 跨域代理
    proxy: {
      "/api": {
        target: 'http://47.103.30.166:8000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  // 基本路径
  publicPath: "./"
};
