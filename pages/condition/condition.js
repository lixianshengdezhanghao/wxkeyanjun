const getInfo = require('../../utils/getInfo.js');
var app = getApp();
var ConcentrationUnit = ['ng/ml', 'mol/L', 'μg/μl', 'mg/ml']
var VolumeUnit = ['μl', 'ml']
var SampleAmountUnit = ['g', 'ng', 'μl']


var TargetGeneNumberList = [{
  name: "1",
  id: "1"
},
{
  name: "2",
  id: "2"
},
{
  name: "3",
  id: "3"
},
{
  name: "4",
  id: "4"
},
{
  name: "5",
  id: "5"
},
{
  name: "6",
  id: "6"
},
{
  name: "7",
  id: "7"
},
{
  name: "8",
  id: "8"
},
{
  name: "9",
  id: "9"
},
{
  name: "10",
  id: "10"
}
];

var TaxonIDList = [
  '10036', '10090', '10116', '10141', '15368', '34284',
  '3659', '3702', '39947', '4097', '413997', '4538', '4565', '4577',
  '481805', '4896', '49039', '54126', '632', '7227', '764097', '764099',
  '764100', '764101', '764102', '7668', '7955', '7959', '8355', '8932',
  '9541', '9544', '9606', '9823', '9913', '9925', '9986', 'None'
];
var GeneSymbol = [],
  GeneID = [],
  TaxonID = [],
  inputGeneSymbol = [],
  inputGeneID = [];



var TargetGene = {
  data: {
    TargetGeneNumberList: TargetGeneNumberList,
    TaxonIDList: TaxonIDList,
    TaxonID: TaxonID,
    inputGeneSymbol: inputGeneSymbol,
    inputGeneID: inputGeneID,
    GeneID: GeneID,
    ConcentrationUnit: ConcentrationUnit,
    index_concentrationunit: -1,
    VolumeUnit: VolumeUnit,
    SampleAmountUnit: SampleAmountUnit,
    index_sampleAmountUnit: -1,
    DoughAmount: 0,
    index_volumeunit: -1,
    index_taxonid: -1,
    TaxonIDIndex: [],
    GenotypeIndex: [],
    totalConditionNumber: 0,
    TargetGeneNumberList: [],
    GenoTypeList: [],
    GeneIDArray: [],
    scrollTop: 12,
    conditionNumber: 1,
    tempConditions: {
      ageNum: '',
      index_ageunit: '',
      index_gender: '',
      index_genotype: '',
      index_genenum: '',
      sampleStatus: '',
      index_treatmentmethods: '',
      index_treatmentdetail: '',
      SampleConcentration: '',
      SampleVolume: '',
      index_paramtype: '',
      index_paramunit: '',
      DurationTime: '',
      ParamAmount: "",
      index_durationunit: '',
      FractionNumber: '',
      BiologicalRepetition: '',
      TechnicalRepetition: '',
    },
    totalConditions: [],
    TotalConditions: [],
    ConditionPage: '',
    ageNum: 0,
    ageUnit: -1,
    index_ageunit: -1,
    index_gender: -1,
    index_genotype: -1,
    index_genenum: -1,
    index_samplestatus: -1,
    index_treatmentmethods: -1,
    index_treatmentdetail: -1,
    index_paramtype: -1,
    index_paramunit: -1,
    index_durationunit: -1,

    Genotype: [],
    GeneNum: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    TreatmentMethods: ['NA', 'Biological', 'Chemical & Drug', 'Gene Engineering', 'Physical'],
    hide: true,
    Treatment_detail: [],
    ParamType: ['None', 'Amount', 'Concentration', 'Energy', 'Quality', 'Temperature', 'Volume'],
    ParamUnit: [],
    DurationUnit: ['Week', 'Day', 'Hour', 'Minute', 'Second'],
    Concentration: '',
    index_solution: -1,
    Volume: '',

  },

  onLoad: function (options) {
    var that = this;
    // console.log(app.globalData.submitData);
    that.setData({
      totalConditionNumber: options.totalConditionNumber,
      url: 'https://firmiana.ncpsb.org/experiments/ajax/display/Genotype/',
      content: app.globalData.content.condition_condition
    });
    getInfo.getGenotype(function (Genotype) {
      that.setData({
        GenoTypeList: Genotype
      });
    }, that.data.url);
  },
  onShow: function () {
    var that = this
    that.setData({
      content: app.globalData.content.condition_condition
    })
  },
  formSubmit: function (e) {
    console.log('submit e', e)
    console.log('totalConditionNumber', this.data.totalConditionNumber)
    console.log('totalConditions的长度', this.data.totalConditions.length)
    console.log('totalConditions', this.data.totalConditions)
    var value = e.detail.value
    console.log('formsubmit e.detail.value', value)
    var flag = true;
    var Warn = this.data.content.Warn
    var warn = "";
    for (var i in value) {
      if (value[i] == "" || value[i] == null || value[i] == -1) {
        flag = true;
        console.log('flag', flag)
        if (i == "ageNum") {
          console.log(1);
          warn = Warn.ageNum;
          break;
        }
        if (i == "index_ageunit") {
          console.log(2);
          warn = Warn.ageUnit;
          break;
        }
        if (i == "index_gender") {
          console.log(3);
          warn = Warn.gender;
          break;
        }
        if (i == "index_genenum") {
          console.log(4);
          warn = Warn.genenum;
          break;
        }
        if (i == "index_samplestatus") {
          console.log(5);
          warn = Warn.sampleStatus;
          break;
        }
        if (i == "index_storeform") {
          console.log(6);
          warn = Warn.storeForm;
          break;
        }
        if (i == "SampleAmount") {
          warn = Warn.amount;
          break;
        }
        if (i == "index_sampleAmountUnit") {
          warn = Warn.amountUnit;
          break;
        }
        if (i == "SampleConcentration") {
          warn = Warn.sampleConcentration;
          break;
        }
        if (i == "index_concentrationunit") {
          warn = Warn.concentrationUnit;
          break;
        }
        if (i == "SampleVolume") {
          warn = Warn.sampleVolume;
          break;
        }
        if (i == "index_volumeunit") {
          warn = Warn.volumeUnit;
          break;
        }
        if (i == "index_treatmentmethods") {
          warn = Warn.treatmentMethods;
          break;
        }
        if (i == "index_treatmentdetail") {
          warn = Warn.treatmentDetail;
          break;
        }
        if (i == "index_paramtype") {
          warn = Warn.paramtype;
          break;
        }
        if (i == "ParamAmount") {
          warn = Warn.paramAmount;
          console.log('i', i);
          console.log('value[i]', value[i]);
          console.log('33', this.data.tempConditions.ParamAmount);
          break;
        }
        if (i == "index_paramunit") {
          warn = Warn.paramUnit;
          console.log('i', i);
          console.log('value[i]', value[i]);
          console.log('33', this.data.index_paramunit);
          break;
        }
        if (i == "DurationTime") {
          warn = Warn.durationTime;
          break;
        }
        if (i == "index_durationunit") {
          warn = Warn.durationUnit;
          break;
        }
        if (i == "FractionNumber") {
          warn = Warn.fractionNumber;
          break;
        }
        if (i == "TechnicalRepetition") {
          warn = Warn.technicalRepetition;
          break;
        }
      } else {
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
    } else {
      var tmpConditions = this.data.totalConditions
      var tmpdata = e.detail.value
      // if (tmpConditions.length + 1 <= this.data.conditionNumber) 
      if (tmpConditions.length + 1 <= this.data.conditionNumber) {
        tmpConditions.push(tmpdata)
        if (tmpConditions.length == this.data.totalConditionNumber) {
          this.setData({
            totalConditions: tmpConditions,
            'scrollTop': -1,
          });
        }
        else {
          this.setData({
            totalConditions: tmpConditions,
            'scrollTop': -1,
            conditionNumber: this.data.conditionNumber + 1
          });
        }
        // this.setData({
        //   totalConditions: tmpConditions,
        //   'scrollTop': -1,
        //   conditionNumber: this.data.conditionNumber + 1
        // });
        console.log('tmpConditions.length', tmpConditions.length)
        // if (tmpConditions.length == this.data.totalConditionNumber) {
        //   this.setData({
        //     totalConditions: tmpConditions,
        //     'scrollTop': -1,
        //   });
        // }
        // else {
        //   this.setData({
        //     totalConditions: tmpConditions,
        //     'scrollTop': -1,
        //     conditionNumber: this.data.conditionNumber + 1
        //   });
        // }
      }
      else {  // 填完返回condition页时
        console.log('else  changdu',this.data.totalConditions.length)
        console.log('this.data.totalConditions', this.data.totalConditions)
        console.log('总样本数conditionNumber', this.data.conditionNumber)
        var tmpConditions = this.data.totalConditions
        tmpConditions[this.data.conditionNumber-1] = e.detail.value
        console.log('tmpConditions', tmpConditions)
        this.setData({
          conditionNumber: this.data.conditionNumber,
          totalConditions: tmpConditions,
          tempConditions: tmpConditions[this.data.conditionNumber-1],
          'scrollTop': -1,
        })
        console.log('totalConditions', this.data.totalConditions)
      }

      if (this.data.totalConditions.length >= this.data.totalConditionNumber) {
        console.log('TotalConditions', this.data.TotalConditions)
        let TotalConditions = this.data.TotalConditions
        let totalConditions = this.data.totalConditions
        for (var i = 0; i < totalConditions.length; i++) {
          console.log('totalConditions', totalConditions)
          var sub = {}
          console.log('this.data.Gender[index_gender]', this.data.content.Gender[0])
          var index_ageunit = totalConditions[i].index_ageunit
          var index_gender = totalConditions[i].index_gender
          var index_genenum = totalConditions[i].index_genenum
          var index_samplestatus = totalConditions[i].index_samplestatus
          var index_storeform = totalConditions[i].index_storeform
          var index_sampleAmountUnit = totalConditions[i].index_sampleAmountUnit
          var index_concentrationunit = totalConditions[i].index_concentrationunit
          var index_volumeunit = totalConditions[i].index_volumeunit
          var index_paramtype = totalConditions[i].index_paramtype
          var index_paramunit = totalConditions[i].index_paramunit
          var index_solution = totalConditions[i].index_solution
          var index_treatmentdetail = totalConditions[i].index_treatmentdetail
          var index_treatmentmethods = totalConditions[i].index_treatmentmethods
          var index_durationunit = totalConditions[i].index_durationunit
          console.log('this.data.Gender[index_gender]', this.data.content.Gender[index_gender])
          sub.ageUnit = this.data.content.AgeUnit[index_ageunit]
          sub.ageNum = totalConditions[i].ageNum;
          sub.Gender = this.data.content.Gender[totalConditions[i].index_gender];
          sub.GeneNum = this.data.GeneNum[index_genenum];
          sub.SampleStatus = this.data.content.SampleStatus[index_samplestatus];
          sub.StoreForm = this.data.content.StorageForm[index_storeform]
          sub.SampleAmount = totalConditions[i].SampleAmount
          sub.SampleAmountUnit = this.data.SampleAmountUnit[index_sampleAmountUnit]
          sub.ConcentrationUnit = this.data.ConcentrationUnit[index_concentrationunit];
          sub.SampleConcentration = totalConditions[i].SampleConcentration;
          sub.SampleVolume = totalConditions[i].SampleVolume;
          sub.VolumeUnit = this.data.VolumeUnit[index_volumeunit];
          sub.ParamType = this.data.ParamType[index_paramtype];
          sub.ParamUnit = this.data.ParamUnit[index_paramunit];
          sub.TreatmentDetail = this.data.Treatment_detail[index_treatmentdetail]
          sub.TreatmentMethods = this.data.TreatmentMethods[index_treatmentmethods]
          sub.TargetGeneInfo = []
          for (var j = 1; j <= 10; j++) {
            var subTargetGene = {}
            var GeneSymbol = 'GeneSymbol' + String(j)
            if (totalConditions[i][GeneSymbol] != undefined) {
              subTargetGene.GeneSymbol = totalConditions[i][GeneSymbol]
              var GeneID = 'GeneID' + String(j)
              subTargetGene.GeneID = totalConditions[i][GeneID]
              var GenoType = 'GenoType' + String(j),
                index_genetype = totalConditions[i][GenoType]
              subTargetGene.GenoType = this.data.GenoTypeList[index_genetype]
              var TaxonID = 'TaxonID' + String(j),
                index_taxonid = totalConditions[i][TaxonID]
              subTargetGene.TaxonID = this.data.TaxonIDList[index_taxonid]
              console.log('subTargetGene', subTargetGene)
              sub.TargetGeneInfo.push(subTargetGene)
            } else {
              break;
            }
          }
          sub.ParamAmount = totalConditions[i].ParamAmount
          sub.DurationTime = totalConditions[i].DurationTime
          sub.DurationUnit = this.data.DurationUnit[index_durationunit];
          sub.FractionNumber = totalConditions[i].FractionNumber
          sub.BiologicalRepetition = totalConditions[i].BiologicalRepetition
          sub.TechnicalRepetition = totalConditions[i].TechnicalRepetition
          sub.SolutionAmount = totalConditions[i].SampleConcentration + this.data.ConcentrationUnit[index_concentrationunit] + ' * ' + totalConditions[i].SampleVolume + this.data.VolumeUnit[index_volumeunit]
          console.log('sub', sub)
          if (TotalConditions.length < this.data.totalConditionNumber){
          TotalConditions.push(sub)
          }
          else{
            TotalConditions[i] = sub
          }
          console.log('push TotalConditions', TotalConditions)

          this.setData({
            TotalConditions: TotalConditions
          })
          app.globalData.TotalConditions = TotalConditions;
          console.log('TotalConditions', this.data.TotalConditions)


          wx.navigateTo({
            url: '../serviceType/serviceType',
          })
        }
      }

    }
  },
  lastCondition: function (e) {
    if (this.data.conditionNumber == 1) {
      wx.navigateTo({
        url: '../basicInfo/basicInfo',
      })
    } else {
      this.setData({
        conditionNumber: this.data.conditionNumber - 1,
        tempConditions: this.data.totalConditions[this.data.conditionNumber - 2],
        index_ageunit: this.data.totalConditions[this.data.conditionNumber - 2].index_ageunit,
        index_gender: this.data.totalConditions[this.data.conditionNumber - 2].index_gender,
        index_genenum: this.data.totalConditions[this.data.conditionNumber - 2].index_genenum,
        index_sampletatus: this.data.totalConditions[this.data.conditionNumber - 2].index_samplestatus,
        index_treatmentmethods: this.data.totalConditions[this.data.conditionNumber - 2].index_treatmentmethods,
        index_treatmentdetail: this.data.totalConditions[this.data.conditionNumber - 2].index_treatmentdetail,
        index_paramtype: this.data.totalConditions[this.data.conditionNumber - 2].index_paramtype,
        index_paramunit: this.data.totalConditions[this.data.conditionNumber - 2].index_paramunit,
        index_durationunit: this.data.totalConditions[this.data.conditionNumber - 2].index_durationunit,
        'scrollTop': -1,
      })
    }
  },


  bindConditionPageChange: function (e) {
    var that = this
    that.setData({
      ConditionPage: parseInt(e.detail.value)
    })
    console.log(' 输入 typeConditionPage', typeof (that.data.ConditionPage))
  },

  conditionNavigate: function () {
    var that = this
    console.log('ConditionPage', that.data.ConditionPage)
    console.log('conpage type:', typeof (that.data.ConditionPage))
    that.setData({
      conditionNumber: that.data.ConditionPage,
      tempConditions: that.data.totalConditions[that.data.ConditionPage - 1],
      index_ageunit: that.data.totalConditions[that.data.ConditionPage - 1].index_ageunit,
      index_gender: that.data.totalConditions[that.data.ConditionPage - 1].index_gender,
      index_genenum: that.data.totalConditions[that.data.ConditionPage - 1].index_genenum,
      index_samplestatus: that.data.totalConditions[that.data.ConditionPage - 1].index_samplestatus,
      index_treatmentmethods: that.data.totalConditions[that.data.ConditionPage - 1].index_treatmentmethods,
      index_treatmentdetail: that.data.totalConditions[that.data.ConditionPage - 1].index_treatmentdetail,
      index_paramtype: that.data.totalConditions[that.data.ConditionPage - 1].index_paramtype,
      index_paramunit: that.data.totalConditions[that.data.ConditionPage - 1].index_paramunit,
      index_durationunit: that.data.totalConditions[that.data.ConditionPage - 1].index_durationunit,

      'scrollTop': -1,
    })
  },


  bindAgeNumChange: function (e) {
    console.log('age number', e)
    var that = this;
    // that.tempConditions.ageNum = e.detail.value
    that.setData({
      ageNum: e.detail.value
    })
  },
  bindAgeUnitChange: function (e) {
    console.log('年龄单位', e)
    var that = this
    that.setData({
      index_ageunit: e.detail.value
    })

  },
  bindGenderChange: function (e) {
    var that = this
    that.setData({
      index_gender: e.detail.value
    })
  },

  // bindGenotypeChange: function (e) {
  //   var that = this
  //   that.setData({
  //     index_genotype: e.detail.value
  //   })
  // },
  bindGeneNumChange: function (e) {
    var that = this
    that.setData({
      index_genenum: e.detail.value,
    })
    var TargetGeneNumberList = []
    for (var i = 1; i <= that.data.GeneNum[e.detail.value];) {
      let tempList = {
        name: i,
        id: i
      }
      TargetGeneNumberList.push(tempList)
      i++
    }
    that.setData({
      TargetGeneNumberList: TargetGeneNumberList
    })
    console.log('TargetGeneNumberList', that.data.TargetGeneNumberList)
  },
  bindStoreFormChange: function (e) {
    this.setData({
      index_storeform: e.detail.value,
      StoreFormSelected: this.data.content.StorageForm[e.detail.value]
    })
  },
  bindSampleAmountUnitChange: function (e) {
    this.setData({
      index_sampleAmountUnit: e.detail.value
    })
  },
  bindDoughAmountChange: function (e) {
    this.setData({
      DoughAmount: e.detail.value
    })
  },
  bindSampleStatusChange: function (e) {
    var that = this
    that.setData({
      index_samplestatus: e.detail.value
    })
  },
  bindSampleConcentrationChange: function (e) {
    var that = this
    that.setData({
      SampleConcentration: e.detail.value
    })
  },
  bindConcentrationUnitChange: function (e) {
    var that = this
    that.setData({
      index_concentrationunit: e.detail.value
    })
  },
  bindVolumeUnitChange: function (e) {
    var that = this
    that.setData({
      index_volumeunit: e.detail.value
    })
  },
  bindSampleVolumeChange: function (e) {
    var that = this
    that.setData({
      SampleVolume: e.detail.value
    })
  },
  bindParamAmountChange: function (e) {
    this.setData({
      ParamAmount: e.detail.value
    })
  },
  bindVolumeChange: function (e) {
    var that = this
    that.setData({
      Volume: e.detail.value
    })
  },
  bindSolutionChange: function (e) {
    var that = this
    that.setData({
      index_solution: e.detail.value
    })
  },
  bindTreatmentMethodsChange: function (e) {
    var that = this;
    let name = that.data.TreatmentMethods[e.detail.value];
    if (name == 'Chemical & Drug') {
      name = 'Chemical %26 Drug'
    }
    that.setData({
      index_treatmentmethods: e.detail.value,
      // TreatmentMethodsSelected: that.data.TreatmentMethods[e.detail.value],
      url: 'https://firmiana.ncpsb.org/experiments/ajax/treatment_detail/?id=' + name
    })
    console.log('e.detail.value', e.detail.value)
    console.log('1ParamAmount', that.data.ParamAmount)
    if (e.detail.value == 0) {
      var tempTreatment_detail = ['NA']
      this.setData({
        Treatment_detail: tempTreatment_detail,
        index_treatmentdetail: '0',
        'tempConditions.ParamAmount': "None",
        'tempConditions.DurationTime': 'None',
        index_durationunit: -2,
        index_paramtype: -2,
        index_paramunit: -2,
        hide: true
      })
      console.log('ParamAmount', that.data.tempConditions.ParamAmount)

    } else {
      that.setData({
        hide: false,
        'tempConditions.ParamAmount': "",
        'tempConditions.DurationTime': '',
        index_durationunit: -1,
        index_paramtype: -1,
        index_paramunit: -1,
      })
      wx.showLoading({
        title: this.data.content.showLoading,
      })
      getInfo.getTreatmentDetail(function (Treatment_detail) {
        that.setData({
          Treatment_detail: Treatment_detail
        })
        wx.hideLoading()
      }, that.data.url)
    }
  },
  bindTreatment_detailChange: function (e) {
    var that = this
    that.setData({
      index_treatmentdetail: e.detail.value
    })
  },
  bindSampleSizeChange: function (e) {
    console.log('age number', e)
    var that = this
    that.setData({
      SampleSize: e.detail.value
    })
  },
  bindParamTypeChange: function (e) {
    var that = this;
    that.setData({
      index_paramtype: e.detail.value,
      url: 'https://firmiana.ncpsb.org/experiments/ajax/unit_detail/?id=' + that.data.ParamType[e.detail.value]
    })
    wx.showLoading({
      title: this.data.content.showLoading,
    })
    if (e.detail.value == 0) {
      that.setData({
        'tempConditions.ParamAmount': 0,
        index_paramunit: '0',
      })
      console.log('none that.data.index_paramunit', that.data.index_paramunit)
    }
    getInfo.getParamUnit(function (ParamUnit) {
      that.setData({
        ParamUnit: ParamUnit
      })
      wx.hideLoading()
    }, that.data.url)
  },
  bindParamUnitChange: function (e) {
    var that = this
    that.setData({
      index_paramunit: e.detail.value
    })
  },
  bindDurationUnitChange: function (e) {
    var that = this
    that.setData({
      index_durationunit: e.detail.value
    })
  },
  bindFractionNumberChange: function (e) {
    var that = this
    that.setData({
      FractionNumber: e.detail.value
    })
  },
  bindBiologicalRepetitionChange: function (e) {
    var that = this
    that.setData({
      BiologicalRepetition: e.detail.value
    })
  },
  bindTechnicalRepetitionChange: function (e) {
    var that = this
    that.setData({
      TechnicalRepetition: e.detail.value
    })
  },
  bindDurationChange: function (e) {
    var that = this
    that.setData({
      Duration: e.detail.value
    })
  },
  bindTotalRepetitionChange: function (e) {
    var that = this
    that.setData({
      TotalRepetition: e.detail.value
    })
  },
}

for (var i = 0; i < TargetGeneNumberList.length; i++) {
  (function (item) {
    TargetGene['bindGeneSymbol' + item.id] = function (e) {
      var that = this
      wx.request({
        url: 'https://firmiana.ncpsb.org/weprogram/getgenesymbol?symbol=' + e.detail.value,
        success: function (res) {
          that.setData({
            geneSymbolArray: res.data.geneSymbol
          })
          console.log('geneSymbolArray', that.data.geneSymbolArray)
          var result = [],
            hash = {}; //去冗余
          for (var i = 0, elem;
            (elem = that.data.geneSymbolArray[i]) != null; i++) {
            if (!hash[elem]) {
              result.push(elem);
              hash[elem] = true;
            }
          }
          that.setData({
            tempGeneSymbolArray: result
          })
          console.log('tempGeneSymbolArray', that.data.tempGeneSymbolArray)
          console.log('item.id-1', item.id - 1)
          var id = item.id - 1
          var GeneSymbol = 'GeneSymbol[' + id + ']'
          that.setData({ //将对应项赋值，每个condition共用一个
            [GeneSymbol]: e.detail.value,
          })
          console.log('GeneSymbol', that.data.GeneSymbol)
        }
      })
    }
    TargetGene['geneSymbolInput' + item.id] = function (e) {
      console.log('geneSymbolInput e', e)
      var that = this
      var id = item.id - 1
      var GeneSymbol = 'GeneSymbol[' + id + ']'
      that.setData({ //选填上后将GeneSymbol对应项设为空
        [GeneSymbol]: ''
      })
      var tempGeneSymbol = that.data.inputGeneSymbol
      if (tempGeneSymbol.length == 0) {
        tempGeneSymbol.push(e.target.dataset.genesymbol)
      } else {
        tempGeneSymbol[id] = e.target.dataset.genesymbol
      }
      console.log('tempGeneSymbol', tempGeneSymbol)
      that.setData({
        inputGeneSymbol: tempGeneSymbol,
        tempGeneSymbolArray: []
      })
      wx.showLoading({
        title: this.data.content.showLoading,
      })
      console.log('inputGeneSymbol', that.data.inputGeneSymbol)
      wx.request({
        url: 'https://firmiana.ncpsb.org/weprogram/getgeneid?symbol=' + e.target.dataset.genesymbol,
        success: function (res) {
          console.log('res.data.geneid', res.data)
          var result = [],
            hash = {}; //geneid去冗余
          for (var i = 0, elem;
            (elem = res.data.geneid[i]) != null; i++) {
            if (!hash[elem]) {
              result.push(elem);
              hash[elem] = true;
            }
            wx.hideLoading()
          }
          console.log('request id ', result)
          that.setData({
            tempGeneIDArray: result,
          })
          var GeneID = 'GeneID[' + id + ']'
          that.setData({ //将对应项赋值，每个condition共用一个
            [GeneID]: result,
          })
          console.log('tempGeneIDArray', that.data.tempGeneIDArray)
          console.log('inputGeneID', that.data.inputGeneID)
          console.log('获取GeneID', that.data.GeneID)
        }
      })
    }
    TargetGene['geneIDInput' + item.id] = function (e) {
      console.log('geneIDInput e', e)
      var that = this
      var id = item.id - 1
      var GeneID = 'GeneID[' + id + ']'
      that.setData({ //选填上后将GeneID对应项设为空
        [GeneID]: ''
      })
      var tempGeneID = that.data.inputGeneID
      if (tempGeneID.length == 0) {
        tempGeneID.push(e.target.dataset.geneid)
      } else {
        tempGeneID[id] = e.target.dataset.geneid
      }
      console.log('tempGeneID', tempGeneID)
      that.setData({
        inputGeneID: tempGeneID,
        tempGeneIDArray: [],
      })
      console.log('inputGeneID', that.data.inputGeneID)
      console.log('填入后GeneID', that.data.GeneID)
    }

    TargetGene['bindTaxonID' + item.id] = function (e) {
      console.log('item.id', item.id)
      console.log(typeof (item.id))
      console.log('e', e)
      let indexArray = this.data.TaxonIDIndex
      let id = parseInt(e.currentTarget.dataset.typeid)
      console.log('e.detatl.value', e.detail.value)
      indexArray[id - 1] = parseInt(e.detail.value)
      this.setData({
        TaxonIDIndex: indexArray
      })
      console.log('TaxonIDIndex', this.data.TaxonIDIndex)
    }
    TargetGene['bindGenotype' + item.id] = function (e) {
      let indexArray = this.data.GenotypeIndex
      let id = parseInt(e.currentTarget.dataset.typeid)
      console.log('e', e)
      indexArray[id - 1] = parseInt(e.detail.value)
      this.setData({
        GenotypeIndex: indexArray
      })
      console.log('GenotypeIndex', this.data.GenotypeIndex)

    }
  })(TargetGeneNumberList[i])
}


Page(TargetGene)