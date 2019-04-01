var app = getApp();
Page({

  data: {
    
  },

  onLoad: function (options) {
    console.log('app.globalData.content.inquire_inquire', app.globalData.content.inquire_inquire)
    console.log(11)
    var that = this
    that.setData({
      content: app.globalData.content.inquire_inquire
    })
    console.log('content', that.data.content)
  },
  onShow: function (options) {
    console.log('app.globalData.content.inquire_inquire', app.globalData.content.inquire_inquire)
    console.log(11)
    var that = this
    that.setData({
      content: app.globalData.content.inquire_inquire
    })
    console.log('content', that.data.content)
  },


  onReady: function () {
    console.log(22)
  },

  


})