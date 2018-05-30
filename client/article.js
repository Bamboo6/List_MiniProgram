// article.js
var list,id
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
    id = options.dataid
    wx.request({
      url: 'https://llm2isay.qcloud.la/content.php',
      data: {
        id: id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        list = res.data
        that.setData({
          article: res.data
        })
      }
    })
  },

  // 分享页面
  onShareAppMessage: function () {
    return {
      title: list.title,
      desc: list.content,
      path: 'article?dataid='+id
    }
  }
})