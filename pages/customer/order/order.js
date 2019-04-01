var app=getApp();
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders:[]
  },
  onLoad() {
    var l = app.cart.getList();
    console.log('order页面加载时的carts')
    console.log(l)
    for (var i = 0; i < l.length; i++) {
      if(l[i].selected == false){
        var shan=l.splice(i,1)
        console.log(shan)
        console.log('删除后的l')
        console.log(l)
      }
    }
    this.setData({
      orders: l,
    });
    console.log('修改后的orders')
    console.log(this.data.orders)
  },

  onReady() {
    this.getTotalPrice();
  },
  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },
  getTotalPrice() {
    let orders = this.data.orders;
    console.log('totalprice函数的orders')
    console.log(orders)
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      if( orders[i].selected){
      total += orders[i].num * orders[i].price;}
    }
    this.setData({
      total: total
    })
    console.log('total')
    console.log(this.data.total)
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '待写',
      text: 'center',
      complete() {
        wx.navigateTo({
          url: '../item/item'
        })
      }
    })
  }
})