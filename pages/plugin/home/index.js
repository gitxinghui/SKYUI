// pages/plugin/home/index.js
const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [
      {
        title: '全局拖拽盒子',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/draw/index'
      },
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/plugin' + e.currentTarget.dataset.url
      })
    },
  }
});