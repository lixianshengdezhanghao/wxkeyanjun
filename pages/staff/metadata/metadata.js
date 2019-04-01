// pages/metadata/metadata.js
var app = getApp();
Page({
  data: {
    list: [
      {
        id: 'sample',
        name: 'Sample',
        open: false,
        pages: ['AddSample', 'ShowSample']
      },
      {
        id: 'experiment',
        name: 'Experiment',
        open: false,
        pages: ['AddExperiment', 'ShowExperiment']
      }],
      abc:123
  },
  //点击按钮跳转页面
  toindex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  onLoad:function(){
    this.setData({
      content: app.globalData.content.staff_metadata_metadata
    })
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});
