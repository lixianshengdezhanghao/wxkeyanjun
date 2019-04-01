//app.js
var Chinese = require("./utils/Chinese.js")
var English = require("./utils/English.js")

App({
  netWorkData: {
    result: { code: -1, msg: '发起请求失败' }
  },
  onLaunch: function () {
    var that = this
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    console.log('globaldata content',this.globalData.content)
    // wx.setTabBarItem({
    //   index: 0,
    //   text: 'text'
    // })
  },
  onShow:function(){
    console.log('onshow globaldata content', this.globalData.content)

  },
  getUserInfo: function (cb) {
    var that = this
    console.log(this.globalData.userInfo)
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          console.log(res)
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        },
        complete: function (res) {
          console.log(res)
        }
      })
    }
  },
  editTabBar: function () {
    //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
    var curPageArr = getCurrentPages();    //获取加载的页面
    var curPage = curPageArr[curPageArr.length - 1];    //获取当前页面的对象
    console.log('curPageArr', 'curPage', curPageArr, curPage)

    var pagePath = curPage.route;    //当前页面url
    if (pagePath.indexOf('/') != 0) {
      pagePath = '/' + pagePath;
    }
    console.log('pagePath', pagePath)
    if (this.globalData.language == 'English') { var tabBar = this.globalData.tabBar_E}
    else { var tabBar = this.globalData.tabBar_C}
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true;    //根据页面地址设置当前页面状态    
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
    console.log('tabBar', tabBar)
  },
  changeStep: function (i) {
    var list = wx.getStorageSync('stepImgList')
    console.log('change函数获取的list')
    console.log(list)
    if (!list[i].open) {
      list[i].name += '-active',
        list[i].open = true
    }
    wx.setStorageSync('stepImgList', list)
    console.log('改变后的缓存')
    console.log(wx.getStorageSync('stepImgList'))
  },
  cart: {
    key: "carts",
    ref: "",
    add: function (p) {
      console.log('p')
      console.log(p)
      var re = false;
      if (p.supplyno && p.price && p.name && p.num) {
        var dic = wx.getStorageSync(this.key) || {};
        console.log('add函数dic')
        console.log(dic)
        console.log('p.supplyno in dic')
        console.log(p.supplyno in dic)
        if (p.supplyno in dic) {
          console.log('if')
          dic[p.supplyno].num += p.num;
        } else {
          console.log('else')
          dic[p.supplyno] = { supplyno: p.supplyno, name: p.name, price: p.price, num: p.num, selected: true, img: p.img, healthAssess: p.healthAssess, riskPrediction: p.riskPrediction, prognosisPrediction: p.prognosisPrediction }
          console.log(dic)
        }
        wx.setStorageSync(this.key, dic);
        console.log('加到购物车后缓存到的carts')
        console.log(wx.getStorageSync(this.key))
        re = true;
      }
      return re;
    },
    exist: function (sno) {
      var re = false;
      var dic = wx.getStorageSync(this.key) || {};
      if (sno in dic) {
        re = true;
      }
      return re;
    },
    remove: function (sno) {
      var dic = wx.getStorageSync(this.key) || {};
      console.log('删除函数dic')
      console.log(dic)
      console.log('取缓存carts')
      console.log(wx.getStorageSync(this.key))
      console.log(sno)
      console.log(sno in dic)
      for (var i in dic) {
        if (sno == dic[i].supplyno) {
          console.log('进入删除判断')
          delete dic[i];
          console.log('删除后的dic')
          console.log(dic)
          wx.setStorageSync(this.key, dic);
        }
      }
      console.log('删除后的carts')
      console.log(wx.getStorageSync(this.key))
      return wx.getStorageSync(this.key);
    },
    select: function (index) {
      var dic = wx.getStorageSync(this.key) || {};
      var i = 0;
      for (var item in dic) {
        if (i == index) {
          const selected = dic[item].selected;
          dic[item].selected = !selected;
        }
        i += 1;
      }
      console.log('select函数dic')
      console.log(dic)
      wx.setStorageSync(this.key, dic);
      console.log('select完的缓存carts')
      console.log(wx.getStorageSync(this.key))
    },
    getNum: function () {
      var n = 0;
      var dic = wx.getStorageSync(this.key) || {}
      for (var i in dic) {
        n += dic[i].num;
      }
      return n;
    },
    num: function (sno, n) {
      console.log('进入了num函数')
      var dic = wx.getStorageSync(this.key) || {};
      console.log('num函数里的dic')
      console.log(dic)
      console.log('sno')
      console.log(sno)
      console.log(sno in dic)
      for (var i in dic) {
        if (dic[i].supplyno == sno) {
          if (n > 0) {
            dic[i].num = n;
          } else {
            delete dic[i];
          }
          wx.setStorageSync(this.key, dic);
          console.log('改变数目后的carts')
          console.log(wx.getStorageSync(this.key))
        }
      }
    },
    goods: {
      tab: null,
      key: "goods",
      setCache: function (obj) {
        wx.setStorageSync(this.key, obj);
        var vs = app.version;
        wx.setStorageSync(vs.key, vs.current);//设置当前版本号
      },
      getCache: function () {
        return wx.getStorageSync(this.key);
      },
      getByName: function (nm) {
        var p = null;
        var dic = wx.getStorageSync(this.key) || {};
        if (nm in dic) {
          p = dic[nm];
        }
        return p;
      }
    },
    getList: function () {
      var list = [];
      var dic = wx.getStorageSync(this.key);
      console.log('getList函数里的dic')
      console.log(dic)
      for (var p in dic) {
        list.push({ supplyno: dic[p].supplyno, name: dic[p].name, price: dic[p].price, num: dic[p].num, selected: dic[p].selected, healthAssess: dic[p].healthAssess, prognosisPrediction: dic[p].prognosisPrediction, riskPrediction: dic[p].riskPrediction, img: dic[p].img });
      }
      console.log('getList函数里的list')
      console.log(list)
      return list;
    },
    clear: function () {
      wx.removeStorageSync(this.key);
    }
  },

  globalData: {
    language:'English',
    content:'00',
    userInfo: null,
    submitData: [],
    FirmianaInfo: null,
    openID: null,
    Login: false,
    registerInfo: [],
    signImage: '',
    basicinfo: [],
    totalConditionNumber: 0,
    service: '',
    sampleinfo: '',
    TotalConditions: [],
    selectedService: [],
    AnalysisTime: '',
    DataAnalysis: '',
    Address: '',
    projectName: '',
    Price_sampleprepare: 0,
    legalPerson: '',
    projectContacts: '',
    address: '',
    phoneNumber: '',
    postcode: '',
    fax: '',
    solutionAmount:'',
    isRegistered:false,

    tabBar_C: {
      "selectedColor": "#87CEEB",
      "backgroudColor":"#fff",
      "borderStyle": "#ccc",
      "position": "bottom",
      "color": "#9E9E9E",
      "list": [
        {
          "pagePath": "../../metadata/metadata",
          "text": "工作流",
          "iconPath": "/images/metadata_bk.jpg",
          "selectedIconPath": "/images/metadata.png",
          "clas": "menu-item",
          "active": false
        },
        {
          "pagePath": "/pages/staff/expresult/index/conclusions",
          "iconPath": "/images/firmiana_bk.jpg",
          "selectedIconPath": "/images/firmiana.jpg",
          "text": "实验结果",
          "clas": "menu-item",
          "active": true
        },
        {
          "pagePath": "/pages/staff/me/me",
          "iconPath": "/images/user_bk.jpg",
          "selectedIconPath": "/images/user.jpg",
          "text": "我的",
          "clas": "menu-item",
          "active": false
        }
      ]
    },
    tabBar_E: {
      "selectedColor": "#87CEEB",
      "backgroudColor": "#fff",
      "borderStyle": "#ccc",
      "position": "bottom",
      "color": "#9E9E9E",
      "list": [
        {
          "pagePath": "../../metadata/metadata",
          "text": "Workflow",
          "iconPath": "/images/metadata_bk.jpg",
          "selectedIconPath": "/images/metadata.png",
          "clas": "menu-item",
          "active": false
        },
        {
          "pagePath": "/pages/staff/expresult/index/conclusions",
          "iconPath": "/images/firmiana_bk.jpg",
          "selectedIconPath": "/images/firmiana.jpg",
          "text": "Experimental Result",
          "clas": "menu-item",
          "active": true
        },
        {
          "pagePath": "/pages/staff/me/me",
          "iconPath": "/images/user_bk.jpg",
          "selectedIconPath": "/images/user.jpg",
          "text": "Me",
          "clas": "menu-item",
          "active": false
        }
      ]
    },




  }
})

