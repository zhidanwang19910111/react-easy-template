var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}, ( err, client) => {
  if( !err ) {
    console.log('mongodb is connection to 127.0.0.1:27017')
  }else {
    console.log('数据库连接失败请重新连接')
  }
})
mongoose.connection.once('open', () => {
  console.log('数据库连接成功')
})
mongoose.connection.once('close', () => {
  console.log('数据库断开连接')
})
// 创建 Schema
var Schema = mongoose.Schema
var studSchema = new Schema(
  {
    name: String,
    age: Number,
    address: String,
    gender: {
      type: String,
      default: 'female'
    }
  }
)

// 创建model
var StuModel = mongoose.model( 'Student', studSchema )

// 创建一个文档
/* StuModel.create( {name: '测试schema', age: 18 }, function(err) {
  if( !err ) {
    console.log('插入成功')
  }
}) */

// 查找
/* StuModel.find({age: 18}, {name: 1, age: 1, _id: 0} ,function(err, docs) {
  console.log(docs)
}) */

// 修改
/* StuModel.update({age: 18}, { $set: { name: '测试修改'} }, (err) => {
  console.log('修改成功')
}) */

/* Document 和 结合中的文档一一对应， Document是文档的实例， 通过Model 查询到的结果都是document */
/* var stu = new StuModel(
  {
    name: 'document stu',
    age: 30
  }
)
stu.save() */


