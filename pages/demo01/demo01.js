// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },
  // 输入框的input事件的执行逻辑
  handleinput(e) {
    // console.log(e.detail.value),
    this.setData({
      num: e.detail.value
    })
  },

  // 加 减 按钮的事件
  handletap(e) {
    // 1. 获取自定义属性 operation
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:  parseFloat(this.data.num) + operation
    })
 
  }
})