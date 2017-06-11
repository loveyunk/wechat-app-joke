var page = "4";
// var maxResult = 5; // 每页最大数
var url = "https://route.showapi.com/";
var id = "40009";
var sign = "b476dd03af824cb28379104c3efa4914";

// 请求数据
function getList(that, maxResult, type) {

  that.setData({
    hidden: false
  });

  wx.request({
    url: url + type,
    data: {
      showapi_sign: sign,
      showapi_appid: id,
      page: page,
      maxResult: maxResult+""
    },
    method: "GET",
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      var data = res.data.showapi_res_body;
      // var allPages = data.allPages; // 总页数
      // console.log(res.data);
      // console.log(data);
      // console.log(data.allPages);
      var list = that.data.list;
      for (var i = 0; i < maxResult; i++) {
        list.push(data.contentlist[i]);
      }
      that.setData({
        list: list
      });

      page++;

      that.setData({
        hidden: true
      });
    }
  })
}

function setScrollHeight(that) {
  wx.getSystemInfo({
    success: function (res) {
      console.log(res.windowHeight);
      that.setData({
        scrollHeight: res.windowHeight
      });
    }
  })
}

module.exports = {
  getList,
  setScrollHeight
}