var app = getApp();
var ServiceType = {
  data: {
    selectedService: [],
  },
  onLoad:function(){
    var that =this
    console.log('servicetype content', app.globalData.content.serviceType_serviceType)
    var content = app.globalData.content.serviceType_serviceType
    that.setData({
      content: content,
      serviceTypeList: content.serviceTypeList
    })
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: this.data.content.navigationBarTitle
    })
  },
  formSubmit: function (e) {
    var totalselectedService = []
    console.log('e',e)
    for( var i=1;i<=4;i++){  // 有四个大title，循环四次，是四个独立的checkbox，只需获取四个独立checkbox的值即可
      var ServiceType = 'ServiceType' + String(i) //wxml中保存的name为ServiceType1，ServiceType2... 所以将其转换成如此
      console.log('e.detail.value.ServiceType', e.detail.value[ServiceType])
      if(e.detail.value[ServiceType] != ''){ // e.detail.value 存的是独立的checkbox中的值，四个独立的CheckBox
        totalselectedService = totalselectedService.concat(e.detail.value[ServiceType])  //不能使用最终selectedService数组来赋值，也不能用push的方式，那样就每次都push进去，不管是否已存在
      }
    }
    app.globalData.selectedService = totalselectedService
    console.log('app.globalData.selectedService', app.globalData.selectedService)
    var flag = true;
    var warn = "";
    console.log('totalselectedService.length', totalselectedService.length)
    if (totalselectedService.length == 0) {
      var flag = true; warn = this.data.content.warn_content
    }
    else {
      flag = false;
    }     
    if (flag == true) {
      console.log('warn', warn)
      wx.showModal({
        title: this.data.content.warn,
        content: warn,
        confirmText: this.data.content.Confirm,
        cancelText: this.data.content.Cancel
      })
    }
      else{
        wx.navigateTo({
          url: '../order/sampleInfo?srvType=' + e.detail.value.srvType,
        })
      }
  }
}

// for (var i = 0; i < serviceTypeList.length; i++) {
//   (function (item) {
//     ServiceType['bindServiceType' + item.id] = function (e) {
//       console.log('item.id',item.id)
//       console.log('e',e.detail.value)
//       this.setData({
//         'item.value' : e.detail.value,
//         'item.checked' : ! 'item.chekced'
//       })
//     }

//   })(serviceTypeList[i])
// }


Page(ServiceType)