// component/tabBar/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toLab(){
      wx.navigateTo({
        url: '/pages/customer/laboratory/laboratory',
      })
    },
    toItme(){
      wx.navigateTo({
        url: '/pages/customer/item/item',
      })
    },
    toMy(){
      wx.navigateBack({
        delta:10,
        url: '/pages/customer/my/my',
      })
    }
  }
})
