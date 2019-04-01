var app =getApp();
Page({

  data: {
    imgList: ['https://firmiana.ncpsb.org/static/we/lumos.png', 'https://firmiana.ncpsb.org/static/we/hfx.png', 'https://firmiana.ncpsb.org/static/we/hfx_1.jpeg'],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  onLoad: function (options) {
    this.setData({
      content: app.globalData.content.simpleLearn_platformIntroduction
    })
  },

})