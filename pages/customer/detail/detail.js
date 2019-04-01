
var app=getApp();
var goodsData = require('../../../utils/goodsData.js');
Page({

  data: {
    assessSelected:false,
    riskPrediction:'',
    prognosisPrediction:'',
    goods: {
      service: '该商品属于服务类别，若您希望停止服务，我们将根据订单进程向您返还一定服务费用：\n' +
      '1、我公司未接收样本或样本未入库，返还订单金额的100%\n' + 
      "2、样本处理工作尚未完成，返还订单金额的95%\n" +
      '3、完成样本处理工作，未进行质谱检测工作，返还订单金额的80%\n' + 
      '4、完成质谱检测工作，返还订单金额的40%',
      detail: '******  健康评估： ******\n' + '将待服务样本进行处理，使用高精度质谱仪进行深度覆盖鉴定，利用一站式蛋白质组数据分析云系统Firmiana进行数据分析并提供数据报告，只需您提供的一份体液样本，无痛无创，安全健康，利用我们所建立的健康大数据，为您的健康打分。发现潜在疾病风险，将预防诊治时间提前，为您的健康保驾护航。\n' + ' ****** 重大疾病风险预测：      ******\n' + '将待服务样本进行处理，使用高精度质谱仪进行深度覆盖鉴定，利用一站式蛋白质组数据分析云系统Firmiana进行数据分析并提供数据报告，只需您提供的一份体液样本，无痛无创，安全健康，利用我们所建立的健康大数据，发现潜在疾病风险，将预防诊治时间提前，为您的健康保驾护航。\n' + '******   疾病预后预测及用药指导：  ******\n' +'将待服务样本进行处理，使用高精度质谱仪进行深度覆盖鉴定，利用一站式蛋白质组数据分析云系统Firmiana进行数据分析并提供数据报告，无需您进行二次手术，切除的组织样本，前期治疗过程已完成石蜡包埋处理的组织样本，均可进行检测服务，利用我们独有的分型方案，为您的预后预测情况进行评估，并根据您自身情况，生成靶向用药指导方案。合理的方案，降低您所承受的痛苦，减少您的经济开支。您健康，就是我们最大的感动。'
    },
    datas: []  ,
    num: 1,
    totalNum: 0,
    hasCarts: false,
    loaded: false,
    curIndex: 0,
    show: false,
    scaleCart: false,
    riskArr: [{ name: '心脏', price: 1000 }, { name: '肝脏', price: 1100 }, { name: '肾脏', price: 1200 }, { name: '胃', price: 1300 }, { name: '肺', price: 1400 }, { name: '卵巢', price: 1500 }, { name: '子宫', price: 1600 }, { name: '肠', price: 1700 }], 
    idx_risk:-1,
    prognosisArr: [{ name: '胃', price: 5000 }, { name: '肝', price: 5100 }, { name: '肺', price: 5200 }, { name: '肠', price: 5300 }],
    idx_pro:-1,
    multiIndex: [-1, -1,-1],
    multiArray: [['健康状态评估'], [ '心脏', '肝脏', '肾脏', '胃','肺','卵巢','子宫','肠'], ['胃', '肝','肺','肠']],
    totalPrice:0,
    p1:0,
    p2:0,
    p3:0,
    riskItem:'',
    progItem:''
  },

  onLoad: function (options) {
    console.log('项目',options)
    var that = this 
    var obj = goodsData.data[options.item];
    for( var i  in goodsData.data){
      console.log('goodsData',i)
    }
    this.initGoods(obj);
    var InitialPrice = this.data.InitialPrice
    that.setData({ loaded: true, totalPrice: InitialPrice});

  },
  getTotalPrice:function(){
    this.setData({
      totalPrice: this.data.p1 + this.data.p2 + this.data.p3 + this.data.InitialPrice
    })
  },
  bindAssessmentChange: function () {
    var that = this
    var selected = this.data.assessSelected
    selected = !selected
    that.setData({
      assessSelected: selected,
    })
    if (this.data.assessSelected){
      that.setData({
        p1:500
      })
    }
    else{
      that.setData({
        p1: 0
      })
    }
    that.getTotalPrice();
  },
  bindriskChange:function(e){
    var that = this
    var id = e.currentTarget.dataset.id;
    that.setData({
      idx_risk: id,
      p2: this.data.riskArr[id].price,
      riskPrediction: this.data.riskArr[id].name
    })
    that.getTotalPrice();
  },
  bindprognosisChange: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    that.setData({
      idx_pro: id,
      p3: this.data.prognosisArr[id].price,
      prognosisPrediction: this.data.prognosisArr[id].name
    })
    that.getTotalPrice();
  },
  bindPrognosisChange: function (e) {
    console.log(e)
    var selected = this.data.progSelected
    selected = !selected
    this.setData({
      idx_pro: e.detail.value,
      progSelected: selected
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
 
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    console.log('打印产品类型')
    console.log(this.data.Type)
    var Type = this.data.Type
    if (Type == 'bodyFluid'){
      data.multiArray[0] = ['健康状态评估'];
      data.multiArray[1] = [ '心脏', '肝脏', '肾脏', '胃', '肺', '卵巢', '子宫', '肠'];
      this.setData(data);
    }
    else if (Type == 'cell'){
      data.multiArray[0] = ['健康状态评估'];
      data.multiArray[1] = ['心脏', '肝脏', '肾脏', '胃', '肺', '卵巢', '子宫', '肠'];
      data.multiArray[2] = ['胃', '肝', '肺', '肠'];
      this.setData(data);
    }
    else  {
      data.multiArray[0] = ['心脏', '肝脏', '肾脏', '胃', '肺', '卵巢', '子宫', '肠'];
      data.multiArray[1] = ['胃', '肝', '肺', '肠'];
      this.setData(data);
    }
  },
  initGoods: function (d) {
    console.log('初始化商品函数d')
    console.log(d)
    var that = this;
    wx.setNavigationBarTitle({ title: d.name });
    this.setData({
      imgMinList: (function () {
        var _list = [];
          _list.push();
        return _list;
      })(),
      img:d.img,
      name: d.name,
      num: 1,
      des: d.detail,
      InitialPrice:d.price,
      parameter: d.parameter,
      stock: d.stock,
      Type:d.type,
      ServiceType:{
        healthAssess: d.ServiceType.healthAssess,
        riskPrediction: d.ServiceType.riskPrediction,
        prognosisPrediction: d.ServiceType.prognosisPrediction,
      },
      supplyno: d.supplyno
    });
  },
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  },
  addToCart() {
    console.log('addcart')
    console.log(this.data)
    const that = this;
    const num = this.data.num;
    let total = this.data.totalNum;
    if (this.data.stock) {
      if (this.data.assessSelected || this.data.riskPrediction || this.data.prognosisPrediction) {
    that.setData({
      show: true
    })
    setTimeout(function () {
      that.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        that.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
    app.cart.add({
      supplyno: this.data.supplyno,
      name: this.data.name,
      price: this.data.totalPrice,
      num: this.data.num,
      img:this.data.img,
      selected:true,
      healthAssess: this.data.assessSelected,
      riskPrediction: this.data.riskPrediction,
      prognosisPrediction: this.data.prognosisPrediction
    })
    }
      else {
        wx.showModal({
          title: '提示',
          content: '请至少为你的产品选择一项服务！',
        })
      }
    }
    else{
      wx.showModal({
        title: '抱歉',
        content: '此产品当前暂无货，请耐心等待！',
      })
    }  
  },
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }

})