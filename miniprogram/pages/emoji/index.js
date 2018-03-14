var plugin = requirePlugin("core")
Page({
  data: {
    text: '[微笑]你好'
  },
  onLoad: function() {
    console.log(plugin);
    //plugin.emoji.parse('123')
  },
  bindMsgInput: function (e) {
    this.setData({ text: e.detail.value })
  }
})