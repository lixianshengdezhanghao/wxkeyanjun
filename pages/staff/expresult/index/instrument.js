//index.js

var app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    count: 1,
    list: []
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      project: options.project,
      content: app.globalData.content.staff_expresult_index_instrument
    })
    wx.showLoading({
      title: that.data.content.loading,
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  refesh: function (e) {
    console.log(e)
    var openID = getApp().globalData.openID;
    console.log(openID)
    var that = this
    var resmsg = new Array(0)
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/instrument/',
      data: {
        project: that.data.project,
        count: this.data.count,
        openID: app.globalData.openID
      },
      success: res => {
        console.log(res)
        for (var item in res.data.data) {
          var o = new Object();
          var msg_inf = res.data.data[item]
          o.id = msg_inf.instrument
          o.instrument = msg_inf.instrument
          o.update = msg_inf.update
          o.status = msg_inf.status
          o.open = false
          resmsg.push(o)
        }
        wx.hideLoading()
        this.setData({
          list: resmsg,
          count: this.data.count + 1
        })
        if (this.refreshReadyCallback) {
          this.refreshReadyCallback(res)
        }
      },
      fail: function (res) {
        console.log('fail',res)
        if (res.errMsg == 'request:fail timeout'){
          wx.hideLoading()
          wx.showModal({
            title: this.data.content.warn,
            content: this.data.content.warn_content,
            confirmText: this.data.content.confirmText,
            cancelText:this.data.content.cancelText
          })
        }
      }
    })
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id;
    console.log(e)
    wx.navigateTo({
      url: 'instrumentDetail?instrument=' + e.currentTarget.id
    })
  },
 
  onShow: function () {
    this.refesh()
  }
});