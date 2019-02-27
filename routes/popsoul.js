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

// 获取班级动态
router.all('/moments/getMoments',
  function (req, res, next) {
    console.log('>>> 获取班级动态')
    res.json({
      "status": 200,
      "msg": "OK",
      "data": [{
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
        
        'likes': [{"userId": "1", "username": "张三父亲"}, {"userId": "2", "username": "李四母亲"}, {"userId": "123456789", "username": "华晨名"}],
    
        'commentsList': [{
          'id': 1,
          'momentId': 1,
          'author': '八月助教',
          'content': '特别好',
          'toUser': null
        }, {
          'id': 2,
          'momentId': 1,
          'author': '小五父亲',
          'content': '特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！',
          'toUser': '八月父亲'
        }]
      },
      
      {
        'momentId': 4,
        'classCode': 'GWC182021',
        'content': '今天的美术课，大家一起受到艺术熏陶。',
        'elementUrl': [
          '/static/imgs/sb1.jpg',
          '/static/imgs/s5.jpg',
          '/static/imgs/sb3.jpg',
          '/static/imgs/th1.jpg'
        ],
    
        'userPhoto': '/static/imgs/user-photo.png',
        'createBy': '托尼老师',
        'createDate': '2018-11-05 14:57:25.0',
    
        'likes': null,
    
        'commentsList': [{
          'id': 1,
          'momentId': 1,
          'author': '七月助教',
          'content': '特别好',
          'toUser': null
        }, {
          'id': 2,
          'momentId': 1,
          'author': '小六父亲',
          'content': '真的特别好',
          'toUser': null
        }]
      }]
    })
  }
)

var countOfMoment5 = 0;
var countOfMoment4 = 0;

// 点赞/取消点赞
router.all('/moments/toggleLike',
  function (req, res, next) {
    let data = {}
    // console.log('toogleLike>>>\n', req)
    console.log('toogleLike>>>\n')
    console.log('    req.body>>>', req.body)
    console.log('    req.params>>>', req.params)
    console.log('    req.query>>>', req.query)
    console.log('\n')
    
    if (req.body.momentId == 5) {
      data = {
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
        
        'likes': [{"userId": "1", "username": "张三父亲"}, {"userId": "2", "username": "李四母亲"}],
    
        'commentsList': [{
          'id': 1,
          'momentId': 1,
          'author': '八月助教',
          'content': '特别好',
          'toUser': null
        }, {
          'id': 2,
          'momentId': 1,
          'author': '小五父亲',
          'content': '特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！',
          'toUser': '八月父亲'
        }]
      }
      
      countOfMoment5 += 1
      if (countOfMoment5 % 2 == 0) {
        data.likes.push({"userId": "123456789", "username": "华晨名"})
      }
    }
    
    else if (req.body.momentId == 4) {
      data = {
        'momentId': 4,
        'classCode': 'GWC182021',
        'content': '今天的美术课，大家一起受到艺术熏陶。',
        'elementUrl': [
          '/static/imgs/sb1.jpg',
          '/static/imgs/s5.jpg',
          '/static/imgs/sb3.jpg',
          '/static/imgs/th1.jpg'
        ],
    
        'userPhoto': '/static/imgs/user-photo.png',
        'createBy': '托尼老师',
        'createDate': '2018-11-05 14:57:25.0',
    
        'likes': [],
    
        'commentsList': [{
          'id': 1,
          'momentId': 1,
          'author': '七月助教',
          'content': '特别好',
          'toUser': null
        }, {
          'id': 2,
          'momentId': 1,
          'author': '小六父亲',
          'content': '真的特别好',
          'toUser': null
        }]
      }
      
      countOfMoment4 += 1
      if (countOfMoment4 % 2 == 1) {
        data.likes.push({"userId": "123456789", "username": "华晨名"})
      }
    }
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": data
    })
  }
)

// TODEL: 获取新消息个数
router.all('/moments/getNewsCount',
  function (req, res, next) {
    console.log('>>> 获取新消息个数')
  }
)

module.exports = router
