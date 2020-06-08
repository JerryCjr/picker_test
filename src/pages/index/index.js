Page({
  /**
   * 页面的初始数据
   */
  data: {
    initObj: {
      areaCode: '110102' // 北京西城
      // areaCode: '371121' // 山东省-日照市- 五莲县
      // areaCode: '120104' // 天津市南开区
    }
  },
  resolve(e) {
    this.setData({
      areaShow: e.detail.areaShow
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    console.log('onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},

  customData: {}
});
