import {config} from "../config";

class HTTP {
  request({url,method,data={}}) {
      const promise = new Promise((resolve, reject) => {
          wx.request({
              url: config.base_url_api + url,
              data,
              method,
              header: {
                'Content-Type':'jsonp',
              },
              success: function (res) {
                  const statusCode = res.statusCode.toString();
                  if (statusCode.startsWith("2")) {
                    resolve(res.data);
                  } else {
                    this._show_error();
                  }
              },
              fail: function (err) {
                reject(err);
                this._show_error();
              }
          })
      })
      return promise;
  }
  _show_error() {
      wx.showToast({
          title: '网络错误',
          icon: 'none'
      })
  }
}
export {
  HTTP
};