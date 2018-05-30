// index.js
var num = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://llm2isay.qcloud.la/list.php',
      data:{
        number:num
      },
      success: function (res) {
        that.setData({
          array: res.data
        })
      }
    })
  },

  // 携带 id 跳转
  short:function (e) {
    var id = e.target.id
    wx.navigateTo({
      url: '../article?dataid=' + id
    })
  },

  // 跳转
  jump: function (e) {
    wx.navigateTo({
      url: '../add'
    })
  },

  // 到底部更新
  onReachBottom: function (){
    var that = this
    num = num + 5
    wx.request({
      url: 'https://llm2isay.qcloud.la/list.php',
      data: {
        number: num
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function (res) {
        that.setData({
          array: res.data
        })
      }
    })
  }
})