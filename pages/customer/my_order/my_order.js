import {OrderModel} from "../../../models/order";
const orderModel = new OrderModel();
var app = getApp()
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0,
    orders:[]
  },
  onLoad: function () {
    /* 数据请求 */
    orderModel.getMyOrder().then(res=>{
      console.log(res)
      this.setData({
        orders:res
      })
    })

    var that = this;

    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    }) 
  },

  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /* 跳转逻辑 */
  toSchedule(){
    wx.navigateTo({
      url: '/pages/customer/noticeCenter/notice_order/notice_order',
    })
  },
  toOrderDetail(){
    wx.navigateTo({
      url: '/pages/customer/my_order/order_details/order_details',
    })
  },
  toReport(){
    wx.navigateTo({
      url: '/pages/customer/report/report',
    })
  },
  toLogistics(){
    wx.navigateTo({
      url: '/pages/customer/noticeCenter/notice_logistics/notice_logistics',
    })
  }
});