var app = getApp();
var content = null;
var touchs = [];
var canvasw = 0;
var canvash = 0;
wx.getSystemInfo({
  success: function (res) {
    canvasw = res.windowWidth;
    canvash = canvasw * 9 / 16;
  },
}),
Page({
  
  data: {
    signImage: '',
  },

  start: function (event) {
    // console.log("触摸开始" + event.changedTouches[0].x)
    // console.log("触摸开始" + event.changedTouches[0].y)
    //获取触摸开始的 x,y
    let point = { x: event.changedTouches[0].x, y: event.changedTouches[0].y }
    touchs.push(point)
  },

  // 画布的触摸移动手势响应
  move: function (e) {
    let point = { x: e.touches[0].x, y: e.touches[0].y }
    touchs.push(point)
    if (touchs.length >= 2) {
      this.draw(touchs)
    }
  },

  // 画布的触摸移动结束手势响应
  end: function (e) {
    console.log("触摸结束over" + e)
    //清空轨迹数组
    for (let i = 0; i < touchs.length; i++) {
      touchs.pop()
    }

  },

  // 画布的触摸取消响应
  cancel: function (e) {
    console.log("触摸取消   " + e)
  },

  // 画布的长按手势响应
  tap: function (e) {
    console.log("长按手势" + e)
  },

  error: function (e) {
    console.log("画布触摸错误" + e)
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.setData({
      content: app.globalData.content.canvas_canvas
    })
    //获得Canvas的上下文
    content = wx.createCanvasContext('firstCanvas')
    //设置线的颜色
    content.setStrokeStyle("#87CEEB")
    //设置线的宽度
    content.setLineWidth(2)
    //设置线两端端点样式更加圆润
    content.setLineCap('round')
    //设置两条线连接处更加圆润
    content.setLineJoin('round')
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
  },

  //绘制
  draw: function (touchs) {
    let point1 = touchs[0]
    let point2 = touchs[1]
    touchs.shift()
    content.moveTo(point1.x, point1.y)
    content.lineTo(point2.x, point2.y)
    content.stroke()
    content.draw(true)
  },
  //清除操作
  clearClick: function () {
    //清除画布
    content.clearRect(0, 0, canvasw, canvash)
    content.draw(true)
  },
  //保存图片
  saveClick: function () {
    var that = this
    wx.canvasToTempFilePath({
      canvasId: 'firstCanvas',
      success: function (res) {
        console.log('res',res)
        //打印图片路径
        console.log(res.tempFilePath)
        //设置保存的图片
        that.setData({
          signImage: res.tempFilePath,
        })
        wx.setStorageSync('signImage', res.tempFilePath)
        //存入服务器
        wx.uploadFile({
          url: 'https://firmiana.ncpsb.org/weprogram/signimage', //接口地址          
          filePath: res.tempFilePath,
          name: 'signature',
          formData: {               //HTTP 请求中其他额外的 form data 
            'user': app.globalData.openID
          },
          success: function (res) {
            console.log('up sign success',res)
            // wx.redirectTo({
            //   url: '../contract/contract',
            //   complete: function (res) {
            //     console.log('navite', res)
            //   }
            // })
            wx.navigateBack({
              delta:1
            })
          }
        })
       
      }
    })

  }

})
