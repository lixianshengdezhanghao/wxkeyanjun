var app = getApp()

Page({
  data: {
    showIndex:0,
    imgList: ['https://firmiana.ncpsb.org/static/we/lumos.png', 'https://firmiana.ncpsb.org/static/we/hfx.png','https://firmiana.ncpsb.org/static/we/hfx_1.jpeg'],
    indicatorDots: true,
    autoplay: true, 
    interval: 3000,
    duration: 1000
  },
  next:function(){
    wx.navigateTo({
      url: '../basicInfo/basicInfo'
    })
  },

  onLoad: function (options) {
    console.log('app.globalData.content.srvPurchase_srvPurchase', app.globalData.content.srvPurchase_srvPurchase)
    this.setData({
      content: app.globalData.content.srvPurchase_srvPurchase
    })
     wx.setTabBarItem({
      index: 0,
       text: this.data.content.tabBar.srvIntro,
       complete:function(res){
            console.log('set tab res',res)
       }
    })
    wx.setTabBarItem({
      index: 1,
      text: this.data.content.tabBar.intelligentInquiry,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 2,
      text: this.data.content.tabBar.ServicePurchase,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 3,
      text: this.data.content.tabBar.me,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
  },
  onShow:function(){
    console.log('app.globalData.content.srvPurchase_srvPurchase', app.globalData.content.srvPurchase_srvPurchase)
    this.setData({
      content: app.globalData.content.srvPurchase_srvPurchase
    })
    wx.setTabBarItem({
      index: 0,
      text: this.data.content.tabBar.srvIntro,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 1,
      text: this.data.content.tabBar.intelligentInquiry,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 2,
      text: this.data.content.tabBar.ServicePurchase,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
    wx.setTabBarItem({
      index: 3,
      text: this.data.content.tabBar.me,
      complete: function (res) {
        console.log('set tab res', res)
      }
    })
  },
  toindex:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  }


})