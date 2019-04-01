// pages/index/experimentdetail.js
Page({

  data: {
    experiment: '',
    imageUrl: '',
    description: ''
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      experiment: options.experiment,
    })
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/tic_ms1/',
      data: {
        experiment: this.data.experiment,
      },
      success: res => {
        console.log(res.data.url)
        that.setData({
          imageUrl: res.data.url,
          description: res.data.description
        })
        if (this.refreshReadyCallback) {
          this.refreshReadyCallback(res)
        }
      },
      fail: function () {
        console.log('fail')
      }
    })
  },


  onShow: function () {
    console.log(this.data)
  },

})