var util = require('../../utils/util.js');
var app = getApp();

var listData = [
  { "code": "质谱鉴定", "unit": '' ,"unitPrice":'',"amount":'',"money":''},
  { "code": "数据分析", "unit": '', "unitPrice": '', "amount": '', "money": ''},
  { "code": "合计", "unit": '', "unitPrice": '', "amount": '', "money": ''},
]

var payment = [
  { 'name': "一次支付，具体支付时间和方式如下：", 'value': '前将服务费用转入乙方账户', 'checked': false},
  {
    'name': "分期支付，具体支付时间和方式如下：", 'value': '采用分期付款方式，甲方预付测试全款80%，乙方完成全部检测工作后通知甲方支付剩余20%费用，乙方收到全部费用后出具正式检测报告。\n乙方开户银行名称、地址和帐号为：\n开户银行：中国农业银行上海翔殷路支行\n户    名：复旦大学\n帐    号：03326708017003441 ', 'checked': false}
]
var sixth = "双方确定因履行本合同应遵守的保密义务如下:\n1.保密范围：测试样本信息、数据、结果，测试价格及技术资料。\n2．保密期限：乙方为甲方永久保密，甲方为乙方永久保密。\n3．泄密责任：造成损失由泄密方负责赔偿。"
var seventh = "本合同的变更必须由双方协商一致，并以书面形式确定。但有下列情形之一的，一方可以向另一方提出变更合同权利与义务的请求，另一方应当在  15  日内予以答复；逾期未予答复的，视为同意：\n1． 无\n2． 无\n3． 无"
var eighth = "双方确定：\n1．在本合同有效期内，甲方利用乙方提交的技术服务工作成果所完成的新的技术成果，归双方所有。\n2．在本合同有效期内，乙方利用甲方提供的技术资料和工作条件所完成的新的技术成果，归双方所有。"
var ninth = "双方确定，按以下约定承担各自的违约责任：\n1．甲方违反本合同第十一条第2项约定，应当支付违约金，合同总金额的5%。"
var tenth = "双方确定，在本合同有效期内，甲方指定     为甲方项目联系人，乙方指定 谭素北 为乙方项目联系人。项目联系人承担以下责任：\n1． 样品交接。\n2． 信息传递\n一方变更项目联系人的，应当及时以书面形式通知另一方。未及时通知并影响本合同履行或造成损失的，应承担相应的责任。"
var eleventh = "双方确定，出现下列情形，致使本合同的履行成为不必要或不可能的，可以解除本合同：\n1．发生不可抗力；\n2．甲方不再进行此项目；\n3．乙方不再具备执行此项目的能力。"
var twelfth = "双方因履行本合同而发生的争议，应协商、调解解决。协商、调解不成的，应提交仲裁委员会仲裁，或依法向人民法院起诉。"
var thirteenth = "本合同一式四份，甲乙双方各执二份，签字盖章后生效，具有同等法律效力。"

var fourth = "双方确定因履行本合同应遵守的保密义务如下：\n1．保密范围：测试样本信息、数据、结果，测试价格及技术资料\n2．保密期限：乙方为甲方永久保密，甲方为乙方永久保密。\n3．泄密责任：造成损失由泄密方负责赔偿。"
var fifth = "本合同的变更必须由双方协商一致，并以书面形式确定。但有下列情形之一的，一方可以向另一方提出变更合同权利与义务的请求，另一方应当在  15  日内予以答复；逾期未予答复的，视为同意：\n1． 无\n2． 无\n3． 无"
var sixth = "双方约定，乙方在  2018   年  9 月 25日之前完成全部检测服务，乙方负责向甲方提供复旦大学蛋白质组平台出具的检测报告原件一份\n合同签订后30个自然日内，甲方负责提供合格的样本给乙方；\n乙方需要从收到合格样本开始的360个自然日内完成所有样本的质谱检测及数据分析工作，并向甲方提供复旦大学蛋白质组平台出具的检测报告原件一份。若过程中出现意料之外的事宜，甲乙双方协商解决。"
var seventh = "双方确定：\n1．在本合同有效期内，甲方利用乙方提交的技术服务工作成果所完成的新的技术成果，归双方所有。\n2．在本合同有效期内，乙方利用甲方提供的技术资料和工作条件所完成的新的技术成果，归双方所有。"
var eighth = "双方确定,在本合同有效期内，甲方指定     为甲方项目联系人，乙方指定 谭素北 为乙方项目联系人。项目联系人承担以下责任：\n1． 样品交接。\n2． 信息传递\n一方变更项目联系人的，应当及时以书面形式通知另一方。未及时通知并影响本合同履行或造成损失的，应承担相应的责任。"

var ninth = "双方确定，出现下列情形，致使本合同的履行成为不必要或不可能的，可以解除本合同：\n1．发生不可抗力；\n2．甲方不再进行此项目；\n3．乙方不再具备执行此项目的能力。"

Page({


  data: {
    listData: listData,
    payment:payment,
    sixth: sixth,
    seventh: seventh,
    eighth: eighth,
    ninth: ninth,
    tenth: tenth,
    eleventh: eleventh,
    twelfth: twelfth,
    thirteenth: thirteenth,
    projectName:'肾脏病临床样品尿蛋白标志物的探究',
    contractNO:12345,
    deadline:'',
    scrollTop: 100,
    signImage: '',
    legalRepresentative:'',
    projectContacts:'',
    address:'',
    phoneNumber:'',
    postcode:'',
    fax:'',
    TotalAmount:0,
  },

  onLoad: function (options) {
    var time = util.formatTime(new Date())[0];
    this.setData({
      content: app.globalData.content.contract_contract,
      time: time,
      PartyA: app.globalData.registerInfo.unit,
      MoneyList: app.globalData.MoneyList,
      TotalPrice: app.globalData.TotalPrice,
      registerInfo:app.globalData.registerInfo,
      serviceNum: app.globalData.selectedService.length,

      totalConditionNumber: app.globalData.basicinfo.totalConditionNumber,

    });
    
  },
  onShow: function (options) {
    var that = this
    that.setData({
      signImage: wx.getStorageSync('signImage')
    })
    wx.setNavigationBarTitle({
      title: that.data.content.navigationBarTitle
    })
  },
  signName: function (e) {
    console.log('跳转')
    wx.showLoading({
      title: this.data.content.jumping,
      complete:function(res){
        console.log('complete',res)
      }
    })
  
    setTimeout(function () {
      wx.navigateTo({
        url: '../canvas/canvas',
        success: function () {
          wx.hideLoading()
        }
      })    
      }, 100)

    // wx.navigateTo({
    //   url: '../canvas/canvas',
    //   success: function () {
    //     wx.hideLoading()
    //   }
    // })
  },
  legalPersonChange:function(e){
      this.setData({
        legalPerson:e.detail.value
      })
  },
  projectContactsChange:function(e){
    this.setData({
      projectContacts: e.detail.value
    })
  },
  addressChange: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  phoneNumberChange: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  postcodeChange: function (e) {
    this.setData({
      postcode: e.detail.value
    })
  },
  faxChange: function (e) {
    this.setData({
      fax: e.detail.value
    })
  }, 
  paymentChange:function(e) {
    console.log(e)
    // this.setData({
    //   fax: e.detail.value
    // })
  }, 
  bindDateChange: function (e) {
    console.log('date e ',e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  formSubmit:function(e){
    console.log('submit e',e)
    console.log('app.gloablData.TotalConditions', app.globalData.TotalConditions)
    var value = e.detail.value
    app.globalData.legalPerson = value.legalPerson
    app.globalData.projectContacts = value.projectContacts
    app.globalData.address = value.address
    app.globalData.phoneNumber = value.phoneNumber
    app.globalData.postcode = value.postcode
    app.globalData.fax = value.fax
    app.globalData.signImage = this.data.signImage

    console.log('signImage', app.globalData.signImage)
    console.log('app.globalData', app.globalData)
    // wx.request({
    //   url: 'https://firmiana.ncpsb.org/weprogram/projectsubmit',
    //   method: "POST",
    //   header: { "content-type": "application/json" },
    //   data: {
    //     user: app.globalData.openID,
    //     project: JSON.stringify(app.globalData)
    //     // solutionAmount: JSON.stringify(app.globalData.solutionAmount)
    //   },
    //   dataType: "JSON"
    // });
    wx.showToast({
      // title: '您的合同已生成，我们将发一份合同至您的邮箱\n2、平台将对您的样本进行分析，请您耐心等待！',
      title:this.data.content.done,
      icon: 'success',
      duration: 20000,
      success: function (e) {
        console.log('e', e)
        setTimeout(function () {
          //要延时执行的代码
          wx.switchTab({
            url: "../srvPurchase/srvPurchase"
          })
        }, 2000)
      }
    })
  }
})