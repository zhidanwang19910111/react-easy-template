var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express()
var router = require('./router/router')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', router)
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}, ( err, client) => {
  if( err ) throw err
  app.listen('6789')
})
