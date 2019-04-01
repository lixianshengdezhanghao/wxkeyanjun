// pages/me/msg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
    ]
  },
  changeviewer: function (e) {
    // console.log(e.currentTarget)
    var id = e.currentTarget.id, tp = e.currentTarget.dataset.tp, list = this.data.list;
  },
  refreshColumn: function (e) {
    var openID = getApp().globalData.openID;
    var that = this
    var resmsg = new Array(0)
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/msg/',
      data: {
        openID: openID,
      },
      success: res => {
        for (var item in res.data.msg) {
          var o = new Object();
          var msg_inf=res.data.msg[item]
          o.id = msg_inf.split(';')[0]
          o.tp = msg_inf.split(';')[1]
          o.name = msg_inf.split(';')[0]
          o.from = msg_inf.split(';')[2]
          o.open = false
          resmsg.push(o)
        }
        this.setData({
          list: resmsg
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.refreshColumn()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.refreshColumn()
    console.log(this)

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})