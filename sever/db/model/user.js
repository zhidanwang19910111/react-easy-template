var mongoose = require('mongoose')
var userSchame = require('../schema/user')

var UserModel = mongoose.model('users', userSchame )

module.exports = {
  save( document, callback ) {
    var userModel =  new UserModel( document )
    userModel.save(callback)
  },
  find( username, callback ) {
    UserModel.find({ 'username': username  }, function( err, docs) {
      callback(docs)
    })
  },
  findOne( username, callback ) {
    UserModel.findOne( {'username': username}, callback)
  }
}