const path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
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
    module: {
      rules: [
        {
          test: /\.vuetxt$/i,
          loader: 'raw-loader',
        },
      ],
    },
  },
};
