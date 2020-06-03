var mongoose = require('mongoose')
var userSchame = require('../schema/user')

var UserModel = mongoose.model('users', userSchame )

module.exports = {
  save( document ) {
    var userModel =  new UserModel( document )
    userModel.save(function( err ) {
      if(err ) {
        console.log('保存失败')
        return
      }
      console.log('保存成功')
    })
  },
  find( username, callback ) {
    UserModel.find({ 'username': username  }, function( err, docs) {
      callback(docs)
    })
  }
}