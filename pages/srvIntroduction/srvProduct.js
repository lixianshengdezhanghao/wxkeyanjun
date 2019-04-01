var srvIntroduction = require('../../utils/srvIntroduction.js');
var app = getApp();
Page({

  data: {
    srvType: [],
    title:'',
  },
 
  onLoad: function () {
    var that = this
    console.log('app.globalData.content.srvIntroduction_srvProduct', app.globalData.content.srvIntroduction_srvProduct)
    that.setData({
      content: app.globalData.content.srvIntroduction_srvProduct
    })
    console.log('content',that.data.content)
    for (var i in srvIntroduction.data) {
      that.data.srvType.push(i)
    }
    that.setData({
      srvType: that.data.srvType
    })
    console.log('srvType',that.data.srvType)
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: this.data.content.navigationBarTitle,
    })
  }

})