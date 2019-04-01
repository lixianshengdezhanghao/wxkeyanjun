var app = getApp();
Page({

  data: {

  },

  onLoad: function (options) {
    var that = this
    console.log('order openID', app.globalData.openID)
    that.setData({
      content: app.globalData.content.my_order
    })
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/project/',
      data: {
        'openID':app.globalData.openID
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if(res.data.total!=0){
          that.setData({
            orderList:res.data.data
          })
        }
      }

    })

  },

  
})