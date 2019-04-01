var app = getApp();
Page({

  data: {

  },

  onLoad: function () {
    this.setData({
      content: app.globalData.content.contract_fillingExplanation
    })
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: this.data.content.navigationBarTitle
    })
  },
  next:function(){
    wx.navigateTo({
      url: '../contract/contract',
    })
  }
})