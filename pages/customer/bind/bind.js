var app = getApp();
var stepImg = require('../../../utils/stepImg.js');
var stepImgList = stepImg.data;
Page({
  data: {
   /*  motto: 'Welcome to Firmiana', */
    /* userInfo: {},
    FirmianaInfo: {}, */
    /* stepImgList:[], */
    stepsId: [1,2,2,2],
    code: '',
    scan: false,
    disabled:true,
    name:'',
    onload:false,
  },
  onLoad: function (options) {
  },
  //事件处理函数
  suiteCode(e) {
    this.setData({
      code: e.detail.value
    })
    if (this.data.code){
      this.setData({
        disabled:false
      })
    }
  },
  name(e){
    this.setData({
      name: e.detail.value
    })
  },
  scanNumber () {
    wx.scanCode({
      success: (res) => {
        wx.showToast({
          title: res.result,
          icon: 'success',
          duration: 4000
        })
        this.setData({
          code: res.result,
          scan: true,
          disabled:false,
        })
      }
    })
  },
  next(){
    if (!this.data.name){
      wx.showModal({
        title: '提示',
        content:'请输入你的姓名！'
      })
    } else{
      var that = this
      that.setData({
        onload:false,
        id:1
      })
      wx.navigateTo({
        url: '../consent/consent?code=' + this.data.code + '&name=' + this.data.name,
      })
    }
  },
})
