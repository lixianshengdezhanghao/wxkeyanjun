var util = require('../../utils/util.js');
var app = getApp();
Page({

  data: {
  
  },


  onLoad: function (options) {
    let  time = util.formatTime(new Date())[0];
    let lastTime = util.formatTime(new Date())[1];
    this.setData({
      content: app.globalData.content.contract_contractIndex,
      time: time,
      lastTime: lastTime,
      projectName: app.globalData.projectName,
      projectNumber: app.globalData.projectNumber,
      PartyA: app.globalData.registerInfo.unit,
    });
  },
  onShow:function(){
    
    wx.setNavigationBarTitle({
      title: this.data.content.navigationBarTitle
    })
  },

  next:function(){
    wx.navigateTo({
      url: 'fillingExplanation',
    })
  }

})