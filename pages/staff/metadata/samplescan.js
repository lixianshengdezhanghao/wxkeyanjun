// pages/metadata/samplescan.js
var app = getApp();
Page({
  onLoad:function(){
    this.setData({
      content: app.globalData.content.staff_metadata_samplescan
    })
    
  },
  scanNumber: function () {
    wx.scanCode({
      scanType: ["barCode", "qrCode"],
      success: (res) => {
        console.log(res)
        wx.showToast({
          title: res.result,
          icon: 'success',
          duration: 4000
        })
        this.setData({
          inputValue: res.result
        })
        wx.navigateTo({
          url: 'sample?Samplenumber=' + res.result
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  data: {
    inputValue: '样本编号'
  }
})