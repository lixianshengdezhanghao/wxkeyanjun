// pages/register/register.js
var app = getApp();
Page({

  data: {
    email: "",
    mailPI: '',
    phoneRight: false,
    inputUnit: '',
    inputShowed: false,
    unitArray: [],
    temporaryUnitArray: [],
    isRegistered:false,
    inputFocus: false,
    currentValue: ''
  },

  onLoad: function(options) {
    console.log('app.globalData.isRegistered', app.globalData.isRegistered)
    var that = this
    that.setData({
      content: app.globalData.content.register_register,
      isRegistered: app.globalData.isRegistered
    })
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/getunit/',
      success: function(res) {
        that.setData({
          unitArray: res.data
        })
        console.log(that.data.unitArray)
      }
    })
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputUnit: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputUnit: ""
    });
  },
  inputTyping: function(e) {
    var that = this
    that.setData({
      inputUnit: e.detail.value
    });
    var tempUnit = []
    for (var i in that.data.unitArray) {

      var temp = that.data.unitArray[i]
      if (temp.indexOf(e.detail.value) != -1) {
        tempUnit.push(temp)
      }
    }
    that.setData({
      temporaryUnitArray: tempUnit
    })
  },
  unitInput: function(e) {
    console.log('选择', e)
    var that = this
    that.setData({
      inputUnit: e.target.dataset.unit,
      temporaryUnitArray: []
    })
  },
  emailInput(e) {
    let that = this
    let email = e.detail.value // 获取输入框的数据
    that.setData({
      email
    })
  },
  emailPIInput(e) {
    let that = this
    let mailPI = e.detail.value // 获取输入框的数据
    that.setData({
      mailPI
    })
  },
  confirmTap() {
    let that = this
    wx.showModal({
      title: '邮箱',
      content: that.data.email,
      showCancel: false
    })

  },
  formSubmit: function(e) {
    console.log(e.detail.value.phone)
    console.log('formsubmit e.detail.value', value)
    var value = e.detail.value
    var flag = true;
    var warn = "";
    for (var i in value) {
      if (value[i] == "" || value[i] == null) {
        flag = true;
        console.log('flag', flag)
        if (i == "name") { console.log(1); warn = "请填写您的真实姓名"; break; }
        if (i == "phone") { console.log(1); warn = "请填写您的电话号码"; break; }
        if (i == "mail") { console.log(1); warn = "请填写您的邮箱地址"; break; }
        if (i == "unit") { console.log(1); warn = "请填写/选择您的单位"; break; }
        if (i == "department") { console.log(1); warn = "请填写您的院系"; break; }
        if (i == "researchInterests") { console.log(1); warn = "请填写您的研究方向"; break; }
      }  
        else {
          flag = false;
        }
      }
      if (flag == true) {
        console.log('warn', warn)
        wx.showModal({
          title: '提示',
          content: warn
        })
      }
      else{
    var that = this
    if (e.detail.value.phone == 0) {
      wx.showToast({
        title: '请输入手机号！',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    if (e.detail.value.phone.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
    if (!myreg.test(e.detail.value.phone)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    } else {
      if (e.detail.value.input_password != e.detail.value.confirm_password){
        wx.showModal({
          title: '提示',
          content: '两次密码不同！',
        })
      }
      else{
      wx.showLoading({
        title: '注册中',
      })
      wx.request({
        url: 'https://firmiana.ncpsb.org/weprogram/register/',
        data: {
          name: e.detail.value.name,
          phone: e.detail.value.phone,
          mail: e.detail.value.mail,
          unit: e.detail.value.unit,
          department: e.detail.value.department,
          namePI: e.detail.value.namePI,
          mailPI: e.detail.value.mailPI,
          researchInterests: e.detail.value.researchInterests,
          password: e.detail.value.input_password,
          openID: app.globalData.openID
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          wx.hideLoading()
          console.log('register success',res.data)
          wx.showToast({
            // title: '最多显示7个字！',
            title: '您已注册成功!',
            icon: 'success',
            duration: 20000,
            success: function (e) {
              console.log('e', e)
              setTimeout(function () {
                //要延时执行的代码
                // wx.reLaunch({
                //   url: '../srvPurchase/srvPurchase',
                // })
                wx.navigateTo({
                  url: '../index/index',
                })
              }, 1000)
            }
          })
        },
        complete:function(res){
          console.log('complete res ',res)
        }
      })
      }
      
    }
    }

  },
})