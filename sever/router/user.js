var express = require('express')
var router = express.Router()
var UserModel = require('../db/model/user')
router.post('/register', function( req, res) {
  // post 获取req.body, get 获取req.query或者params
  // 1.获取参数
  var { username, password } = req.body
  if( !req.body || !username || !password) {
    res.send({
      message: '用户名或密码不能为空',
      code: 0,
      success: false
    })
    return
  }
  // 2.处理参数
  if( username == 'admin' ) {
    UserModel.save(
      {
        username: 'Mayun',
        password: 'youqian'
      }
    )
    res.send({
      code: 0,
      success: false,
      data: {
        id: 123,
        name: '王志丹',
        message: '请求成功'
      }
    })
  }else{
    res.send({
      code: 200,
      success: true,
      data: {
        id: 123,
        name: '王志丹',
        message: '请求成功'
      }
    })
  }
})
router.get('/getUserList', function( req, res) {
  var { username } = req.query
  UserModel.find(username, function( list ) {
    res.send({
      code: 200,
      success: true,
      data: list
    })
  } )
})
module.exports = router