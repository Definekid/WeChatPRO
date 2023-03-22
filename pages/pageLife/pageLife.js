// pages/pageLife/pageLife.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 发送异步请求来初始化页面
    console.log("onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("OnReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("OnShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("OnHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   * 也是可以通过点击超链接来演示
   * 
   */
  onUnload() {
    console.log("OnUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 页面的数据或者效果重新刷新
    console.log("onPullDownRefresh");

  },

  /**
   * 页面上拉触底事件的处理函数
   * 需要让页面出现上下滚动才行
   */
  onReachBottom() {

    // 上拉加载下一页数据
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log("onShareAppMessage");
  },

  /*
    页面滚动才会触发
  */
  onPageScroll() {
    console.log("onPageScroll");
  },

  /*
    页面尺寸发生变化时响应
    小程序发生横竖屏切换时触发
  */
  onResize() {
    console.log("onResie");
  },

  /** 
   * 1. 必须要求当前页面 也是tabber页面
   * 2. 点击自己的tab Item时才触发
   */
  onTabItemTab() {
    console.log("onTabItemTab")
  }
})