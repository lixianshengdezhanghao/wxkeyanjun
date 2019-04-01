var srvIntroduction = require('../../utils/srvIntroduction.js');
Page({

  data: {
    subType:[],
    title:'',
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      title:options.title
    })

    for (var i in srvIntroduction.data ){
      if( i == that.data.title){
        for (var j in srvIntroduction.data[i] ){
          that.data.subType.push(srvIntroduction.data[i][j].subType)
        }
      }
    }
    that.setData({
      subType: that.data.subType
    })
    console.log('最后', that.data.subType)
  },

  
})