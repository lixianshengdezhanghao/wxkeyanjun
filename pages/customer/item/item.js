var app = getApp();
var goodsData = require('../../../utils/goodsData.js')
Page({
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  data: {
    motto: 'Welcome to Firmiana',
    userInfo: {},
    FirmianaInfo: {},
    id: 0,
    inputValue: '',
    scan: false,
    itemList: [{
        name: "体液",
        subnames: [{
            supplyno: 'TY-01',
            name: '尿液',
            value: '尿液的介绍尿液的介绍尿液的介绍尿液的介绍尿液的介绍尿液的介绍尿液的介绍尿液的介绍尿液的介绍尿液的介绍',
            price: 10,
            bgColor:"#19be6b",
          },
          {
            supplyno: 'TY-02',
            name: '汗液',
            value: '汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍',
            price: 20,
            bgColor:"#2d8cf0",
          },
          {
            supplyno: 'TY-03',
            name: '唾液',
            value: '唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍',
            price: 30,
            bgColor:"#f90",
          },
          {
            supplyno: 'TY-04',
            name: '脑脊液',
            value: '脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍',
            price: 40,
            bgColor:"#ed3f14",
          },
          {
            supplyno: 'TY-05',
            name: '泪液',
            value: '泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍',
            price: 50,
            bgColor:"#cca4e3",
          },
          {
            supplyno: 'TY-06',
            name: '淋巴液',
            value: '淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍',
            price: 60,
            bgColor:"#4c8dae",
          }
        ]
      },
      {
        name: "细胞",
        subnames: [{
            supplyno: 'XB-01',
            name: '白细胞',
            value: '白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍白细胞的介绍',
            price: 70,
            bgColor:"#2d8cf0",
          },
          {
            supplyno: 'XB-02',
            name: '红细胞',
            value: '红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍',
            price: 80,
            bgColor:"#f90",
          },
          {
            supplyno: 'XB-03',
            name: '淋巴细胞',
            value: '淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍',
            price: 90,
            bgColor:"#ed3f14",
          },
          {
            supplyno: 'XB-04',
            name: '上皮细胞',
            value: '上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍',
            price: 100,
            bgColor:"#cca4e3",
          }
        ]
      },
      {
        name: "组织",
        subnames: [{
            supplyno: 'ZZ-01',
            name: '活检组织',
            value: '活检组织的介绍活检组织的介绍活检组织的介绍活检组织的介绍活检组织的介绍活检组织的介绍活检组织的介绍活检组织的介绍活检组织的介绍',
            price: 110,
            bgColor:"#ed3f14",
          },
          {
            supplyno: 'ZZ-02',
            name: '石蜡切片',
            value: '石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍',
            price: 120,
            bgColor:"#19be6b",
          }
        ]
      }
    ],
    num: 2,
    activeName: '1',
    showRight1: false,
    showRight2: false,
    showRight3: false,
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../scan/scan'
    })
  },
  swicth: function () {
    console.log('switch')
  },
  bind: function () {
    wx.navigateTo({
      url: '../bind/bind',
    })
  },
  scanNumber: function () {
    wx.scanCode({
      success: (res) => {
        wx.showToast({
          title: res.result,
          icon: 'success',
          duration: 4000
        })
        this.setData({
          inputValue: res.result,
          scan: true
        })
      }
    })
  },
  addToCart: function (e) {
    wx.navigateTo({
      url: '../detail/detail?item=' + e.currentTarget.dataset.item + '&detail=' + e.currentTarget.dataset.detail + '&price=' + e.currentTarget.dataset.price + '&supplyno=' + e.currentTarget.dataset.supplyno
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  toggleRight1() {
    this.setData({
      showRight1: !this.data.showRight1
    });
  },
  toggleRight2() {
    this.setData({
      showRight2: !this.data.showRight2
    });
  },
  toggleRight3() {
    this.setData({
      showRight3: !this.data.showRight3
    });
  },
})