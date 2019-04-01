var  app = getApp();

Page({

  data: {
    signImage:'',
    basicinfo:{},
    TotalMoney:'',
    price_MS: 0,
    price_BioInfo: 0,
    price_SamplePrepar: 0,
    TotalPrice:0,
    discounted:false,
    hidden:true,
  },

  onLoad: function (options) {
    var content = app.globalData.content.order_orderInfo
    this.setData({
      content:content,
      MoneyList: content.MoneyList,
      basicinfo : app.globalData.basicinfo,
      TotalConditions :app.globalData.TotalConditions,
      selectedService : app.globalData.selectedService,
      AnalysisTime : app.globalData.AnalysisTime,
      DataAnalysis : app.globalData.DataAnalysis,
      Address : app.globalData.Address,     
      'MoneyList[1].content': app.globalData.AnalysisTime,
      'MoneyList[2].content': app.globalData.DataAnalysis,
      'MoneyList[0].content': app.globalData.selectedService,
      serviceNum: app.globalData.selectedService.length,
      'MoneyList[0].amount': app.globalData.basicinfo.totalConditionNumber,
      totalConditionNumber:app.globalData.basicinfo.totalConditionNumber,
    })
    console.log('after onload set MoneyList', this.data.MoneyList)
    console.log('orderInfo  totalConditions', this.data.TotalConditions)
    var totalConditionNumber = Number(this.data.basicinfo.totalConditionNumber)
    let TotalConditions = this.data.TotalConditions, selectedService = this.data.selectedService
    var unitPrice_MS = 0, unitPrice_BioInfo = 0
    //设置单价
    //质谱单价
    if (this.data.AnalysisTime == '30min' ) {  unitPrice_MS = 500}
    else if (this.data.AnalysisTime == '75min') {  unitPrice_MS = 800 }
    else {  unitPrice_MS = 1500 }
    //生信分析单价
    if (this.data.DataAnalysis == '定性/定量分析' || this.data.DataAnalysis == 'Qualitative/quantitative analysis') { unitPrice_BioInfo = 400}
    else if (this.data.DataAnalysis == '差异蛋白分析' || this.data.DataAnalysis == 'Differential protein analysis' ) { unitPrice_BioInfo = 800 }
    else if (this.data.DataAnalysis == '通路分析' || this.data.DataAnalysis == 'Path analysis') { unitPrice_BioInfo = 1600 }
    else if (this.data.DataAnalysis == '无' || this.data.DataAnalysis == 'No') { unitPrice_BioInfo = 0 }
    else { unitPrice_BioInfo = 5000 }
    //样品制备单价,按体液和非体液来分开算
    var unitprice1 = 0, unitprice2 = 0, unitprice3 = 0, unitprice4 = 0, unitprice5 = 0, price_SamplePrepar = 0, unitprice_SamplePrepar = []
    if (this.data.basicinfo.sourceType == '体液' || this.data.basicinfo.sourceType == 'Fluid'){ 
      for (var j = 0; j < selectedService.length; j++){
        if (selectedService[j] == '蛋白全谱分析' || selectedService[j] == 'Proteome profiling' || selectedService[j] == 'IP、Co-IP、Pull-down后蛋白分析' || selectedService[j] == 'Protein analysis after pull-down(IP,Co-IP)' || selectedService[j] == 'Label-Free非标记定量' || selectedService[j] == 'Label-free quantification' || selectedService[j] == '蛋白质修饰位点定性分析' || selectedService[j] == 'Qualitative analysis of protein modification sites') { unitprice1 = 500 + 0; price_SamplePrepar = price_SamplePrepar + 500 * totalConditionNumber; unitprice_SamplePrepar.push(500)}
        else if (selectedService[j] == 'iTRAQ标记定量' || selectedService[j] == 'iTRAQ labelling quantification' || selectedService[j] == 'TMT标记定量' || selectedService[j] == 'TMT labelling quantification' || selectedService[j] == 'SILAC标记定量' || selectedService[j] == 'SILAC labelling quantification')
        { unitprice2 = 500 + 1000; price_SamplePrepar = price_SamplePrepar + 1500 * totalConditionNumber; unitprice_SamplePrepar.push(1500)}
        else if (selectedService[j] == '磷酸化蛋白质组学分析' || selectedService[j] == 'Phosphorylation Proteomics analysis' || selectedService[j] == '乙酰化蛋白质组学分析' || selectedService[j] ==  'Acetylation  Proteomics analysis') { unitprice3 = 500 + 2000; price_SamplePrepar = price_SamplePrepar + 2500 * totalConditionNumber; unitprice_SamplePrepar.push(2500)}
        else if (selectedService[j] == '糖基化蛋白质组学分析' || selectedService[j] =='Glycosylation Proteomics analysis') { unitprice4 = 500 + 3000; price_SamplePrepar = price_SamplePrepar + 3500 * totalConditionNumber; unitprice_SamplePrepar.push(3500)}
        else if (selectedService[j] == '泛素化蛋白质组学分析' || selectedService[j] =='Ubiquitylation Proteomics analysis') { unitprice4 = 500 + 6500; price_SamplePrepar = price_SamplePrepar + 7000 * totalConditionNumber; unitprice_SamplePrepar.push(7000)}
        else { unitprice5 = 500 + 8000; price_SamplePrepar = price_SamplePrepar + 8500 * totalConditionNumber; unitprice_SamplePrepar.push(8500)}
      }
    }
    // if (this.data.basicinfo.sourceType != '体液' || this.data.basicinfo.sourceType != 'Fluid') 
    else {
      for (var j = 0; j < selectedService.length; j++) {
        if (selectedService[j] == '蛋白全谱分析' || selectedService[j] == 'Proteome profiling' || selectedService[j] == 'IP、Co-IP、Pull-down后蛋白分析' || selectedService[j] == 'Protein analysis after pull-down(IP,Co-IP)' || selectedService[j] == 'Label-Free非标记定量' || selectedService[j] == 'Label-free quantification' || selectedService[j] == '蛋白质修饰位点定性分析' || selectedService[j] == 'Qualitative analysis of protein modification sites') { unitprice1 = 300 + 0; price_SamplePrepar = price_SamplePrepar + 300 * totalConditionNumber; unitprice_SamplePrepar.push(300)}
        else if (selectedService[j] == 'iTRAQ标记定量' || selectedService[j] == 'iTRAQ labelling quantification' || selectedService[j] == 'TMT标记定量' || selectedService[j] == 'TMT labelling quantification' || selectedService[j] == 'SILAC标记定量' || selectedService[j] == 'SILAC labelling quantification') { unitprice2 = 300 + 1000; price_SamplePrepar = price_SamplePrepar + 1300 * totalConditionNumber; unitprice_SamplePrepar.push(1300)}
        else if (selectedService[j] == '磷酸化蛋白质组学分析' || selectedService[j] == 'Phosphorylation Proteomics analysis' || selectedService[j] == '乙酰化蛋白质组学分析' || selectedService[j] == 'Acetylation  Proteomics analysis') { unitprice3 = 300 + 2000; price_SamplePrepar = price_SamplePrepar + 2300 * totalConditionNumber; unitprice_SamplePrepar.push(2300)}
        else if (selectedService[j] == '糖基化蛋白质组学分析' || selectedService[j] == 'Glycosylation Proteomics analysis') { unitprice4 = 300 + 3000; price_SamplePrepar = price_SamplePrepar + 3300 * totalConditionNumber; unitprice_SamplePrepar.push(3300)}
        else if (selectedService[j] == '泛素化蛋白质组学分析' || selectedService[j] == 'Ubiquitylation Proteomics analysis') { unitprice4 = 300 + 6500; price_SamplePrepar = price_SamplePrepar + 6800 * totalConditionNumber; unitprice_SamplePrepar.push(6800)}
        else { unitprice5 = 300 + 8000; price_SamplePrepar = price_SamplePrepar + 8300 * totalConditionNumber; unitprice_SamplePrepar.push(8300) }
      }
    }

    //遍历TotalConditions，计算价格
    var price = 0, TotalTechnicalRepet = 0
    for (var i = 0; i < TotalConditions.length; i++){
      price = price + TotalConditions[i].TechnicalRepetition * TotalConditions[i].FractionNumber//质谱价格=（每个样品的生物重复*技术重复*分级个数之和）* 质谱时间对应单价 
      TotalTechnicalRepet = TotalTechnicalRepet + Number(TotalConditions[i].TechnicalRepetition) //生信价格=技术重复之和*单价
      var TR = TotalConditions[i].TechnicalRepetition, FN = TotalConditions[i].FractionNumber , temp = {}
      temp.TR = TotalConditions[i].TechnicalRepetition
      temp.FN = TotalConditions[i].FractionNumber
      console.log('temp',temp)
      var amount = this.data.MoneyList[1].amount
      amount.push(temp)
      console.log('amount',amount)
      this.setData({
        'MoneyList[1].amount': amount
      })
      // let x = String(TR) X String(FN)]
      // console.log('x',x)
  
    }
    console.log('MoneyList[1].amount', this.data.MoneyList[1].amount)
    this.setData({     
      'MoneyList[1].money': price * unitPrice_MS * app.globalData.selectedService.length,
      'MoneyList[2].amount': TotalTechnicalRepet,
      'MoneyList[2].money': TotalTechnicalRepet * unitPrice_BioInfo * app.globalData.selectedService.length,
      'MoneyList[0].money': price_SamplePrepar,
      'MoneyList[1].unitPrice': unitPrice_MS,
      'MoneyList[2].unitPrice': unitPrice_BioInfo,
      'MoneyList[0].unitPrice': unitprice_SamplePrepar,
      TotalPrice: price_SamplePrepar + price * unitPrice_MS * app.globalData.selectedService.length + TotalTechnicalRepet * unitPrice_BioInfo * app.globalData.selectedService.length,
      TotalPrice1: price_SamplePrepar + price * unitPrice_MS * app.globalData.selectedService.length + TotalTechnicalRepet * unitPrice_BioInfo * app.globalData.selectedService.length,
    })


    app.globalData.price_MS = price * unitPrice_MS * app.globalData.selectedService.length
    app.globalData.price_BioInfo = TotalTechnicalRepet * unitPrice_BioInfo * app.globalData.selectedService.length
    app.globalData.price_SamplePrepar = price_SamplePrepar
    app.globalData.MoneyList = this.data.MoneyList
    app.globalData.TotalPrice = this.data.TotalPrice

  },
  signName: function (e) {
    wx.navigateTo({
      url: '../canvas/canvas',
    })
  },
  onShow: function (options) {
    var that = this
    that.setData({
      signImage: wx.getStorageSync('signImage')
    })
  },
  discountScan: function () {
    wx.scanCode({
      success: (res) => {
        wx.showToast({
          title: res.result,
          icon: 'success',
          duration: 4000
        })
        this.setData({
          code: res.result,
          discounted:true,
          hidden:false,
          TotalPrice: this.data.TotalPrice * res.result,
          scan: true,
          disabled: false,
        })
        app.globalData.TotalPrice = this.data.TotalPrice
      },
      fail(res){
        console.log('scan fail',res)
      }
    })
  },
  formSubmit:function(){
    console.log('gloalData',app.globalData)
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/projectsubmit',
      method: "POST",
      header: { "content-type": "application/json" },
      data: {
        user: app.globalData.openID,
        project: JSON.stringify(app.globalData)
        // TotalConditions: JSON.stringify(app.globalData.TotalConditions),
        // basicinfo: JSON.stringify(app.globalData.basicinfo),
        // selectedService: JSON.stringify(app.globalData.selectedService),
        // sampleInfo: JSON.stringify(app.globalData.sampleInfo),
        // TotalPrice: JSON.stringify(app.globalData.TotalPrice),
        // MoneyList: JSON.stringify(app.globalData.MoneyList)
        
      },
      // dataType: "JSON",
      success:function(res){
        console.log('res',res)
        console.log(res.data.Project)
        app.globalData.projectNumber = res.data.Project
        wx.navigateTo({
          url: '../contract/contractIndex',
        })
      }
    });
    
  }
})