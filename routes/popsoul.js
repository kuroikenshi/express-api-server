var express = require('express')
var router = express.Router()


// 扩展String类型的原生方法，提供类似java或python的format方法
String.prototype.format = function(args) {
	var result = this;
	if (arguments.length > 0) {
		if (arguments.length == 1 && typeof (args) == "object") {
			for (var key in args) {
				if(args[key]!=undefined){
					var reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
		}
		else {
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] != undefined) {
					var reg = new RegExp("({[" + i + "]})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
	}
	return result;
}


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

var momentDatas = {
  '5': {
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
    'createId': 't00002',
    'createName': '托尼老师',
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
    }, {
      'commentId': 5,
      'momentId': 5,
      'authorId': '123456789',
      'authorName': '华晨名',
      'content': '删我删我',
      "toUserId": "83",
      "toUserName": '八月父亲',
      "flag": 0
    }, {
      'commentId': 6,
      'momentId': 5,
      'authorId': '123456789',
      'authorName': '华晨名',
      'content': '删我删我删我删我删我删我删我删我',
      "toUserId": "83",
      "toUserName": '八月父亲',
      "flag": 0
    }, {
      'commentId': 7,
      'momentId': 5,
      'authorId': '123456789',
      'authorName': '华晨名',
      'content': '删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我删我',
      "toUserId": "83",
      "toUserName": '八月父亲',
      "flag": 0
    }]
  },
  '6': {
    'momentId': 6,
    'classCode': 'GWC182021',
    'content': '今天二语文课,大家一起欣赏了好听的音乐',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-05 14:57:25.0',

    'likes': [{"userId": "33", "username": "张三父亲"}, {"userId": "44", "username": "李四母亲"}, {"userId": "123456789", "username": "华晨名"}],

    'commentsList': [{
      'commentId': 3,
      'momentId': 6,
      'authorId': 81,
      'authorName': '八月助教',
      'content': '特别好',
      "toUserId": "",
      "toUserName": null,
      "flag": 0
    }, {
      'commentId': 4,
      'momentId': 6,
      'authorId': 53,
      'authorName': '小五父亲',
      'content': '特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！特别好！！',
      "toUserId": "83",
      "toUserName": '八月父亲',
      "flag": 0
    }]
  },
  '7': {
    'momentId': '7',
    'classCode': 'GWC182021',
    'content': '测试',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-05 14:57:25.0',

    'likes': [],
    'commentsList': []
  },
  '8': {
    'momentId': '8',
    'classCode': 'GWC182021',
    'content': '测试',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-05 14:57:25.0',

    'likes': [],
    'commentsList': []
  },
  '9': {
    'momentId': '9',
    'classCode': 'GWC182021',
    'content': '测试',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-05 14:57:25.0',

    'likes': [],
    'commentsList': []
  }
}

var commentAutoId = 10
var momentAutoId = 10

var oldMomentData = {
  'momentId': '{momentId}',
  'classCode': 'GWC182021',
  'content': '动态-第{momentId}条，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容',
  'elementUrl': [],

  'userPhoto': '/static/imgs/user-photo.png',
  'createId': 't00001',
  'createName': '莉莉老师',
  'createDate': '2019-03-05 14:57:25.0',

  'likes': [],
  'commentsList': []
}

function createMoment(momentId) {
  return JSON.parse(JSON.stringify(oldMomentData).format({momentId: momentId}))
}

let createLen = 13
for (let i = 0; i < createLen; i++) {
  let momentId = momentAutoId++
  momentDatas[momentId] = createMoment(momentId)
}

// 获取班级动态
router.all('/moments/getMoments',
  function (req, res, next) {
    console.log('>>> 获取班级动态\n')
    console.log('    req.body>>>', req.body)
    console.log('    req.params>>>', req.params)
    console.log('    req.query>>>', req.query)
    console.log('\n')
    
    let count = req.body.count || 5
    console.log('count>>>', count)
    
    // 加载最新的数据
    if (req.body.mode == 'new') {
      // TODO: 区分有无lastUpdate
      // TODO: 区分有无后续数据
      res.json({
        "status": 200,
        "msg": "OK",
        "data": Object.values(momentDatas).slice(0, count)
      })
    }
    // 加载以前的数据
    else if (req.body.mode == 'old') {
      // 确定加载更多，要加载的id范围
      let momentIds = Object.keys(momentDatas)
      let idx = momentIds.indexOf(req.body.momentId)
      
      console.log('加载更多的开始id（不包含）:', req.body.momentId)
      console.log('加载更多的开始id（不包含）位于:', idx)
      
      console.log('momentIds 1 >>>', momentIds)
      momentIds = momentIds.slice(idx + 1, idx + 1 + count)
      console.log('momentIds 2 >>>', momentIds)
      
      // 组装更多数据
      let moreMoments = []
      for (let i = 0; i < momentIds.length; i++) {
        moreMoments.push(momentDatas[momentIds[i]])
      }
      
      if (moreMoments.length > 0) {
        console.log('>>>>>>', moreMoments[0].momentId, '~', moreMoments[momentIds.length - 1].momentId)
      }
      
      res.json({
        "status": 200,
        "msg": "OK",
        "data": moreMoments
      })
    }
  }
)

// 点赞/取消点赞
router.all('/moments/toggleLike',
  function (req, res, next) {
    let foundLikeIdx = -1
    
    let momentDataItem = momentDatas[req.body.momentId]
    momentDataItem.likes.forEach((item, idx) => {
      if (item.userId === "123456789") {
        foundLikeIdx = idx
      }
    })
    if (foundLikeIdx != -1) {
      momentDataItem.likes.splice(foundLikeIdx)
    }
    else {
      momentDataItem.likes.push({"userId": "123456789", "username": "华晨名"})
    }
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": momentDataItem
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
    
    let momentDataItem = momentDatas[req.body.momentId]
    momentDataItem.commentsList.push({
      'commentId': commentAutoId++,
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
      "data": momentDataItem
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
    let momentDataItem = momentDatas[req.body.momentId]
    momentDataItem.commentsList.forEach((commentItem, idx) => {
      if (commentItem.commentId == req.body.commentId) {
        foundIdx = idx
      }
    })
    momentDataItem.commentsList.splice(foundIdx, 1)
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": momentDataItem
    })
  }
)

// TODEL: 获取新消息个数
router.all('/moments/getNewsCount',
  function (req, res, next) {
  }
)

module.exports = router
