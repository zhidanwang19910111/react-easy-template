var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.config')
var path = require('path')

webpackConfig.entry.unshift("webpack-hot-middleware/client?reload=true")
var compiler = webpack( webpackConfig )
var app = express()
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

var port = '3456'
var server = app.listen( port, () => {
  console.log(`sever is running at localhost:${port}`)
} )