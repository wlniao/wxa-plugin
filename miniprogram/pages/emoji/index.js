var plugin = requirePlugin("core")
Page({
  data: {
    text: '[微笑]你好'
    ,
    focus: false
    ,
    cursor: 0
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: 'emoji表情插件' })
  },
  bindMsgInput: function (e) {
    this.setData({ text: e.detail.value })
  },
  bindEmojiInput: function (e) {
    this.setData({ text: e.detail.value, cursor: e.detail.value.replace(/11/g, '2').length })
  }
})