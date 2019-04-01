var app = getApp();
Page({

  data: {
  
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      content: app.globalData.content.srvIntroduction_srvIntroduction
    })
  },
  onShow: function () {
    var that = this
    that.setData({
      content: app.globalData.content.srvIntroduction_srvIntroduction
    })
    wx.setNavigationBarTitle({
      title: that.data.content.navigationBarTitle,
    })
  },

  toProcess:function(e){
    wx.navigateTo({
      url: '../srvIntroduction/srvProcess',
    })
  },
  toProduct:function(e) {
    wx.navigateTo({
      url: '../srvIntroduction/srvProduct',
    })
  },

})