'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const targetUrl="http://120.78.142.62:4000"
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/role": {
        target: targetUrl,
        changeOrigin: true
      },
      "/oauth": {
        target: targetUrl,
        changeOrigin: true
      },
      "/delivery": {
        target: targetUrl,
        changeOrigin: true
      },
      "/region": {
        target: targetUrl,
        changeOrigin: true
      },
      "/goods": {
        target: targetUrl,
        changeOrigin: true
      },
      "/order": {
        target:targetUrl,
        changeOrigin: true
      },
      "/goodsspu": {
        target:targetUrl,
        changeOrigin: true
      },
      "/goodsspec": {
        target: targetUrl,
        changeOrigin: true
      },
      "/filegroup": {
        target: targetUrl,
        changeOrigin: true
      },
      "/goodscategory": {
        target:targetUrl,
        changeOrigin: true
      },
      "/file": {
        target: targetUrl,
        changeOrigin: true
      },
      "/shop": {
        target: targetUrl,
        changeOrigin: true
      },
      "/cityjson": {
        target: "http://pv.sohu.com",
        changeOrigin: true
      },
      "/wxapppage": {
        target: targetUrl,
        changeOrigin: true
      },
      //权限
      "/sysperm": {
        target: targetUrl,
        changeOrigin: true
      },
    },


    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),//指向包含应用程序的所有静态资源的根目录
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
