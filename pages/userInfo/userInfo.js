var app = getApp();
Page({

  data: {
    registerInfo:[],
  },
  onLoad: function (options) {
    console.log(app.globalData.registerInfo)
    this.setData({
      content: app.globalData.content.userInfo_userInfo,
      registerInfo: app.globalData.registerInfo
    })
  },
})