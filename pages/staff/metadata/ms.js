// pages/metadata/sample.js
var util = require('../../../utils/util.js');
var app = getApp();
Page({

  data: {
    date: '',
    conditionID: '',
    Location: [['Refrigerator', 'Liquid Nitrogen', 'Others'], ['No'].concat([...Array(100).keys()]), ['Layer'].concat([...Array(10).keys()]), ['Basket'].concat([...Array(100).keys()]), ['Box'].concat([...Array(100).keys()])],
    LocationIndex: [0, 1, 1, 1, 1],
    LocationNumber: 'Refrigerator-00-0-00-00',
    Instrument: ['Q Exactive HF-X', 'Fusion Lumos'],
    Operator_MS: '',
    InstrumentIndex: 1,
    Database: [
      'African_Rice',
      'Arabi_uniprot_20141121',
      'Arabidopsis_lipeng',
      'Arabidopsis_refseq',
      'Arabidopsis_uniprot',
      'C_idella_F_LiverCDS',
      'Hg19_refseq_mRNA',
      'Homo_UniProt_20160902',
      'Huaman_UniProt_20160712',
      'Human_GRCh38',
      'human_NONCODEV4_protein',
      'Human_refseq',
      'Human_Refseq_20170629',
      'Human_Yersinia_pestis_Refseq_20170725',
      'Macaca_fascicularis',
      'Mouse_refseq',
      'Mouse_UniProt_20160712',
      'Mouse_Yersinia_pestis_Refseq_20170725',
      'Mus_V79_GRCm38',
      'Only for External Service',
      'PIG_ensembl',
      'Pig_refseq',
      'Rat_protein',
      'Rattus_Refseq_20170422',
      'seqc_firmiana',
      'SwissProt',
      'Xenopus_laevis',
      'Xlaevis9',
      'Yeast',
      'yersinia_pestis_20170620',
      'Yersinia_pestis_Refseq_20170629',
      'Yersinia_pestis_Refseq_20170725',
      'Zebrafish'
    ],
    DatabaseIndex: 0,
    FixedIndex:0,
    DynamicIndex:0,
    Gradient:0,
    showDynamicDialog: false,
    showFixedDialog:false,
    DynamicModvalue:[],
    FixedModvalue:[],
  },

  onLoad: function (options) {
    var conditionID = options.msNumber
    console.log(conditionID)
    var that = this
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
      success: function (res) {
        if (!res.data.Operator_Sample) {
          that.setData({
            Operator_Sample: app.globalData.registerInfo.name
          })
        }
        else {
          that.setData({
            Operator_Sample: app.globalData.data.Operator_Sample
          })
        }
        if (!res.data.Operator_MS) {
          that.setData({
            Operator_MS: app.globalData.registerInfo.name
          })
        }
        else {
          that.setData({
            Operator_MS: app.globalData.data.Operator_MS
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
          Project: res.data.Project,
          comments: res.data.comments,
          Temporary: res.data.Temporary,
          System: res.data.System,
          organ: res.data.organ,
          status: res.data.status,
          PM: res.data.PM,
          loading:res.data.loading,
          ExperimentType: res.data.ExperimentType,
          Taxons: res.data.Taxons,
          CellType: res.data.CellType,
          GenoType: res.data.GenoType,
          Amount: res.data.Amount,
          Subcellular: '',
          Gradient: res.data.Gradient,
          DigestType: res.data.DigestType,
          Protocol: res.data.Protocol,
          location:res.data.location,
          Firmiana: res.data.FirmianaNo
          // Instrument: res.data.Instrument,
          // Tolerance: res.data.Tolerance,
          // Database: res.data.Database,
          // Fixed: res.data.Fixed,
          // Dynamic: res.data.Dynamic
        })
      }
    })
    var time = util.formatDate(new Date())
    this.setData({
      date: time
    })

    wx.request({
      url: 'https://firmiana.ncpsb.org/experiments/ajax/display/Dynamic_Modification',
      success: function (res) {
        console.log(res)
        if (res.data.Dynamic_Modifications) {
          var range = []
          for (var i = 0; i < res.data.Dynamic_Modifications.length; i++) {
            range.push(res.data.Dynamic_Modifications[i].Dynamic_Modification)
          }
          that.setData({
            DynamicModifications:range
          }) 
        }
        var DynamicModifications = []
        for (var i = 0; i < that.data.DynamicModifications.length;i++){
          var temp = {checked:false}
          temp.name = that.data.DynamicModifications[i]
          DynamicModifications.push(temp)
        } 
        that.setData({
          DynamicModifications: DynamicModifications
        })       
        console.log('DynamicModifications', DynamicModifications)
        },
      fail: function () {
        console.log('fail')
      }
    })

    wx.request({
      url: 'https://firmiana.ncpsb.org/experiments/ajax/display/Fixed_Modification/',
      success: function (res) {
        console.log('request  Fixed',res)
        if (res.data.Fixed_Modifications) {
          var range = []
          for (var i = 0; i < res.data.Fixed_Modifications.length; i++) {
            range.push(res.data.Fixed_Modifications[i].Fixed_Modification)
          }
          that.setData({
            FixedModifications: range
          })
        }
        var FixedModifications = []
        for (var i = 0; i < that.data.FixedModifications.length; i++) {
          var temp = { checked: false }
          temp.name = that.data.FixedModifications[i]
          FixedModifications.push(temp)
        }
        that.setData({
          FixedModifications: FixedModifications
        })
        console.log('FixedModifications', FixedModifications)
      },
      fail: function () {
        console.log('fail')
      }
    })
  },
  formSubmit: function (e) {
    console.log(e.detail.value)
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/updatemsinstrument',
      data: {
        conditionID: this.data.conditionID,
        openID: app.globalData.openID,
        instrument: this.data.Instrument[e.detail.value.InstrumentIndex],
        database: this.data.Database[e.detail.value.DatabaseIndex],
        Fixed: this.data.FixedModvalue,
        Dynamic: this.data.DynamicModvalue,
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
        url: 'msscan'
      })

    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },  
  bindLocationPicker: function (e) {

    this.setData({
      LocationIndex: e.detail.value
      // LocationNumber: [year, month, day].map(formatNumber).join('-')
    })
  },
  bindInstrumentPickerChange: function (e) {
    this.setData({
      InstrumentIndex: e.detail.value
    })
    if (e.detail.value == 'Q Exactive HF - X'){
      this.setData({
        Tolerance: 'ms1:Orbitrap-20 ppm/ ms2:Orbitrap-0.05 Da'
      })
    }
    else{
      this.setData({
        Tolerance: 'ms1:Orbitrap-20 ppm/ ms2:Orbitrap-0.5 Da'
      })
    }
  },
  bindFixedChange: function (e) {
    this.setData({
      FixedIndex: e.detail.value
    })
  },
  bindDynamicChange: function (e) {
    this.setData({
      DynamicIndex: e.detail.value
    })
  },
  bindDatabaseChange: function (e) {
    this.setData({
      DatabaseIndex: e.detail.value
    })
  },
  selectDynamicDialog:function(e){
    this.setData({
      showDynamicDialog: !this.data.showDynamicDialog
      });
  },
  selectFixedDialog: function (e) {
    this.setData({
      showFixedDialog: !this.data.showFixedDialog
    });
  },
  /*点击变色*/
  clickDynamic: function (e) {
    var that = this
    console.log('click e',e)
    var id = e.currentTarget.dataset.id
    var DynamicModifications = that.data.DynamicModifications
    console.log(typeof(id),id)
    DynamicModifications[id].checked = !that.data.DynamicModifications[id].checked
    that.setData({
     id:id,
      DynamicModifications: DynamicModifications
    })
    console.log('after click DynamicModifications', that.data.DynamicModifications)
  },
  clickFixed: function (e) {
    var that = this
    console.log('click e', e)
    var id = e.currentTarget.dataset.id
    var FixedModifications = that.data.FixedModifications
    console.log(typeof (id), id)
    FixedModifications[id].checked = !that.data.FixedModifications[id].checked
    that.setData({
      id: id,
      FixedModifications: FixedModifications
    })
    console.log('after click FixedModifications', that.data.FixedModifications)
  },
  checkboxDynamicChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      DynamicModvalue: e.detail.value
    })
    console.log(this.data.DynamicModvalue)
  },
  checkboxFixedChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      FixedModvalue: e.detail.value
    })
    console.log(this.data.FixedModvalue)
  },
  DynamicModok: function () {
    var that = this
    if (this.data.DynamicModvalue == '') {
      wx.showModal({
        title: '提示',
        content: '你没有选择任何内容',
      })
    }
    that.setData({
      showDynamicDialog: !this.data.showDynamicDialog
    })
  },
  FixedModok: function () {
    var that = this
    if (this.data.FixedModvalue == '') {
      wx.showModal({
        title: '提示',
        content: '你没有选择任何内容',
      })
    }
    that.setData({
      showFixedDialog: !this.data.showFixedDialog
    })
  },
  DynamicModcancel: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '你没有选择任何内容',
    })
    that.setData({
      showDynamicDialog: !this.data.showDynamicDialog,
      DynamicModvalue: '',
    })
  },
  FixedModcancel: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '你没有选择任何内容',
    })
    that.setData({
      showFixedDialog: !this.data.showFixedDialog,
      FixedModvalue: '',
    })
  },
})