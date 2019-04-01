const app = getApp();
const network = require('../../utils/network.js');
var Chinese = require("../../utils/Chinese.js")
var English = require("../../utils/English.js")
Page({
  data: {
    motto: 'Welcome to use',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    regitered: false,
    registerInfo: '',
    openID: '',
    registeredName: '',
    haveHeadImg: false,
    languages: [{ language:'English',checked:false},{language:'中文',checked:false}],
    language: '',
    content:[],
    showDialog:false,
  },
  onLoad: function () {
    var that = this
    var lastLanguage = app.globalData.language
    console.log('onload language that', that.data.language)
    that.getContent(lastLanguage)
  },
  onShow:function(){
    console.log(' on show language', this.data.language)
    console.log('userInfo', this.data.userInfo)
    console.log('registeredName', this.data.registeredName)
    console.log('缓存的用户信息',wx.getStorageSync('userInfo'))
    console.log('缓存的注册名', wx.getStorageSync('registeredName'))
    // this.setData({
    //   userInfo: wx.getStorageSync('userInfo'),
    //   registeredName: wx.getStorageSync('registeredName')
    // })
  },
  getContent: function (language) {
    var that = this
    console.log('getContent language', language)
    if (language == "English") {
      that.setData({
        content: English.content.index_index
      })
      app.globalData.content = English.content
    } else {
      that.setData({
        content: Chinese.content.index_index
      })
      app.globalData.content = Chinese.content
    }
    console.log('content', that.data.content)
  },
  changeLanguage: function (e) {
    console.log('cahnge language e',e)
    var that = this
    console.log('changeLanguage--language', that.data.language)
    var language = e.detail.value
    app.globalData.language = language
    that.setData({
      language: app.globalData.language,
    })
    console.log('change language', that.data.language)
    console.log('change languages', that.data.languages)
    that.getContent(language)
  },
  selectLanguage:function(e){
    var that = this
    console.log('select language e',e)
    var id = e.currentTarget.dataset.id
    var language = that.data.languages[id];
    var languages = that.data.languages
    languages[id].checked = !languages[id].checked
    that.setData({
      languages: languages
    })
    console.log('languages', that.data.languages)
  },
  bindViewTap: function () {

    if (this.data.registeredName) {
      wx.switchTab({
        url: "/pages/srvPurchase/srvPurchase",
      })
    }
    else {
      wx.navigateTo({
        url: '/pages/user/user'
      })
    }
  },
  onGotUserInfo: function (e) {
    wx.showLoading({
      title: this.data.content.Loading,
    })
    wx.getUserInfo({
      success: function (res) {
        console.log('userInfo res', res)
        wx.request({
          url: 'https://firmiana.ncpsb.org/weprogram/login',
          method: 'POST',
          data: {
            encryptedData: res.encryptedData,
            iv: res.encryptedData
          },
          success:function(res){
              console.log('union res',res)
          }
        })
      }
    })
    var that = this
    network.login().then(res => {
      console.log('loginres', res.data)
    })
    network.getLoginInfo().catch(error => {console.log('error', error) 
    if(error.errMsg == 'request:fail timeout'){
      wx.hideLoading()
    wx.showModal({
      title: that.data.content.warn,
      content: that.data.content.warn_content,
      confirmText: that.data.content.confirmText,
      cancelText: that.data.content.cancelText
    })
    }
    }
    )
    network.getLoginInfo().then(res => {
      console.log('res.data', res.data)
      if (res.data.success) {
        console.log('res.data.data', res.data.data)
        app.globalData.registerInfo = res.data.data;
        wx.hideLoading()
        this.setData({
          registeredName: res.data.data.name
        })
        this.setData({
          userInfo: e.detail.userInfo,
          haveHeadImg: true
        })
        wx.setStorageSync('userInfo', e.detail.userInfo)
        wx.setStorageSync('registeredName', res.data.data.name)
        console.log('userInfo', that.data.userInfo)
      }
      else{
        wx.hideLoading()
        wx.showModal({
          title: that.data.content.Warning,
          content: that.data.content.Warning_not_registered ,
          confirmText: this.data.content.Confirm,
          cancelText: this.data.content.Cancel,
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '../register/register',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }

    })
  },
  // onGotUserInfo:function(e){
  //   wx.switchTab({
  //     url: "/pages/srvPurchase/srvPurchase",
  //   })
  // },
  simpleLearn: function () {
    wx.showLoading({
      title: this.data.content.Jumping,
    })
    var that = this
    network.login().then(res => {
      console.log('loginres', res.data)
    })
    network.getLoginInfo().catch(error => console.log('error', error))
    network.getLoginInfo().then(res => {
      console.log('res.data', res.data)
      if (res.data.success) {
        console.log('res.data.data', res.data.data)
        app.globalData.isRegistered = true
      }
      network.getOpenID().then(res => {
        app.globalData.openID = res.data.openID
        console.log('simpleLearn openID', res.data.openID)
        wx.navigateTo({
          url: '../simpleLearn/simpleLearnIndex',
          success: function () {
            wx.hideLoading()
          }
        })
      })
    })
  },
  // simpleLearn:function(){
  //   wx.navigateTo({
  //     url: '../simpleLearn/simpleLearnIndex',
  //     success: function () {
  //       wx.hideLoading()
  //     }
  //   })
  // },
  bindToWorker: function () {
    console.log('app.globalData.registerInfo', app.globalData.registerInfo)
    
    if (app.globalData.registerInfo.length != 0){
      var role = app.globalData.registerInfo.role
      console.log('role', role)
      var index = role.indexOf('staff')
      if (index == -1) {
        wx.showModal({
          title:this.data.content.Warning,
          content: this.data.content.Warning_not_staff,
          confirmText: this.data.content.Confirm,
          cancelText: this.data.content.Cancel
        })
      }
      else{
    wx.navigateTo({
      url: '../staff/expresult/index/conclusions',
    })}
    }
    else{
      wx.showModal({
        title: this.data.content.Warning,
        content: this.data.content.Warning_not_login,
        confirmText:this.data.content.Confirm,
        cancelText:this.data.content.Cancel
      })
    }
  },
  selectDialog: function (e) {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  confirm:function() {

      this.setData({
      showDialog: !this.data.showDialog
    })
  },
  cancel: function () {

    this.setData({
      showDialog: !this.data.showDialog,
    })
  },
  languageChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      FixedModvalue: e.detail.value
    })
    console.log(this.data.FixedModvalue)
  },
  bindToCustomer:function(){
    console.log('fsdad')
    wx.navigateTo({
      url: '../customer/my/my',
      complete:function(res){
        console.log('res',res)
      }
    })
  }


})
