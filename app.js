// app.js
App({

    //   1. 应用第一次启动就会触发的事件    
    onLaunch() {
        // 在应用第一次启动的时候 获取用户的个人信息
        console.log("onLaunch");


    },

    // 2. 应用被用户看到
    onShow() {
        // 当界面的数据或页面效果 重置
        console.log("onShow");
    },

    // 3. 应用被隐藏了
    onHide() {
        // 暂停 或者 清除 定时器
        console.log("onHide");
    },

    // 4. 应用代码发生报错
    onError(err) {
        // 在应用发生代码报错的时候，收集用户的错误信息，通过异步请求， 将错误信息发送到后台
        console.log(err);
    },

    // 5. 页面找不到就被触发
    //   应用在第一次启动的时候，如果找不到第一个入口界面 才会触发
    //   在onLaund 使用js跳转页面 不能触发
    onPageNotFound() {
        // 如果页面不存在了 通过js的方式来重新跳转页面 重新跳转到第二个首页
        // 不能跳转到tabbar页面 导航组件类似
        wx.navigateTo({
            url: 'pages/radioDemo/radioDemo',
          
        });
        console.log("onPageNotFound");
    }

})
