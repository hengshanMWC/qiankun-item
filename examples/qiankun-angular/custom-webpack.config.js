const appName = require('./package.json').name;
module.exports = {
  devServer: {
    port: 8003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${appName}`,
  },
};
