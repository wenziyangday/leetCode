const aa = {
  "pages": [//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    //启动页
    {
      "path": "pages/init/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/login/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/login/register", "style": {
        "navigationBarTitleText": "用户注册"
      }
    }, {
      "path": "pages/login/register-success", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/service/service", "style": {
        "navigationBarTitleText": "奇瑞汽金用户服务条款"
      }
    }, {
      "path": "pages/service/privacy", "style": {
        "navigationBarTitleText": "奇瑞汽金隐私政策"
      }
    }, {
      "path": "pages/index/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/changePassword/changePassword", "style": {
        "navigationBarTitleText": ""
      }
    }, {
      "path": "pages/face/index", "style": {
        "navigationBarTitleText": ""
      }
    }, {
      "path": "pages/idCard/index", "style": {
        "navigationBarTitleText": ""
      }
    }, {
      "path": "pages/my/index", "style": {
        "navigationStyle": "custom"
      }
    }, // 个人信息
    {
      "path": "pages/setting/index", "style": {
        "navigationBarTitleText": "个人信息"
      }
    }, // 账号管理
    {
      "path": "pages/management/index", "style": {
        "navigationStyle": "custom", // 隐藏系统导航栏
        "navigationBarTextStyle": "white", // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
        "onReachBottomDistance": 50
      }
    }, // 账号详情
    {
      "path": "pages/manageDetail/index", "style": {
        "navigationBarTitleText": "账号详情"
      }
    }, // 修改密码
    {
      "path": "pages/changePas/index", "style": {
        "navigationBarTitleText": "修改密码"
      }
    }, // 切换经销商
    {
      "path": "pages/dealers/index", "style": {
        "navigationStyle": "custom", // 隐藏系统导航栏
        "navigationBarTextStyle": "white"
        // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
      }
    }, {
      "path": "pages/newLogin/newInven", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/newLogin/newLogin", "style": {
        "navigationBarTitleText": "新登录"
      }
    }, {
      "path": "pages/clockIn/index", "style": {
        "navigationStyle": "custom", "navigationBarTitleText": "签到打卡"
      }
    }, {
      "path": "pages/newLogin/newLogin", "style": {
        "navigationBarTitleText": "新登录"
      }
    }, {
      "path": "pages/newLogin/newIndex", "style": {
        "navigationBarTitleText": "临时首页"
      }
    }, {
      "path": "pages/newLogin/newIndex", "style": {
        "navigationStyle": "custom"
      }
    }, // {
    //   "path": "pages/calendar/index",
    //   "style": {
    //     "navigationStyle": "custom"
    //   }
    // },
    {
      "path": "pages/calendar/index", "style": {
        "navigationBarTitleText": "日历"
      }
    }, {
      "path": "pages/calendar/someoneRecord", "style": {
        "navigationBarTitleText": "下属日历"
      }
    }, // {
    // 	"path": "pages/calendar/createTrip",
    // 	"style": {
    // 		"navigationBarTitleText": "行程创建"
    // 	}
    // },
    {
      "path": "pages/calendar/createTrip", "style": {
        "navigationBarTitleText": "创建行程"
      }
    }, {
      "path": "pages/calendar/createDailyReport", "style": {
        "navigationBarTitleText": "创建日报"
      }
    }, {
      "path": "pages/calendar/updateTrip", "style": {
        "navigationBarTitleText": "行程变更"
      }
    }, //行程 详情页面
    {
      "path": "pages/calendar/tripDetail", "style": {
        "navigationBarTitleText": "行程详情"
      }
    }, //单项行程审批页面
    {
      "path": "pages/calendar/tripItemExa", "style": {
        "navigationBarTitleText": "行程详情"
      }
    }, {
      "path": "pages/calendar/dailyDetail", "style": {
        "navigationBarTitleText": "日报详情"
      }
    }, {
      "path": "pages/calendar/updateDailyReport", "style": {
        "navigationBarTitleText": "日报变更"
      }
    }, // 单项日报审批
    {
      "path": "pages/calendar/dailyItemExa", "style": {
        "navigationBarTitleText": "日报详情"
      }
    }, {
      "path": "pages/clockIn/punchInRecord", "style": {
        "navigationBarTitleText": "打卡记录"
      }
    }, {
      "path": "pages/clockIn/rulePage", "style": {
        "navigationBarTitleText": "打卡规则", "app-plus": {
          "bounce": "none", "titleNView": {
            "buttons": [{
              "text": "打卡记录", "fontSize": "26rpx", "width": "134rpx", "float": "right"
            }]
          }
        }
      }
    }, {
      "path": "pages/test/test-rili", "style": {
        "navigationBarTitleText": "测试日历组件"
      }
    }, // 离线盘点
    {
      "path": "pages/inventory/offlineAfterloan", "style": {
        "navigationBarTitleText": "贷后检查-待执行盘点任务列表", "navigationBarBackgroundColor": "#fff"
      }
    }, // 货后盘点列表
    {
      "path": "pages/inventory/inventoryList", "style": {
        "navigationBarTitleText": "贷后检查-待执行盘点任务列表", "navigationBarBackgroundColor": "#fff"
      }
    }, // 整车盘点
    {
      "path": "pages/inventory/vehicle", "style": {
        "navigationBarTitleText": "整车盘点", "navigationBarBackgroundColor": "#fff", "app-plus": {
          "titleNView": {
            "autoBackButton": "false", "buttons": [{
              "text": "操作方法", "fontSize": "15", "color": "#333333", "float": "right"
            }]
          }
        }
      }
    }, // 合格证盘点
    {
      "path": "pages/inventory/certificate", "style": {
        "navigationBarTitleText": "合格证盘点", "navigationBarBackgroundColor": "#fff", "app-plus": {
          "titleNView": {
            "autoBackButton": "false", "buttons": [{
              "text": "操作方法", "fontSize": "15", "color": "#333333", "float": "right"
            }]
          }
        }
      }
    }, // 展期列表
    {
      "path": "pages/inventory/extensionList", "style": {
        "navigationBarTitleText": "展期申请-待执行盘点任务列表",
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#fff"
      }
    }, // 展期盘点
    {
      "path": "pages/inventory/extensionDetail", "style": {
        "navigationBarTitleText": "展期盘点", "navigationStyle": "custom"
      }
    }, // 操作手册
    {
      "path": "pages/inventory/operation", "style": {
        "navigationBarTitleText": "操作手册", "navigationBarBackgroundColor": "#fff"
      }
    }, // 影像资料
    {
      "path": "pages/inventory/imageInfo", "style": {
        "navigationBarTitleText": "影像资料", "navigationBarBackgroundColor": "#fff"
      }
    }, // 二网盘点
    {
      "path": "pages/inventory/subInventory", "style": {
        "navigationBarTitleText": "整车盘点", "navigationBarBackgroundColor": "#fff", "app-plus": {
          "titleNView": {
            "autoBackButton": "false", "buttons": [{
              "text": "操作方法", "fontSize": "15", "color": "#333333", "float": "right"
            }]
          }
        }
      }
    }, {
      "path": "pages/inventory/viewPicture"
    }, // 挂靠公司选择
    {
      "path": "pages/all_infos/searchLoan", "style": {
        "navigationBarTitleText": "选择挂靠单位", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, // {
    // 	"path": "pages/test/base64"
    // }
    {
      "path": "pages/collection/collectionList", "style": {
        "navigationStyle": "custom", "navigationBarTitleText": "催收任务列表", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/collectDetails", "style": {
        "navigationStyle": "custom", "navigationBarTitleText": "实地催收", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/component/aMap", "style": {
        "navigationBarTitleText": "选择地址", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/collection/GPSinformation", "style": {
        "navigationBarTitleText": "GPS信息详情", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/addCollection", "style": {
        "navigationBarTitleText": "添加催收记录", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/addResults", "style": {
        "navigationBarTitleText": "添加催收记录", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/informationDetails", "style": {
        "navigationBarTitleText": "", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/otherSubmit/annotation", "style": {
        "navigationBarTitleText": "客户标注", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/otherSubmit/manualDeduction", "style": {
        "navigationBarTitleText": "手工扣款", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/otherSubmit/temporaryDeduction", "style": {
        "navigationBarTitleText": "对公入账", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/otherSubmit/appForRetention", "style": {
        "navigationBarTitleText": "留案申请", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/otherSubmit/prepayTrialQuery", "style": {
        "navigationBarTitleText": "提前还款试算", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/otherSubmit/deathReport", "style": {
        "navigationBarTitleText": "死亡提报", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/collection/addCustomer", "style": {
        "navigationBarTitleText": "", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/homeVisit/index", "style": {
        "navigationBarTitleText": "家访", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/homeVisit/performHomeVisits", "style": {
        "navigationBarTitleText": "执行家访", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/homeVisit/submitSuccess", "style": {
        "navigationBarTitleText": "执行家访", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/collection/collectionAudio", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creatCars/creatCars", "style": {
        "navigationBarTitleText": "创建新建", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creatCars/authorizationStatus", "style": {
        "navigationBarTitleText": "电子授权状态", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creatCars/submitComplete", "style": {
        "navigationBarTitleText": "系统预审", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/infoInputIndex", "style": {
        "navigationBarTitleText": "全量信息录入", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/infoInput", "style": {
        "navigationBarTitleText": "全量信息录入", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/businessData/businessIndex", "style": {
        "navigationBarTitleText": "业务数据", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/businessData/newMiddlePage", "style": {
        "navigationBarTitleText": "业务数据", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/businesstrack/businessIndex", "style": {
        "navigationBarTitleText": "", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/businesstrack/businessDetail", "style": {
        "navigationBarTitleText": "业绩明细", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/mortgageCal/calculator", "style": {
        "navigationBarTitleText": "贷款计算器", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/mortgageCal/calculaResult", "style": {
        "navigationBarTitleText": "计算器查询结果",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/mortgageCal/calculaRepay", "style": {
        "navigationBarTitleText": "每月还款计划", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/datamail/mailIndex", "style": {
        "navigationBarTitleText": "资料邮寄", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/loanSettlement/index", "style": {
        "navigationBarTitleText": "客户结清查询", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/loanSettlement/details", "style": {
        "navigationBarTitleText": "客户结清查询明细",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/cluedistrib/cluedistribIndex", "style": {
        "navigationBarTitleText": "线索列表", "navigationStyle": "custom", "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/cluedistrib/cluedistrbDetail", "style": {
        "navigationBarTitleText": "线索详情", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/cluedistrib/cludistSearch", "style": {
        "navigationBarTitleText": "选择销售经理", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/cluedistrib/cludistFeedback", "style": {
        "navigationBarTitleText": "提交反馈", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/incomIndex", "style": {
        "navigationBarTitleText": "进件渠道列表", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/incomInput", "style": {
        "navigationBarTitleText": "进件渠道录入", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/sellerInput", "style": {
        "navigationBarTitleText": "销售方信息录入",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/affiliatInput", "style": {
        "navigationBarTitleText": "挂靠公司信息录入",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/incomIndexmy", "style": {
        "navigationBarTitleText": "进件渠道列表", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/incomMultit", "style": {
        "navigationBarTitleText": "进件渠道录入", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/submitSuccess", "style": {
        "navigationBarTitleText": "进件渠道录入", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/toDoList/toDoList", "style": {
        "navigationBarTitleText": "待办列表", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/todolist/iconfont/iconfont.ttf", "text": "\ue630", "fontSize": "20px", "width": "40px"
            }]
          }
        }
      }
    }, {
      "path": "pages/toDoList/search", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/toDoList/lookDetail", "style": {
        "navigationBarTitleText": "查看详情", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/toDoList/returnComplete", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/dataComple/dataComIndex", "style": {
        "navigationBarTitleText": "资料补传", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/dataComple/viewCustomer", "style": {
        "navigationBarTitleText": "查看客户", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/dataQuery/dataQueryIndex", "style": {
        "navigationBarTitleText": "资料查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/newCarInfo", "style": {
        "navigationBarTitleText": "新车信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/oldCarInfo", "style": {
        "navigationBarTitleText": "二手车信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/detail", "style": {
        "navigationBarTitleText": "查看详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/contractPrinting", "style": {
        "navigationBarTitleText": "合同资料打印", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/supplementInfo", "style": {
        "navigationBarTitleText": "补录信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/myCustomer/myCustomer", "style": {
        "navigationBarTitleText": "我的客户", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/todolist/iconfont/iconfont.ttf", "text": "\ue630", "fontSize": "20px", "width": "40px"
            }]
          }
        }
      }
    }, {
      "path": "pages/myCustomer/searchCustomer", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/myCustomer/searchState", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/orderQuery/orderQuery", "style": {
        "navigationBarTitleText": "订单查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/mortgageCal/calculatSearch", "style": {
        "navigationBarTitleText": "品牌", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/remarks", "style": {
        "navigationBarTitleText": "备注", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/datamail/mailfilln", "style": {
        "navigationBarTitleText": "填写邮寄信息", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/datamail/savelist", "style": {
        "navigationBarTitleText": "保存清单", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/dataQuery/dataDetail", "style": {
        "navigationBarTitleText": "客户详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/dataQuery/dataList", "style": {
        "navigationBarTitleText": "查询结果", "navigationStyle": "custom", "navigationBarTextStyle": "white"
      }
    }, {
      "path": "pages/reportQuery/reportDay", "style": {
        "navigationBarTitleText": "账号列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/reportQuery/reportMonth", "style": {
        "navigationBarTitleText": "账号列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/reportQuery/reportYear", "style": {
        "navigationBarTitleText": "账号列表", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/dataComple/viewSearch", "style": {
        "navigationBarTitleText": "选择开票方", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/dataComple/uploadPictures", "style": {
        "navigationBarTitleText": "选择开票方", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/reportQuery/reportDetail", "style": {
        "navigationBarTitleText": "账号列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/businessData/disapproval", "style": {
        "navigationBarTitleText": "业务数据", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/searchSeller", "style": {
        "navigationBarTitleText": "请选择", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/searchNameOfDrawer", "style": {
        "navigationBarTitleText": "请选择", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/secondNet", "style": {
        "navigationBarTitleText": "请选择", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/searchCars", "style": {
        "navigationBarTitleText": "请选择", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/cluedistrib/cluedistrbDetailTwo", "style": {
        "navigationBarTitleText": "线索详情", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/cluedistrib/cludistComfig", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/vehicleRecycl/vehicleIndex", "style": {
        "navigationBarTitleText": "车辆回收与现场处置",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/vehicleRecycl/vehicleWarrant", "style": {
        "navigationBarTitleText": "车辆回收与现场处置",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/vehicleRecycl/vehicleDisposal", "style": {
        "navigationBarTitleText": "车辆回收与现场处置",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/vehicleRecycl/warrantDetail", "style": {
        "navigationBarTitleText": "车辆回收与现场处置",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/vehicleRecycl/deliveryInfo", "style": {
        "navigationBarTitleText": "车辆回收与现场处置",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/vehicleRecycl/groupVehicles", "style": {
        "navigationBarTitleText": "车辆回收与现场处置",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/vehicleRecycl/vehicleComfig", "style": {
        "navigationBarTitleText": "车辆回收与现场处置",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/pdfView/lookPDF", "style": {
        "navigationBarTitleText": "文件预览", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/imageUploads", "style": {
        "navigationBarTitleText": "影像资料上传", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/reportQuery/reportDetailDm", "style": {
        "navigationBarTitleText": "信息详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/submitComplete", "style": {
        "navigationBarTitleText": "全量信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/savePDF/savePDF", "style": {
        "navigationBarTitleText": "保存核准通知书", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "预览", "fontSize": "15", "width": "45px"
            }]
          }
        }
      }
    }, {
      "path": "pages/orderQuery/orderList", "style": {
        "navigationBarTitleText": "订单列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/orderQuery/orderDetail", "style": {
        "navigationBarTitleText": "订单详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/checkInfo", "style": {
        "navigationBarTitleText": "核对信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/incomChannel/auditSubmis", "style": {
        "navigationBarTitleText": "进件渠道审核", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/vehicleRecycl/idCardCompar", "style": {
        "navigationBarTitleText": "车辆回收与现场处置", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/sendAddress", "style": {
        "navigationBarTitleText": "送达地址", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/payTo", "style": {
        "navigationBarTitleText": "付款至", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/incomChannel/incomSubord", "style": {
        "navigationBarTitleText": "进件渠道列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/imageUps", "style": {
        "navigationBarTitleText": "影像资料上传", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/searchprdName", "style": {
        "navigationBarTitleText": "产品名称", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/incomChannel/incomExamine", "style": {
        "navigationBarTitleText": "进件渠道审核", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/dataComple/dataComfig", "style": {
        "navigationStyle": "custom", "navigationBarTitleText": "提交结果", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/savePDF/gammaDataPDF", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/incomChannel/incomMaintain", "style": {
        "navigationBarTitleText": "进件渠道维护", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, //推送消息列表
    {
      "path": "pages/pushMsg/myMsg", "style": {
        "navigationBarTitleText": "我的消息", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/my/about", "style": {
        "navigationBarTitleText": "版本号", "enablePullDownRefresh": false, "disableScroll": true
      }
    }, {
      "path": "pages/setting/avatar", "style": {
        "navigationBarTitleText": "头像修改", "navigationBarBackgroundColor": "#000000"
      }
    }, {
      "path": "pages/incomChannel/incomSearch", "style": {
        "navigationBarTitleText": "列表查询", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/components/uploadPictures", "style": {
        "navigationBarTitleText": "图片上传", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomChannel/components/inUploadPictures", "style": {
        "navigationBarTitleText": "图片上传", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, //###########车型库项目开始#######################
    {
      "path": "pages/riskManage/riskManage", "style": {
        "navigationBarTitleText": "风险管理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/acquisitionData/acquisitionIndex", "style": {
        "navigationBarTitleText": "车价采集任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/acquisitionData/handVehicle", "style": {
        "navigationBarTitleText": "整车采集任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/acquisitionData/result", "style": {
        "navigationBarTitleText": "整车采集任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/raiseQuestions/raiseIndex", "style": {
        "navigationBarTitleText": "问题提报", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/raiseQuestions/result", "style": {
        "navigationBarTitleText": "问题提报", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/queryQuestions/queryIndex", "style": {
        "navigationBarTitleText": "问题查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/queryQuestions/queryDetails", "style": {
        "navigationBarTitleText": "查询结果", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/acquisitionData/handJacket", "style": {
        "navigationBarTitleText": "上装采集任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/queryQuestions/queryJacket", "style": {
        "navigationBarTitleText": "查询结果", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/acquisitionData/queryHistory", "style": {
        "navigationBarTitleText": "采集历史查询", "enablePullDownRefresh": false
      }
    }, //###########车型库项目结束#######################

    //###########风险作业平台项目开始#######################
    {
      "path": "pages/riskTask/riskCreate/riskWarningList", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/riskTask/riskCreate/index", "style": {
        "navigationBarTitleText": "人工风险预警提报（零售）", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskCreate/LoanApplicationInfo", "style": {
        "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskCreate/completePages", "style": {
        "navigationBarTitleText": "人工风险预警详情（零售）", "enablePullDownRefresh": false, "app-plus": {
          "popGesture": "none"
          //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/riskTask/riskCreate/riskRetail", "style": {
        "navigationBarTitleText": "风险管理（零售）", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskWholesale/index", "style": {
        "navigationBarTitleText": "人工风险预警提报（批售）", "enablePullDownRefresh": false, "app-plus": {
          "popGesture": "none"
          //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/riskTask/riskWholesale/riskReturn", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskWholesale/riskSearch", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskTaskTodo", "style": {
        "navigationBarTitleText": "风险预警", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/riskWholesale", "style": {
        "navigationBarTitleText": "风险管理(批售)", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/riskWarningList", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskFeedback/index", "style": {
        "navigationBarTitleText": "经销商排查反馈(批售)", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskFeedback/toDo/detail", "style": {
        "navigationBarTitleText": "经销商反馈(待办)", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskFeedback/done/detail", "style": {
        "navigationBarTitleText": "经销商反馈(已办)", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskAppeal/afEvAppeal", "style": {
        "navigationBarTitleText": "AF客户/事件申诉", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskAppeal/afcustAppeal", "style": {
        "navigationBarTitleText": "AF客户申诉", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskAppeal/afcustSearch", "style": {
        "navigationBarTitleText": "AF客户申诉", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/notice/index", "style": {
        "navigationBarTitleText": "公告", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/notice/noticeDetail", "style": {
        "navigationBarTitleText": "消息详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskAppeal/selectNext", "style": {
        "navigationBarTitleText": "AF申诉提交选择下一处理人", "navigationStyle": "custom"
      }
    }, //###########风险作业平台项目结束#######################
    {
      "path": "pages/creatCars_new/creatCars", "style": {
        "navigationBarTitleText": "创建新建", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creatCars_new/authorizationStatus", "style": {
        "navigationBarTitleText": "电子授权状态", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creatCars_new/submitComplete", "style": {
        "navigationBarTitleText": "系统预审", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList/reportImg", "style": {
        "navigationBarTitleText": "伽马报告", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/toDoList_new/lookDetail", "style": {
        "navigationBarTitleText": "查看详情", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/all_infos/searchTX", "style": {
        "navigationBarTitleText": "贴息政策选择", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/searchLoanPrd", "style": {
        "navigationBarTitleText": "贷款产品选择", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/imageUploads_new", "style": {
        "navigationBarTitleText": "影像资料上传", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/infoInput_new", "style": {
        "navigationBarTitleText": "全量信息录入", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/infoInputIndex_new", "style": {
        "navigationBarTitleText": "全量信息录入", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/multiBrand/home/index", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/multiBrand/my/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/multiBrand/todo/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/multiBrand/workbench/index", "style": {
        "navigationStyle": "custom"
      }
    }, //登录过渡页
    {
      "path": "pages/transition/index", "style": {
        "navigationBarTitleText": "合作商展示", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/transition/iconfont.ttf", "text": "\ue653", "fontSize": "20px", "width": "40px"
            }]
          }
        }
      }
    }, //新增合作商
    {
      "path": "pages/transition/new-dealer", "style": {
        "navigationBarTitleText": "新增合作商"
      }
    }, //离职
    {
      "path": "pages/transition/depart", "style": {
        "navigationBarTitleText": "离职"
      }
    }, //结果页
    {
      "path": "pages/transition/submit-result", "style": {
        "navigationBarTitleText": "结果页"
      }
    }, {
      "path": "pages/multiBrand/banner-detail", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/myCustomer/newMyCustomer", "style": {
        "navigationBarTitleText": "我的客户", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/todolist/iconfont/iconfont.ttf", "text": "\ue630", "fontSize": "20px", "width": "40px"
            }]
          }
        }
      }
    }, {
      "path": "pages/orderQuery/newOrderQuery", "style": {
        "navigationBarTitleText": "订单查询"
      }
    }, {
      "path": "pages/cluedistrib/o2oClue/index", "style": {
        "navigationBarTitleText": "线索数据看板", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/cluedistrib/o2oClue/o2oClueList", "style": {
        "navigationBarTitleText": "线索列表", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, //展期业务
    {
      "path": "pages/extensionBusiness/index", "style": {
        "navigationBarTitleText": "展期试算", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/extensionBusiness/schemeSelect", "style": {
        "navigationBarTitleText": "展期方案选择", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/tmf-test/index", "style": {
        "navigationBarTitleText": "tmf测试页面", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/multiBrand/home/community-detail", "style": {
        "navigationBarTitleText": "内容详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/feedback/index", "style": {
        "navigationBarTitleText": "反馈与建议", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/feedback/funFeedback", "style": {
        "navigationBarTitleText": "功能问题反馈", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/feedback/productFeedback", "style": {
        "navigationBarTitleText": "产品建议反馈", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/feedback/feedBack", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/feedback/feedBackList", "style": {
        "navigationBarTitleText": "反馈列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/feedback/feedBackDetail", "style": {
        "navigationBarTitleText": "反馈详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/multiBrand/my/medalWall", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/multiBrand/home/queryCarprice", "style": {
        "navigationBarTitleText": "车型车价查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/multiBrand/home/searchCar", "style": {
        "navigationBarTitleText": "请选择", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/zhiniao/zhiniao", "style": {
        "navigationBarTitleText": "好知学习平台", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/all_infos/searchPersonnelList", "style": {
        "navigationBarTitleText": "请选择", "enablePullDownRefresh": false
      }
    }, //#######################离线盘点3.0代码开始######################
    {
      "path": "pages/offline-inventory/index", "style": {
        "navigationBarTitleText": "待盘点扫描任务列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/offline-inventory/inventory-index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/offline-inventory/handle-inventory", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/all_infos/manyCarSelect", "style": {
        "navigationBarTitleText": "请选择同时提交的申请单号", "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/incomingChannel/incomeChannel", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/incomingChannel/incomeIndex", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/incomingChannel/incomeAbility", "style": {
        "navigationBarTitleText": "进件渠道责托维护",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/incomingChannel/incomeSearch", "style": {
        "navigationBarTitleText": "进件渠道查询", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }, "app-plus": {
        "popGesture": "none", "bounce": "none"
      }
    }, {
      "path": "pages/incomingChannel/fieldVisit/fieldVisitIndex", "style": {
        "navigationBarTitleText": "实地走访", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }, "app-plus": {
        "popGesture": "none"
        //配置 此句代码 禁止ios手势退回
      }
    }, {
      "path": "pages/incomingChannel/fieldVisit/visitSearch", "style": {
        "navigationBarTitleText": "进件渠道查询", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }, "app-plus": {
        "popGesture": "none", "bounce": "none"
      }
    }, {
      "path": "pages/incomingChannel/fieldVisit/visitLedger", "style": {
        "navigationBarTitleText": "走访台账", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }, "app-plus": {
        "popGesture": "none"
        //配置 此句代码 禁止ios手势退回
      }
    }, {
      "path": "pages/incomingChannel/fieldVisit/visitLedgerDetail", "style": {
        "navigationBarTitleText": "实地走访", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }, "app-plus": {
        "popGesture": "none"
        //配置 此句代码 禁止ios手势退回
      }
    }, {
      "path": "pages/multiBrand/home/achievement-detail", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/qiruiBrand/my/setting", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/exam/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/exam/answer-sheet", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/exam/exam-record", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/exam/exam-preview", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/secendNetPutOnRecord/startPage", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/secendNetPutOnRecord/returnBack/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/secendNetPutOnRecord/uploadPage", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/qiruiBrand/home/index", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/qiruiBrand/my/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/qiruiBrand/todo/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/qiruiBrand/todo/search-page", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/qiruiBrand/workbench/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/multiBrand/home/haoqiqijin", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/multiBrand/home/more-dongtai", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/newCarSalerRecord/apply/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/newCarSalerRecord/return/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/newCarSalerRecord/uploadPage", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/newCarSalerRecMailing/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/newCarSalerRecMailing/enter", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/newCarSalerRecMailing/recordList", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/recordManage/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/dataBoard/partnerIndex", "style": {
        "navigationBarTitleText": "经营看板", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#fff"
      }
    }, {
      "path": "pages/dataBoard/businessDataIndex", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/dataBoard/businessDataMonth", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/dataBoard/sixMonthLoanDetail", "style": {
        "navigationBarTitleText": "放款情况", "enablePullDownRefresh": false
      }
    }]
}
console.log(aa.pages.length)

const htmlStr = '/basic/button.html'
console.log(htmlStr.split('/')?.pop().split('.')[0])


const aab = [{
  value: '电子产品', label: '电子产品'
}, {
  value: '服装', label: '服装'
}, {
  value: '工艺品', label: '工艺品'
}]

console.log(aab.reduce((a, b) => {
  console.log(a, b)
  return a + b?.value
}, ''), '12')


console.log([{name: '1212', age: '100'}, {sex: 12}].reduce((a, b) => ({...a, ...b}), {}))


function childrenIndex(values = [], basics = []) {
  const arrIndex = [];

  function ergodic(arr, l = 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].label === values[l]) {
        arrIndex.push(i)
        if (values[l + 1] && arr[i]?.children?.length > 0) {
          ergodic(arr[i]?.children, l + 1)
        }
      }
    }
  }
  ergodic(basics, 0);

  return arrIndex;
}

const bas = [
  {
    value: 1,
    label: '中国',
    children: [
      {
        value: 2,
        label: '广东',
        children: [
          {
            value: 3,
            label: '深圳'
          },
          {
            value: 4,
            label: '广州'
          }
        ]
      },
      {
        value: 5,
        label: '广西',
        children: [
          {
            value: 6,
            label: '南宁'
          },
          {
            value: 7,
            label: '桂林'
          }
        ]
      }
    ]
  },
  {
    value: 8,
    label: '美国',
    children: [
      {
        value: 9,
        label: '纽约',
        children: [
          {
            value: 10,
            label: '皇后街区'
          }
        ]
      }
    ]
  }
]
const aad = [0, 0, 1]
childrenIndex(['中国', '广东', '广州'], bas);

console.log('kkk12112122')
