//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showMalfunctionView: true,
    showOrderView: false,
    showCorporationView: false,
    date: '2015-2-33',
    topFuncitons:[
      {
        "title":"故障报修",
        "image":"../../images/callme.png",
        "id":"topFunction0",
      },
      {
        "title": "订单列表",
        "image": "../../images/allorder.png",
        "id": "topFunction1",
      },
      {
        "title": "专家咨询",
        "image": "../../images/askme.png",
        "id": "topFunction2",
      },
      {
        "title": "商务合作",
        "image": "../../images/corporation.png",
        "id": "topFunction3",
      }
    ],
    radioOptins:[
      {
        "title":"家庭",
        "isSelected":true
      },
      {
        "title": "单位",
        "isSelected": false
      }
    ],

    orderList:[
      {
        "title": "测试一下，下",
        "time": "29日8点",
        "state": "1"
      },
      {
        "title": "测试一下2",
        "time": "29日8点",
        "state": "12"
      },
      {
        "title": "测试一下3，",
        "time": "29日8点",
        "state": "11"
      },
    ],
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
/**
 * 生命周期函数--监听页面加载
 */
  onLoad: function () {
    
  },


  /**
   * topView被点击
   */
  tapTopViewAction: function(event) {
    var currrentTarget = event['currentTarget'];
    var eventId = currrentTarget.id;
    if (eventId == 'topFunction0') {
      this.submitMalfunction();
    } else if (eventId == 'topFunction1') {
      this.checkOutOrder();
    } else if (eventId == 'topFunction2') {
      this.callForHelp();
    }else {
      this.callForCorporation()
    }
  },



  /**
   * 故障报修
   */
  submitMalfunction: function () {
    this.setData({ 
      showMalfunctionView: true,
      showOrderView: false,
      showCorporationView: false
    });
  },

 /**
   * 查看订单列表
   */
  checkOutOrder: function () {
    this.setData({
      showMalfunctionView: false,
      showOrderView: true,
      showCorporationView: false
    });
  },

  /**
   * 打电话
   */
  callForHelp: function () {
    wx.makePhoneCall({
      phoneNumber: '13966766421'
    })
  },

  /**
   * 商务合作
   */
  callForCorporation: function() {
    this.setData({
      showMalfunctionView: false,
      showOrderView: false,
      showCorporationView: true
    });
  }


})
