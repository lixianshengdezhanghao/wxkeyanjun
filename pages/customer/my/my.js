//获取应用实例
var WxNotificationCenter = require("../../../WxNotificationCenter/WxNotificationCenter.js");
var app = getApp()
Page({
  data: {
    userInfo: {},
    noticeNum:0,
    noticeNumOfBind:0,
    code:'',
    name:'',
    item:{},
    bindinfo:[],
    num:3,
  },
  //事件处理函数
  bindViewTap: function () {

    if (app.globalData.Login) {
      // if (true) {
      // console.log('hello')
      wx.navigateTo({
        url: '../mainpage/mainpage'
      })
    }
    else {

      wx.navigateTo({
        url: '../register/register'
      })
    }
  },
  onLoad: function (options) {
    var that = this
    console.log('my.jsonLoad')
    if (wx.getStorageSync('bindinfo')){
    that.setData({
      bindinfo: wx.getStorageSync('bindinfo')
    })
    }
    console.log('my加载时bindinfo', that.data.bindinfo, '属性为', typeof that.data.bindinfo)
    console.log(options)
    WxNotificationCenter.addNotification( 'bindNot',that.bindNotFn, that)
    WxNotificationCenter.addNotification('readNotice', that.readNotice, that)
    // WxNotificationCenter.addNotification("testNotificationItem2Name", that.testNotificationFromItem2Fn, that)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    console.log(that.data.userInfo)
    console.log(that.data.noticeNum)
  },
  bindNotFn: function (info) {//这是也给带参数的例子，info为字符串
    console.log("bind套件");
    var that = this
    console.log('改前的bindinfo', that.data.bindinfo)
    that.setData({
      noticeNum: that.data.noticeNum + 1,
      noticeNumOfBind: that.data.noticeNumOfBind + 1,
     'item.code':info.code,
     'item.name':info.name,
    })
    console.log(that.data.item.code, that.data.item.name)
    console.log('22',that.data.bindinfo)
    if( that.data.bindinfo.length == 0){
      console.log('33')
      that.data.bindinfo.push(that.data.item)
    }
    else{
    that.setData({
      bindinfo: JSON.parse(that.data.bindinfo)
    })
    that.data.bindinfo.push(that.data.item)
    }
    that.setData({
      bindinfo: JSON.stringify(that.data.bindinfo)
    })
    wx.setStorageSync('bindinfo', that.data.bindinfo)
    console.log('缓存',wx.getStorageSync('bindinfo'))
    console.log('bindinfo',that.data.bindinfo)
  },
  readNotice:function(readNum){ //阅读通知后，将通知数目改变
    var that = this
    that.setData({
      noticeNum: that.data.noticeNum - readNum,
      noticeNumOfBind:0
    })
    // wx.setStorageSync('noticeNum', that.data.noticeNum)
    console.log(that.data.noticeNum)
  },

  onShow:function(){ 

    var that = this
    if (wx.getStorageSync('bindinfo')) {
      that.setData({
        bindinfo: wx.getStorageSync('bindinfo')
      })
    }
    // console.log('my onshow app.bind ', app.globalData.bind)
    // if (app.globalData.bind){
    //   that.setData({
    //     noticeNum:1
    //   })
    // }
  }
})
