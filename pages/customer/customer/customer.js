const AV = require('../../utils/av-weapp.js');
var util = require('../../utils/util.js');  
var WxNotificationCenter = require("../../../WxNotificationCenter/WxNotificationCenter.js");
var app = getApp();
Page({
  onLoad: function (option) {
    var that = this;
    //获取名字和code，用于传递到通知页面
    that.setData({
      code:option.code,
      name:option.name
    })
    wx.getStorage({
      key: 'userinfo',
      success: function (res) {
        that.setData({
          userinfo: res.data,
          date: res.data.birthDate,
          'region[0]': res.data.address[0],
          'region[1]': res.data.address[1],
          'region[2]': res.data.address[2]
        })
        console.log('缓存的userinfo',that.data.userinfo)
        if (that.data.userinfo.name != that.data.name) { //缓存的即上次保存的name与此次填写的name如果不同，则修改为此次填写的name
          console.log(that.data.userinfo.name, that.data.name)
          wx.setStorageSync(that.data.userinfo.name, that.data.name)
          that.setData({
            'userinfo.name': that.data.name
          })
          console.log(1)
          // console.log(wx.getStorageSync(userinfo.name))
        }
        var currentTime = util.formatTime(new Date());
        var currentTimestamp = Date.parse(new Date());
        currentTimestamp = currentTimestamp / 1000;
        console.log('currentTimestamp', currentTimestamp)
        console.log('submitTimestamp', wx.getStorageSync('submitTimestamp'))
        if (wx.getStorageSync('submitTimestamp')) { //初次进入时无submitTimestamp，一定时间内提醒更新，超过一定时间则强制更新，即将需要强制更新的项设为空
          var invl = currentTimestamp - wx.getStorageSync('submitTimestamp')
          console.log('invl', invl)   //距离上次提交时的秒数
          if (invl > 1000) {
            wx.showModal({
              title: '提示',
              content: '由于距你上次提交时间太长，请修改你的信息，以便更好的服务！',
            })
            console.log('else里面的userinfo', wx.getStorageSync('userinfo'))
            var userinfo = wx.getStorageSync('userinfo')
            userinfo.weight = ''
            userinfo.blood_pressure1 = ''
            userinfo.blood_pressure2 = ''
            userinfo.name = that.data.name
            that.setData({
              userinfo: userinfo
            })
            console.log('修改后的', userinfo)
          }
          else if (invl > 20) {
            wx.showModal({
              title: '提示',
              content: '由于距你上次提交时间较长，我们建议你修改你的某些信息，比如血压。',
            })
          }
        }
        var Gender = that.data.Gender, items = that.data.items
        for (var i in Gender) {
          if (Gender[i].gender == that.data.userinfo.gender) {
            Gender[i].checked = true
          }
        }
        that.setData({
          Gender: Gender
        })
        for (var j in items) {
          if (items[j].value == that.data.userinfo.abnormality) {
            items[j].checked = true
          }
        }
        that.setData({
          items: items
        })
      }
    })
    var stepImgList = wx.getStorageSync('stepImgList')
    that.setData({
      imageWidth:wx.getSystemInfoSync().windowWidth/2,
      submitTime: wx.getStorageSync('submitTime')
    })
    wx.getStorage({
      key: 'images',
      success: function(res) {
        that.setData({
          images:res.data
        })
      },
    })
    
  },

  data: {
    name:'',
    userinfo:{
    name: '',
    code:'',
    gender: '',
    birthDate: '',
    height: '',
    weight: '',
    blood_pressure1: '',
    blood_pressure2:'',
    address: '',
    abnormality: '',
    },
    ExperimentNumber: '',
    items: [{ value: '有', checked: false }, { value: '无', checked: false }],
    Gender: [{ gender: '男', checked: false }, { gender: '女', checked: false }],
    date:'1968-01-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    images: [],
    uploadedImages: [],
    imageWidth:0,
    stepImgList:[],
    submitTime:''
    // imageWidth: getApp().screenWidth / 8 - 50
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  chooseImage: function () {
    // 选择图片
    var that=this
    wx.chooseImage({
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        that.setData({
          images: that.data.images.concat(tempFilePaths)
        });
        wx.setStorage({
          key: 'images',
          data: that.data.images,
          success(){
            console.log()
          }
        })
      }
    })
    
  },
  previewImage: function () {
    // 预览图集
    wx.previewImage({
      urls: that.data.images
    });
  },
  submit2: function () {
    // 提交图片，事先遍历图集数组
    var that = this 
    that.data.images.forEach(function (tempFilePath) {
      new AV.File('file-name', {
        blob: {
          uri: tempFilePath,
        },
      }).save().then(
        // file => console.log(file.url())
        function (file) {
          // 先读取
          var uploadedImages = that.data.uploadedImages;
          uploadedImages.push(file.url());
          // 再写入
          that.setData({
            uploadedImages: uploadedImages
          });
          console.log(uploadedImages);
        }
        ).catch(console.error);
    });
    wx.showToast({
      title: '提交成功',
      // success: function () {
      //   wx.navigateBack();
      // }
    });
  },
  delete: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index;
    var images = that.data.images;
    images.splice(index, 1);
    that.setData({
      images: images
    });
  },
  genderChange: function (e) {
    console.log(e)
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      'item.gender': e.detail.value,
      'item.checked':true
    })
  },
  radioChange: function (e) {
    console.log(e)
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      'item.value': e.detail.value,
      'item.checked': true
    })
  },
  formSubmit: function (e) {
    var warn = "";//弹框时提示的内容  
    var flag = true;//判断信息输入是否完整  
    var value = e.detail.value
    console.log(value)
    //判断的顺序依次是：姓名-性别-年龄-身高-体重-血压-地址-有无异常  
    if (value.name == "") {
      warn = "请填写您的姓名！";
    } else if (value.gender == "") {
      warn = "请选择您的性别！";
    } else if (value.age == "") {
      warn = "请填写您的年龄";
    } else if (value.height == "") {
      warn = "请填写您的身高"
    } else if (value.weight == "") {
      warn = "请填写您的体重";
    } else if (value.blood_pressure == "") {
      warn = "请填写您的血压";
    } else if (value.address == "") {
      warn = "请选择您的地址";
    } else if (value.abnormality == "") {
      warn = "请选择体检结果是否有异常";
    } else {
      var that = this
      // that.setData({
      //   userName: e.detail.value.name,
      //   gender: e.detail.value.gender,
      //   age: e.detail.value.age,
      //   height: e.detail.value.height,
      //   weight: e.detail.value.weight,
      //   blood_pressure: e.detail.value.blood_pressure,
      //   address: e.detail.value.address,
      //   abnormality: e.detail.value.abnormality
      // })
      wx.setStorage({
        key: 'userinfo',
        data: value
      })
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转  
      // var that = this;
      //？后面跟的是需要传递到下一个页面的参数  
      // wx.navigateTo({
      //   url: '../confirmForest/confirmForest?area=' + e.detail.value.area + '&tel=' + e.detail.value.tel + "&addre=" + that.data.addreRange[e.detail.value.addre] + "&door=" + e.detail.value.door
      // })
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
      app.changeStep(3)
      var submittime = util.formatTime(new Date());  
      wx.setStorageSync('submitTime', submittime)  
      var submittimestamp = Date.parse(new Date());
      submittimestamp = submittimestamp / 1000;
      wx.setStorageSync('submitTimestamp', submittimestamp)
      console.log("当前时间戳为：" + submittimestamp);
      setTimeout(function(){
        wx.showModal({
          title: '提示',
          content: '绑定成功！',
        })
        WxNotificationCenter.postNotificationName("bindNot", {'code':that.data.code, 'name':that.data.userinfo.name});
        setTimeout(function(){
          wx.switchTab({
            url: '../item/item',
          })
        },1000)
      },300)
    }
    //如果信息填写不完整，弹出输入框  
    if (flag == true) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }  
  },
  formReset: function () {
    console.log('form发生了reset事件')
    var that = this
    that.setData({
      userName: '',
      gender: '',
      age: '',
      height: '',
      weight:'',
      blood_pressure: '',
      address:'',
      abnormality: ''
    })
  }
})