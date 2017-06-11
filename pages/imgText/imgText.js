var util = require("../../utils/util.js");

Page({

  data: {
    hidden: true,
    list: [], // 把所有请求到的数据push到一个数组中
    scrollTop: 0,
    scrollHeight: 0
  },

  // 页面加载
  onLoad: function () {

    var that = this;
    // 微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    util.setScrollHeight(that);

    var that = this;
    util.getList(that, 10, "341-2");
  },


  loadMore: function () {
    // console.log("加载更多");
    var that = this;
    util.getList(that, 10, "341-2");
  }

});