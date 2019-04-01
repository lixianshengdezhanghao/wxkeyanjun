//index.js
var app=getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    count:1,
    list: []
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      project: options.project,
      content: app.globalData.content.staff_expresult_index_experiment
    })
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
  refesh: function (e) {
    console.log(e)
    var openID = getApp().globalData.openID;
    console.log(openID)
    var that = this
    var resmsg = new Array(0)
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/experiment/',
      data: {
        project: that.data.project,
        count:this.data.count,
        openID: app.globalData.openID
      },
      success: res => {
        console.log(res)
        for (var item in res.data.data) {
          var o = new Object();
          var msg_inf = res.data.data[item]
          o.id = msg_inf.name
          // o.tp = msg_inf.split(';')[1]
          o.name = msg_inf.name
          o.num_gene = msg_inf.num_gene
          o.instrument = msg_inf.instrument
          o.num_isoform = msg_inf.num_isoform
          o.num_peptide = msg_inf.num_peptide
          o.num_spectrum = msg_inf.num_spectrum
          o.description = msg_inf.description
          o.status = msg_inf.status
          // o.from = msg_inf.split(';')[2]
          o.open = false
          resmsg.push(o)
        }
        this.setData({
          list: resmsg,
          count:this.data.count+1
        })
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
    var id = e.currentTarget.id;
    console.log(e)
    wx.navigateTo({
      url: 'experimentdetail?experiment=' + e.currentTarget.id
    })
  },
  onShow: function () {
    this.refesh()
  }
});