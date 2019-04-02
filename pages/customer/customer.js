// pages/customer/customer.js
var WxNotificationCenter = require("../../WxNotificationCenter/WxNotificationCenter.js");
import {ItemModel} from "../../models/items";
const itemModel = new ItemModel();
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,

    //item页面数据逻辑
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
            bgColor: "#19be6b",
          },
          {
            supplyno: 'TY-02',
            name: '汗液',
            value: '汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍汗液的介绍',
            price: 20,
            bgColor: "#2d8cf0",
          },
          {
            supplyno: 'TY-03',
            name: '唾液',
            value: '唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍唾液的介绍',
            price: 30,
            bgColor: "#f90",
          },
          {
            supplyno: 'TY-04',
            name: '脑脊液',
            value: '脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍脑脊液的介绍',
            price: 40,
            bgColor: "#ed3f14",
          },
          {
            supplyno: 'TY-05',
            name: '泪液',
            value: '泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍泪液的介绍',
            price: 50,
            bgColor: "#cca4e3",
          },
          {
            supplyno: 'TY-06',
            name: '淋巴液',
            value: '淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍淋巴液的介绍',
            price: 60,
            bgColor: "#4c8dae",
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
            bgColor: "#2d8cf0",
          },
          {
            supplyno: 'XB-02',
            name: '红细胞',
            value: '红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍红细胞的介绍',
            price: 80,
            bgColor: "#f90",
          },
          {
            supplyno: 'XB-03',
            name: '淋巴细胞',
            value: '淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍淋巴细胞的介绍',
            price: 90,
            bgColor: "#ed3f14",
          },
          {
            supplyno: 'XB-04',
            name: '上皮细胞',
            value: '上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍上皮细胞的介绍',
            price: 100,
            bgColor: "#cca4e3",
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
            bgColor: "#ed3f14",
          },
          {
            supplyno: 'ZZ-02',
            name: '石蜡切片',
            value: '石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍石蜡切片的介绍',
            price: 120,
            bgColor: "#19be6b",
          }
        ]
      }
    ],
    num: 2,
    activeName: '1',
    showRight1: false,
    showRight2: false,
    showRight3: false,

//m 页面数据逻辑
    userInfo: {},
    noticeNum:0,
    noticeNumOfBind:0,
    code:'',
    name:'',
    item:{},
    bindinfo:[],

    // lab页面数据逻辑
    inputShowed: false,
    inputVal: "",
    search: {
      searchValue: '',
      showClearBtn: false
    },
    toView: "liver",
    scrollTop: 100,
    scroll_height: "",
    btn: [{
        id: "liver",
        btnName: '肝',
        src: '/images/customer/lab/liver.png',
        bgColor: '#71C671',
      },
      {
        id: "lung",
        btnName: '肺',
        src: '/images/customer/lab/lung.png',
        bgColor: '#87CEFA',
      },
      {
        id: "stomach",
        btnName: '胃',
        src: '/images/customer/lab/stomach.png',
        bgColor: '#c93756',
      },
    ],
    list: [{
        id: "liver",
        theme: '肝癌风险预测',
        content: '肝癌风险预测的内容肝癌风险预测的内容肝癌风险预测的内容肝癌风险预测的内容肝癌风险预测的内容肝癌风险预测的内容',

        bkcolor: '#71C671',
        subItem: ['项目1-1', '项目1-2', '项目1-3'],
        zhidao: {
          theme: '胃癌用药指导',
          content: '胃癌用药指导的内容胃癌用药指导的内容胃癌用药指导的内容',
          bkcolor: '#7B68EE',
        }
      },

      {
        id: "lung",
        theme: '肺癌风险预测',
        content: '肺癌风险预测的内容肺癌风险预测的内容肺癌风险预测的内容肺癌风险预测的内容肺癌风险预测的内容肺癌风险预测的内容',

        bkcolor: '#87CEFA',
        subItem: ['项目3-1', '项目3-2', '项目3-3', '项目3-4', '项目3-5'],
        zhidao: {
          theme: '胃癌用药指导',
          content: '胃癌用药指导的内容胃癌用药指导的内容胃癌用药指导的内容',
          bkcolor: '#7B68EE',
        }
      },
      {
        id: "stomach",
        theme: '胃癌风险预测',
        content: '胃癌风险预测的内容胃癌风险预测的内容胃癌风险预测的内容',

        bkcolor: '#c93756',
        subItem: ['项目4-1', '项目4-2', '项目4-3', '项目4-4', '项目4-5'],
        zhidao: {
          theme: '胃癌用药指导',
          content: '胃癌用药指导的内容胃癌用药指导的内容胃癌用药指导的内容',
          bkcolor: '#7B68EE',
        }
      },
      {
        id: "Prostate",
        theme: '前列腺癌风险预测',
        content: '乳腺癌风险预测的内容乳腺癌风险预测的内容乳腺癌风险预测的内容',

        bkcolor: '#4c8dae',
        subItem: ['项目4-1', '项目4-2', '项目4-3', '项目4-4', '项目4-5'],
        zhidao: {
          theme: '胃癌用药指导',
          content: '胃癌用药指导的内容胃癌用药指导的内容胃癌用药指导的内容',
          bkcolor: '#7B68EE',
        }
      },

    ],
    num: 1,
    show: true,
    showText:"收起",
    test:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // item页面数据请求
    itemModel.getItemList().then(res=>{
      console.log(res)
      this.setData({
        test:res
      })
    })
    // item页面数据请求
    
    // 页面导航逻辑
    var that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    //页面导航逻辑结束

    //my页面逻辑
    if (wx.getStorageSync('bindinfo')){
    that.setData({
      bindinfo: wx.getStorageSync('bindinfo')
    })
    }
    WxNotificationCenter.addNotification( 'bindNot',that.bindNotFn, that)
    WxNotificationCenter.addNotification('readNotice', that.readNotice, that)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    //my页面逻辑结束

    //lab页面逻辑
    var windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
    var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
    var scroll_height = this.data.scroll_height;
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth - 552
    })
  },

  //页面导航事件
  bindChange(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  swichNav(e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      console.log(e.target)
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //页面导航事件结束

  //item页面事件


  bindViewTap() {
    wx.navigateTo({
      url: '/pages/customer/scan/scan'
    })
  },
  swicth() {
    console.log('switch')
  },
  bind() {
    wx.navigateTo({
      url: '/pages/customer/bind/bind',
    })
  },
  scanNumber() {
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
  addToCart(e) {
    wx.navigateTo({
      url: '/pages/customer/detail/detail?item=' + e.currentTarget.dataset.item + '&detail=' + e.currentTarget.dataset.detail + '&price=' + e.currentTarget.dataset.price + '&supplyno=' + e.currentTarget.dataset.supplyno
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
  //item页面事件结束

  //my页面事件
  //事件处理函数
  bindViewTap() {
    if (app.globalData.Login) {
      wx.navigateTo({
        url: '/pages/customer/mainpage/mainpage'
      })
    }
    else {
      wx.navigateTo({
        url: '/pages/customer/register/register'
      })
    }
  },
  bindNotFn: function (info) {//这是也给带参数的例子，info为字符串
    var that = this
    that.setData({
      noticeNum: that.data.noticeNum + 1,
      noticeNumOfBind: that.data.noticeNumOfBind + 1,
     'item.code':info.code,
     'item.name':info.name,
    })
    if( that.data.bindinfo.length == 0){
      that.data.bindinfo.push(that.data.item)
    }
    else{
    that.setData({
      bindinfo: JSON.parse(that.data.bindinfo)
    })
    that.data.bindinfo.push(that.data.item)
    }
    that.setData({
      bindinfo: JSON.stringify(that.data.bindinfo)
    })
    wx.setStorageSync('bindinfo', that.data.bindinfo)
  },
  readNotice(readNum){ //阅读通知后，将通知数目改变
    var that = this
    that.setData({
      noticeNum: that.data.noticeNum - readNum,
      noticeNumOfBind:0
    })
  },
//my页面事件结束

  //lab页面事件
  toScroll(e) {
    var toView = this.data.toView;
    this.setData({
      toView: e.currentTarget.dataset.id
    })
  },//锚点滑动
  toShow(){
    var show = this.data.show;
    var windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
    var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
    var scroll_height = this.data.scroll_height;
    if(show==true){
      this.setData({
        show:!show,
        scroll_height: windowHeight * 750 / windowWidth - 127,
        showText:"放下"
      })
    }else{
      this.setData({
        show:!show,
        showText:"收起",
        scroll_height: windowHeight * 750 / windowWidth - 552,
      })
    }
    
    this.setData({
      
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    if (wx.getStorageSync('bindinfo')) {
      that.setData({
        bindinfo: wx.getStorageSync('bindinfo')
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})