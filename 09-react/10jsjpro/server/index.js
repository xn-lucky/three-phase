const express = require('express')

const app = express()

// 启动服务器 node index.js

// 解决跨域
app.use((req, res, next) => {
  // 允许跨域的地址
  res.set('Access-Control-Allow-Origin', '*')
  // 允许跨域的请求方式
  res.set('Access-Control-Allow-Mehtods', 'GET,POST,PUT,DELETE')
  // 允许跨域的请求头
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  // 预检请求的缓存时间
  res.set('Access-Control-Max-Age', 36400)
  // 是否进行预检请求
  res.set('Access-Control-Allow-Credentials', true)

  if (req.method === 'options') {
    // 预检请求 直接返回响应
    res.end()
    return
  }

  next()
})

/*
  后台路由
    key： /search/users
    value： function () {}
*/
app.get('/search/users', function(req, res) {
  res.json({
    items: [
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3197842941,3401708652&fm=26&gp=0.jpg',
        id: 1
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266634123,3446110963&fm=26&gp=0.jpg',
        id: 2
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604291079629&di=ae43069ddd6ff53e7cb465a453dc5ee6&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190825%2F15%2F1566718774-TcqiaoEYjR.png',
        id: 3
      },
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604291079626&di=609ebbd00847bf3cd4284e5d311b4493&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F03%2F03%2Fdb984f43d283ce8ec3fb8c2b99681281.jpg',
        id: 4
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604291079625&di=c0ee51ca412cdc8b59fb003c81251115&imgtype=0&src=http%3A%2F%2Fbig5.wallcoo.com%2Fcartoon%2FVladstudio_high_quality_widescreen_wallpaper_1920x1200_01%2Fimages%2F001_vladstudio_punctuation.jpg',
        id: 5
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604291079626&di=609ebbd00847bf3cd4284e5d311b4493&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F03%2F03%2Fdb984f43d283ce8ec3fb8c2b99681281.jpg',
        id: 6
      },
      {
        login: 'ray',
        html_url: 'https://github.com/oldluo-ray',
        avatar_url:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604291079629&di=ae43069ddd6ff53e7cb465a453dc5ee6&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190825%2F15%2F1566718774-TcqiaoEYjR.png',
        id: 7
      },
      {
        login: 'ruanyf',
        html_url: 'https://github.com/ruanyf',
        avatar_url:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266634123,3446110963&fm=26&gp=0.jpg',
        id: 8
      },
      {
        login: 'yyx990803',
        html_url: 'https://github.com/yyx990803',
        avatar_url:
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3197842941,3401708652&fm=26&gp=0.jpg',
        id: 9
      }
    ]
  })
})

app.listen(5000, 'localhost', err => {
  if (!err) console.log('服务器启动成功了，请访问 http://localhost:5000')
  else console.log(err)
})
