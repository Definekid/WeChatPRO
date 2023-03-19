// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // html:"<img alt=\" \" src=\"https://img.cnphotos.net/202303/16/lioncitynature20230316-07.jpg\" class=\"\" original=\"https://img.cnphotos.net/202303/16/lioncitynature20230316-07.jpg\" style=\"display: inline;\">"
    html: [
      {
        // 1. div标签
        name: "div",
        // 2. 标签上有什么属性
        attrs: {
          class: "my_div",
          style: "color:red"
        },
        // 子节点children要接受的数据类型和nodes第二种渲染方式的数据类型一致
        children: [
          {
            name: "p",
            attrs: {},
            // 文本
            children: [{
              type: "text",
              text: "HELLO"
            }]
          }

        ]
      }
    ]
  },
})