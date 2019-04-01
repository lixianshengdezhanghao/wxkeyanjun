// pages/detail/detail.js
Page({

  data: {
    theme:'',
    content:''
  },

  onLoad: function (options) {
    var that = this 
    that.setData({
      theme:options.theme,
      content:options.content
    })
    wx.setNavigationBarTitle({
      title: that.data.theme + '-Firmiana个人蛋白质组检测服务实验室'  //页面标题为路由参数
    })
  },
})