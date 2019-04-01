// pages/noticeCenter/noticeCenter.js
var WxNotificationCenter = require("../../../WxNotificationCenter/WxNotificationCenter.js");
Page({

  data: {
    number_noread:'',
    noticeNumOfBind:0,
    bindinfo:[],
  },

  onLoad: function (options) {
    /* console.log('notice.js onload',options)
    var that = this
    that.setData({
      noticeNumOfBind: JSON.parse(options.noticeNumOfBind),
      bindinfo: options.bindinfo
    })
    console.log(that.data.noticeNumOfBind)
    console.log(that.data.bindinfo) */
  },
  onShow:function(){
    var that = this
    if (wx.getStorageSync('bindinfo')) {
      that.setData({
        bindinfo: wx.getStorageSync('bindinfo')
      })
    }
  },
  mainpage: function () {
    console.log('mainpage')
    // wx.navigateTo({
    //   url:'../mainpage/mainpage'
    // })
  },
  swicth: function () {
    console.log('switch')
  },
  toDetail:function(){
    var that = this
    if (that.data.noticeNumOfBind != 0){
    WxNotificationCenter.postNotificationName("readNotice", that.data.noticeNumOfBind);
    that.setData({
      noticeNumOfBind:0
    })
    }
  },
  toOrder(){
    wx.navigateTo({
      url: './notice_order/notice_order',
      success: function(res){
        // success
      }
    })
  },
  toLogistics(){
    wx.navigateTo({
      url: './notice_logistics/notice_logistics',
      success: function(res){
        // success
      }
    })
  }
})