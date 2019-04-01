// pages/metadata/sample.js
var util = require('../../../utils/util.js');
var app = getApp();
Page({

  data: {
    date:'',
    conditionID:'',
    Location: [['Refrigerator', 'Liquid Nitrogen', 'Others'], ['No'].concat([...Array(100).keys()]), ['Layer'].concat([...Array(10).keys()]), ['Basket'].concat([...Array(100).keys()]), ['Box'].concat([...Array(100).keys()])],
    LocationIndex: [0, 1, 1, 1, 1],
    LocationNumber: 'Refrigerator-00-0-00-00',
  },

  onLoad: function(options) {
    var conditionID = options.Samplenumber
    console.log(conditionID)
    var that=this
    that.setData({
      conditionID: conditionID
    })
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/getconditioninformation',
      data: {
        conditionID: conditionID
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log('app.globalData.registerInfo.name', app.globalData.registerInfo.name)
        if (!res.data.Operator_Sample){
          that.setData({
            // Operator_Sample: app.globalData.userInfo.nickName
            Operator_Sample: app.globalData.registerInfo.name
          })
        }
        else{
          that.setData({
            Operator_Sample: app.globalData.data.Operator_Sample
          })
        }
        if (res.data.System) {
          that.setData({
            sourceTypeSelected: '组织'
          })
        }
        else if (res.data.Cell) {
          that.setData({
            sourceTypeSelected: '细胞'
          })
        }
        else if (res.data.Fluid) {
          that.setData({
            sourceTypeSelected: '体液'
          })
        }
        that.setData({
          operatorName: app.globalData.registerInfo.name,
          date: util.formatDate(new Date),
          conditionID: conditionID,
          Project:res.data.Project,
          Firmiana: res.data.FirmianaNo,
          System:res.data.System,
          organ:res.data.organ,
          status: res.data.status,
          PM:res.data.PM,
          ExperimentType: res.data.ExperimentType,
          Taxons: res.data.Taxons,
          CellType:res.data.CellType,
          GenoType:res.data.GenoType,
          Amount:res.data.Amount,
          Subcellular: res.data.Subcellular,
          DigestType:res.data.DigestType,
          Protocol: res.data.Protocol,
          Instrument: res.data.Instrument,
          Tolerance: res.data.Tolerance,
          Database: res.data.Database,
          Fixed: res.data.Fixed,
          Dynamic: res.data.Dynamic
        })
      }
    })
    var time = util.formatDate(new Date())
    this.setData({
      date: time
    })

  },
 
  formSubmit: function(e) {
    console.log(e.detail.value)
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/updatesampleopeartor',
      data: {
        conditionID: this.data.conditionID,
        openID: app.globalData.openID,
        Temporary: e.detail.value.Temporary,
        comments: e.detail.value.comments,
        location:e.detail.value.location,
        loading: e.detail.value.loading
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
    })
    wx.showToast({
      title: 'Success',
      icon: 'success',
      duration: 4000,
      complete: wx.navigateTo({
        url: 'samplescan'
      })
      
    })

  },
  formReset: function() {
    console.log('form发生了reset事件')
  },

  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
  },
 
  bindLocationPicker: function (e) {

    this.setData({
      LocationIndex: e.detail.value
      // LocationNumber: [year, month, day].map(formatNumber).join('-')
    })
  },
})