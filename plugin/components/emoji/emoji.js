var emojis = require("./data.js");
Component({
  data: {
    emojiText: []
  },
  attached: function () { },
  properties: {
    text: {
      type: String, 
      value: '',
      observer: function (str, oStr) {
        let list = []
        let reg = new RegExp(/[\'\[]?([^\[\[\]\]]*)[\'\]]?/i)
        let arr = str.split(reg)
        for (let i = 0; i < arr.length; i++) {
          if (arr[i]) {
            let ele = arr[i]
            let obj = { class: "emoji", txt: ele }
            if (emojis[ele]) {
              obj.node = 'emoji'
              obj.icon = emojis[ele]
            } else {
              obj.node = 'text'
            }
            list.push(obj)
          }
        }
        this.setData({ emojiText: list })
      }
    }
  },
})