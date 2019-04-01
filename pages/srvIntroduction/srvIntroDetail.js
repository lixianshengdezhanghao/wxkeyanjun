var srvIntroduction = require('../../utils/srvIntroduction.js');
var imageUtil = require('../../utils/imageUtil.js');
var app = getApp();
Page({

  data: {
    subtitle:'',
    title:'',
    // list: [
    //   { theme: '产品定义', },
    //   { theme: '技术原理' ,src:[]},
    //   { theme: '数据分析', },
    //   { theme: '技术优点',  },
    //   { theme: '应用领域', },
    //   { theme: '送样要求',  },
    //   { theme: '参考文献',  }
    // ],
    imagewidth: 0,//缩放后的宽
    imageheight: 0,//缩放后的高
  },

  onLoad: function (options) {
    console.log('options',options)
    var that = this
    var content = app.globalData.content.srvIntroduction_srvIntroDetail
    var list = content.list
    that.setData({
      content: content,
      list: list,
      title: options.title,
      subtitle:options.subtitle
    }) 
    console.log('list',that.data.list)
    //console.log('srvIntroduction.data', srvIntroduction.data)

    // for (var i in srvIntroduction.data[options.title]){
    //   if ( srvIntroduction.data[options.title][i].subType == that.data.subtitle ){
    //     that.setData({
    //       'list[0].content': srvIntroduction.data[options.title][i].productDefinition,
    //       'list[1].content': srvIntroduction.data[options.title][i].technologyPrinciple,
    //       'list[1].src': srvIntroduction.data[options.title][i].img_src,
    //       'list[2].content': srvIntroduction.data[options.title][i].dataAnalysis,
    //       'list[3].content': srvIntroduction.data[options.title][i].technicalAdvantages,
    //       'list[4].content': srvIntroduction.data[options.title][i].applicationField,
    //       'list[5].content': srvIntroduction.data[options.title][i].requirements,
    //       'list[6].content': srvIntroduction.data[options.title][i].reference,
    //     })
    //     break;
    //   }
    // }
    console.log('222', content.srvIntroList[options.title])
    for (var i in content.srvIntroList[options.title]) {
      if (content.srvIntroList[options.title][i].subType == that.data.subtitle) {
        that.setData({
          'list[0].content': content.srvIntroList[options.title][i].productDefinition,
          'list[1].content': content.srvIntroList[options.title][i].technologyPrinciple,
          'list[1].src': content.srvIntroList[options.title][i].img_src,
          'list[2].content': content.srvIntroList[options.title][i].dataAnalysis,
          'list[3].content': content.srvIntroList[options.title][i].technicalAdvantages,
          'list[4].content': content.srvIntroList[options.title][i].applicationField,
          'list[5].content': content.srvIntroList[options.title][i].requirements,
          'list[6].content': content.srvIntroList[options.title][i].reference,
        })
        break;
      }
    }
    console.log('333 list',that.data.list)
  },
  onShow:function(){
    wx.setNavigationBarTitle({
      title: this.data.content.navigationBarTitle,
    })
  },
  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  previewImage: function (e) {
    console.log('img e', e)
    console.log(e.target.dataset.src)
    var current = e.target.dataset.src;
    var  urls = []
    urls.push(current)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },

})