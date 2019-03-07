var express = require('express')
var router = express.Router()

// 伪·登录
router.all('/login',
  function (req, res, next) {
    console.log('>>> 登录')
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": {
        "username": "123456789"
      }
    })
  }
)

// 获取班级列表
router.all('/classes/getClassList',
  function (req, res, next) {
    console.log('>>> 获取班级列表')
    res.json({
      "status": 200,
      "msg": "OK",
      "data": [{
        "classCode": "PE19003",
        "className": "泡泡少儿英语学习班1",
        "count": 10
      }, {
        "classCode": "PE19004",
        "className": "泡泡少儿英语学习班2",
        "count": 4
      }, {
        "classCode": "PE19007",
        "className": "泡泡少儿英语学习班5",
        "count": 6
      }]
    })
  }
)

var momentData5 = {
  'momentId': 5,
  'classCode': 'GWC182021',
  'content': '今天的音乐课，大家一起欣赏了XXX音乐，受到艺术熏陶。今天的音乐课，大家一起欣赏了XXX音乐，受到艺术熏陶。',
  'elementUrl': [
    '/static/imgs/th1.jpg',
    '/static/imgs/m3.jpg',
    '/static/imgs/sb1.jpg',
    '/static/imgs/s5.jpg',
    '/static/imgs/sb3.jpg',
    '/static/imgs/sb4.jpg',
    '/static/imgs/timg.jpg'
  ],

  'userPhoto': '/static/imgs/user-photo.png',
  'createBy': '托尼老师',
  'createDate': '2018-11-05 14:57:25.0',

  'likes': [{"userId": "33", "username": "张三父亲"}, {"userId": "44", "username": "李四母亲"}, {"userId": "123456789", "username": "华晨名"}],

  'commentsList': [{
    'commentId': 1,
    'momentId': 5,
    'authorId': 81,
    'authorName': '八月助教',
    'content': '特别好',
    "toUserId": "",
    "toUserName": null,
    "flag": 0
  }, {
    'commentId': 2,
    'momentId': 5,
    'authorId': 53,
    'authorName': '小五父亲',
    'content': '特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！',
    "toUserId": "83",
    "toUserName": '八月父亲',
    "flag": 0
  }]
}
var moment5CommentAutoId = 3

// 获取班级动态
router.all('/moments/getMoments',
  function (req, res, next) {
    console.log('>>> 获取班级动态')
    res.json({
      "status": 200,
      "msg": "OK",
      "data": [momentData5]
    })
  }
)

// 点赞/取消点赞
router.all('/moments/toggleLike',
  function (req, res, next) {
    let foundLikeIdx = -1
    momentData5.likes.forEach((item, idx) => {
      if (item.userId === "123456789") {
        foundLikeIdx = idx
      }
    })
    if (foundLikeIdx != -1) {
      momentData5.likes.splice(foundLikeIdx)
    }
    else {
      momentData5.likes.push({"userId": "123456789", "username": "华晨名"})
    }
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": momentData5
    })
  }
)

// 发表评论
router.all('/comments/publishComment',
  function (req, res, next) {
    console.log('发表评论>>>\n')
    console.log('    req.body>>>', req.body)
    console.log('    req.params>>>', req.params)
    console.log('    req.query>>>', req.query)
    console.log('\n')
    
    momentData5.commentsList.push({
      'commentId': moment5CommentAutoId++,
      'momentId': 5,
      'authorId': req.body.authorId,
      'authorName': req.body.authorName,
      'content': req.body.content,
      "toUserId": req.body.toUserId || '',
      "toUserName": req.body.toUserName || null,
      "flag": 0
    })
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": momentData5
    })
  }
)

// 删除空间动态
router.all('/comments/deleteComment',
  function (req, res, next) {
    console.log('删除评论>>>\n')
    console.log('    req.body>>>', req.body)
    console.log('    req.params>>>', req.params)
    console.log('    req.query>>>', req.query)
    console.log('\n')
    
    let foundIdx = -1
    momentData5.commentsList.forEach((commentItem, idx) => {
      if (commentItem.commentId == req.body.commentId) {
        foundIdx = idx
      }
    })
    momentData5.commentsList.splice(foundIdx, 1)
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": momentData5
    })
  }
)

// TODEL: 获取新消息个数
router.all('/moments/getNewsCount',
  function (req, res, next) {
  }
)

module.exports = router
