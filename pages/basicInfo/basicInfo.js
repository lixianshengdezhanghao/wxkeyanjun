var app = getApp();
const getInfo = require('../../utils/getInfo.js');
 
Page({

  data: {
    basicinfo:'',
    signImage:'',
    totalConditionNumber: 0,
    showSP: false,
    disabled:true,
    sourceTypeSelected: '',
    Species: [],
    index_species: -1,
    index_taxonName: -1,
    index_taxonID: -1,
    index_organ: -1,
    index_status: -1,
    index_celltype: -1,
    index_cellname: -1,
    Species_AP: [ 'Animal','Plant'],
    Species_AM: ['Animal','Microorganism'],
    Taxon: [],
    TaxonName: [],
    TaxonID: [],
    StrainName: [],
    inputStrainName:'',
    inputCellName:'',
    hide_scroll_strainName:true,
    hide_scroll_cellName:true,
    System: [],
    Organ: [],
    Status: ['Calcification', 'Cicatrix', 'Endometrial synechiae', 'Fibrosis', 'Infection', 'Normal', 'Steatosis', 'Tumor', 'Tumor adjacent', 'Tumor distant'],
    CellType: ['Animal normal cell', 'Animal tumor cell', 'Human normal cell', 'Human normal cell', 'None', 'hTERT immortalized cell'],
    CellName: [],
    FluidName: [
      'Amniotic fluid',
      'Aqueous humour and vitreous humour',
      'Bile',
      'Blood serum',
      'Breast milk',
      'Cerebrospinal fluid',
      'Cerumen',
      'Chyle',
      'Chyme',
      'Endolymph and perilymph',
      'Exudate',
      'Feces',
      'Female ejaculate',
      'Gastric acid',
      'Gastric juice',
      'Lymph',
      'Mucus (including nasal drainage and phlegm)',
      'Pericardial fluid',
      'Peritoneal fluid',
      'Pleural fluid',
      'Pus,',
      'Rheum',
      'Saliva',
      'Sebum (skin oil)',
      'Semen',
      'Sputum',
      'Sweat',
      'Synovial fluid',
      'Tears',
      'Tissue fluid',
      'Tissue interstitial fluid',
      'Urine',
      'Vaginal secretion',
      'Vomit'
    ]

  },

  onLoad: function(options) {
    var that = this
    console.log('app.globalData.content.basicInfo_basicInfo', app.globalData.content.basicInfo_basicInfo)
    that.setData({
      content: app.globalData.content.basicInfo_basicInfo
    })
    that.setData({
      signImage: '',
      basicinfo: app.globalData.basicinfo
    })
    console.log('inputStrainName', that.data.inputStrainName)
  
    console.log('basicinfo', that.data.basicinfo)
  },
  onShow: function(options) {

    var that = this
    that.setData({
      signImage: wx.getStorageSync('signImage')
    })
  },
  projectNameChange:function(e){
    var that = this
    that.setData({
      projectName:e.detail.value
    })
    app.globalData.projectName = e.detail.value
    console.log('app.globalData.projectName', app.globalData.projectName)
  },
  sourceTypeChange: function(e) {
    var that = this
    that.setData({
      'item.data': e.detail.value,
      'item.checked': true,
      sourceTypeSelected: e.detail.value,
      index_species:-1
    })
    if (e.detail.value == '细胞' || e.detail.value == 'Cell') {
      that.setData({
        Species: that.data.Species_AM
      })
   
    } else {
      that.setData({
        Species: that.data.Species_AP
      })
    }
  },
  bindSpeciesChange: function(e) {
    console.log('bindSpeciesChange e',e)
    var that = this
    console.log('Species', that.data.Species)
    that.setData({
      index_species: e.detail.value,
      index_taxonName:-1,
      index_taxonID:-1,
      inputStrainName:'',
      url: 'https://firmiana.ncpsb.org/experiments/ajax/Source_TissueTaxonName/?id=' + that.data.Species[e.detail.value] + '&page=1&start=0&limit=25',
      url_system: 'https://firmiana.ncpsb.org/experiments/ajax/Source_TissueSystem/?id=' + that.data.Species[e.detail.value]+ '&page=1&start=0&limit=25',
    })
    wx.showLoading({
      title: this.data.content.Loading,
    })
    getInfo.getTaxonName(function(TaxonName) {
      wx.hideLoading()
      that.setData({
        TaxonName: TaxonName
      })
      console.log('get TaxonName', that.data.TaxonName)
    }, that.data.url)
    getInfo.getSystem(function(System) {
      that.setData({
        System: System
      })
    }, that.data.url_system)
  },
  bindSystemChange: function(e) {
    var that = this
    that.setData({
      index_system: e.detail.value,
      url: 'https://firmiana.ncpsb.org/experiments/ajax/Source_TissueOrgan/?id=' + that.data.System[e.detail.value] + '&page=1&start=0&limit=25'
    })
    wx.showLoading({
      title: this.data.content.Loading,
    })
    getInfo.getOrgan(function(Organ) {
      that.setData({
        Organ: Organ
      })
      wx.hideLoading()
    }, that.data.url)
  },
  bindTaxonNameChange: function(e) {
    var that = this
    that.setData({
      index_taxonName: e.detail.value,
      index_taxonID:-1,
      inputStrainName:'',
      url: 'https://firmiana.ncpsb.org/experiments/ajax/Source_TissueTaxonID/?id=' + that.data.TaxonName[e.detail.value] + '&page=1&start=0&limit=25'
    })
    wx.showLoading({
      title: this.data.content.Loading,
    })
    getInfo.getTaxonID(function(TaxonID) {
      wx.hideLoading()
      that.setData({
        TaxonID: TaxonID
      })
    }, that.data.url)
  },
  bindTaxonIDChange: function(e) {
    var that = this
    that.setData({
      index_taxonID: e.detail.value,
      // inputStrainName:'',
      url: 'https://firmiana.ncpsb.org/experiments/ajax/Source_TissueTaxonStrain/?id=' + that.data.TaxonID[e.detail.value] + '&page=1&start=0&limit=25'
    })
    wx.showLoading({
      title: this.data.content.Loading,
    })
    getInfo.getStrain(function(StrainName) {
      // for (var i = 0; i < StrainName.length;i++){
      var index = StrainName.indexOf('Unknown(External Services)')
      if ( index != -1 ){
        StrainName.splice(index,1)
        }
      if (StrainName.length == 0){
        StrainName.push('None')
      }
      wx.hideLoading()
      that.setData({
        StrainName: StrainName,
        hide_scroll_strainName: false
      })
    }, that.data.url)
  },
  inputTyping_StrainName: function (e) {
    console.log('inputTyping_StrainName e',e)
    var that = this
    that.setData({
      inputStrainName: e.detail.value
    });
    var tempStrainName = []
    for (var i in that.data.StrainName) {
      var temp = that.data.StrainName[i]
      if (temp.indexOf(e.detail.value) != -1) {
        tempStrainName.push(temp)
      }
    }
    that.setData({
      temporaryStrainNameArray: tempStrainName,
      hide_scroll_strainName:false
    })
    console.log('temporaryStrainNameArray', tempStrainName)
  },
  selectStrainName:function(e){
    var that = this
    that.setData({
      inputStrainName: e.target.dataset.strainname,
      temporaryStrainNameArray:[],
      hide_scroll_strainName:true
    });
  },

  inputTyping_CellName: function (e) {
    console.log('inputTyping_CellName e', e)
    var that = this
    that.setData({
      inputCellName: e.detail.value
    });
    var tempCellName = []
    for (var i in that.data.CellName) {
      var temp = that.data.CellName[i]
      if (temp.indexOf(e.detail.value) != -1) {
        tempCellName.push(temp)
      }
    }
    that.setData({
      temporaryCellNameArray: tempCellName,
      hide_scroll_cellName: false
    })
    console.log('temporaryCellNameArray', tempCellName)
  },
  selectCellName: function (e) {
    var that = this
    that.setData({
      inputCellName: e.target.dataset.cellname,
      temporaryCellNameArray: [],
      hide_scroll_cellName: true
    });
  },


  bindOrganChange: function(e) {
    var that = this
    that.setData({
      index_organ: e.detail.value,
      url: 'https://firmiana.ncpsb.org/experiments/ajax/Source_TissueOrgan/?id=' + that.data.Organ[e.detail.value] + '&page=1&start=0&limit=25'
    })
  },
  bindStatusChange: function(e) {
    var that = this
    that.setData({
      index_status: e.detail.value
    })
  },
  bindCellTypeChange: function(e) {
    var that = this
    that.setData({
      index_celltype: e.detail.value,
      inputCellName:'',
      url: 'https://firmiana.ncpsb.org/experiments/ajax/display2/Cell_Name/?id=' + that.data.CellType[e.detail.value] + '&page=1&start=0&limit=25'
    })
    wx.showLoading({
      title: this.data.content.Loading,
    })
    getInfo.getCellName(function(CellName) {
      that.setData({
        CellName: CellName,
        hide_scroll_cellName: !that.data.hide_scroll_cellName
      })
      wx.hideLoading()
      console.log('request CellName', that.data.CellName)
    }, that.data.url)
  },
  bindCellNameChange: function(e) {
    var that = this
    that.setData({
      index_cellname: e.detail.value
    })
  }, 
  bindFluidNameChange: function(e) {
    var that = this
    that.setData({
      index_fluidname: e.detail.value
    })
  },

  totalConditionNumberChange: function(e) {
    var that = this
    that.setData({
      totalConditionNumber: Number(e.detail.value)
    })
    // console.log('样本数类型', typeof (this.data.totalConditionNumber))
  },

  signName:function(e){
    wx.navigateTo({
      url: '../canvas/canvas',
    })
  },
  formSubmit: function (e) {
    var that = this
    console.log('formSubmit',e)
    var warn = ""; 
    var flag = true;  
    var value = e.detail.value
    console.log('form', value)
    var Price_sampleprepare = 0
    if (value.sourceType == '体液' || value.sourceType == 'Fluid'){
      Price_sampleprepare = 500 * value.totalConditionNumber
    }
    else {
      Price_sampleprepare = 300 * value.totalConditionNumber
    }
    app.globalData.Price_sampleprepare = Price_sampleprepare
    app.globalData.totalConditionNumber = value.totalConditionNumber
    console.log('globalData.Price_sampleprepare', app.globalData.Price_sampleprepare)
    app.globalData.basicinfo = value
    console.log('app.globalData.basicinfo', app.globalData.basicinfo)
    wx.navigateTo({
      url: '../condition/condition?totalConditionNumber=' + this.data.totalConditionNumber,
    })
    for(var i in value){
      console.log('i', i)
      console.log('i[]', value[i])
      if(value[i] == "" ||  value[i] == null){
        flag = true;
        console.log('flag',flag)
        console.log('that.data.content.Warn', that.data.content.Warn)
        if (i == "projectName") { console.log(1); warn = that.data.content.Warn.projectName; break;}
        if (i == "sourceType") { console.log(2); warn = that.data.content.Warn.sourceType; break;}
        if (i == "Species") { console.log(3); warn = that.data.content.Warn.Species; break; }
        if (i == "TaxonName") { console.log(4); warn = that.data.content.Warn.TaxonName; break; }
        if (i == "TaxonID") {
          console.log(5); warn = that.data.content.Warn.TaxonID; break;}
        if (i == "strainName") {
          console.log(6); warn = that.data.content.Warn.strainName; break;}
        if (i == "System") { warn = that.data.content.Warn.System; break;}
        if (i == "Organ") { warn = that.data.content.Warn.Organ; break;}
        if (i == "Status") { warn = that.data.content.Warn.Status; break;}
        if (i == "CellType") { warn = that.data.content.Warn.CellType; break; }
        if (i == "cellName") { warn = that.data.content.Warn.cellName; break;}
        if (i == "FluidName") { warn = that.data.content.Warn.FluidName; break; }
        if (i == "totalConditionNumber") { warn = that.data.content.Warn.totalConditionNumber; break; }
       
      }
      else{ 
        flag=false;
      }
    }
    // if (flag == true) {
    //   console.log('warn', warn)
    //   wx.showModal({
    //     title: that.data.content.Warning,
    //     content: warn,
    //     confirmText: that.data.content.Confirm,
    //     cancelText: that.data.content.Cancel
    //   })
    // }
    // else{
    //   wx.navigateTo({
    //     url: '../condition/condition?totalConditionNumber=' + this.data.totalConditionNumber,
    //   })
    // }
  },

})