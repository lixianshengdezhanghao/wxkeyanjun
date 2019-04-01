// pages/laboratory/laboratory.js
Page({

  data: {
    inputShowed: false,
    inputVal: "",
    search: {
      searchValue: '',
      showClearBtn: false
    },
    searchResult: [],
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
      {
        id: "breast",
        btnName: '乳腺',
        src: '/images/customer/lab/breast.png',
        bgColor: '#cca4e3',
      },
      {
        id: "Prostate",
        btnName: '前列腺',
        src: '/images/customer/lab/Prostate.png',
        bgColor: '#4c8dae',
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
        id: "breast",
        theme: '乳腺癌风险预测',
        content: '乳腺癌风险预测的内容乳腺癌风险预测的内容乳腺癌风险预测的内容',

        bkcolor: '#cca4e3',
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
    keyWords: ['123', '1', '3', '45', '5', '25'],
    keywordsBox: [],
    num: 1,
    show: true,
    showText:"收起"
  },

  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
    var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
    var scroll_height = this.data.scroll_height;
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth - 552
    })
  },
  toDetail: function (e) {
    console.log('跳转到详情页')
    console.log(e)
    wx.navigateTo({
      url: '../lab_detail/lab_detail?theme=' + e.currentTarget.dataset.theme + '&content=' + e.currentTarget.dataset.content,
    })
  },
  searchActiveChangeinput: function (e) {
    const val = e.detail.value;
    this.setData({
      'search.showClearBtn': val != '' ? true : false,
      'search.searchValue': val
    })
  },
  searchActiveChangeclear: function (e) {
    this.setData({
      'search.showClearBtn': false,
      'search.searchValue': ''
    })
  },
  focusSearch: function () {
    if (this.data.search.searchValue) {
      this.setData({
        'search.showClearBtn': true
      })
    }
  },
  // searchSubmit: function () {
  //   const val = this.data.search.searchValue;
  //   if (val) {
  //     const that = this,
  //       app = getApp();
  //     wx.showToast({
  //       title: '搜索中',
  //       icon: 'loading'
  //     });
  //     wx.request({
  //       url: app.globalData.API_URL + 'searchTeam',
  //       data: {
  //         keywords: val,
  //         user_id: app.globalData.myInfo.user_id
  //       },
  //       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //       // header: {}, // 设置请求的 header
  //       success: function (res) {
  //         // success
  //         let searchResult = res.data.data;
  //         const len = searchResult.length;
  //         for (let i = 0; i < len; i++) {
  //           searchResult[i]['team_avator'] = app.globalData.STATIC_SOURCE + searchResult[i]['team_avator'];
  //         }
  //         that.setData({
  //           searchResult: searchResult,
  //           'search.showClearBtn': false,
  //         })
  //       },
  //       fail: function () {
  //         // fail
  //       },
  //       complete: function () {
  //         // complete
  //         wx.hideToast();
  //       }
  //     })
  //   }
  // },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
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
  }
})