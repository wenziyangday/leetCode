const aa = {
  "pages": [//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      "path": "pages/index/init", "style": {
        // "navigationBarTitleText": "登录",
        "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, //#ifdef APP-PLUS
    //启动页
    {
      "path": "pages/guide/judge", "style": {
        "enablePullDownRefresh": false, "onReachBottomDistance": 100, "navigationStyle": "custom", "app-plus": {
          "contentAdjust": false, "bounce": "none"
        }
      }
    }, {
      "path": "pages/guide/guide", "style": {
        "enablePullDownRefresh": false, "onReachBottomDistance": 100, "navigationStyle": "custom", "app-plus": {
          "contentAdjust": false, "bounce": "none"
        }
      }
    }, // #endif
    {
      "path": "pages/index/index", "style": {
        "navigationStyle": "custom", "app-plus": {
          "titleNView": false, "scrollIndicator": "none"
        }
      }
    }, {
      "path": "pages/index/scanConfirm", "style": {
        "navigationBarTitleText": "六访报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/ceshi/ceshi", "style": {
        "navigationStyle": "测试", "app-plus": {
          "titleNView": false
        }
      }
    }, {
      "path": "pages/index/banner", "style": {
        "navigationStyle": "custom", "app-plus": {
          "titleNView": false, "scrollIndicator": "none"
        }
      }
    }, {
      "path": "pages/dataStatistics/risk", "style": {
        "navigationBarTitleText": "", "navigationBarBackgroundColor": "#F6F7FB", "enablePullDownRefresh": true
      }
    }, //数据统计
    //经营看板
    {
      "path": "pages/dataStatistics/home", "style": {
        "navigationBarTitleText": "经营看板", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    //展期业务
    {
      "path": "pages/extensionBusiness/index", "style": {
        "navigationBarTitleText": "展期试算", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/extensionBusiness/schemeSelect", "style": {
        "navigationBarTitleText": "展期方案选择", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //销售监控
    {
      "path": "pages/dataStatistics/salesMonitoring", "style": {
        "navigationBarTitleText": "销售监控", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //销售监控（省份）
    {
      "path": "pages/dataStatistics/provinceSalesMonitoring", "style": {
        "navigationBarTitleText": "销售监控", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //销售监控（经销商）
    {
      "path": "pages/dataStatistics/agentSalesMonitoring", "style": {
        "navigationBarTitleText": "销售监控", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //奇瑞体系
    {
      "path": "pages/dataStatistics/cherySystem", "style": {
        "navigationBarTitleText": "本品牌渗透率", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //多品牌
    {
      "path": "pages/dataStatistics/multiBrand", "style": {
        "navigationBarTitleText": "多品牌渠道放款", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //多品牌业务线
    {
      "path": "pages/dataStatistics/multiBrandBusinessLine", "style": {
        "navigationBarTitleText": "多品牌渠道放款", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //金牌经理
    {
      "path": "pages/dataStatistics/goldMedalManager", "style": {
        "navigationStyle": "custom", "app-plus": {
          "titleNView": false, "bounce": "none"
        }
      }
    }, //经营效益
    {
      "path": "pages/dataStatistics/operatingEfficiency", "style": {
        "navigationBarTitleText": "经营效益", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //lianxi测试用
    {
      "path": "pages/lianxi/lianxi", "style": {
        "navigationBarTitleText": "练习", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //线索盯催
    {
      "path": "pages/salesManagement/clueTracking/clueTracking", "style": {
        "navigationBarTitleText": "线索查看", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //线索盯催详情
    {
      "path": "pages/salesManagement/clueTracking/clueTrackingDetail", "style": {
        "navigationBarTitleText": "经销商线索", "navigationBarBackgroundColor": "#FFFFFF", "enablePullDownRefresh": true
      }
    }, //线索详情
    {
      "path": "pages/salesManagement/clueTracking/clueDetail", "style": {
        "navigationBarTitleText": "线索详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //投诉处理
    {
      "path": "pages/salesManagement/complaintHandling/complaintHandling", "style": {
        "navigationStyle": "custom"
      }
    }, //投诉处理详情
    {
      "path": "pages/salesManagement/complaintHandling/complaintHandlingDetail", "style": {
        "navigationBarTitleText": "投诉详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/salesManagement/complaintHandling/complainDetails", "style": {
        "navigationBarTitleText": "投诉视频", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 合作商抽检
    {
      "path": "pages/salesManagement/loadUserCheck/parterCheck", "style": {
        "navigationBarTitleText": "合作商抽检", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 放款客户抽检
    {
      "path": "pages/salesManagement/loadUserCheck/loadUserInfo/loadUserInfo", "style": {
        "navigationBarTitleText": "放款客户抽检", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 抽检详情
    {
      "path": "pages/salesManagement/loadUserCheck/loadUserInfo/checkDetails", "style": {
        "navigationBarTitleText": "抽检详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 投诉案例库
    {
      "path": "pages/salesManagement/caseLibrary/index", "style": {
        "navigationBarTitleText": "投诉案例库", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 投诉案例库详情
    {
      "path": "pages/salesManagement/caseLibrary/detail", "style": {
        "navigationBarTitleText": "投诉案例详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 通知
    {
      "path": "pages/notice/noticeNew", "style": {
        "navigationStyle": "custom"
        /*,
				"app-plus": {
					"titleNView": false,
					"bounce": "none"
				}*/
      }
    }, //消息公告
    {
      "path": "pages/notice/notice/gonggao", "style": {
        "navigationBarTitleText": "公告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //消息公告详情
    {
      "path": "pages/notice/notice/gonggaoDetail", "style": {
        "navigationBarTitleText": "公告详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //审批代办
    {
      "path": "pages/notice/notice/approveStatus", "style": {
        "navigationBarTitleText": "审批待办", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //业务通知
    {
      "path": "pages/notice/notice/businessInforms", "style": {
        "navigationBarTitleText": "业务通知", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //业务通知详情
    {
      "path": "pages/notice/notice/businessInformsDetail", "style": {
        "navigationBarTitleText": "业务通知详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //风险通知
    {
      "path": "pages/notice/notice/riskInforms", "style": {
        "navigationBarTitleText": "风险通知", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //风险通知详情
    {
      "path": "pages/notice/notice/riskInformsDetail", "style": {
        "navigationBarTitleText": "风险通知详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //填写提醒
    {
      "path": "pages/notice/notice/fillLnInforms", "style": {
        "navigationBarTitleText": "填写提醒", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //填写提醒详情
    {
      "path": "pages/notice/notice/fillLnInformsDetail", "style": {
        "navigationBarTitleText": "填写提醒详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //行程提醒
    {
      "path": "pages/notice/notice/journey", "style": {
        "navigationBarTitleText": "行程提醒", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //行程提醒详情
    {
      "path": "pages/notice/notice/journeyDetail", "style": {
        "navigationBarTitleText": "行程提醒详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //百问百答
    {
      "path": "pages/notice/notice/encyclopedia", "style": {
        "navigationBarTitleText": "百问百答", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    //消息代办列表
    {
      "path": "pages/notice/notice/daiban", "style": {
        "navigationBarTitleText": "审批待办", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 登录
    {
      "path": "pages/login/login", "style": {
        // "navigationBarTitleText": "登录",
        "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, // 指纹登录
    {
      "path": "pages/fingerprint/fingerprint", "style": {
        // "navigationBarTitleText": "登录",
        "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, // 人脸登录
    {
      "path": "pages/humanFace/humanFace", "style": {
        // "navigationBarTitleText": "登录",
        "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, //隐私协议
    {
      "path": "pages/service/privacy", "style": {
        "navigationBarTitleText": "", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/service/service", "style": {
        "navigationBarTitleText": "", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 零售经销经营报表
    {
      "path": "pages/chart/chart", "style": {
        "navigationBarTitleText": "零售经销经营报表", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleView": false
        }
      }
    }, //城市的图表
    {
      "path": "pages/chart/chartCity", "style": {
        "navigationBarTitleText": "城市经营报表", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleView": false
        }
      }
    }, {
      "path": "pages/chart/chartArea", "style": {
        "navigationBarTitleText": "大区经营报表", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleView": false
        }
      }
    }, {
      "path": "pages/chart/proChart", "style": {
        "navigationBarTitleText": "省区经营报表", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleView": false
        }
      }
    }, // 忘记密码
    {
      "path": "pages/forgetPas/index", "style": {
        "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, // 修改密码
    {
      "path": "pages/changePas/index", "style": {
        "navigationBarBackgroundColor": "#ffffff", "navigationBarTitleText": "修改密码"
      }
    }, // 刚进入时重置密码
    {
      "path": "pages/changePas/resetpsw", "style": {
        "navigationBarTitleText": "修改密码", "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, // 已注册或者密码过期用户修改密码
    {
      "path": "pages/resetPas/index", "style": {
        "navigationBarTitleText": "修改密码", "navigationStyle": "custom"

      }
    }, // 查询统计
    {
      "path": "pages/query/query", "style": {
        "navigationBarTitleText": "查询统计", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/approval/filter/filter", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/query/approval/ovalDetail/index", "style": {
        "navigationBarTitleText": "零售贷款客户审批详情", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleView": false
        }
      }
    }, {
      "path": "pages/query/overdueLoan/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/query/overdueLoan/overdueLoan", "style": {
        "navigationBarTitleText": "零售贷款逾期客户信息查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/overdueInquiry/index", "style": {
        "navigationStyle": "custom"
      }
    }, // 零售销售经营报表
    {
      "path": "pages/query/retail/retail", "style": {
        "navigationBarTitleText": "零售二网销售经营报表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 零售城市经营报表
    {
      "path": "pages/query/retail/city", "style": {
        "navigationBarTitleText": "零售城市经营报表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/sale/index", "style": {
        "navigationBarTitleText": "零售销售经营报表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 零售大区经营报表
    {
      "path": "pages/query/retail/regional", "style": {
        "navigationBarTitleText": "零售大区经营报表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 零售省区经营报表
    {
      "path": "pages/query/retail/provinces", "style": {
        "navigationBarTitleText": "零售省区经营报表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //peng
    {
      "path": "pages/creditManage/groupQuota/other", "style": {
        "navigationBarTitleText": "集团额度调配", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupQuota/viewPicture/viewPicture", "style": {
        "navigationBarTitleText": "申请材料", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupQuota/viewPicture/viewOtherPicture", "style": {
        "navigationBarTitleText": "其他材料", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupQuota/viewPicture/viewPictureLook", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupQuota/lookReport", "style": {
        "navigationBarTitleText": "查看报告", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupQuota/viewPicture/lookPDF", "style": {
        "navigationBarTitleText": "查看图片", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupQuota/viewPicture/otherlookPDF", "style": {
        "navigationBarTitleText": "查看图片", "enablePullDownRefresh": false
      }
    }, // 提交成功
    {
      "path": "pages/creditManage/groupQuota/viewPicture/submitSuccessOther", "style": {
        "navigationBarTitleText": "提交成功", "enablePullDownRefresh": false
      }
    }, // 退回
    {
      "path": "pages/creditManage/groupQuota/viewPicture/completeResultOther", "style": {
        "navigationBarTitleText": "退回成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupQuota/otherDetail", "style": {
        "navigationBarTitleText": "合同明细", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/electronics/eleAuthorize_names", "style": {
        // "navigationBarTitleText": "电子征信授权名单",
        // "enablePullDownRefresh": false
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/electronics/eleAuthorize", "style": {
        "navigationBarTitleText": "电子征信授权", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/electronics/add_eleAuthorizer", "style": {
        "navigationBarTitleText": "添加授权人", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/electronics/add_eleAuthorizedEnterprise", "style": {
        "navigationBarTitleText": "添加授权企业", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/select/advancedSearch", "style": {
        "navigationBarTitleText": "高级搜索", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/select/select", "style": {
        "navigationBarTitleText": "征信查询", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "\ue63c", "fontSrc": "/static/iconfont/iconfont.ttf", "fontSize": "22px", "width": "50rpx"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/speed/speedSelect", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/speed/speedDetails", "style": {
        "navigationBarTitleText": "审批进度详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/speed/speedSearch", "style": {
        "navigationBarTitleText": "", "navigationStyle": "custom", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "搜索", "fontSize": "16px"
            }]
          }
        }
      }
    }, // 零售经销经营报表
    {
      "path": "pages/query/retail/dealers", "style": {
        "navigationBarTitleText": "零售经销经营报表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 审批过程明细查询
    {
      "path": "pages/query/dealers/detial", "style": {
        "navigationBarTitleText": "审批过程明细查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/overdueInquiry/overdueInquiry", "style": {
        "navigationBarTitleText": "经销商贷款逾期查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/becomeDue/becomeDue", "style": {
        "navigationBarTitleText": "经销商贷款到期查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/becomeDue/becomeDueDetails", "style": {
        "navigationBarTitleText": "经销商贷款到期查询详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/becomeDue/becomeDueMore", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/query/becomeDue/becomeDueDetail", "style": {
        "navigationBarTitleText": "经销商贷款到期查询详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //经销商贷款到期查询
    {
      "path": "pages/query/becomeDue/becomeDueOver", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/query/vehicleQuery/vehicleQuery/vehicleQuery", "style": {
        "navigationBarTitleText": "车价查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/vehicleQuery/vehicleDetail/newCarDetail", "style": {
        "navigationBarTitleText": "查询结果", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/vehicleQuery/vehicleQuery/searchCars", "style": {
        "navigationBarTitleText": "请选择", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/approval/review/review", "style": {
        "navigationBarTitleText": "审批明细", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //零售客户一览表
    {
      "path": "pages/query/schedule/schedule", "style": {
        "navigationStyle": "custom"
      }
    }, //零售客户一览审批明细表
    {
      "path": "pages/query/schedule/detail", "style": {
        "navigationBarTitleText": "零售客户一览表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //经销商授信临到期查询
    {
      "path": "pages/query/maturity/maturity", "style": {
        "navigationStyle": "custom"
      }
    }, //经销商授信临到期查询审查记录查询
    {
      "path": "pages/query/maturity/detail", "style": {
        "navigationBarTitleText": "经销商授信临到期查询记录", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //经销商360°观察
    {
      "path": "pages/query/observe/observe", "style": {
        "navigationStyle": "custom"
      }
    }, //经销商贷款临到期查询
    {
      "path": "pages/query/expiration/expiration", "style": {
        "navigationStyle": "custom"
      }
    }, //经销商贷款临到期查询数据页面
    {
      "path": "pages/query/expiration/detial", "style": {
        "navigationBarTitleText": "经销商贷款临到期查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //经销商360°观察
    {
      "path": "pages/query/degrees/index", "style": {
        "navigationBarTitleText": "经销商360°观察",
        "navigationBarBackgroundColor": "#FFFFFF",
        "enablePullDownRefresh": true
      }
    }, // 360详情客户信息
    {
      "path": "pages/query/degrees/customInfo", "style": {
        "navigationBarTitleText": "客户信息", "navigationBarBackgroundColor": "#FFFFFF", "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/query/degrees/customDetail", "style": {
        "navigationBarTitleText": "合同信息详情",
        "navigationBarBackgroundColor": "#FFFFFF",
        "enablePullDownRefresh": true
      }
    }, //360下面的授权额度合同信息下面额度使用详情
    {
      "path": "pages/query/degrees/customQuota", "style": {
        "navigationBarTitleText": "额度使用详情",
        "navigationBarBackgroundColor": "#FFFFFF",
        "enablePullDownRefresh": true
      }
    }, //经销商审查进度
    {
      "path": "pages/query/progress/progress", "style": {
        "navigationStyle": "custom"
      }
    }, //经销商审查进度
    {
      "path": "pages/query/dealers/index", "style": {
        "navigationBarTitleText": "经销商审查进度",
        "navigationBarBackgroundColor": "#FFFFFF",
        "enablePullDownRefresh": true
      }
    }, // 零售贷款客户审批记录查询
    {
      "path": "pages/query/loanInquiry/index", "style": {
        "navigationBarTitleText": "零售贷款客户审批记录查询",
        "navigationBarBackgroundColor": "#FFFFFF",
        "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/user/my-user/user", "style": {
        "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, {
      "path": "pages/user/user-info/userInfo", "style": {
        "navigationBarTitleText": "我的信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/user/user-info/setNumber", "style": {
        "navigationBarTitleText": "设置电话号码", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/user/user-info/transferKehu", "style": {
        "navigationBarTitleText": "汇报人", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/user/ceshi", "style": {
        "navigationBarTitleText": "指纹", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 修改姓名页面
    {
      "path": "pages/user/user-info/modify/modify", "style": {
        "navigationBarTitleText": "修改信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //二维码
    {
      "path": "pages/user/user-code/code", "style": {
        "navigationStyle": "custom", "app-plus": {
          "titleNView": false
        }
      }
    }, {
      "path": "pages/signIn/qiandao/qiandao", "style": {
        // "navigationBarTitleText": "签到打卡",
        // "navigationBarBackgroundColor": "#FFFFFF"
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/signIn/qiandao/partner", "style": {
        "navigationBarTitleText": "合作商", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/partnerAddress", "style": {
        "navigationBarTitleText": "合作商地址", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/partnerBrand", "style": {
        "navigationBarTitleText": "合肥市奇瑞合作商", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/newPartner", "style": {
        "navigationBarTitleText": "新合作商", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/secondNetwork", "style": {
        "navigationBarTitleText": "合作商", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/secondNetworkPartner", "style": {
        "navigationBarTitleText": "二网", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/newSecondNetwork", "style": {
        "navigationBarTitleText": "合作商", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/newSecondNetworkName", "style": {
        "navigationBarTitleText": "新二网", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/attendanceRules", "style": {
        "navigationBarTitleText": "考勤规则", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/partnerList", "style": {
        "navigationBarTitleText": "走访打卡", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/kehu", "style": {
        "navigationBarTitleText": "客户中心", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/edit", "style": {
        "navigationBarTitleText": "合肥奇瑞经销商", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/newEdit", "style": {
        "navigationBarTitleText": "客户信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/visitdetail", "style": {
        "navigationBarTitleText": "走访信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/transferKehu", "style": {
        "navigationBarTitleText": "客户转交", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/mapPositioning", "style": {
        "navigationBarTitleText": "经销商地址定位", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/kehudetail", "style": {
        "navigationBarTitleText": "合肥奇瑞经销商"
      }
    }, {
      "path": "pages/signIn/kehu/retailKehuInfo", "style": {
        "navigationBarTitleText": "客户信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/retailKehuDetail", "style": {
        "navigationBarTitleText": "客户详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/kehu/addKehu", "style": {
        "navigationBarTitleText": "客户信息"
      }
    }, {
      "path": "pages/signIn/daiban/daiban", "style": {
        "navigationBarTitleText": "待办", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/itineraryApprovalModify", "style": {
        "navigationBarTitleText": "行程变更审批", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/itineraryApproval", "style": {
        "navigationBarTitleText": "行程审批", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/dailyApproval", "style": {
        "navigationBarTitleText": "日报审批", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/sixVisitApproval", "style": {
        "navigationBarTitleText": "六访审批", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/supplementaryCardApproval", "style": {
        "navigationBarTitleText": "补签卡审批", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/writeReport/writeReportOne", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/writeReport/writeReportTwo", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/writeReport/writeReportThree", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/writeReport/writeReportFour", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/writeReport/writeReportFive", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/postLoanInspection/postLoanInspectionPlan", "style": {
        "navigationBarTitleText": "贷后检查计划调整", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/reportApproval/reportApproval", "style": {
        "navigationBarTitleText": "审批信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/cooperate", "style": {
        "navigationBarTitleText": "选择合作商"
      }
    }, {
      "path": "pages/signIn/qiandao/detailCooperate", "style": {
        "navigationBarTitleText": "合肥市奇瑞合作商"
      }
    }, {
      "path": "pages/signIn/rili/rili", "style": {
        "navigationBarTitleText": "日历", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "走访统计", "fontSize": "15px", "width": "80px", "color": "#303133"
            }]
          }
        }
      }
    }, // 走访覆盖度统计
    {
      "path": "pages/signIn/visitRecord/visitRecordDetail", "style": {
        "navigationStyle": "custom"
      }
    }, // 下属列表
    {
      "path": "pages/signIn/visitRecord/querySubordinateDetailInfo", "style": {
        "navigationBarTitleText": "下属走访统计列表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 走访合作商名单
    {
      "path": "pages/signIn/visitRecord/queryVisitByCoreNo", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/signIn/rili/myItineraryArrange", "style": {
        "navigationBarTitleText": "我的行程安排", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/mySubordinateRili", "style": {
        "navigationBarTitleText": "下属日程", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/myDaily", "style": {
        "navigationBarTitleText": "我的日报", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/myDailyDetails", "style": {
        "navigationBarTitleText": "我的日报", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/myDailyRevise", "style": {
        "navigationBarTitleText": "我的日报", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleNView": false
        }
      }
    }, {
      "path": "pages/signIn/rili/lookPDF", "style": {
        "navigationBarTitleText": "六访材料", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/mapPositioning", "style": {
        "navigationBarTitleText": "地图", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleNView": false
        }
      }
    }, // 设置
    {
      "path": "pages/user/my-setup/setup", "style": {
        "navigationBarTitleText": "设置", "navigationBarBackgroundColor": "#FFFFFF"
        // "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/user/my-setup/itineraryNotice", "style": {
        "navigationBarTitleText": "行程通知", "navigationBarBackgroundColor": "#FFFFFF"
        // "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/message/messageCenter", "style": {
        "navigationBarTitleText": "消息中心"
      }
    }, {
      "path": "pages/message/messageDetail", "style": {
        "navigationBarTitleText": "消息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/message/ystemInforms", "style": {
        "navigationBarTitleText": "系统通知", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/user/about/index", "style": {
        "navigationBarTitleText": "关于我们", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/ceshi2/ceshi2", "style": {
        "navigationBarTitleText": "测试", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/ceshi3/ceshi3", "style": {
        "navigationBarTitleText": "测试3", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/getMyItinerary", "style": {
        "navigationBarTitleText": "行程安排", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/tripView", "style": {
        "navigationBarTitleText": "行程查看", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/travelChange", "style": {
        "navigationBarTitleText": "行程变更", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 下属日报查看
    {
      "path": "pages/signIn/rili/dailyView", "style": {
        // "navigationBarTitleText": "日报查看",
        // "navigationBarBackgroundColor":"#FFFFFF"
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/signIn/rili/myItineraryArrange_result", "style": {
        "navigationBarTitleText": "我的行程安排", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/signIn/qiandao/qiandao_record", "style": {
        "navigationBarTitleText": "打卡记录", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/myTrip", "style": {
        "navigationBarTitleText": "我的行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/mysubordinateTrip", "style": {
        "navigationBarTitleText": "下属行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/myTravelTrack", "style": {
        "navigationBarTitleText": "我的行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/subordinateTravelTrack", "style": {
        "navigationBarTitleText": "下属行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/supplementarySignature", "style": {
        "navigationBarTitleText": "补签申请", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/user/my-user/studyCenter/studyCenter", "style": {
        "navigationBarTitleText": "学习中心", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/user/my-user/knowledgeBase/knowledgeBase", "style": {
        "navigationBarTitleText": "知识查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/helpCenter/helpCenter", "style": {
        "navigationBarTitleText": "帮助中心", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/question", "style": {
        "navigationBarTitleText": "问题反馈", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/questionList", "style": {
        "navigationBarTitleText": "问题反馈列表", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/helpCenter/questionForm", "style": {
        "navigationBarTitleText": "问题反馈", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/myItineraryArrange", "style": {
        "navigationBarTitleText": "我的行程安排", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/mySubordinateRili", "style": {
        "navigationBarTitleText": "下属日程", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/myDaily", "style": {
        "navigationBarTitleText": "我的日报", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/myDailyDetails", "style": {
        "navigationBarTitleText": "我的日报", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/myDailyRevise", "style": {
        "navigationBarTitleText": "我的日报", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleNView": false
        }
      }
    }, {
      "path": "pages/signIn/rili/lookPDF", "style": {
        "navigationBarTitleText": "六访材料", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/mapPositioning", "style": {
        "navigationBarTitleText": "地图", "navigationBarBackgroundColor": "#FFFFFF", "app-plus": {
          "titleNView": false
        }
      }
    }, // 指纹验证
    {
      "path": "pages/user/user-figer/figer", "style": {
        "navigationBarTitleText": "", "navigationBarBackgroundColor": "#F6F7FB", "enablePullDownRefresh": true
      }
    }, // 设置
    {
      "path": "pages/user/my-setup/setup", "style": {
        "navigationBarTitleText": "设置", "navigationBarBackgroundColor": "#FFFFFF"
        // "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/user/my-setup/itineraryNotice", "style": {
        "navigationBarTitleText": "行程通知", "navigationBarBackgroundColor": "#FFFFFF"
        // "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/message/messageCenter", "style": {
        "navigationBarTitleText": "消息中心"
      }
    }, {
      "path": "pages/message/messageDetail", "style": {
        "navigationBarTitleText": "消息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/message/ystemInforms", "style": {
        "navigationBarTitleText": "系统通知", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/user/about/index", "style": {
        "navigationBarTitleText": "关于我们", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/ceshi2/ceshi2", "style": {
        "navigationBarTitleText": "测试", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/ceshi3/ceshi3", "style": {
        "navigationBarTitleText": "测试3", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/getMyItinerary", "style": {
        "navigationBarTitleText": "行程安排", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/tripView", "style": {
        "navigationBarTitleText": "行程查看", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/travelChange", "style": {
        "navigationBarTitleText": "行程变更", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 下属日报查看
    {
      "path": "pages/signIn/rili/dailyView", "style": {
        // "navigationBarTitleText": "日报查看",
        // "navigationBarBackgroundColor":"#FFFFFF"
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/signIn/rili/myItineraryArrange_result", "style": {
        "navigationBarTitleText": "我的行程安排", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/signIn/qiandao/qiandao_record", "style": {
        "navigationBarTitleText": "打卡记录", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/myTrip", "style": {
        "navigationBarTitleText": "我的行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/mysubordinateTrip", "style": {
        "navigationBarTitleText": "下属行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/myTravelTrack", "style": {
        "navigationBarTitleText": "我的行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/subordinateTravelTrack", "style": {
        "navigationBarTitleText": "下属行程轨迹",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/qiandao/supplementarySignature", "style": {
        "navigationBarTitleText": "补签申请", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/helpCenter", "style": {
        "navigationBarTitleText": "帮助中心", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/question", "style": {
        "navigationBarTitleText": "问题反馈", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/questionList", "style": {
        "navigationBarTitleText": "问题反馈列表", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/helpCenter/questionForm", "style": {
        "navigationBarTitleText": "问题反馈", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/encyclopedia/encyclopedia", "style": {
        "navigationBarTitleText": "百问百答", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 合作商资料查询
    {
      "path": "pages/helpCenter/partner-information/query", "style": {
        "navigationBarTitleText": "合作商资料查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 合作商资料查询结果
    {
      "path": "pages/helpCenter/partner-information/query-result/result", "style": {
        "navigationBarTitleText": "合作商资料查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/encyclopedia/companyPolicy", "style": {
        "navigationBarTitleText": "公司制度", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/encyclopedia/businessProcess", "style": {
        "navigationBarTitleText": "零售业务流程",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/encyclopedia/productPolicy", "style": {
        "navigationBarTitleText": "产品及商务政策",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/helpCenter/encyclopedia/dataDetails", "style": {
        "navigationBarTitleText": "资料详情", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //逾期催收记录查询
    {
      "path": "pages/overdueCollection/overdueForm", "style": {
        "navigationBarTitleText": "逾期催收记录查询", "navigationStyle": "custom"
      }
    }, //逾期客户列表
    {
      "path": "pages/overdueCollection/overdueList", "style": {
        "navigationBarTitleText": "逾期客户列表",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //逾期客户历史催收记录
    {
      "path": "pages/overdueCollection/overdueRecord", "style": {
        "navigationBarTitleText": "逾期客户历史催收记录",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    {
      "path": "pages/query/queryPolicyFile", "style": {
        "navigationBarTitleText": "政策文件查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/queryDailyFile", "style": {
        "navigationBarTitleText": "日报文件查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/policyFile", "style": {
        "navigationBarTitleText": "政策文件查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/query/dailyFile", "style": {
        "navigationBarTitleText": "日报文件查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/rili/dailyTimely", "style": {
        "navigationBarTitleText": "下属日报及时率",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/notice/location", "style": {
        "navigationBarTitleText": "查询定位", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //####################经销商管理平台代码开始#########################
    {
      "path": "pages/batchSales/extension/credit/reportView", "style": {
        "navigationBarTitleText": "查看征信报告", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/delay", "style": {
        "navigationBarTitleText": "展期审核", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/applicationDetail/applicationDetail", "style": {
        // "navigationBarTitleText": "签到打卡",
        // "navigationBarBackgroundColor": "#FFFFFF"
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/batchSales/extension/examination/examination", "style": {
        "navigationBarTitleText": "展期盘点审查", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/approvalComments/approvalComments", "style": {
        "navigationBarTitleText": "审批意见", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/surveyOpinion/surveyOpinion", "style": {
        "navigationBarTitleText": "调查意见", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/viewPicture/viewPicture", "style": {
        "navigationBarTitleText": "上传材料", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/viewPicture/creditAddPicture", "style": {
        "navigationBarTitleText": "上传证明材料", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/afterLoan/photoCategories/photoCategories", "style": {
        "navigationBarTitleText": "影像资料", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/extension/viewPicture/viewPictureLook", "style": {
        "navigationBarTitleText": "影像查看", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/state/submitSuccess", "style": {
        "navigationBarTitleText": "提交成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/state/backSuccess", "style": {
        "navigationBarTitleText": "退回成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/conDetail/conDetail", "style": {
        "navigationBarTitleText": "合同额度使用情况",
        "navigationBarBackgroundColor": "#FFF",
        "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/appProgress/appProgress", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/extension/proDetail/extensionList", "style": {
        "navigationBarTitleText": "展期进度查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/extension/proDetail/proDetail", "style": {
        "navigationBarTitleText": "审批进度详情",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/extension/material/material", "style": {
        "navigationBarTitleText": "查看材料", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/toDoList", "style": {
        // "navigationBarTitleText": "待办已办任务列表",
        // "navigationBarBackgroundColor": "#FFFFFF"
        "navigationStyle": "custom" // 隐藏系统导航栏
      }
    }, {
      "path": "pages/workBench/workBench", "style": {
        "navigationStyle": "custom", // 隐藏系统导航栏
        "app-plus": {
          "scrollIndicator": "none"//隐藏该页面滚动条
        }
      }
    }, {
      "path": "pages/workBench/workGuide", "style": {
        "navigationBarTitleText": "操作指引", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/toDo/riskTodo", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/signIn/daiban/toDo/toDoSearchResult", "style": {
        // "navigationBarTitleText": "待办已办任务列表",
        // "navigationBarBackgroundColor": "#FFFFFF"
        "navigationStyle": "custom" // 隐藏系统导航栏
      }
    }, {
      "path": "pages/signIn/daiban/toDo/toDoSearch", "style": {
        // "navigationBarTitleText": "待办",
        // "navigationBarBackgroundColor": "#FFFFFF"
        "navigationStyle": "custom" // 隐藏系统导航栏
      }
    }, {
      "path": "pages/signIn/daiban/toDo/doneSearch", "style": {
        // "navigationBarTitleText": "待办",
        // "navigationBarBackgroundColor": "#FFFFFF"
        "navigationStyle": "custom" // 隐藏系统导航栏
      }
    }, {
      "path": "pages/batchSales/afterLoan/guaranteeInspection/guaranteeInspectionDetail", "style": {
        "navigationBarTitleText": "担保检查报告查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/extension/search/search", "style": {
        "navigationStyle": "custom", "navigationBarBackgroundColor": "#FFFFFF", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postrecognit/postConfirm/postConfirm", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postrecognit/postConfirm/postConfirm", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, // {
    //   "path": "pages/batchSales/postloan/postrecognit/postAdd/postAdd",
    //   "style": {
    //     "navigationBarTitleText": "新增贷后检查任务",
    //     "enablePullDownRefresh": false
    //   }
    // },
    {
      "path": "pages/batchSales/postloan/postexecut/impleInspect/impleInspect", "style": {
        "navigationBarTitleText": "贷后检查任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postrecognit/postInitial/postInitial", "style": {
        "navigationBarTitleText": "贷后现场检查计划确认", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/writeReport/writeReportOne", "style": {
        "navigationBarTitleText": "撰写报告", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/writeReport/writeReportTwo", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/writeReport/writeReportThree", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/writeReport/writeReportFour", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/writeReport/writeReportFive", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/postloan/reportApproval/reportApproval", "style": {
        "navigationBarTitleText": "审批信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/retailReport/moreLists/moreLists", "style": {
        "navigationBarTitleText": "首页", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/retailReport/disapproval", "style": {
        // "navigationStyle": "custom",
        // "enablePullDownRefresh": false
        "navigationBarTitleText": "", "navigationBarBackgroundColor": "#FFFFFF"
        // "app-plus": {
        //   "titleNView": {
        //     "buttons": [
        //       {
        //         "text": "\ue63c",
        // 		"fontSrc": "/static/iconfont.ttf",
        // 		"fontSize": "36rpx",
        // 		"float": "left",
        // 		"width": "50px"
        //       }
        //     ]
        //   }
        // }
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventoryReview/inventoryReview", "style": {
        "navigationBarTitleText": "整车盘点审核", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/vehicleAudit/vehicleAudit", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventoryDetails/inventoryDetails", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventoryInfo/inventoryInfo", "style": {
        "navigationBarTitleText": "盘点信息", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventoryAdd/inventoryAdd", "style": {
        "navigationBarTitleText": "新增贷后检查任务", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventorySecond/inventorySecond", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/performInventory/performInventory", "style": {
        "navigationBarTitleText": "待盘点扫描任务列表", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/performInventory/completeVehicle/completeVehicle", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/performInventory/certifiCate/certifiCate", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/performInventory/inventoryVehicles/inventoryVehicles", "style": {
        "navigationBarTitleText": "整车盘点", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/performInventory/inventoryVehicles/operation", "style": {
        "navigationBarTitleText": "盘点操作方法", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/performInventory/certifiCateList/inventoryVehicles", "style": {
        "navigationBarTitleText": "合格证", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/performInventory/certifiCateList/operation", "style": {
        "navigationBarTitleText": "盘点操作方法", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/guaranteeTask/guaranteeTask", "style": {
        "navigationBarTitleText": "担保检查任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/guaranteeAdd/guaranteeAdd", "style": {
        "navigationBarTitleText": "新增经销商担保检查任务", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/guaranteeInspect/guaranteeInspect", "style": {
        "navigationBarTitleText": "担保检查任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/writeReportFive/writeReportFive", "style": {
        "navigationBarTitleText": "撰写报告", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/guaranteeDetail/guaranteeDetail", "style": {
        "navigationBarTitleText": "担保检查任务处理", "enablePullDownRefresh": false
      }
    }, // 待盘点
    {
      "path": "pages/batchSales/postloan/performInventory/inventoryVehicles/toBeCounted", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, // 待盘点
    {
      "path": "pages/batchSales/postloan/performInventory/inventoryVehicles/toBeChooseImage", "style": {
        "navigationBarTitleText": "影像资料", "enablePullDownRefresh": false
      }
    }, // 已盘点
    {
      "path": "pages/batchSales/postloan/performInventory/inventoryVehicles/counted", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/afterSale/reportReview/reportReview", "style": {
        "navigationBarTitleText": "贷后报告复核",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/afterSale/reportReview/reportReviewTemplate", "style": {
        "navigationBarTitleText": "贷后报告复核",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/reportReviewTemplate/reportReviewTemplateOne", "style": {
        "navigationBarTitleText": "贷后报告复核",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/reportReviewTemplate/reportReviewTemplateTwo", "style": {
        "navigationBarTitleText": "贷后报告复核",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/reportReviewTemplate/reportReviewTemplateThree", "style": {
        "navigationBarTitleText": "贷后报告复核",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/reportReviewTemplate/reportReviewTemplateFour", "style": {
        "navigationBarTitleText": "贷后报告复核",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/signIn/daiban/reportReviewTemplate/reportReviewTemplateFive", "style": {
        "navigationBarTitleText": "贷后报告复核",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/afterSale/postLoanDetails/postLoanDetails", "style": {
        "navigationBarTitleText": "贷后检查报告查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/afterSale/guaranteeCheck/guaranteeCheck", "style": {
        "navigationBarTitleText": "担保检查报告查询",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/afterSale/guaranteeCheckDetails/guaranteeCheckDetails", "style": {
        "navigationBarTitleText": "查看报告", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/afterSale/guaranteeCheckRevise/guaranteeCheckRevise", "style": {
        "navigationBarTitleText": "查看报告", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/grantcredit/grantcredit", "style": {
        "navigationBarTitleText": "授信额度", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // {
    // 	"path": "pages/guarantee/performAguaranteeCheck/performAguaranteeCheck",
    // 	"style": {
    // 		"navigationBarTitleText": "担保检查任务处理",
    // 		"enablePullDownRefresh": false,
    // 		"navigationBarBackgroundColor": "#FFFFFF"
    // 	}
    // },
    {
      "path": "pages/grantcredit/lookImages", "style": {
        "navigationBarTitleText": "查看额度调配影像", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/grantcredit/usageList", "style": {
        "navigationBarTitleText": "合同额度使用情况", "enablePullDownRefresh": false
      }
    }, /* {
			"path": "pages/grantcredit/customerCredit",
			"style": {
			  "navigationBarTitleText": "客户信用情况",
			  "enablePullDownRefresh": false
			}
		  }, */
    {
      "path": "pages/afterSale/afterSalesManagement/afterSalesManagement", "style": {
        "navigationBarTitleText": "贷后检查管理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/afterSale/afterSaleDetails/afterSaleDetails", "style": {
        "navigationBarTitleText": "贷后检查报告查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/afterSale/viewReport/viewReport", "style": {
        "navigationBarTitleText": "贷后检查报告查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/afterSale/viewReport/reportEditor", "style": {
        "navigationBarTitleText": "贷后检查报告查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/vehicleInventSheet/vehicleInventSheet", "style": {
        "navigationBarTitleText": "整车盘点表"
      }
    }, {
      "path": "pages/grantcredit/riskDynamics", "style": {
        "navigationBarTitleText": "风险动态", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/certificateReview/certificateReview", "style": {
        "navigationBarTitleText": "合格证盘点审核", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/grantcredit/quotaAllocation", "style": {
        "navigationBarTitleText": "额度调配", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/loanApply", "style": {
        "navigationBarTitleText": "贷款申请", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/handle/index", "style": {
        "navigationBarTitleText": "合同签订管理", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "text": "下载", "fontSize": "16", "width": "80"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/handle/handle", "style": {
        "navigationBarTitleText": "合同签订管理", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/handle/lookPDF", "style": {
        "navigationBarTitleText": "查看PDF", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/handle/indexDetail", "style": {
        "navigationBarTitleText": "合同签订管理详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/handle/reportManagerDetail", "style": {
        "navigationBarTitleText": "报表管理详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/handle/queryCreditContractDetail", "style": {
        "navigationBarTitleText": "征信签约管理详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/handle/queryCreditProcessDetail", "style": {
        "navigationBarTitleText": "征信签约审核详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/handle/uploadPhoto/uploadPhoto", "style": {
        "navigationBarTitleText": "合同签订管理影像上传", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/handle/indexSearch", "style": {
        "navigationBarTitleText": "合同签订管理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/distributorId/one", "style": {
        "navigationBarTitleText": "经销商编号生成", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/afterSalesManagement/afterSalesManagement", "style": {
        "navigationBarTitleText": "贷后检查管理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportview/reportview", "style": {
        "navigationBarTitleText": "贷后报告复核", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportview/inventoryDetail", "style": {
        "navigationBarTitleText": "盘点详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportview/reportReviewTemplate", "style": {
        "navigationBarTitleText": "贷后报告复核", // "navigationStyle": "custom",
        "app-plus": {
          "titleView": false
        }
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportReviewTemplate/reportReviewTemplateOne", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportReviewTemplate/reportReviewTemplateTwo", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportReviewTemplate/reportReviewTemplateThree", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportReviewTemplate/reportReviewTemplateFour", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/reportReviewTemplate/reportReviewTemplateFive", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/edit/writeReportOne", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/edit/writeReportTwo", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/edit/writeReportThree", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/edit/writeReportFour", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/edit/writeReportFive", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reportview/edit/writeReportSix", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/afterLoan/guaranteeInspection/guaranteeInspectionDetail", "style": {
        "navigationBarTitleText": " 担保检查报告查询"
      }
    }, {
      "path": "pages/batchSales/postloan/afterLoan/guaranteeCheckRevise/guaranteeCheckRevise", "style": {
        "navigationBarTitleText": " 担保检查报告查询"
      }
    }, {
      "path": "pages/batchSales/postloan/postLoanReportDetails/postLoanDetails/postLoanDetails", "style": {
        "navigationBarTitleText": "贷后检查报告查询"
      }
    }, {
      "path": "pages/batchSales/postloan/postLoanReportDetails/viewReport/viewReport", "style": {
        "navigationBarTitleText": "查看报告"
      }
    }, {
      "path": "pages/batchSales/postloan/postLoanReportDetails/viewReport/reportEditor", "style": {
        "navigationBarTitleText": "查看报告"
      }
    }, {
      "path": "pages/batchSales/postloan/reviewAgent/reportReviewTemplate", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/batchSales/postloan/reviewAgent/reportApproval", "style": {
        "navigationBarTitleText": "贷后报告复核"
      }
    }, {
      "path": "pages/otherApply/otherApply", "style": {
        "navigationBarTitleText": "其他类型申请", "enablePullDownRefresh": false, "app-plus": {
          "bounce": "none"
        }
      }
    }, {
      "path": "pages/otherPart/state/submitSuccess", "style": {
        "navigationBarTitleText": "提交成功", "enablePullDownRefresh": false, "app-plus": {
          "bounce": "none"
        }
      }
    }, {
      "path": "pages/otherPart/state/backSuccess", "style": {
        "navigationBarTitleText": "退回成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherPart/lookQuota", "style": {
        "navigationBarTitleText": "查看合同额度", "enablePullDownRefresh": false, "app-plus": {
          "bounce": "none"
        }
      }
    }, {
      "path": "pages/otherPart/lookQuotaInfo", "style": {
        "navigationBarTitleText": "查看合同额度详情", "enablePullDownRefresh": false, "app-plus": {
          "bounce": "none"
        }
      }
    }, {
      "path": "pages/otherApply/lookQuota", "style": {
        "navigationBarTitleText": "查看合同额度", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherApply/lookQuotaInfo", "style": {
        "navigationBarTitleText": "合同额度使用情况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherApply/startCredit", "style": {
        "navigationBarTitleText": "发起征信", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/demo", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/lookQuotaInfo", "style": {
        "navigationBarTitleText": "合同额度使用情况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/lookQuotaInfoGroup", "style": {
        "navigationBarTitleText": "合同额度使用情况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/basicInfo", "style": {
        "navigationBarTitleText": "基本情况", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/familyInfo_detail", "style": {
        "navigationBarTitleText": "基本情况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/_familyInfo_detail", "style": {
        "navigationBarTitleText": "基本情况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/creditAuthorize", "style": {
        "navigationBarTitleText": "征信", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/ratingCredit", "style": {
        "navigationBarTitleText": "评级授信", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/finance", "style": {
        "navigationBarTitleText": "财务情况", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/creditSituation", "style": {
        "navigationBarTitleText": "信用情况", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/batchSales/postloan/postConfirmat/postApproval/postApproval", "style": {
        "navigationBarTitleText": "贷后检查计划调整", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/management", "style": {
        "navigationBarTitleText": "经营情况", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/creditIndex", "style": {
        "navigationBarTitleText": "授信管理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/add_guarantee", "style": {
        "navigationBarTitleText": "增加担保人", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/add_enterprise", "style": {
        "navigationBarTitleText": "增加担保企业", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/add_mortgage", "style": {
        "navigationBarTitleText": "新增抵押物", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/creditAuthorize_names", "style": {
        // "navigationBarTitleText": "征信授权名单",
        // "enablePullDownRefresh": false
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/add_Authorizer", "style": {
        "navigationBarTitleText": "添加授权人", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/add_authorizedEnterprise", "style": {
        "navigationBarTitleText": "添加授权企业", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/finance_detail", "style": {
        "navigationBarTitleText": "财务状况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/guarantee/guaranteeAnalysis", "style": {
        "navigationBarTitleText": "担保分析", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/guarantee/creditReport", "style": {
        "navigationBarTitleText": "财务状况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/imageReport/imageReport", "style": {
        "navigationBarTitleText": "影像及报告查看", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    },

    {
      "path": "pages/creditManage/imageReport/imageReportData", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/imageReport/imageReportView", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/agentHandover/transfer", "style": {
        "navigationBarTitleText": "代办转移", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/agentHandover/handover", "style": {
        "navigationBarTitleText": "待办任务交接", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postConfirmat/postApprovalAdd/postApprovalAdd", "style": {
        "navigationBarTitleText": "新增贷后检查计划调整", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postrecognit/postRecovery/postRecovery", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventoryReview/upInventPhoto/upInventPhoto", "style": {
        "navigationBarTitleText": "整车盘点影像", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/executPostCheck/executPostCheck", "style": {
        "navigationBarTitleText": "贷后检查任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/executPostCheckReback/executPostCheckReback", "style": {
        "navigationBarTitleText": "贷后检查任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/violationCheck/violationCheck", "style": {
        "navigationBarTitleText": "违规流程", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventoryReview/inventDetailPhoto/inventDetailPhoto", "style": {
        "navigationBarTitleText": "整车盘点影像详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/inventoryReview/inventDetailPhoto/certDetailPhoto", "style": {
        "navigationBarTitleText": "合格证盘点影像详情", "enablePullDownRefresh": false
      }
    }, // 集团视图
    {
      "path": "pages/creditManage/groupView/riskInfo", "style": {
        "navigationBarTitleText": "风险信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/credit", "style": {
        "navigationBarTitleText": "征信信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/sales", "style": {
        "navigationBarTitleText": "销售情况", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/report/distributorReport/dealerSurveyReport", "style": {
        "navigationBarTitleText": "授信调查报告",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#FA5B5A",
        "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/groupIllegal", "style": {
        "navigationBarTitleText": "集团各成员违约明细", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/cooperation", "style": {
        "navigationBarTitleText": "合作信誉", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/groupMemberDefault", "style": {
        "navigationBarTitleText": "集团各成员违约明细", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/baseInfo", "style": {
        "navigationBarTitleText": "基本信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/search", "style": {
        "navigationBarTitleText": "集团查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/groupViewMain", "style": {
        "navigationBarTitleText": "集团视图", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/groupView/uasgeList", "style": {
        "navigationBarTitleText": "合同额度使用情况", "enablePullDownRefresh": false
      }
    }, // 集团报告
    {
      "path": "pages/report/groupReport/groupReportMain", "style": {
        "navigationBarTitleText": "集团授信调查报告",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#FA5B5A",
        "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/certificateReview/uploadPhoto/uploadPhoto", "style": {
        "navigationBarTitleText": "合格证盘点影像上传", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/certificateReview/detailPhoto/detailPhoto", "style": {
        "navigationBarTitleText": "合格证影像详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/violationCheckReback/violationCheckReback", "style": {
        "navigationBarTitleText": "违规流程", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/index/workbench", "style": {
        "navigationBarTitleText": "OA", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postConfirmat/postAdjustment/postAdjustment", "style": {
        "navigationBarTitleText": "贷后检查计划调整", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/violationCheck/detailPhoto", "style": {
        "navigationBarTitleText": "整车违规查看全部影像", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/violationCheck/inventoryInfo", "style": {
        "navigationBarTitleText": "盘点信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/approvalTrajectory", "style": {
        "navigationBarTitleText": "审批轨迹", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/adviseAndtrack", "style": {
        "navigationBarTitleText": "调查意见", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/basicInfo_", "style": {
        "navigationBarTitleText": "基本信息", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/cooperation_", "style": {
        "navigationBarTitleText": "合作信誉", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/credit_", "style": {
        "navigationBarTitleText": "征信信息", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/finance_", "style": {
        "navigationBarTitleText": "财务报表", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/management_", "style": {
        "navigationBarTitleText": "经营信息", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/riskInfo_", "style": {
        "navigationBarTitleText": "风险信息", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/guaranteeAnalysis_", "style": {
        // "navigationBarTitleText": "担保信息",
        // "enablePullDownRefresh": false
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/distributorView/imageReport_", "style": {
        "navigationBarTitleText": "影像及报告查看", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/distributorView/imageReportView_", "style": {
        "navigationBarTitleText": "影像及报告查看", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/riskInfo", "style": {
        "navigationBarTitleText": "风险分析", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/batchSales/postloan/postConfirmat/postmatLoad/postmatLoad", "style": {
        "navigationBarTitleText": "贷后检查计划调整", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/riskInfo", "style": {
        "navigationBarTitleText": "风险分析", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/batchSales/postloan/postConfirmat/postmatLoad/postmatLoad", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postConfirmat/postCheckReback/postCheckReback", "style": {
        "navigationBarTitleText": "贷后检查计划调整", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherPart/otherApply", "style": {
        "navigationBarTitleText": "其他类型业务", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherPart/search", "style": {
        "navigationBarTitleText": "其他类型责托搜索", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherPart/startCredit", "style": {
        "navigationBarTitleText": "发起征信", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postLoanReportDetails/comprehensivePage/comprehensivePage", "style": {
        "navigationBarTitleText": "修改报告", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/extension/viewPicture/lookPDF", "style": {
        "navigationBarTitleText": "PDF", "enablePullDownRefresh": false
      }
    }, {
      "path": "components/groupQuota/riskInfoPen", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "components/groupQuota/creditInfo", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "components/groupQuota/sales", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/afterLoan/writeReportSix/writeReportSix", "style": {
        "navigationBarTitleText": "查看报告", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/creditQuery", "style": {
        // "navigationBarTitleText": "",
        // "enablePullDownRefresh": false
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/creditSearchJXS", "style": {
        "navigationBarTitleText": "高级搜索", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/creditInvestigat", "style": {
        "navigationBarTitleText": "征信查询", "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/queryCreditManage", "style": {
        "navigationBarTitleText": "征信查询审批", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    {
      "path": "pages/creditManage/creditInvestigat/queryManyCreditManage", "style": {
        "navigationBarTitleText": "批量征信查询审批", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/upLoadImageView", "style": {
        "navigationBarTitleText": "上传影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/manageCredit", "style": {
        "navigationBarTitleText": "到期影像上传", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    {
      "path": "pages/creditManage/creditInvestigat/upLoadImageReport", "style": {
        "navigationBarTitleText": "上传影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    {
      "path": "pages/creditManage/groupView/personRiskDetail", "style": {
        "navigationBarTitleText": "个人司法数据信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/creditAuthorize_names", "style": {
        "navigationBarTitleText": "征信授权名单", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/add_eleAuthorizer", "style": {
        "navigationBarTitleText": "新增个人征信", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/add_eleAuthorizedEnterprise", "style": {
        "navigationBarTitleText": "添加授权企业", "enablePullDownRefresh": false
      }
    }, //  拆分其他类型路由
    //   发起
    {
      "path": "pages/otherCheck/otherSQ/search", "style": {
        "navigationBarTitleText": "其他类型搜索", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherSQ/otherApply", "style": {
        "navigationBarTitleText": "其他类型", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherSQ/state/submitSuccess", "style": {
        "navigationBarTitleText": "提交成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherInner/otherApply", "style": {
        "navigationBarTitleText": "其他类型", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherInner/state/submitSuccess", "style": {
        "navigationBarTitleText": "提交成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherDX/otherApply", "style": {
        "navigationBarTitleText": "其他类型", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherDX/state/submitSuccess", "style": {
        "navigationBarTitleText": "提交成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherDX/startCredit", "style": {
        "navigationBarTitleText": "发起征信", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherDX/state/backSuccess", "style": {
        "navigationBarTitleText": "退回成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherInner/state/backSuccess", "style": {
        "navigationBarTitleText": "撤销成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/guarantee/addGuaranteePopup", "style": {
        "navigationBarTitleText": "修改担保人", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/guarantee/addEnterprisePopup", "style": {
        "navigationBarTitleText": "修改担保企业", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/guarantee/addMortgagePopup", "style": {
        "navigationBarTitleText": "修改担保抵押质物", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherFinished/otherFinish", "style": {
        "navigationBarTitleText": "其他类型审批结果通知", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherFinished/groupFinish", "style": {
        "navigationBarTitleText": "集团审批结果通知", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherFinished/creditFinish", "style": {
        "navigationBarTitleText": "授信审批结果通知", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherFinished/lookPDF", "style": {
        "navigationBarTitleText": "授信审批结果通知", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/otherFinished/state/submitSuccess", "style": {
        "navigationBarTitleText": "通知成功", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/horizontalScreen/horizontalScreen", "style": {
        "navigationBarTitleText": "经营情况", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue601",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/creditIndex", "style": {
        "navigationBarTitleText": "征信查询", "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/imageReport/viewPDF", "style": {
        "navigationBarTitleText": "查看PDF", "enablePullDownRefresh": false
      }
    }, //####################经销商管理平台代码结束#########################

    //####################车型库代码开始#########################
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
      "path": "pages/riskManage/regionalManager/acquisitionIndex", "style": {
        "navigationBarTitleText": "车价采集任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/regionalManager/handVehicle", "style": {
        "navigationBarTitleText": "车价采集任务处理", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/regionalManager/result", "style": {
        "navigationBarTitleText": "车价采集任务处理", "enablePullDownRefresh": false
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
      "path": "pages/riskManage/regionalManager/handJacket", "style": {
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
    }, //####################车型库代码结束#########################

    //####################风险作业平台代码开始#########################
    {
      "path": "pages/riskTask/disposalMeasures/measuresDetails", "style": {
        "navigationBarTitleText": "处置措施添加", "enablePullDownRefresh": false, "app-plus": {
          "popGesture": "none" //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/riskTask/riskCreate/index", "style": {
        "navigationBarTitleText": "人工风险预警提报（零售）", "enablePullDownRefresh": false, "app-plus": {
          "popGesture": "none" //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/riskTask/riskWholesale/index", "style": {
        "navigationBarTitleText": "人工风险预警提报（批售）", "enablePullDownRefresh": false, "app-plus": {
          "popGesture": "none" //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/riskTask/riskCreate/LoanApplicationInfo", "style": {
        "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskWholesale/riskSearch", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskModelRules/index", "style": {
        "navigationBarTitleText": "自动风险预警审批（模型规则）", "enablePullDownRefresh": false, "app-plus": {
          "popGesture": "none" //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/riskTask/riskModelRules/riskSearch", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskManage/riskEarlyWarningCheck/index", "style": {
        "enablePullDownRefresh": true, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/bCardRetail/index", "style": {
        "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/gpsRisk/index", "style": {
        "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskCreate/openFiles", "style": {
        "navigationBarTitleText": "文件查看", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/bCardRetail/tabPages/earlyWarningSingleDetail", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/gpsRisk/tabPages/earlyWarningSingleDetail", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/secondNetRetail/index", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/secondNetRetail/tabPages/earlyWarningSingleDetail", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/secondNetRetail/tabPages/singleSurveyFeedback", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/secondNetRetail/tabPages/investigationInfoDetail", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskCreate/openFiles", "style": {
        "navigationBarTitleText": "文件查看", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskCreate/riskWarningList", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskWholesale/riskReturn", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskModelRules/feedback", "style": {
        "navigationBarTitleText": "经销商反馈事项添加", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskModelRules/riskReturn", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskCreate/completePages", "style": {
        "navigationBarTitleText": "人工风险预警详情（零售）", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/riskModelRules/feedbackDetails", "style": {
        "navigationBarTitleText": "经销商反馈信息详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/disposalMeasures/measuresChange", "style": {
        "navigationBarTitleText": "处置措施变更", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/disposalMeasures/index", "style": {
        "navigationBarTitleText": "处置跟踪列表", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/disposalMeasures/measuresSearch", "style": {
        "navigationBarTitleText": "选择经销商名称", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskLevelChange/index", "style": {
        "navigationBarTitleText": "经销商风险等级调整", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/disposalMeasures/measuresOption", "style": {
        "navigationBarTitleText": "处置措施添加", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskLevelChange/add", "style": {
        "navigationBarTitleText": "经销商风险等级调整", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskLevelTodo/index", "style": {
        "navigationBarTitleText": "经销商风险等级调整待办", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskLevelChange/searchCust", "style": {
        "navigationBarTitleText": "经销商风险等级调整客户搜索", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/eventConfirm/index", "style": {
        "navigationBarTitleText": "事件认定及处置", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/eventConfirm/add", "style": {
        "navigationBarTitleText": "事件处置新增", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/eventConfirm/chooseCust", "style": {
        "navigationBarTitleText": "客户列表查询", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/modify", "style": {
        "navigationBarTitleText": "变更处置措施", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/disposalMeasures/measuresReturn", "style": {
        "navigationStyle": "custom", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/disposalMeasures/measuresAdd", "style": {
        "navigationBarTitleText": "处置措施添加", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/modify", "style": {
        "navigationBarTitleText": "变更处置措施", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/wholeRetailChain/dismeasures/addMeasures", "style": {
        "navigationBarTitleText": "添加处置措施", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/disposalMeasures/measuresHistory", "style": {
        "navigationBarTitleText": "处置措施变更历史", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/riskTask/disProgress/index", "style": {
        "navigationBarTitleText": "处置进展添加", "enablePullDownRefresh": false, "app-plus": {
          "popGesture": "none" //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureImpl/index", "style": {
        "navigationBarTitleText": "处置跟踪-零售(落实)", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholesaleAutoDecide/index", "style": {
        "navigationBarTitleText": "批售自动判定", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/afAppealTodo/index", "style": {
        "navigationBarTitleText": "af事件申诉待办", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureInvest/index", "style": {
        "navigationBarTitleText": "处置跟踪-零售(审核)", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureInvest2/index", "style": {
        "navigationBarTitleText": "调查台账审批流程", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskWarningReport/riskWarning/index", "style": {
        "navigationBarTitleText": "预警信号查询", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskWarningReport/riskWarning/reportList", "style": {
        "navigationBarTitleText": "预警信号查询", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskWarningReport/report/index", "style": {
        "navigationBarTitleText": "预警信号查询", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskWarningReport/report/reportInfoList", "style": {
        "navigationBarTitleText": "预警信号列表"
      }
    }, {
      "path": "pages/riskWarningReport/report/reportResultList", "style": {
        "navigationBarTitleText": "预警结果列表"
      }
    }, {
      "path": "pages/riskWarningReport/report/reportTimeoutList", "style": {
        "navigationBarTitleText": "超时审批统计列表"
      }
    }, {
      "path": "pages/riskWarningReport/report/reportDisposeList", "style": {
        "navigationBarTitleText": "处置措施列表"
      }
    }, {
      "path": "pages/riskWarningReport/report/reportClassificationList", "style": {
        "navigationBarTitleText": "经销商风险列表"
      }
    }, {
      "path": "pages/riskWarningReport/riskStatement/index", "style": {
        "navigationBarTitleText": "风险报表"
      }
    }, {
      "path": "pages/riskWarningReport/riskStatement/statementList", "style": {
        "navigationBarTitleText": "预警信号列表"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/dealerDetails", "style": {
        "navigationBarTitleText": "经销商预警信号详情"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/riskLevelList", "style": {
        "navigationBarTitleText": "风险分类等级列表", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/riskLevelDetails", "style": {
        "navigationBarTitleText": "风险分类等级详情"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/riskLevelClassification", "style": {
        "navigationBarTitleText": "风险分类等级调整列表"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/earlyWarningSignList", "style": {
        "navigationBarTitleText": "预警信号列表"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/disposalMeasuresList", "style": {
        "navigationBarTitleText": "处罝措施列表"
      }
    }, {
      "path": "pages/riskWarningReport/dealerReport/progressList", "style": {
        "navigationBarTitleText": "处罝进展列表"
      }
    }, {
      "path": "pages/riskTask/wholeRetailChain/index", "style": {
        "navigationBarTitleText": "批零联动", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/riskLevelTodo/riskReturn", "style": {
        "navigationBarTitleText": "风险等级调整待办退回选择", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureImpl/addProgress", "style": {
        "navigationBarTitleText": "处置进展添加", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/measuresQuery/queryList", "style": {
        "navigationBarTitleText": "处置查询列表", "navigationStyle": "custom"
      }
    }, // 关联企业页面
    {
      "path": "pages/creditManage/relationPrise", "style": {
        "navigationBarTitleText": "增加关联企业"
      }
    }, // 编辑关联企业
    {
      "path": "pages/creditManage/edit_relationPrise", "style": {
        "navigationBarTitleText": "编辑关联企业"
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/guaranteeInspect/index", "style": {
        "navigationBarTitleText": "担保检查任务处理", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/vehicleInventSheet/detailPhoto", "style": {
        "navigationBarTitleText": "查看签约图片"
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/guaranteeInspect/indexList", "style": {
        "navigationBarTitleText": "经销商担保信息", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/vehicleInventSheet/newSheetIndex", "style": {
        "navigationBarTitleText": "盘点表电子签"
      }
    }, {
      "path": "pages/riskTask/wholesalesRetail/dismeasures/groupAdd", "style": {
        "navigationBarTitleText": "添加集团成员处置措施"
      }
    }, {
      "path": "pages/riskTask/wholeRetailChain/dismeasures/groupAdd", "style": {
        "navigationBarTitleText": "添加集团成员处置措施"
      }
    }, {
      "path": "pages/riskTask/wholeAndReatailLinkage/index", "style": {
        "navigationBarTitleText": "处置跟踪-批零联动"
      }
    }, {
      "path": "pages/batchSales/postloan/postexecut/writeReport/newWriteReportTwo", "style": {
        "navigationBarTitleText": "撰写报告", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 新增集团客户
    {
      "path": "pages/creditManage/loanApplyGroup", "style": {
        "navigationBarTitleText": "新增集团客户", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 集团成员
    {
      "path": "pages/creditManage/loanApplyGroupPerson", "style": {
        "navigationBarTitleText": "集团成员", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 新增集团成员
    {
      "path": "pages/creditManage/loanApplyGroupMembers", "style": {
        "navigationBarTitleText": "新增集团成员", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 司法风险
    {
      "path": "pages/creditManage/judicial", "style": {
        "navigationBarTitleText": "个人司法数据信息", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 新增基本信息管理层
    {
      "path": "pages/creditManage/newManage", "style": {
        "navigationBarTitleText": "新增共同控制人", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 编辑共同控制人
    {
      "path": "pages/creditManage/edit_manage", "style": {
        "navigationBarTitleText": "编辑管理层", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskWarningReport/riskStatement/reportTimeoutList", "style": {
        "navigationBarTitleText": "超时审批统计列表"
      }
    }, {
      "path": "pages/user/my-user/community", "style": {
        "navigationBarTitleText": "社区精选", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/user/my-user/community-detail", "style": {
        "navigationBarTitleText": "内容详情"
      }
    },

    // 新增股东
    {
      "path": "pages/creditManage/add_shareholder", "style": {
        "navigationBarTitleText": "新增股东", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 编辑股东
    {
      "path": "pages/creditManage/edit_shareholder", "style": {
        "navigationBarTitleText": "编辑股东", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 新增股东（自然人）
    {
      "path": "pages/creditManage/add_shareholderNature", "style": {
        "navigationBarTitleText": "新增股东", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 编辑股东（自然人）
    {
      "path": "pages/creditManage/edit_shareholderNature", "style": {
        "navigationBarTitleText": "编辑股东", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 共同控制人
    {
      "path": "pages/creditManage/add_controler", "style": {
        "navigationBarTitleText": "新增共同控制人", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 第一受益人
    {
      "path": "pages/creditManage/add_firstPerson", "style": {
        "navigationBarTitleText": "新增第一受益人", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 编辑第一受益人
    {
      "path": "pages/creditManage/edit_firstPerson", "style": {
        "navigationBarTitleText": "编辑第一受益人", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 家庭成员
    {
      "path": "pages/creditManage/add_familyMember", "style": {
        "navigationBarTitleText": "新增家庭成员", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 编辑家庭成员
    {
      "path": "pages/creditManage/edit_familyMember", "style": {
        "navigationBarTitleText": "编辑家庭成员", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 关联企业
    {
      "path": "pages/creditManage/add_relevance", "style": {
        "navigationBarTitleText": "新增关联企业", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/wholeAndReatailLinkage/disposalMeasures/modify", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholeAndReatailLinkage/disposalMeasures/changeHistory", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholeAndReatailLinkage/disposalMeasures/review", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholeAndReatailLinkage/tabPages/taskInfobackselct", "style": {
        "navigationBarTitleText": "选择退回哪个节点", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureInvest2/tabPages/taskInfobackselct", "style": {
        "navigationBarTitleText": "选择退回哪个节点", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    //####################风险作业平台代码结束#########################

    // ###################进件二网备案查询代码开始######################
    {
      "path": "pages/filingQuery/query", "style": {
        "navigationStyle": "custom",// 隐藏系统导航栏
        "navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
      }
    }, {
      "path": "pages/filingQuery/result", "style": {
        "navigationBarTitleText": "进件二网备案查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/filingQuery/check", "style": {
        "navigationBarTitleText": "进件二网备案查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/filingQuery/lookImages", "style": {
        "navigationBarTitleText": "进件二网备案查询", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 新备案查询
    {
      "path": "pages/filingNewQuery/query", "style": {
        "navigationStyle": "custom",// 隐藏系统导航栏
        "navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
      }
    }, {
      "path": "pages/filingNewQuery/result", "style": {
        "navigationBarTitleText": "备案管理", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/filingNewQuery/check", "style": {
        "navigationBarTitleText": "备案管理", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/filingNewQuery/lookJxImages", "style": {
        "navigationBarTitleText": "查看影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // ###################进件二网备案查询代码开始######################

    //#######################离线盘点3.0代码开始######################
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
      "path": "pages/batchSales/postloan/execusurety/todoIndex", "style": {
        "navigationBarTitleText": "担保检查任务协作", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/otherCheck/imgUpload", "style": {
        "navigationBarTitleText": "", "enablePullDownRefresh": false, "navigationStyle": "custom"
      }
    }, // 财务报表
    {
      "path": "pages/creditManage/add_financial_table", "style": {
        "navigationBarTitleText": "财务报表", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/creditManage/creditInvestigat/uploadImg", "style": {
        "navigationStyle": "custom", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/batchSales/postloan/dhNotice", "style": {
        "navigationBarTitleText": "贷后检查/担保检查任务通知",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/specialFiling/oldCar/index", "style": {
        "navigationBarTitleText": "进件二网特殊备案",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/specialFiling/newCar/index", "style": {
        "navigationBarTitleText": "新车销售方特殊备案",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/specialFiling/imageShow/index", "style": {
        "navigationBarTitleText": "影像查看", "enablePullDownRefresh": true, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 商用车平台公司备案
    {
      "path": "pages/specialNewFiling/businessCarFirm/index", "style": {
        "navigationBarTitleText": "商用车平台公司备案",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/specialNewFiling/businessCarFirm/uploadPage", "style": {
        "navigationBarTitleText": "查看影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 开票方特殊备案
    {
      "path": "pages/specialNewFiling/darwer/index", "style": {
        "navigationBarTitleText": "开票方特殊备案",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/specialNewFiling/darwer/uploadPage", "style": {
        "navigationBarTitleText": "查看影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 燃油商用车特殊备案
    {
      "path": "pages/specialNewFiling/ryCars/index", "style": {
        "navigationBarTitleText": "燃油商用车特殊备案",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 燃油商用车调查报告
    {
      "path": "pages/specialNewFiling/report/gkReport", "style": {
        "navigationBarTitleText": "查看调查报告",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    {
      "path": "pages/specialNewFiling/imageShow/lookRyImages", "style": {
        "navigationBarTitleText": "查看影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    // 新能源商用车特殊备案
    {
      "path": "pages/specialNewFiling/xnyCars/index", "style": {
        "navigationBarTitleText": "新能源商用车特殊备案",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 新能源商用车调查报告
    {
      "path": "pages/specialNewFiling/report/xnyReport", "style": {
        "navigationBarTitleText": "新能源商用车调查报告",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/specialNewFiling/imageShow/lookXnyImages", "style": {
        "navigationBarTitleText": "查看影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // 驾校调查报告
    {
      "path": "pages/filingNewQuery/components/jxReport", "style": {
        "navigationBarTitleText": "驾校调查报告",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/filingsCPOnlineCar/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/filingsCPOnlineCar/investigationReport", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/filingsCPOnlineCar/uploadPage", "style": {
        "navigationBarTitleText": "查看影像", "navigationBarBackgroundColor": "#FFFFFF"
      }
    },

    {
      "path": "pages/otherCheck/otherFinished/noPassNotice", "style": {
        "navigationBarTitleText": "审批结果通知", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/bossView/index", "style": {
        "navigationBarTitleText": "数智Cheryfs", "navigationStyle": "custom", "app-plus": {
          "titleView": false
        }
      }
    }, {
      "path": "pages/riskTask/publicPage/hisWarnInfo", "style": {
        "navigationBarTitleText": "历史预警信息查询",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/publicPage/groupAdd", "style": {
        "navigationBarTitleText": "添加集团成员处置措施", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/publicPage/disposalDetail", "style": {
        "navigationBarTitleText": "处置措施详情", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/secondWholesale/index", "style": {
        "navigationBarTitleText": "批售二网预警审批",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/index", "style": {
        "navigationBarTitleText": "专项排查(零售)",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/wholesalesRetail/index", "style": {
        "navigationBarTitleText": "专项排查(批售)",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/wholesalesRetail/dismeasures/addMeasures", "style": {
        "navigationBarTitleText": "添加处置措施",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/taskBack/index", "style": {
        "navigationBarTitleText": "任务反馈", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/backLedger", "style": {
        "navigationBarTitleText": "回访台账", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/addMeasures", "style": {
        "navigationBarTitleText": "添加处置措施",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/measuresOption", "style": {
        "navigationBarTitleText": "选择处置措施",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/measuresHistory", "style": {
        "navigationBarTitleText": "处置措施变更历史",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/measuresDetail", "style": {
        "navigationBarTitleText": "处置措施详情",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/secondWholesale/tabPages/opinionMore", "style": {
        "navigationBarTitleText": "处置措施详情",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/measuresChange", "style": {
        "navigationBarTitleText": "变更处置措施",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesLackdata/tabPages/ledgerBack", "style": {
        "navigationBarTitleText": "回访台账", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesLackdata/index", "style": {
        "navigationBarTitleText": "任务反馈", "enablePullDownRefresh": false, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/secondWholesale/tabPages/alertSumi", "style": {
        "navigationBarTitleText": "批售预警信息汇总",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/secondWholesale/tabPages/adddisOpinion", "style": {
        "navigationBarTitleText": "添加处置措施",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/secondWholesale/tabPages/addmemberOpinion", "style": {
        "navigationBarTitleText": "添加集团成员处置措施",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/secondWholesale/tabPages/dismeasuresChange", "style": {
        "navigationBarTitleText": "变更处置措施",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/invesRetail/tabPages/taskInfobackselct", "style": {
        "navigationBarTitleText": "选择退回哪个节点",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/wholesalesRetail/index", "style": {
        "navigationBarTitleText": "批售专项排查",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, // {
    // 	"path": "pages/riskTask/wholesalesRetail/index",
    // 	"style": {
    // 		"navigationBarTitleText": "专项排查(批售)",
    // 		"enablePullDownRefresh": false,
    // 		"navigationBarBackgroundColor": "#FFFFFF"
    // 	}
    // },
    {
      "path": "pages/riskTask/secondNetRetail/alarmSignalOpration/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "components/riskTask/disposalMeasures/changeHistory", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "components/riskTask/disposalMeasures/add", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureInvest2/disposalMeasures/add", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholeAndReatailLinkage/disposalMeasures/add", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "components/riskTask/disposalMeasures/modify", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "components/riskTask/disposalMeasures/review", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureInvest2/disposalMeasures/review", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/partnerNetworkAccess/manage/index", "style": {
        "navigationBarTitleText": "合作商入网管理",
        "enablePullDownRefresh": true,
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF",
        "onReachBottomDistance": 150
      }
    }, {
      "path": "pages/partnerNetworkAccess/status/index", "style": {
        "navigationBarTitleText": "入网预申请录入",
        "navigationStyle": "custom",
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/enterpriseQuery/index", "style": {
        "navigationBarTitleText": "企业信息查询",
        "enablePullDownRefresh": true,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/selected/selected", "style": {
        "navigationBarTitleText": "精选功能", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/recording/index", "style": {
        "navigationBarTitleText": "入网信息补录", "navigationStyle": "custom", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/affiliate/index", "style": {
        "navigationBarTitleText": "关联公司查询",
        "enablePullDownRefresh": true,
        "navigationBarBackgroundColor": "#FFFFFF",
        "onReachBottomDistance": 150
      }
    }, {
      "path": "pages/partnerNetworkAccess/brand/index", "style": {
        "navigationBarTitleText": "选择品牌", "enablePullDownRefresh": true, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/empower/index", "style": {
        "navigationBarTitleText": "授权包选择", "enablePullDownRefresh": true, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/area/index", "style": {
        "navigationBarTitleText": "地区选择", "enablePullDownRefresh": true, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/enterprise/index", "style": {
        "navigationBarTitleText": "企业信息查询",
        "enablePullDownRefresh": true,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/bankPlace/index", "style": {
        "navigationBarTitleText": "开户银行所在地",
        "enablePullDownRefresh": true,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/result/index", "style": {
        "navigationBarTitleText": "结果",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationStyle": "custom",
        "app-plus": {
          "popGesture": "none" //配置 此句代码 禁止ios手势退回
        }
      }
    }, {
      "path": "pages/partnerNetworkAccess/bankName/index", "style": {
        "navigationBarTitleText": "银行选择", "enablePullDownRefresh": true, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/partnerNetworkAccess/bankType/index", "style": {
        "navigationBarTitleText": "银行选择", "enablePullDownRefresh": true, "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/riskTask/WSDMTimeoutStatistics/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/WSDMTimeoutStatistics/wsdmList", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/dealerRiskClassificationStatistics/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/dealerRiskClassificationStatistics/reportClassificationList", "style": {
        "navigationBarTitleText": "经销商风险列表"
      }
    }, {
      "path": "pages/riskTask/earlyWarningOvertimeAndRetuenStatistics/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/earlyWarningOvertimeAndRetuenStatistics/earlyWarningList", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholesalesRetail/dismeasures/modify", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholeRetailChain/dismeasures/modify", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/wholesalesRetail/dismeasures/measuresHistory", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/dealersWarningStatistics/index", "style": {
        "navigationBarTitleText": "经销商预警统计表"
      }
    }, {
      "path": "pages/riskTask/retailDisMeasureInvest2/taskBack/index", "style": {
        "navigationStyle": "custom"
      }
    }, {
      "path": "pages/riskTask/publicPage/opinionSelect", "style": {
        "navigationBarTitleText": "调查意见", "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/creditManage/handle/reportFormsSign", "style": {
        "navigationBarTitleText": "报表管理详情", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/creditManage/handle/elecCreditAuthor", "style": {
        "navigationBarTitleText": "征信电子授权处置", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/otherCheck/publicPage/add_perGuarant", "style": {
        "navigationBarTitleText": "自然担保人维护",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/otherCheck/publicPage/add_comGuarant", "style": {
        "navigationBarTitleText": "企业担保人维护",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/otherCheck/publicPage/add_mortGuarant", "style": {
        "navigationBarTitleText": "不动产抵押信息维护",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, {
      "path": "pages/creditManage/reviewOpinions", "style": {
        "navigationBarTitleText": "审查意见", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/approvalOpinions", "style": {
        "navigationBarTitleText": "审批意见", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/creditManage/approvalOpinionBook", "style": {
        "navigationBarTitleText": "审批意见书", "enablePullDownRefresh": false, "app-plus": {
          "titleNView": {
            "buttons": [{
              "fontSrc": "/static/iconfont/iconfont.ttf",
              "text": "\ue610",
              "color": "#333333",
              "fontSize": "25px",
              "onclick": "menu"
            }]
          }
        }
      }
    }, {
      "path": "pages/otherCheck/publicPage/addMember", "style": {
        "navigationBarTitleText": "成员信息维护",
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor": "#FFFFFF"
      }
    }, //投诉处理录音材料
    {
      "path": "pages/salesManagement/complaintHandling/complainAudio", "style": {
        "navigationBarTitleText": "录音材料", "enablePullDownRefresh": true
      }
    }, //投诉处理历史催收记录
    {
      "path": "pages/salesManagement/complaintHandling/complainHistory", "style": {
        "navigationBarTitleText": "客户历史催收记录", "enablePullDownRefresh": true
      }
    }, //投诉处理影像列表
    {
      "path": "pages/salesManagement/complaintHandling/complainImage", "style": {
        "navigationBarTitleText": "影像材料", "enablePullDownRefresh": true
      }
    }, {
      "path": "pages/salesManagement/complaintHandling/complainAudioDetail", "style": {
        "navigationBarTitleText": "信审录音", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/salesManagement/complaintHandling/complainVideo", "style": {
        "navigationBarTitleText": "双录视频", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/salesManagement/complaintHandling/complainImageView", "style": {
        "navigationBarTitleText": "影像材料", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/batchSales/postloan/execusurety/guaranteeQuery/index", "style": {
        "navigationBarTitleText": "担保检查记录查询", "navigationStyle": "custom"
      }
    }, {
      "path": "pages/productQuery/index", "style": {
        "navigationBarTitleText": "对公产品查询", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/productQuery/detail", "style": {
        "navigationBarTitleText": "可用产品测算", "enablePullDownRefresh": false
      }
    }, {
      "path": "pages/salesManagement/complaintHandling/complainImageViewPdf", "style": {
        "navigationBarTitleText": "影像材料", "enablePullDownRefresh": false
      }
    }],
}

const pub = require('./main/publicPage');
const signIn = require('./main/signIn');
const tabbar = require('./main/tabbar');
const user = require('./main/user');

const batchSales = require('./sub/batchSales');
const _batchSales = pagesSub(batchSales);
const creditManage = require('./sub/creditManage');
const _creditManage = pagesSub(creditManage);
const helpCenter = require('./sub/helpCenter');
const _helpCenter = pagesSub(helpCenter);
const notice = require('./sub/notice');
const _notice = pagesSub(notice);
const otherCheck = require('./sub/otherCheck');
const _otherCheck = pagesSub(otherCheck);
const partnerNetworkAccess = require('./sub/partnerNetworkAccess');
const _partnerNetworkAccess = pagesSub(partnerNetworkAccess);
const query = require('./sub/query');
const _query = pagesSub(query);
const riskManage = require('./sub/riskManage');
const _riskManage = pagesSub(riskManage);
const riskTask = require('./sub/riskTask');
const _riskTask = pagesSub(riskTask);
const riskWarningReport = require('./sub/riskWarningReport');
const _riskWarningReport = pagesSub(riskWarningReport);
const salesManagement = require('./sub/salesManagement');
const _salesManagement = pagesSub(salesManagement);


// 展开
function pagesSub(base = []) {
  const arr = [];
  const [{root, pages = []}] = base;
  pages.forEach(x => {
    arr.push({
      ...x, path: `${root}/${x.path}`
    })
  })

  return arr;
}

const mainTotal = pub.length + signIn.length + tabbar.length + user.length;
const subTotal = _batchSales.length + _creditManage.length + _helpCenter.length + _notice.length + _otherCheck.length + _partnerNetworkAccess.length + _query.length + _riskManage.length + _riskTask.length + _riskWarningReport.length + _salesManagement.length;

// 长度没有差异
const pack = aa.pages.length;
const unpack = mainTotal + subTotal;
console.log(unpack, pack, pack === unpack);

// 配置项差异
const packPages = aa.pages;
const unpackPages = [...pub, ...signIn, ...tabbar, ...user, ..._batchSales, ..._creditManage, ..._helpCenter, ..._notice, ..._otherCheck, ..._partnerNetworkAccess, ..._query, ..._riskManage, ..._riskTask, ..._riskWarningReport, ..._salesManagement];

// 存在在原有的路径
const inPack = [];

// 存在在原有的路径
const notInPack = [];

// 相同的style
const sameStyle = [];
// 不相同的style
const notSameStyle = [];

// 相同的path、style
const sameStylePath = []
// 不相同的path、style
const notSameStylePath = []

unpackPages.forEach(x => {
  const {path, style} = x;

  let _inPack = packPages.filter(y => y.path === path);
  if (_inPack.length === 0) {
    notInPack.push(x);
  } else {
    inPack.push(_inPack);
  }

  let _sameStyle = packPages.filter(y => JSON.stringify(y.style ?? {}) === JSON.stringify(style));
  if (_sameStyle.length === 0) {
    notSameStyle.push(x);
  } else {
    sameStyle.push(_sameStyle);
  }

  let _sameStylePath = packPages.filter(y => ((y.path === path) && (JSON.stringify(y.style ?? {}) === JSON.stringify(style))));
  if (_sameStylePath.length === 0) {
    notSameStylePath.push(x);
  } else {
    sameStylePath.push(_sameStylePath);
  }
});

console.log('path相同：', notInPack.length, inPack.length)
console.log('style相同：', notSameStyle.length, sameStyle.length)
console.log('-----------------------------------------------------------------')
console.log('titleView', notSameStyle.map(x => x.path));
console.log('-----------------------------------------------------------------')
console.log('path && style相同：', notSameStylePath.length, sameStylePath.length)
console.log('----------------------------------------------------------------')
console.log(notSameStylePath.map(x => x.path));
console.log('-----------------------------------------------------------------')

