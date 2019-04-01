//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Welcome to Firmiana',
    geren: {name: "aa", height: '160', weight: '56', gender: '男', birthDate: "2018-04-05", blood_pressure1: "120", blood_pressure2:"80"},
    goods: { address: ["北京市", "县", "延庆县"], tel: '123456', code:'Exp010005',status:'待收货/待付款'},
    userInfo: {},
    FirmianaInfo: {},
    languageArr:['中文','英文','韩文'],
    index: -1, 
    language:'',
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log('e.detail.userInfo',e.detail.userInfo)
    console.log('e.detail.rawData',e.detail.rawData)
    var that = this
    that.setData({
      userInfo: e.detail.userInfo
    })
    console.log('this.data.userInfo',this.data.userInfo)
  },
  bindViewTap: function (e) {
    // if (app.globalData.Login) {
    //   wx.navigateTo({
    //     url: '../mainpage/mainpage'
    //   })
    // }
    // else {
    //   wx.navigateTo({
    //     url: '../register/register'
    //   })
    // }
    wx.reLaunch({
      url: '../my/my?language=' + this.data.language,

    })
   
  },
  bindPickerChange: function (e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      language: this.data.languageArr[e.detail.value]
    })
  },
  
})

