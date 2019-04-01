// pages/customer/noticeCenter/notice_logistics/notice_logistics.js
import {OrderModel} from "../../../../models/order";
const orderModel = new OrderModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    ExpressNumber:828922231825,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.ExpressNumber)
    var id = this.data.ExpressNumber;
    orderModel.getMyExpress(id).then(res=>{
      console.log(res)
      this.setData({
        list:res
      })
    })
  },
  toDetail(){
    var id = this.data.ExpressNumber;
    wx.navigateTo({
      url: '/pages/customer/noticeCenter/notice_logistics/notice_logistics_detail/notice_logistics_detail?id='+id,
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