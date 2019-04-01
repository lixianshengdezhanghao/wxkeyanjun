// pages/index/instrument.js
var util = require('../../../../utils/util.js');
var app =getApp();
Page({
  data: {
    captures: '',
    count:0,
    instrument:'',
    date:'',
    cangotop:false,
    url:'https://firmiana.ncpsb.org/weprogram/instrumentstatus',
  },
  getImg: function () {
    wx.showLoading({
      title: this.data.content.loading,
    })
    var that =this
    wx.request({
      url: that.data.url,
      data: {
        instrument: this.data.instrument,
        count: this.data.count,
        date:this.data.date
      },
      success: res => {
        console.log(res.data)
        that.setData({
          captures: res.data
        })
        if (this.refreshReadyCallback) {
          this.refreshReadyCallback(res)
        }
        var imgurlList = []
        for (var i = 0; i < res.data.length; i++) {
          imgurlList.push(res.data[i].url)
        }
        that.setData({
          imgurlList: imgurlList
        })
        wx.hideLoading()
        console.log('imgurlList', imgurlList)
      },
      fail: function () {
        console.log('fail')
      }
    })
  },
  onLoad: function (options) {
    var that = this
    var date = util.formatTime(new Date())[0];
    date = date.replace('/', '-').replace('/', '-')
    console.log('date', date)
    that.setData({
      content: app.globalData.content.staff_expresult_index_instrumentDetail,
      instrument: options.instrument,
      endTime: date,
      date:date
    })
    this.getImg()
  },
 
  bindTimeChange: function (e) {
    console.log(e)
    this.setData({
      date: e.detail.value
    })
    this.getImg()
  },
  previewImage: function (e) {
    console.log('previewImage e', e)
    console.log(e.target.dataset.src)
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgurlList // 需要预览的图片http链接列表
    })
  },
 
  onPullDownRefresh: function () {
    console.log('hahaha')
    var that = this
    that.setData({
      count:0
    })
    wx.request({
      url: that.data.url,
      data: {
        instrument: this.data.instrument,
        count: this.data.count,
        date:this.data.date
      },
      success: res => {
        console.log(res.data)
        that.setData({
          captures: res.data
        })
        if (this.refreshReadyCallback) {
          this.refreshReadyCallback(res)
        }
        var imgurlList = []
        for (var i = 0; i < res.data.length; i++) {
          imgurlList.push(res.data[i].url)
        }
        that.setData({
          imgurlList: imgurlList
        })
        console.log('imgurlList', imgurlList)
      },
      fail: function () {
        console.log('fail')
      }
    })
  },

  onReachBottom: function () {
    console.log('wuwuwuw')
    var that = this
    that.setData({
      count:this.data.count+1
    })
    wx.request({
      url: that.data.url,
      data: {
        instrument: this.data.instrument,
        count: this.data.count+1,
        date:this.data.date
      },
      success: res => {
        console.log(res.data)
        that.setData({
          captures: res.data
        })
        if (this.refreshReadyCallback) {
          this.refreshReadyCallback(res)
        }
        var imgurlList = []
        for (var i = 0; i < res.data.length; i++) {
          imgurlList.push(res.data[i].url)
        }
        that.setData({
          imgurlList: imgurlList
        })
        console.log('imgurlList', imgurlList)
      },
      fail: function () {
        console.log('fail')
      }
    })

  },
  // 获取滚动条当前位置
  onPageScroll: function (e) {
    console.log('打印当前页面滚动的距离')

    console.log(e)
    if (e.scrollTop > 100) {//页面距离大于100px,则显示回到顶部控件
      this.setData({
        cangotop: true
      });
    } else {
      this.setData({
        cangotop: false
      });
    }
  },

  //回到顶部，内部调用系统API
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {

      //   //wx.pageScrollTo(OBJECT)
      //   基础库 1.4.0 开始支持，低版本需做兼容处理
      // 将页面滚动到目标位置。
      //   OBJECT参数说明：
      //   参数名	类型	必填	说明
      // scrollTop	Number	是	滚动到页面的目标位置（单位px）
      //   duration	Number	否	滚动动画的时长，默认300ms，单位 ms
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: this.data.content.warn,
        content: this.data.content.warn_content,
        confirmText: this.data.content.confirmText,
        cancelText: this.data.content.cancelText
      })
    }
  },
  reset:function(){
    var that = this
    var date = util.formatTime(new Date())[0];
    date = date.replace('/', '-').replace('/', '-')
    that.setData({
      date:date
    })
    this.getImg()
  }


})