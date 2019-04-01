Page({

  data: {

  },

  onLoad: function (options) {
    var that = this
      console.log(options)
      wx.request({
        url: 'https://firmiana.ncpsb.org/weprogram/experiment/',
        data: {
          'project': options.project,
          'type':options.type
        },
        success(res){
            console.log(res)
          that.setData({
            expNumberList:res.data.data
          })
        }

      })
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id;
    console.log(e)
    wx.navigateTo({
      url: 'expDetail?experiment=' + e.currentTarget.id
    })
  },

})