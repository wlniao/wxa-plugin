var emojis = require("./data.js");
Component({
  data: {
    emojiShow: []
    ,
    emojiText: ''
  },
  attached: function () {
    var list = []
    for (var i in emojis) {
      list.push({ class: "emoji", node: 'emoji', icon: emojis[i], txt:i })
    }
    this.setData({ emojiShow: list })
  },
  properties: {
    text: {
      type: String,
      value: '',
      observer: function (str, oStr) {
        this.setData({ emojiText: str })
      }
    }
  },
  methods: {
    onTap: function (e) {
      let input = '[' + e.currentTarget.dataset.txt + ']'
      // detail对象，提供给事件监听函数
      let myEventDetail = { input: input, value: this.data.emojiText + input, oldString: this.data.emojiText }
      // 触发事件的选项
      let myEventOption = {}
      this.setData({ emojiText: this.data.emojiText + input })
      this.triggerEvent('tap', myEventDetail, myEventOption)
      this.triggerEvent('input', myEventDetail, myEventOption)
    },
    onEmpty: function (e) {
    }
  }
})