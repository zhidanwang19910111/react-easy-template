var express = require('express')
var router = express.Router()
var UserModel = require('../db/model/user')
/**
   * 用户注册接口
   * @interface /api/user/register
   * @method POST
   * @param {String} username 名称，不能为空
   * @param  {String} password 密码，不能为空
   * @param  {String} confirmPassword 确认密码，不能为空
   * @returns {Object}
   */
router.post('/register', function( req, res) {
  // post 获取req.body, get 获取req.query或者params
  // 判断用户名为空
  var { username, password } = req.body
  if( !req.body || !username || !password) {
    res.send({
      message: '用户名或密码不能为空',
      code: 0,
      success: false
    })
    return
  }
  // 判断用户名是否重复
  if( username && password ) {
    UserModel.findOne( username, function( err, docs) {
      if( docs ) {
        res.send({
          message: '改用户已经被注册',
          code: 0,
          success: true,
          data: {
            username: docs.username,
            userId: docs._id
          }
        })
        return
      }else {
        UserModel.save( { username: username, password: password }, function( err, response) {
          console.log(err)
          if( err ) {
            res.send({
              message: '注册失败',
              code: 0,
              success: false,
            })
          }else{
            res.send({
              message: '注册成功',
              code: 1,
              success: true,
              data: response
            })
          }
        })
      }
    })
  }
})
router.get('/getUserList', function( req, res) {
  var { username } = req.query
  if( !username ) {
    res.send({
      code: 200,
      success: true,
      data: []
    })
    return
  }
  UserModel.find(username, function( list ) {
    res.send({
      code: 200,
      success: true,
      data: list
    })
  } )
})
/**
   * 用户登陆接口
   * @interface /api/user/login
   * @method POST
   * @param {String} username 名称，不能为空
   * @param  {String} password 密码，不能为空
   * @returns {Object}
   */
router.post('/login', function(req, res) {
  let { username, password } = req.body
  if( !req || !username || !password ) {
    res.send({
      message: '用户名或者密码不能为空',
      data: 0,
      success: false
    })
    return
  }
  if( username && password ) {
    UserModel.findOne( username, function( err, document ) {
      if( err ) {
        res.send({
          message: '登陆失败',
          data: 0,
          success: false
        })
      }else{
        if( document ) {
          if( document.password != password ) {
            res.send({
              message: '用户名或密码不正确',
              data: 0,
              success: false
            })
          }else{
            res.send({
              message: '登陆成功',
              data: {
                name: document.username
              },
              success: true,
            })
          }
        }else{
          res.send({
            message: '请先注册',
            data: 1,
            success: false
          })
        }
      }
    })
  }
})
module.exports = router