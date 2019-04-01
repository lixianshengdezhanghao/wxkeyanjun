Page({

  data: {
    date:'2018-07-16',
    deliverWay:['站点自取','送样上门'],
    index_way:0,
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，  携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDWChange:function(e){
    console.log(e)
    this.setData({
      index_way: e.detail.value
    })
  },
  submit:function(e){
    wx.reLaunch({
      url: '../srvPurchase/srvPurchase',
    })
  },
  onLoad: function (options) {
    
  },

})