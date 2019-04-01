// pages/notice/notice.js
Page({

  data: {

  },

  onLoad: function (options) {

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
  getVerificationCode:function(){
    console.log('获取验证码')
  },
  query:function(){
    console.log('查询订单状态')
  }
})