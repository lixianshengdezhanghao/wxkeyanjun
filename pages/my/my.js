var app=getApp()
var Chinese = require("../../utils/Chinese.js")
var English = require("../../utils/English.js")
Page({

  data: {
    userInfo: {},
    index_Language:-1,
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      content: app.globalData.content.my_my
    })
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  bindLanguageChange:function(e){
    console.log('e',e)
    var that = this
    console.log(typeof(e.detail.value))
    var language = that.data.content.Language[e.detail.value] 
    console.log('language1', language)
    that.setData({
      index_Language:e.detail.value
    })
    app.globalData.language = language
    console.log('app.globalData.language', app.globalData.language)
    that.getContent(language)
    wx.setTabBarItem({
      index: 0,
      text: that.data.content.tabBar.srvIntro,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 1,
      text: that.data.content.tabBar.intelligentInquiry,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 2,
      text: that.data.content.tabBar.ServicePurchase,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 3,
      text: that.data.content.tabBar.me,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
  },
  getContent: function (language) {
    var that = this
    console.log('getContent language', language)
    if (language == "English") {
      that.setData({
        content: English.content.my_my
      })
      app.globalData.content = English.content
    } else {
      that.setData({
        content: Chinese.content.my_my
      })
      app.globalData.content = Chinese.content
    }
    console.log('content', that.data.content)
  },

})