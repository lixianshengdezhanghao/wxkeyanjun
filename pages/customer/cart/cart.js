// pages/cart/cart.js
var app=getApp();
Page({
  onLoad:function(options){
  },
  onShow(){

   wx.getStorageSync('hasList')
   var l = app.cart.getList();
   console.log('cart页加载时获取到的缓存carts')
   console.log(l)
   for (var i = 0; i < l.length; i++) {
     
     l[i].index = i;
   }
   this.setData({ carts: l 
   });
   this.changeTotal();
   if(this.data.carts.length !=0 || this.data.total != 0 ){
     this.setData({
       hasList:true
     })
   }
   else{
     this.setData({
       hasList:false
     })
   }
 },
  data: {
    total: 0,
    carts:[],   
    index:0,           // 购物车列表
    hasList: false,          // 列表是否有数据
    selectAllStatus: true ,  // 全选状态，默认全选,
    healthAssess:'',
    riskPrediction:'',
    prognosisPrediction:''
  },
  changeTotal: function () {
    let l = this.data.carts;
    let t = 0;
    console.log('改变价格当前carts')
    console.log(l)
    console.log(l.length)
    for (let i = 0; i < l.length; i++) {
      if (l[i].selected) {//排除删除选项
        t += l[i].price * l[i].num;
      }
    }
    this.setData({ 
      total: t 
    });
    console.log('total')
    console.log(this.data.total)
  },
  changeNum: function (e) {
    var t = e.currentTarget.dataset.type;
    var index = e.currentTarget.dataset.index;
    var re = this.data.carts[index].num + parseInt(t);
    if (re < 100 && re > 0) {
      var key = "carts[" + index + "].num";
      var obj = {}; obj[key] = re;
      this.setData(obj);
      this.changeTotal();
      app.cart.num(this.data.carts[index].supplyno, obj[key]);
    }
  },
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    console.log(e)
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.changeTotal();
    app.cart.select(index);
    // wx.setStorageSync('carts',this.data.carts)
    // var dic = wx.getStorageSync('carts') || {};
    // console.log('dic')
    // console.log(dic)
    // wx.setStorageSync('carts', dic);
    // console.log('最后的carts')
    // console.log(wx.getStorageSync('carts'))
    // var dic = wx.getStorageSync('carts') || {};
    // console.log('改变选择里的dic')
    // console.log(dic)
    // var i = 0;
    // for ( var item in dic){
    //   if( i == index){ 
    //     const selected = dic[item].selected;
    //     dic[item].selected = !selected;
    //   }
    //   i += 1;
    // }
    // console.log('dic')
    // console.log(dic)
    // var carts = dic
    // console.log('将dic赋值给carts')
    // console.log(carts)
    // this.setData({
    //   carts:dic
    // })
    // wx.setStorageSync('carts', dic);
    // var carts = this.data.carts;
    // console.log()
    
    console.log('选择改变后carts:')
    console.log(this.data.carts)
    console.log('改变选择后去缓存carts')
    console.log(wx.getStorageSync('carts'))
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.changeTotal();
    wx.setStorageSync('carts', this.data.carts)
  },
  deleteList: function (e) {
    console.log('删除')
    console.log('当前carts')
    console.log(this.data.carts)
    var index = e.currentTarget.dataset.index;
    var sno =this.data.carts[index].supplyno;
    // var carts = this.data.carts
    // carts.splice(index,1)
    // this.setData({
    //   carts: carts
    // })
    var key1 = "carts[" + index + "].del";
    var key2 = "carts[" + index + "].selected";
    var obj = {};
    obj[key1] = true;
    obj[key2] = false;
    this.setData(obj);
    console.log('本函数splice删除后的全局carts')
    console.log(this.data.carts)
    this.changeTotal(); 
    var remove = app.cart.remove(sno);
    console.log('remove 返回的carts')
    console.log(remove)
    if (this.data.carts.length == 0) {                  // 如果购物车为空
      this.setData({
        hasList: false              // 修改标识为false，显示购物车为空页面
      });
      wx.setStorageSync('hasList', this.data.hasList)
      console.log('标识haslist')
      console.log(wx.getStorageSync('hasList'))
    } else {                              // 如果不为空
      this.changeTotal();           // 重新计算总价格
    }
  },
  // deleteList(e) {
  //   const index = e.currentTarget.dataset.index;
  //   var dic = wx.getStorageSync('carts') || {};
  //   var sno = this.data.carts[index].supplyno;
  //   console.log('删前的carts')
  //   console.log(this.data.carts)
  //   console.log('删除函数dic')
  //   console.log(dic)
  //   console.log(sno)
  //   console.log(sno in dic)
  //   for ( var i in dic){
  //   if (sno ==  dic[i].supplyno) {
  //     let carts = this.data.carts;
  //     carts.splice(index, 1);              // 删除购物车列表里这个商品
  //     this.setData({
  //       carts: carts
  //     });
  //     console.log('删除后的当前页面的cart')
  //     console.log(this.data.carts)
  //     delete dic[i];
  //     wx.setStorageSync('carts', dic);
  //     console.log('删除后的总cart缓存')
  //     console.log(wx.getStorageSync('carts'))
  //   }
  //   }
  //   if (!this.data.carts.length) {                  // 如果购物车为空
  //     this.setData({
  //       hasList: false              // 修改标识为false，显示购物车为空页面
  //     });
  //   } else {                              // 如果不为空
  //     this.changeTotal();           // 重新计算总价格
  //   }
  // }
})