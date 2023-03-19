// pages/radioDemo/radioDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: "",
    list: [
      {
        id: 0,
        name: "苹果",
        value: "apple"
      },
      {
        id: 1,
        name: "香蕉",
        value: "banana"
      },
      {
        id: 2,
        name: "葡萄",
        value: "grape"
      }
    ],
    checkedList: []
  },
  handleChange(e) {
    // console.log(e);
    let gender = e.detail.value;
    this.setData({
      gender
    });
  },
  handleItemChange(e) {
    // console.log(e)
    // 1. 获取被选中复选框的值
    const checkedList = e.detail.value;
    // 2. 进行赋值
    this.setData({
      checkedList
    })
  }

})