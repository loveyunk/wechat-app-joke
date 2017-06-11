var page = 1;
var url = "http://route.showapi.com/958-2";
var id = "40009";
var sign = "b476dd03af824cb28379104c3efa4914";

// 请求gif数据
var getList = function (that) {

  that.setData({
    hidden: false
  });

  wx.request({
    url: url,
    data: {
      showapi_sign: sign,
      showapi_appid: id,
      page: page
    },
    method: "GET",
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      var data = res.data.showapi_res_body;
      // var allPages = data.allPages; // 总页数
      console.log(res.data);
      console.log(data);
      console.log(data.allPages);
      // var list = that.data.list;
      // for (var i = 0; i < maxResult; i++) {
      //   list.push(data.item[i]);
      // }
      that.setData({
        // list: data.item.imgList
      });

      page++;

      that.setData({
        hidden: true
      });
    }
  })
}

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
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    })

    var that = this;
    getList(that);
  },


  loadMore: function () {
    // console.log("加载更多");
    var that = this;
    getList(that);
  }

});