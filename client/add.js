// add.js
var util = require('/utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",//用户昵称
    imageurl: "",//头像地址
    time: "",
    authorized: false//是否获取用户信息授权
  },

  formSubmit: function (e) {
    var ordertitle = e.detail.value.orderTitle
    var ordercontent = e.detail.value.orderContent
    // 校验输入为非空
    if (ordertitle == "" || ordercontent == "") {
      wx.showModal({
        title: '提示',
        content: '不能为空！'
      })
    } else {
      wx.request({
        url: 'https://llm2isay.qcloud.la/news.php',// 服务器信息
        data: {
          name: this.data.nickName,
          imageurl: this.data.imageUrl,
          time: this.data.time,
          title: ordertitle,
          content: ordercontent,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          wx.navigateTo({
            url: '../index'
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    this.setData({
      time: time
    });  
  },

  getUserInfo: function (e) {
    this.setData({
      nickName: JSON.parse(e.detail.rawData).nickName,
      imageUrl: JSON.parse(e.detail.rawData).avatarUrl,
      authorized: true
    })
  }
})