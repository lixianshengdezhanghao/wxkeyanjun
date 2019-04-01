var app = getApp();
Page({

  data: {
    
  },

  onLoad: function () {
    var that = this
    that.setData({
      content: app.globalData.content.srvIntroduction_srvProcess
    })
  },
  previewImage: function (e) {
    console.log('img e', e)
    console.log(e.target.dataset.src)
    var current = e.target.dataset.src;
    var urls = []
    urls.push(current)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls  // 需要预览的图片http链接列表
    })
  },
})