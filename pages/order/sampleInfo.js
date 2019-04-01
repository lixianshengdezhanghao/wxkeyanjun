var app = getApp();

Page({
  data: {
    Address:'',
    index_AnalysisTime:-1,
    index_dataAnalysis:-1,
    phoneNumber:''
  },

  onLoad: function (options) {
    console.log(options)
    var that = this 
    var content = app.globalData.content.order_sampleInfo
    that.setData({
      srvType: options.srvType,
      content: content
    })
  },
  bindAnalysisTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_AnalysisTime: e.detail.value
    })
    app.globalData.AnalysisTime = this.data.content.AnalysisTime[e.detail.value]
  }, 
  bindDataAnalysisChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_dataAnalysis: e.detail.value
    })
    app.globalData.DataAnalysis = this.data.content.DataAnalysis[e.detail.value]
  },

  bindAddressChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Address: e.detail.value
    })
    
  },
  bindPhoneChange: function (e) {
    console.log('phone number', e)
    var that = this;
    that.setData({
      phoneNumber: e.detail.value
    })
  },
  CommentsChange:function(e){
    this.setData({
      comments:e.detail.value
    })
  },
  partyAChange: function (e) {
    this.setData({
      partyA: e.detail.value
    })
  },
  legalRepresentativeChange: function (e) {
    this.setData({
      legalRepresentative: e.detail.value
    })
  },
  projectContactPersonChange: function (e) {
    this.setData({
      projectContactPerson: e.detail.value
    })
  },
  addressChange: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  contactNumberChange: function (e) {
    this.setData({
      contactNumber: e.detail.value
    })
  }, 
  postcodeChange: function(e) {
    this.setData({
      postcode: e.detail.value
    })
  },
  faxChange: function (e) {
    this.setData({
      fax: e.detail.value
    })
  },
  formSubmit:function(e){
    console.log('e',e)
    // app.globalData.sampleinfo=e.detail.value;
    var value = e.detail.value
    console.log('formsubmit e.detail.value', value)
    var flag = true;
    var warn = "";
    for (var i in value) {
      if (value[i] == "" || value[i] == null || value[i] == -1) {
        flag = true;
        console.log('flag', flag)
        if (i == "index_AnalysisTime") { console.log(1); warn = this.data.content.Warn.analysisTime; break; }
        if (i == "index_dataAnalysis") { console.log(1); warn = this.data.content.Warn.dataAnalysis; break; }
        if (i == "Address") { console.log(1); warn = this.data.content.Warn.address; break; }
        if (i == "phoneNumber") { console.log(1); warn = this.data.content.Warn.contactNumber; break; }
    console.log(app.globalData)
      }
    else {
        flag = false;
      }
    }
    if (flag == true) {
      console.log('warn', warn)
      wx.showModal({
        title: this.data.content.warn,
        content: warn,
        confirmText: this.data.content.Confirm,
        cancelText: this.data.content.Cancel
      })
    }
    else{      
      app.globalData.sampleInfo = value
      console.log('app', app.globalData.sampleInfo)
    wx.navigateTo({
      url: '../order/orderInfo',
    })
    }
  }
})