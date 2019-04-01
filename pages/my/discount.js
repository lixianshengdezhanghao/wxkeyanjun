var app = getApp();
Page({

  data: {
    imgList: []
  },


  onLoad: function (options) {
    var that = this
    var content = app.globalData.content.my_discount
    // var imgList = []
    // var baseurl = 'https://firmiana.ncpsb.org/static/we/discounts/'
    // for(var i=1;i<10;i++){
    //   var tail = '0.'+ i +'.png'
    //   var count = i + '折'
    //   var tempurl = baseurl + tail
    //   var sub = {}
    //   sub.url = tempurl
    //   sub.count = count
    //   imgList.push(sub)
      
    // }
    that.setData({
      content: content,
      imgList: content.imgList
    })
    console.log('imgList', that.data.imgList)
  },
  
  previewImage: function (e) {
    console.log('img e',e)
    console.log(e.target.dataset.src)
      var current = e.target.dataset.src;
      var urls = []
    for (var i=0;i<this.data.content.imgList.length;i++){
      urls.push(this.data.content.imgList[i].url)
    }
      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: urls  // 需要预览的图片http链接列表
      })
  },
  saveImage:function(e){
    wx.getImageInfo({
      src: e.target.dataset.src,
      success:function(res){
        console.log('res.path    ',res.path)
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success(result) {
            console.log('result   ',result)
          }
        })

      }
    })
  }
   
  


})