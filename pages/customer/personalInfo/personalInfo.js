const AV = require('../../../utils/av-weapp.js');
var util = require('../../../utils/util.js');
var WxNotificationCenter = require("../../../WxNotificationCenter/WxNotificationCenter.js");
var app = getApp();

Page({

  data: {
    stepsId: [0,0,1,2],
    userinfo: {
      phoneNumber:'',//电话号码
      code:[],//项目号
      name: '',//用户姓名
      gender: '',//性别
      birthDate: '',//出生日期
      date:'',//填写数据日期
      bloodType:'',//血型
      address: '',//地址
      height: '',//身高
      weight: '',//体重
      pulseRate:'',//脉率
      breathingRate:'',//呼吸频率
      blood_pressure1: '',//什么血压
      blood_pressure2: '',//数值
      healthStatus:'',//健康状况  数字0是良好 1是一般 2是差
      exeFrequency:'',//锻炼频率
      symptoms:[],//健康状况，是一个数组，里面是多个字符
      eatingHabits:[],//饮食习惯
      smokingSituation:'',//抽烟否
      drinkingFrequency:'',//饮酒
      occupationalExposure:[],
      familyDisease:[],//家族史
      drugAllergy:[],//药物过敏史
      diseaseHist:[],//既往史
      phyExamTime:'',//体检时间
      phyExamSite:'',//体检地址
      abnormality: '',//体检结果
      
    },
    submitTime: '',
    images: [],
    uploadedImages: [],
    imageWidth: getApp().screenWidth / 4 - 10,
    stepImgList: [],
    birthDate: "2016-09-01",
    phyExamTime: "2016-09-01",
    phyExamSite: ['广东省', '广州市', '海珠区'],
    region: ['广东省', '广州市', '海珠区'],
    Gender:[
      { data: '男', checked: false},
      { data: '女',checked: false}
    ],
    HealthStatus: [
      { data: '良好', checked: false },
      { data: '一般', checked: false },
      { data: '差', checked: false }
    ],
    BloodType:[
      { data: 'A', checked: false},
      { data: 'B', checked: false },
      { data: 'O', checked: false },
      { data: 'AB', checked: false },
      { data: 'RH阴', checked: false },
      { data: 'RH阳', checked: false },
    ],
    Symptoms:[
      { data: '无症状', checked: false },
      { data: '头痛', checked: false },
      { data: '头晕', checked: false },
      { data: '心悸', checked: false },
      { data: '胸闷', checked: false },
      { data: '胸痛', checked: false },
      { data: '慢性咳嗽', checked: false },
      { data: '咳痰', checked: false },
      { data: '呼吸困难', checked: false },
      { data: '多饮', checked: false },
      { data: '多尿', checked: false },
      { data: '体重下降', checked: false },
      { data: '乏力', checked: false },
      { data: '关节肿痛', checked: false },
      { data: '视力模糊', checked: false },
      { data: '手脚麻木', checked: false },
      { data: '尿急', checked: false },
      { data: '尿痛', checked: false },
      { data: '便秘', checked: false },
      { data: '腹泻', checked: false },
      { data: '恶心呕吐', checked: false },
      { data: '眼花', checked: false },
      { data: '耳鸣', checked: false },
      { data: '乳房胀痛', checked: false },
    ],
    ExeFrequency:[
      { data: '每天', checked: false },
      { data: '每周一次以上', checked: false },
      { data: '偶尔', checked: false },
      { data: '从不', checked: false },
    ],
    EatingHabits:[
      { data: '荤素均衡', checked: false },
      { data: '荤食为主', checked: false },
      { data: '素食为主', checked: false },
      { data: '嗜盐', checked: false },
      { data: '嗜油', checked: false },
      { data: '嗜糖', checked: false },
    ],
    smoking:'',
    smokeDisabled:true,
    SmokingSituation:[
      { data: '从不吸烟', checked: false },
      { data: '已戒烟', checked: false },
      { data: '吸烟', checked: false },
    ],
    DrinkingFrequency:[
      { data: '从不', checked: false },
      { data: '偶尔', checked: false },
      { data: '经常', checked: false },
      { data: '每天', checked: false },
    ],
    OccupationalExposure:[
      
    ],
    DrugAllergy:[
      { data: '无', checked: false },
      { data: '青霉素', checked: false },
      { data: '磺胺', checked: false },
      { data: '链霉素', checked: false },
    ],
    DiseaseHist:[
      { data: '无', checked: false },
      { data: '高血压', checked: false },
      { data: '糖尿病', checked: false },
      { data: '冠心病', checked: false },
      { data: '慢性阻塞性肺疾病', checked: false },
      { data: '恶性肿瘤', checked: false },
      { data: '结核病', checked: false },
      { data: '肝炎', checked: false },
      { data: '其他法定传染病', checked: false },
      { data: '职业病', checked: false },
    ],
    FamilyDisease:[
      { data: '无', checked: false },
      { data: '高血压', checked: false },
      { data: '糖尿病', checked: false },
      { data: '冠心病', checked: false },
      { data: '慢性阻塞性肺疾病', checked: false },
      { data: '恶性肿瘤', checked: false },
      { data: '结核病', checked: false },
      { data: '肝炎', checked: false },
      { data: '其他法定传染病', checked: false },
      { data: '职业病', checked: false },
      { data: '其他', checked: false },
    ],
  },
  onLoad: function (options) {
    
    var that = this;
    //获取名字和code，用于传递到通知页面
    that.setData({
      code: options.code,
      name: options.name
    })
    console.log('personalInfo 页面option',options)
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
        console.log('缓存的userinfo', that.data.userinfo)
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
          if (invl > 1296000) {
            wx.showModal({
              title: '提示',
              content: '由于距你上次提交时间太长，请修改你的信息，以便更好的服务！',
            })
            console.log('else里面的userinfo', wx.getStorageSync('userinfo'))
            var userinfo = wx.getStorageSync('userinfo')
            userinfo.weight = ''
            userinfo.pulseRate = ''
            userinfo.breathingRate = ''
            userinfo.healthStatus = ''
            userinfo.blood_pressure1 = ''
            userinfo.blood_pressure2 = ''
            userinfo.exeFrequency = ''
            userinfo.eatingHabits = ''
            userinfo.smokingSituation = '' 
            userinfo.drinkingFrequency = ''
            userinfo.smokingSituation = ''
            userinfo.drugAllergy = []
            userinfo.familyDisease = []
            userinfo.diseaseHist = []
            userinfo.name = that.data.name
            that.setData({
              userinfo: userinfo
            })
            console.log('修改后的', userinfo)
          }
          else if (invl > 864000) {
            wx.showModal({
              title: '提示',
              content: '由于距你上次提交时间较长，我们建议你修改你的某些信息，比如血压。',
            })
          }
        }
        var Gender = that.data.Gender, BloodType = that.data.BloodType, HealthStatus = that.data.HealthStatus, Symptoms = that.data.Symptoms,ExeFrequency = that.data.ExeFrequency, EatingHabits = that.data.EatingHabits, SmokingSituation = that.data.SmokingSituation, DrinkingFrequency = that.data.DrinkingFrequency, DrugAllergy = that.data.DrugAllergy, DiseaseHist = that.data.DiseaseHist, FamilyDisease = that.data.FamilyDisease //用于单选或多选框的选中
        // ******************取缓存后，对已经选择的项目自动选中。对象包围数组，遍历，统一处理*****************
        // Gender = JSON.stringify(Gender), BloodType = JSON.stringify(BloodType), ExeFrequency = JSON.stringify(ExeFrequency), EatingHabits = JSON.stringify(EatingHabits), SmokingSituation = JSON.stringify(SmokingSituation), DrinkingFrequency = JSON.stringify(DrinkingFrequency), DrugAllergy = JSON.stringify(DrugAllergy), DiseaseHist = JSON.stringify(DiseaseHist), FamilyDisease = JSON.stringify(FamilyDisease)
        // console.log('Gender', Gender)
        var InfoArr = {Gender, BloodType, ExeFrequency, EatingHabits, SmokingSituation, DrinkingFrequency, DrugAllergy, DiseaseHist, FamilyDisease}
        // console.log('InfoArr', InfoArr)
        // console.log('InfoArr类型', typeof (InfoArr))
        // console.log(Gender)
        // console.log('InfoArr', InfoArr)
        // for (var Arr in InfoArr){ 
        //   console.log('Arr',Arr)
        //   console.log('Arr类型',typeof(Arr))
        //   Arr = JSON.parse(Arr); 
        //   console.log('转换后的Arr', Arr)
        //   for(var i in Arr){
        //       console.log('i',i)
        //       console.log('Arr[i]',Arr[i])
        //   }
        // }


        for (var G in Gender) {
          if (Gender[G].data == that.data.userinfo.gender) {
            Gender[G].checked = true
          }
        }
        for (var BT in BloodType) {
          if (BloodType[BT].data == that.data.userinfo.bloodType) {
            BloodType[BT].checked = true
          }
        } 
        for (var HS in HealthStatus) {
          if (HealthStatus[HS].data == that.data.userinfo.healthStatus) {
            HealthStatus[HS].checked = true
          }
        } 
        for (var Sy in Symptoms) {
          for (var sy in that.data.userinfo.symptoms)
          if (Symptoms[Sy].data == that.data.userinfo.symptoms[sy]) {
            Symptoms[Sy].checked = true
          }
        }
        for (var EF in ExeFrequency) {
          if (ExeFrequency[EF].data == that.data.userinfo.exeFrequency) {
            ExeFrequency[EF].checked = true
          }
        }
        for (var EH in EatingHabits) {
          for (var eH in that.data.userinfo.eatingHabits){
            if (EatingHabits[EH].data == that.data.userinfo.eatingHabits[eH]) {
              EatingHabits[EH].checked = true
            }
          }
        }
        for (var SS in SmokingSituation) {
          if (SmokingSituation[SS].data == that.data.userinfo.smokingSituation) {
            SmokingSituation[SS].checked = true
          }
        }
        for (var DF in DrinkingFrequency) {
          if (DrinkingFrequency[DF].data == that.data.userinfo.drinkingFrequency) {
            DrinkingFrequency[DF].checked = true
          }
        }
        for (var DA in DrugAllergy) {
          for (var dA in that.data.userinfo.drugAllergy ){
            if (DrugAllergy[DA].data == that.data.userinfo.drugAllergy[dA] ) {
              DrugAllergy[DA].checked = true
            }
          }
        }
        console.log('that.data.userinfo.diseaseHist',that.data.userinfo.diseaseHist)
        console.log('imageWidth', that.data.imageWidth)
        for (var DH in DiseaseHist) {
          for (var dH in that.data.userinfo.diseaseHist ){
            if (DiseaseHist[DH].data == that.data.userinfo.diseaseHist[dH] ) {
              DiseaseHist[DH].checked = true
            }
          }
        }

        for (var FD in FamilyDisease) {
          for (var fD in that.data.userinfo.familyDisease){
            if (FamilyDisease[FD].data == that.data.userinfo.familyDisease[fD]) {
              FamilyDisease[FD].checked = true
            }
          }
        } 
        
        that.setData({
          Gender: Gender,
          BloodType: BloodType,
          HealthStatus: HealthStatus,
          Symptoms: Symptoms,
          ExeFrequency: ExeFrequency, 
          EatingHabits: EatingHabits, 
          SmokingSituation: SmokingSituation, 
          DrinkingFrequency: DrinkingFrequency, 
          DrugAllergy: DrugAllergy, 
          DiseaseHist: DiseaseHist, 
          FamilyDisease: FamilyDisease
        })
      }
    })
    that.setData({
      // imageWidth: wx.getSystemInfoSync().windowWidth / 2,
      submitTime: wx.getStorageSync('submitTime')
    })
    wx.getStorage({
      key: 'images',
      success: function (res) {
        that.setData({
          images: res.data
        })
      },
    })
    console.log(this.data.userinfo)
  },
  genderChange: function (e) {
    console.log(e)
    console.log('gender发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      'item.gender': e.detail.value,
      'item.checked': true
    })
    console.log('Gender', that.data.Gender)
  },
  dataChange: function (e) {
    console.log(e)
    console.log('gender发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      'item.gender': e.detail.value,
      'item.checked': true
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindBirthDateChange: function (e) {
    console.log('date发送选择改变，携带值为', e.detail.value)
    this.setData({
      birthDate: e.detail.value
    })
  },
  bindphyExamTimeChange: function (e) {
    console.log('date发送选择改变，携带值为', e.detail.value)
    this.setData({
      phyExamTime: e.detail.value
    })
  },
  radioChange: function (e) {
    console.log(e)
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      'item.data': e.detail.value,
      'item.checked': true
    })
    console.log(that.data.smokeDisabled)
    if (e.detail.value=='吸烟'){
      that.setData({
        smokeDisabled:false
      })
    }
    console.log(that.data.smokeDisabled)
  },
  checkboxChange:function(e){
    console.log(e)
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var index = parseInt(e.currentTarget.dataset.index);
    console.log("index",index)
    var that = this
    that.setData({
      'item.data': e.detail.value,
      'item.checked': true
    })
    console.log(that.data.userinfo)
    var text = [];
    var id = [];
    for (var i = 0; i < e.detail.value.length; i++) {
      var aaa = e.detail.value[i].split(',');
      text = text.concat(aaa[0])
      id = id.concat(aaa[1])
    }
  },
  chooseImage: function () {
    // 选择图片
    var that = this
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
          success() {
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
  delete_img: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index;
    var images = that.data.images;
    images.splice(index, 1);
    that.setData({
      images: images
    });
    wx.setStorage({
      key: 'images',
      data: that.data.images,
      success() {
        console.log()
      }
    })
  },

  formSubmit: function (e) {
    var warn = "";//弹框时提示的内容  
    var flag = true;//判断信息输入是否完整  
    var value = e.detail.value
    console.log(value)
    console.log('form',value)
    //判断的顺序依次是：姓名-性别-年龄-身高-体重-血压-地址-有无异常  
    if (value.name == "") {
      warn = "请填写您的姓名！";
    } else if (value.gender == "") {
      warn = "请选择您的性别！";
    } else if (value.age == "") {
      warn = "请填写您的年龄";
    } 
     else if (value.weight == "") {
      warn = "请填写您的体重";
    } 
    else if (value.blood_pressure == "") {
      warn = "请填写您的血压";
    } else if (value.address == "") {
      warn = "请选择您的地址";
     }
     else if (value.abnormality == "") {
      warn = "请选择体检结果是否有异常";
    } 
     
      var that = this
      wx.setStorage({
        key: 'userinfo',
        data: value
      })
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转  
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
      app.changeStep(3)
      var submittime = util.formatTime(new Date());
      wx.setStorageSync('submitTime', submittime)
      var submittimestamp = Date.parse(new Date());
      submittimestamp = submittimestamp / 1000;
      wx.setStorageSync('submitTimestamp', submittimestamp)
      console.log("当前时间戳为：" + submittimestamp);
      setTimeout(function () {
        wx.showModal({
          title: '提示',
          content: '绑定成功！',
        })
        WxNotificationCenter.postNotificationName("bindNot", { 'code': that.data.code, 'name': that.data.userinfo.name });
        setTimeout(function () {
          wx.navigateTo({
            url: '../bind-succeed/bind-succeed',
          })
        }, 1000)
      }, 300)
    
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
      name: '',
      gender: '',
      birthDate: '',
      bloodtype: '',
      address: '',
      height: '',
      weight: '',
      pulseRate: '',
      breathingRate: '',
      blood_pressure1: '',
      blood_pressure2: '',
      healthStatus: '',
      exeFrequency: '',
      eatingHabits: [],
      smokingSituation: '',
      drinkingFrequency: '',
      familyDisease: [],
      drugAllergy: [],
      diseaseHist: [],
    })
  },
  
})