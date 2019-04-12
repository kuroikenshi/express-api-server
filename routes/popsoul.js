var express = require('express')
var router = express.Router()

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function(fmt) { //author: meizz
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}

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
        "user": {
          "id": "123456789",
          "username": "华晨名",
          "userType": 4
        }
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
  '115': {
    'momentId': 115,
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
    'createDate': '2019-03-06 14:57:25',

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
  '114': {
    'momentId': 114,
    'classCode': 'GWC182021',
    'content': '今天二语文课,大家一起欣赏了好听的音乐',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-05 14:57:25',

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
  '113': {
    'momentId': '113',
    'classCode': 'GWC182021',
    'content': '测试',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-04 14:57:25',

    'likes': [],
    'commentsList': []
  },
  '112': {
    'momentId': '112',
    'classCode': 'GWC182021',
    'content': '测试',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-03 14:57:25',

    'likes': [],
    'commentsList': []
  },
  '111': {
    'momentId': '111',
    'classCode': 'GWC182021',
    'content': '测试',
    'elementUrl': [],

    'userPhoto': '/static/imgs/user-photo.png',
    'createId': 't00001',
    'createName': '莉莉老师',
    'createDate': '2019-03-02 14:57:25',

    'likes': [],
    'commentsList': []
  }
}

var commentAutoId = 10
var momentAutoId = 111

var oldMomentData = {
  'momentId': '{momentId}',
  'classCode': 'GWC182021',
  'content': '动态-第{momentId}条，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容，动态内容',
  'elementUrl': [],

  'userPhoto': '/static/imgs/user-photo.png',
  'createId': 't00001',
  'createName': '莉莉老师',
  'createDate': '2019-02-{createDay} 14:57:25',

  'likes': [],
  'commentsList': []
}

function createMoment(momentId, createDay) {
  return JSON.parse(JSON.stringify(oldMomentData).format({momentId: momentId, createDay: createDay}))
}

let createLen = 13
let createAutoDay = 24
for (let i = 0; i < createLen; i++) {
  let momentId = momentAutoId--
  let createDate = createAutoDay--
  momentDatas[momentId] = createMoment(momentId, createDate)
}

// 获取已存最大的班级动态id
function getTheMaxMomentId() {
  let ids = Object.keys(momentDatas)
  let max = -1
  ids.forEach(id => {
    if (parseInt(id) > max) {
      max = id
    }
  })
  return max
}

// 获取班级动态
router.all('/moments/getMoments',
  function (req, res, next) {
    console.log(' -> 获取班级动态\n')
    console.log('  req.body>>>', req.body)
    console.log('  req.params>>>', req.params)
    console.log('  req.query>>>', req.query)
    console.log('\n')
    
    let count = req.body.count || 5
    console.log('  count>>>', count)
    
    // 加载最新的数据
    if (req.body.mode == 'new') {
      // TODO: 区分有无lastUpdate
      // TODO: 区分有无后续数据
      res.json({
        "status": 200,
        "msg": "OK",
        "data": Object.values(momentDatas).reverse().slice(0, count)
      })
    }
    // 加载以前的数据(按照createDate < lastUpdateTime)
    else if (req.body.mode == 'old') {
      // 确定加载更多，要加载的id范围
      let momentIds = Object.keys(momentDatas).reverse()
      
      console.log(' -> 加载更多模式')
      console.log('    所有逆序momentIds: [' + momentIds.join(', ') + ']')
      
      // 旧代码：逻辑是使用最后一个momentId做判断
      /* let idx = momentIds.indexOf(req.body.momentId)
      
      console.log('加载更多的开始id（不包含）:', req.body.momentId)
      console.log('加载更多的开始id（不包含）位于:', idx)
      
      console.log('momentIds 1 >>>', momentIds)
      momentIds = momentIds.slice(idx + 1, idx + 1 + count)
      console.log('momentIds 2 >>>', momentIds) */
      
      // 已经加载的最后一个momentItem的时间戳
      let lastUpdateTimeStamp = req.body.lastUpdateTime ? new Date(req.body.lastUpdateTime).valueOf() : new Date()
      // console.log(' -> 最后一次更新的时间戳: ' + lastUpdateTimeStamp)
      
      // 组装更多数据
      let moreMoments = []
      for (let i = 0; i < momentIds.length; i++) {
        if (momentDatas[momentIds[i]] && momentDatas[momentIds[i]].createDate) {
          let momentTimeStamp = new Date(momentDatas[momentIds[i]].createDate).valueOf()
          /* 
          console.log(' -> 当前时间戳: ' + momentTimeStamp + ', momentId: ' + momentIds[i])
          console.log('    小于最后一次更新时间戳: ' + (momentTimeStamp < lastUpdateTimeStamp))
          console.log('    当前more中数据个数: ' + moreMoments.length)
          console.log(' => ' + ((momentTimeStamp < lastUpdateTimeStamp) && (moreMoments.length < count)))
          */
          // 如果当前遍历的moment的createDate在lastUpdateDate之前的
          // 并且moreMoments中不满一次返回上线，加入到moreMoments中
          if (((momentTimeStamp < lastUpdateTimeStamp) && (moreMoments.length < count))) {
            moreMoments.push(momentDatas[momentIds[i]])
          }
        }
      }
      
      if (moreMoments.length > 0) {
        let moreIds = moreMoments.map(v => v.momentId).join(', ')
        
        console.log(' => [' + moreIds + ']')
      } else {
        console.log(' => 没有更多')
      }
      
      res.json({
        "status": 200,
        "msg": "OK",
        "data": moreMoments
      })
    }
  }
)

    
/*
'momentId': '111',
'classCode': 'GWC182021',
'content': '测试',
'elementUrl': [],

'userPhoto': '/static/imgs/user-photo.png',
'createId': 't00001',
'createName': '莉莉老师',
'createDate': '2019-03-05 14:57:25',

'likes': [],
'commentsList': []
*/
// 发布班级动态
router.all('/moments/publishMoment',
  function (req, res, next) {
    console.log('>>> 发布班级动态\n')
    console.log('    req.body>>>', req.body)
    console.log('    req.params>>>', req.params)
    console.log('    req.query>>>', req.query)
    console.log('\n')

    let newMomentId = getTheMaxMomentId() + 1 + ''
    let momentData = req.body
    momentData['momentId'] = newMomentId
    
    momentData['userPhoto'] = momentData['userPhoto'] || '/static/imgs/user-photo.png'  // 模拟从session获取
    momentData['createId'] = momentData['createId'] || 123456789                        // 模拟从session获取
    momentData['createName'] = momentData['createName'] || '华晨名'                      // 模拟从session获取
    momentData['createDate'] = (new Date()).Format("yyyy-MM-dd hh:mm:ss.S")
    
    momentData['likes'] = []
    momentData['commentsList'] = []
    
    console.log(momentData)
    
    momentDatas[newMomentId] = momentData
    
    res.json({
      "status": 200,
      "msg": "OK",
      "data": {
        "result": 1
      }
    })
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
