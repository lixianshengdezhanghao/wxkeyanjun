var app = getApp();
Page({

  data: {
  },
  onLoad:function(){
    app.editTabBar();    //显示自定义的底部导航
    this.setData({
      content: app.globalData.content.staff_expresult_index_conclusions
    })
  },
  Project: function(e){
    wx.redirectTo({
      url: 'index',
    })
  },
  Instrument: function(e) {
    wx.redirectTo({
      url: 'instrument',
    })
  },
})