module.exports=[
    //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
        "path": "pages/index/init",
        "style": {
            // "navigationBarTitleText": "登录",
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    //#ifdef APP-PLUS
    //启动页
    {
        "path": "pages/guide/judge",
        "style": {
            "enablePullDownRefresh": false,
            "onReachBottomDistance": 100,
            "navigationStyle": "custom",
            "app-plus": {
                "contentAdjust": false,
                "bounce": "none"
            }
        }
    },
    {
        "path": "pages/guide/guide",
        "style": {
            "enablePullDownRefresh": false,
            "onReachBottomDistance": 100,
            "navigationStyle": "custom",
            "app-plus": {
                "contentAdjust": false,
                "bounce": "none"
            }
        }
    },
    // #endif
    {
        "path": "pages/index/scanConfirm",
        "style": {
            "navigationBarTitleText": "六访报告",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/ceshi/ceshi",
        "style": {
            "navigationStyle": "测试",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    {
        "path": "pages/index/banner",
        "style": {
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false,
                "scrollIndicator": "none"
            }
        }
    },
    {
        "path": "pages/dataStatistics/risk",
        "style": {
            "navigationBarTitleText": "",
            "navigationBarBackgroundColor": "#F6F7FB",
            "enablePullDownRefresh": true
        }
    },
    //数据统计
    //经营看板
    {
        "path": "pages/dataStatistics/home",
        "style": {
            "navigationBarTitleText": "经营看板",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },

    //展期业务
    {
        "path": "pages/extensionBusiness/index",
        "style": {
            "navigationBarTitleText": "展期试算",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/extensionBusiness/schemeSelect",
        "style": {
            "navigationBarTitleText": "展期方案选择",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //销售监控
    {
        "path": "pages/dataStatistics/salesMonitoring",
        "style": {
            "navigationBarTitleText": "销售监控",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //销售监控（省份）
    {
        "path": "pages/dataStatistics/provinceSalesMonitoring",
        "style": {
            "navigationBarTitleText": "销售监控",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //销售监控（经销商）
    {
        "path": "pages/dataStatistics/agentSalesMonitoring",
        "style": {
            "navigationBarTitleText": "销售监控",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //奇瑞体系
    {
        "path": "pages/dataStatistics/cherySystem",
        "style": {
            "navigationBarTitleText": "本品牌渗透率",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //多品牌
    {
        "path": "pages/dataStatistics/multiBrand",
        "style": {
            "navigationBarTitleText": "多品牌渠道放款",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //多品牌业务线
    {
        "path": "pages/dataStatistics/multiBrandBusinessLine",
        "style": {
            "navigationBarTitleText": "多品牌渠道放款",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //金牌经理
    {
        "path": "pages/dataStatistics/goldMedalManager",
        "style": {
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false,
                "bounce": "none"
            }
        }
    },
    //经营效益
    {
        "path": "pages/dataStatistics/operatingEfficiency",
        "style": {
            "navigationBarTitleText": "经营效益",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //lianxi测试用
    {
        "path": "pages/lianxi/lianxi",
        "style": {
            "navigationBarTitleText": "练习",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 登录
    {
        "path": "pages/login/login",
        "style": {
            // "navigationBarTitleText": "登录",
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    // 指纹登录
    {
        "path": "pages/fingerprint/fingerprint",
        "style": {
            // "navigationBarTitleText": "登录",
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    // 人脸登录
    {
        "path": "pages/humanFace/humanFace",
        "style": {
            // "navigationBarTitleText": "登录",
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    //隐私协议
    {
        "path": "pages/service/privacy",
        "style": {
            "navigationBarTitleText": "",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/service/service",
        "style": {
            "navigationBarTitleText": "",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 零售经销经营报表
    {
        "path": "pages/chart/chart",
        "style": {
            "navigationBarTitleText": "零售经销经营报表",
            "navigationBarBackgroundColor": "#FFFFFF",
        }
    },
    //城市的图表
    {
        "path": "pages/chart/chartCity",
        "style": {
            "navigationBarTitleText": "城市经营报表",
            "navigationBarBackgroundColor": "#FFFFFF",
        }
    },
    {
        "path": "pages/chart/chartArea",
        "style": {
            "navigationBarTitleText": "大区经营报表",
            "navigationBarBackgroundColor": "#FFFFFF",
        }
    },
    {
        "path": "pages/chart/proChart",
        "style": {
            "navigationBarTitleText": "省区经营报表",
            "navigationBarBackgroundColor": "#FFFFFF",
        }
    },
    // 忘记密码
    {
        "path": "pages/forgetPas/index",
        "style": {
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    // 修改密码
    {
        "path": "pages/changePas/index",
        "style": {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTitleText": "修改密码"
        }
    },
    // 刚进入时重置密码
    {
        "path": "pages/changePas/resetpsw",
        "style": {
            "navigationBarTitleText": "修改密码",
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    // 已注册或者密码过期用户修改密码
    {
        "path": "pages/resetPas/index",
        "style": {
            "navigationBarTitleText": "修改密码",
            "navigationStyle": "custom"

        }
    },
    {
        "path": "pages/message/messageCenter",
        "style": {
            "navigationBarTitleText": "消息中心"
        }
    },
    {
        "path": "pages/message/messageDetail",
        "style": {
            "navigationBarTitleText": "消息",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/message/ystemInforms",
        "style": {
            "navigationBarTitleText": "系统通知",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/ceshi2/ceshi2",
        "style": {
            "navigationBarTitleText": "测试",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/ceshi3/ceshi3",
        "style": {
            "navigationBarTitleText": "测试3",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/message/messageCenter",
        "style": {
            "navigationBarTitleText": "消息中心"
        }
    },
    {
        "path": "pages/message/messageDetail",
        "style": {
            "navigationBarTitleText": "消息",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/message/ystemInforms",
        "style": {
            "navigationBarTitleText": "系统通知",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/ceshi2/ceshi2",
        "style": {
            "navigationBarTitleText": "测试",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/ceshi3/ceshi3",
        "style": {
            "navigationBarTitleText": "测试3",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //逾期催收记录查询
    {
        "path": "pages/overdueCollection/overdueForm",
        "style": {
            "navigationBarTitleText": "逾期催收记录查询",
            "navigationStyle": "custom"
        }
    },
    //逾期客户列表
    {
        "path": "pages/overdueCollection/overdueList",
        "style": {
            "navigationBarTitleText": "逾期客户列表",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    //逾期客户历史催收记录
    {
        "path": "pages/overdueCollection/overdueRecord",
        "style": {
            "navigationBarTitleText": "逾期客户历史催收记录",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/workBench/workGuide",
        "style": {
            "navigationBarTitleText": "操作指引",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/retailReport/moreLists/moreLists",
        "style": {
            "navigationBarTitleText": "首页",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/retailReport/disapproval",
        "style": {
            "navigationBarTitleText": "",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/afterSale/reportReview/reportReview",
        "style": {
            "navigationBarTitleText": "贷后报告复核",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/afterSale/reportReview/reportReviewTemplate",
        "style": {
            "navigationBarTitleText": "贷后报告复核",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/afterSale/postLoanDetails/postLoanDetails",
        "style": {
            "navigationBarTitleText": "贷后检查报告查询",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/afterSale/guaranteeCheck/guaranteeCheck",
        "style": {
            "navigationBarTitleText": "担保检查报告查询",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/afterSale/guaranteeCheckDetails/guaranteeCheckDetails",
        "style": {
            "navigationBarTitleText": "查看报告",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/afterSale/guaranteeCheckRevise/guaranteeCheckRevise",
        "style": {
            "navigationBarTitleText": "查看报告",
            "enablePullDownRefresh": false,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/grantcredit/grantcredit",
        "style": {
            "navigationBarTitleText": "授信额度",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/grantcredit/lookImages",
        "style": {
            "navigationBarTitleText": "查看额度调配影像",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/grantcredit/usageList",
        "style": {
            "navigationBarTitleText": "合同额度使用情况",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/afterSale/afterSalesManagement/afterSalesManagement",
        "style": {
            "navigationBarTitleText": "贷后检查管理",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/afterSale/afterSaleDetails/afterSaleDetails",
        "style": {
            "navigationBarTitleText": "贷后检查报告查询",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/afterSale/viewReport/viewReport",
        "style": {
            "navigationBarTitleText": "贷后检查报告查询",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/afterSale/viewReport/reportEditor",
        "style": {
            "navigationBarTitleText": "贷后检查报告查询",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/grantcredit/riskDynamics",
        "style": {
            "navigationBarTitleText": "风险动态",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/grantcredit/quotaAllocation",
        "style": {
            "navigationBarTitleText": "额度调配",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/otherApply/otherApply",
        "style": {
            "navigationBarTitleText": "其他类型申请",
            "enablePullDownRefresh": false,
            "app-plus": {
                "bounce": "none"
            }
        }
    },
    {
        "path": "pages/otherPart/state/submitSuccess",
        "style": {
            "navigationBarTitleText": "提交成功",
            "enablePullDownRefresh": false,
            "app-plus": {
                "bounce": "none"
            }
        }
    },
    {
        "path": "pages/otherPart/state/backSuccess",
        "style": {
            "navigationBarTitleText": "退回成功",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/otherPart/lookQuota",
        "style": {
            "navigationBarTitleText": "查看合同额度",
            "enablePullDownRefresh": false,
            "app-plus": {
                "bounce": "none"
            }
        }
    },
    {
        "path": "pages/otherPart/lookQuotaInfo",
        "style": {
            "navigationBarTitleText": "查看合同额度详情",
            "enablePullDownRefresh": false,
            "app-plus": {
                "bounce": "none"
            }
        }
    },
    {
        "path": "pages/otherApply/lookQuota",
        "style": {
            "navigationBarTitleText": "查看合同额度",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/otherApply/lookQuotaInfo",
        "style": {
            "navigationBarTitleText": "合同额度使用情况",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/otherApply/startCredit",
        "style": {
            "navigationBarTitleText": "发起征信",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/report/distributorReport/dealerSurveyReport",
        "style": {
            "navigationBarTitleText": "授信调查报告",
            "navigationBarTextStyle": "white",
            "navigationBarBackgroundColor": "#FA5B5A",
            "enablePullDownRefresh": false
        }
    },
    // 集团报告
    {
        "path": "pages/report/groupReport/groupReportMain",
        "style": {
            "navigationBarTitleText": "集团授信调查报告",
            "navigationBarTextStyle": "white",
            "navigationBarBackgroundColor": "#FA5B5A",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/index/workbench",
        "style": {
            "navigationBarTitleText": "OA",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/otherPart/otherApply",
        "style": {
            "navigationBarTitleText": "其他类型业务",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/otherPart/search",
        "style": {
            "navigationBarTitleText": "其他类型责托搜索",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/otherPart/startCredit",
        "style": {
            "navigationBarTitleText": "发起征信",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "components/groupQuota/riskInfoPen",
        "style": {
            "navigationBarTitleText": "",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "components/groupQuota/creditInfo",
        "style": {
            "navigationBarTitleText": "",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "components/groupQuota/sales",
        "style": {
            "navigationBarTitleText": "",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/horizontalScreen/horizontalScreen",
        "style": {
            "navigationBarTitleText": "经营情况",
            "enablePullDownRefresh": false,
            "app-plus": {
                "titleNView": {
                    "buttons": [
                        {
                            "fontSrc": "/static/iconfont/iconfont.ttf",
                            "text": "\ue601",
                            "color": "#333333",
                            "fontSize": "25px",
                            "onclick": "menu"
                        }
                    ]
                }
            }
        }
    },
    {
        "path": "pages/filingQuery/query",
        "style": {
            "navigationStyle": "custom" ,// 隐藏系统导航栏
            "navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
        }
    },
    {
        "path": "pages/filingQuery/result",
        "style": {
            "navigationBarTitleText": "进件二网备案查询",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/filingQuery/check",
        "style": {
            "navigationBarTitleText": "进件二网备案查询",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/filingQuery/lookImages",
        "style": {
            "navigationBarTitleText": "进件二网备案查询",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 新备案查询
    {
        "path": "pages/filingNewQuery/query",
        "style": {
            "navigationStyle": "custom" ,// 隐藏系统导航栏
            "navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
        }
    },
    {
        "path": "pages/filingNewQuery/result",
        "style": {
            "navigationBarTitleText": "备案管理",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/filingNewQuery/check",
        "style": {
            "navigationBarTitleText": "备案管理",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/filingNewQuery/lookJxImages",
        "style": {
            "navigationBarTitleText": "查看影像",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // ###################进件二网备案查询代码开始######################

    //#######################离线盘点3.0代码开始######################
    {
        "path": "pages/offline-inventory/index",
        "style": {
            "navigationBarTitleText": "待盘点扫描任务列表",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/offline-inventory/inventory-index",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "pages/offline-inventory/handle-inventory",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "pages/specialFiling/oldCar/index",
        "style": {
            "navigationBarTitleText": "进件二网特殊备案",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/specialFiling/newCar/index",
        "style": {
            "navigationBarTitleText": "新车销售方特殊备案",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/specialFiling/imageShow/index",
        "style": {
            "navigationBarTitleText": "影像查看",
            "enablePullDownRefresh": true,
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 商用车平台公司备案
    {
        "path": "pages/specialNewFiling/businessCarFirm/index",
        "style": {
            "navigationBarTitleText": "商用车平台公司备案",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/specialNewFiling/businessCarFirm/uploadPage",
        "style": {
            "navigationBarTitleText": "查看影像",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 开票方特殊备案
    {
        "path": "pages/specialNewFiling/darwer/index",
        "style": {
            "navigationBarTitleText": "开票方特殊备案",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/specialNewFiling/darwer/uploadPage",
        "style": {
            "navigationBarTitleText": "查看影像",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 燃油商用车特殊备案
    {
        "path": "pages/specialNewFiling/ryCars/index",
        "style": {
            "navigationBarTitleText": "燃油商用车特殊备案",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 燃油商用车调查报告
    {
        "path": "pages/specialNewFiling/report/gkReport",
        "style": {
            "navigationBarTitleText": "查看调查报告",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    
    {
        "path": "pages/specialNewFiling/imageShow/lookRyImages",
        "style": {
            "navigationBarTitleText": "查看影像",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },

    // 新能源商用车特殊备案
    {
        "path": "pages/specialNewFiling/xnyCars/index",
        "style": {
            "navigationBarTitleText": "新能源商用车特殊备案",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 新能源商用车调查报告
    {
        "path": "pages/specialNewFiling/report/xnyReport",
        "style": {
            "navigationBarTitleText": "新能源商用车调查报告",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/specialNewFiling/imageShow/lookXnyImages",
        "style": {
            "navigationBarTitleText": "查看影像",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    // 驾校调查报告
    {
        "path": "pages/filingNewQuery/components/jxReport",
        "style": {
            "navigationBarTitleText": "驾校调查报告",
            "enablePullDownRefresh": true,
            "navigationStyle":"custom",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/filingsCPOnlineCar/index",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "pages/filingsCPOnlineCar/investigationReport",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "pages/filingsCPOnlineCar/uploadPage",
        "style": {
            "navigationBarTitleText": "查看影像",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/bossView/index",
        "style": {
            "navigationBarTitleText": "数智Cheryfs",
            "navigationStyle": "custom",
            "app-plus": {
                "titleNView": false
            }
        }
    },
    {
        "path": "components/riskTask/disposalMeasures/changeHistory",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "components/riskTask/disposalMeasures/add",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "components/riskTask/disposalMeasures/modify",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "components/riskTask/disposalMeasures/review",
        "style": {
            "navigationStyle": "custom"
        }
    },
    {
        "path": "pages/selected/selected",
        "style": {
            "navigationBarTitleText": "精选功能",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    {
        "path": "pages/productQuery/index",
        "style": {
            "navigationBarTitleText": "对公产品查询",
            "enablePullDownRefresh": false
        }
    },
    {
        "path": "pages/productQuery/detail",
        "style": {
            "navigationBarTitleText": "可用产品测算",
            "enablePullDownRefresh": false
        }
    }
]