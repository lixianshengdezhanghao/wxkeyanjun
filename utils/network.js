//获取相关内容
var app = getApp();

function login() {
  return new Promise((resolve, reject) => wx.login({
    success: resolve,
    fail: reject,
    
  }))
}

function getOpenID() {
  return login().then(res => new Promise((resolve, reject) =>
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/getwechat',
      data: {
        code: res.code,
      },
      success: resolve,
      fail: reject
    })
  ))
}

function getLoginInfo() {
  return getOpenID().then(res => new Promise((resolve, reject) => {
    app.globalData.openID = res.data.openID
    wx.request({
      url: 'https://firmiana.ncpsb.org/weprogram/login',
      data: {
        openID: res.data.openID,
      },
      success: resolve,
      fail: reject,
      complete:function(res){
        console.log('getLoginInfo,res',res)
      }
    })
  }
  ))
}

// function getUnionID(){
//   return login().then(res => new Promise((resolve, reject) =>
//     wx.request({
//       url: 'https://firmiana.ncpsb.org/weprogram/login',
//       data: {
//         code: res.code,
//       },
//       success: resolve,
//       fail: reject
//     })
//   ))
// }
module.exports = {
  getOpenID: getOpenID,
  getLoginInfo: getLoginInfo,
  login:login
}