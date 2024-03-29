const path = require('path');

module.exports = {
  publicPath: '/',
  devServer: {
    disableHostCheck: true,
    port: 80,
    hot: false, // 关闭热更新
    inline: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        '~': path.resolve('public'),
      },
    },
  },
};
