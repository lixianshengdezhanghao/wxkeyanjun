var app =getApp();
Page({
  onLoad: function (options) {
    console.log('consent 页面options',options)
    var that = this
    that.setData({
      code:options.code,
      name:options.name
    })
  },
  data: {
    toView: 'red',
    scrollTop: 100,
    stepImgList:[],
    isAgree: false,
    disabled:true,
    code:'',
    name:'',
    stepsId: [0,1,2,2],
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  agree: function () {
    
    wx.navigateTo({
      url: '../personalInfo/personalInfo?code=' + this.data.code + '&name=' + this.data.name 
    })
  },
  disagree: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
    if (this.data.isAgree){
      this.setData({
        disabled: false
      })
    }
    else{
      this.setData({
        disabled: true
      })
    }
  }

})