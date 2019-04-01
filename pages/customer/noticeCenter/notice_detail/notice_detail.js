Page({

  data: {
    bindinfo:[],
  },

  onLoad: function (options) {
    console.log('消息详情页onload',options)
    var that = this
    if(options.bindinfo){
    that.setData({
      bindinfo: JSON.parse(options.bindinfo)
    })
    }
    console.log(that.data.bindinfo)
  },
  deleteNotice:function(e){
    console.log(e)
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除该消息吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.data.bindinfo.splice(e.currentTarget.dataset.index, 1);
          that.setData({
            bindinfo: that.data.bindinfo,
          });
          wx.setStorageSync('bindinfo', JSON.stringify(that.data.bindinfo))
          console.log('删除后的', JSON.parse(wx.getStorageSync('bindinfo')))
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  }
})