// pages/component/draw/index.js
const app = getApp();
let GlobalData = app.globalData;
var startPoint;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 初始化距离
    position: {
      type: Object,
      value: {
        left: "650rpx",
        top: "800rpx"
      }
    },
    // 是否显示
    isShow: {
      type: Boolean,
      value: true
    },
    // 位移特效
    dragAnimation: {
      type: String,
      value: 'dragLinear'
    },
    // 滑动范围
    translatePage: {
      type: Number,
      value: 1, // 1: 全屏，2：上下，3：左右
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    safeArea: null
  },
  attached() {
    let safeArea = GlobalData.systemInfo.safeArea || null;
    if (safeArea) {
      this.setData({
        safeArea
      });
    }
  },
  detached() {
    // 在组件实例被从页面节点树移除时执行
  },
  pageLifetimes: {
    show() {
      let safeArea = this.data.safeArea || null;
      this.setData({
        position: this.data.position
      });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goHome () {
      wx.reLaunch({
        url: '/pages/ecjia-store/ecjia'
      })
    },
    setPosition(position) {
      wx.setStorage({
        key: "homeDrag",
        data: position,
      })
    },
    // 拖拽滑动效果
    dragAnimationLinear(e) {
      this.setData({
        dragAnimation: e.detail.value ? 'dragLinear':''
      });
    },
    dragAnimationEaseIn(e) {
      this.setData({
        dragAnimation: e.detail.value ? 'dragEaseIn':''
      });
    },
    dragAnimationEaseOut(e) {
      this.setData({
        dragAnimation: e.detail.value ? 'dragEaseOut':''
      });
    }
  }
})