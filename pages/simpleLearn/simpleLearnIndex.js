var app = getApp();
Page({

  data: {

  },

  onLoad: function (options) {
    this.setData({
      content: app.globalData.content.simpleLearn_simpleLearnIndex
    })
  },
  goToRegister:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  }

})