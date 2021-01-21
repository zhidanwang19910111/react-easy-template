var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.config')
var path = require('path')
var chalk = require('chalk')
var { createProxyMiddleware } = require('http-proxy-middleware')

var config = require('../config/index.js')

webpackConfig.entry.unshift("webpack-hot-middleware/client?reload=true")
var compiler = webpack( webpackConfig )
var app = express()
// 代理本地环境
var proxyTable =  config.dev.proxyTable
Object.keys(proxyTable).forEach( context => {
  var options = proxyTable[context];
  if ( typeof options === 'string' ) {
      options = {
          target: options
      };
  }
  app.use(createProxyMiddleware(options.filter || context, options));
});

var devMiddleWare = require('webpack-dev-middleware')(compiler, {
  //绑定中间件的公共路径,与webpack配置的路径相同
  publicPath: '/',
  quiet: true  //向控制台显示任何内容 
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

app.use(devMiddleWare)
app.use(hotMiddleware)

var port = config.dev.port
var server = app.listen( port, () => {
  console.log( chalk.green.underline(`client is running at localhost:${port}`) )
} )