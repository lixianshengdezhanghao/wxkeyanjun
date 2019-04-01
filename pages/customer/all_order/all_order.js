Page({
  data: {
    // 定义页面的初始数据
  },
  onLoad: function (options) {
    // Do something when page load 
  },
  onReady: function () {
    // Do something when page ready
  },
  onShow: function () {
    // Do something when page show
  },
  onHide: function () {
    // Do something when page hide
  },
  onUnload: function () {
    // Do something when page close
  },
  onPullDownRefresh: function () {
    // Do something when pull down
  },
  // 事件处理函数
  buttonTap:function(){
    wx.navigateTo({
      url:'../../bind'
    })
  }
})