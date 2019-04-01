//index.js
var app = getApp();
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    count:1,
    list: []
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  refresh: function (e) {
    console.log(e)
    var openID = app.globalData.openID;
    console.log('app.globalData.openID', app.globalData.openID)
    openID ='o9D4e0Uk1YaU93wixqjKB3C8FIe4'
    console.log(openID)
    var that = this
    var resmsg = new Array(0)
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/staffproject/',
      data: {
        openID: openID,
        // count:this.data.count
      },
      success: res => {
        console.log(res)
        for (var item in res.data.data) {
          var o = new Object();
          var msg_inf = res.data.data[item]
          o.id = msg_inf.id
          // o.tp = msg_inf.split(';')[1]
          o.organ = msg_inf.organ
          o.name = msg_inf.name
          o.status = msg_inf.status
          o.species = msg_inf.species
          o.cellName = msg_inf.cellName
          o.cellType = msg_inf.cellType
          // o.percentage = msg_inf.percentage.toFixed(2)
          o.experiments = msg_inf.experiments
          o.totalConditionNumberChange = msg_inf.totalConditionNumberChange
          // o.from = msg_inf.split(';')[2]
          o.open = false
          resmsg.push(o)
          wx.hideLoading()
        }
        this.setData({
          list: resmsg,
          count:this.data.count+1
        })
        console.log('list',this.data.list)
        if (this.refreshReadyCallback) {
          this.refreshReadyCallback(res)
        }
      },
      fail: function () {
        console.log('fail')
      }
    })
  },
  kindToggle: function (e) {
    console.log(e)
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: 'experiment?project=' + e.currentTarget.id,
    })
  },
  // onShow: function () {
  //   this.refresh()
  // },
  onLoad:function(){
    this.setData({
      content: app.globalData.content.staff_expresult_index_index
    })
    console.log('content111',this.data.content)
    wx.showLoading({
      title: this.data.content.loading,
    })
    var that =this
    that.refresh()
  }
});