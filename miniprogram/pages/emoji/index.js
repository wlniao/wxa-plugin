var plugin = requirePlugin("core")
Page({
  data: {
    text: ''
  },
  onLoad: function() {
    console.log(plugin);
    //plugin.emoji.parse('123')
  },
  bindMsgInput: function (e) {
    this.setData({ text: e.detail.value })
  }
})