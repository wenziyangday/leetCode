module.exports=[{
    "root": "pages/creditManage",
    "pages": [
        {
			"path": "groupQuota/other",
			"style": {
				"navigationBarTitleText": "集团额度调配",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupQuota/viewPicture/viewPicture",
			"style": {
				"navigationBarTitleText": "申请材料",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupQuota/viewPicture/viewOtherPicture",
			"style": {
				"navigationBarTitleText": "其他材料",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupQuota/viewPicture/viewPictureLook",
			"style": {
				"navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupQuota/lookReport",
			"style": {
				"navigationBarTitleText": "查看报告",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupQuota/viewPicture/lookPDF",
			"style": {
				"navigationBarTitleText": "查看图片",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupQuota/viewPicture/otherlookPDF",
			"style": {
				"navigationBarTitleText": "查看图片",
				"enablePullDownRefresh": false
			}
		},
		// 提交成功
		{
			"path": "groupQuota/viewPicture/submitSuccessOther",
			"style": {
				"navigationBarTitleText": "提交成功",
				"enablePullDownRefresh": false
			}
		},
		// 退回
		{
			"path": "groupQuota/viewPicture/completeResultOther",
			"style": {
				"navigationBarTitleText": "退回成功",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupQuota/otherDetail",
			"style": {
				"navigationBarTitleText": "合同明细",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "electronics/eleAuthorize_names",
			"style": {
				// "navigationBarTitleText": "电子征信授权名单",
				// "enablePullDownRefresh": false
				"navigationStyle": "custom"
			}
		},
		{
			"path": "electronics/eleAuthorize",
			"style": {
				"navigationBarTitleText": "电子征信授权",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "electronics/add_eleAuthorizer",
			"style": {
				"navigationBarTitleText": "添加授权人",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "electronics/add_eleAuthorizedEnterprise",
			"style": {
				"navigationBarTitleText": "添加授权企业",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "select/advancedSearch",
			"style": {
				"navigationBarTitleText": "高级搜索",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "select/select",
			"style": {
				"navigationBarTitleText": "征信查询",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"text": "\ue63c",
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"fontSize": "22px",
								"width": "50rpx"
							}
						]
					}
				}
			}
		},
		{
			"path": "speed/speedSelect",
			"style": {
				"navigationStyle": "custom"
			}
		},
		{
			"path": "speed/speedDetails",
			"style": {
				"navigationBarTitleText": "审批进度详情",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "speed/speedSearch",
			"style": {
				"navigationBarTitleText": "",
				"navigationStyle": "custom",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"text": "搜索",
								"fontSize": "16px"
							}
						]
					}
				}
			}
		},
        
		{
			"path": "loanApply",
			"style": {
				"navigationBarTitleText": "贷款申请",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "handle/index",
			"style": {
				"navigationBarTitleText": "合同签订管理",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"text": "下载",
								"fontSize": "16",
								"width": "80"
							}
						]
					}
				}
			}
		},
		{
			"path": "handle/handle",
			"style": {
				"navigationBarTitleText": "合同签订管理",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "handle/lookPDF",
			"style": {
				"navigationBarTitleText": "查看PDF",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "handle/indexDetail",
			"style": {
				"navigationBarTitleText": "合同签订管理详情",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "handle/reportManagerDetail",
			"style": {
				"navigationBarTitleText": "报表管理详情",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "handle/queryCreditContractDetail",
			"style": {
				"navigationBarTitleText": "征信签约管理详情",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "handle/queryCreditProcessDetail",
			"style": {
				"navigationBarTitleText": "征信签约审核详情",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "handle/uploadPhoto/uploadPhoto",
			"style": {
				"navigationBarTitleText": "合同签订管理影像上传",
				"enablePullDownRefresh": false,
				"navigationStyle": "custom"
			}
		},
		{
			"path": "handle/indexSearch",
			"style": {
				"navigationBarTitleText": "合同签订管理",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "distributorId/one",
			"style": {
				"navigationBarTitleText": "经销商编号生成",
				"enablePullDownRefresh": false
			}
		},
        
		{
			"path": "demo",
			"style": {
				"navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "lookQuotaInfo",
			"style": {
				"navigationBarTitleText": "合同额度使用情况",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "lookQuotaInfoGroup",
			"style": {
				"navigationBarTitleText": "合同额度使用情况",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "basicInfo",
			"style": {
				"navigationBarTitleText": "基本情况",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "familyInfo_detail",
			"style": {
				"navigationBarTitleText": "基本情况",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "_familyInfo_detail",
			"style": {
				"navigationBarTitleText": "基本情况",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "creditAuthorize",
			"style": {
				"navigationBarTitleText": "征信",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "ratingCredit",
			"style": {
				"navigationBarTitleText": "评级授信",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "finance",
			"style": {
				"navigationBarTitleText": "财务情况",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "creditSituation",
			"style": {
				"navigationBarTitleText": "信用情况",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "management",
			"style": {
				"navigationBarTitleText": "经营情况",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "creditIndex",
			"style": {
				"navigationBarTitleText": "授信管理",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "add_guarantee",
			"style": {
				"navigationBarTitleText": "增加担保人",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "add_enterprise",
			"style": {
				"navigationBarTitleText": "增加担保企业",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "add_mortgage",
			"style": {
				"navigationBarTitleText": "新增抵押物",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "creditAuthorize_names",
			"style": {
				// "navigationBarTitleText": "征信授权名单",
				// "enablePullDownRefresh": false
				"navigationStyle": "custom"
			}
		},
		{
			"path": "add_Authorizer",
			"style": {
				"navigationBarTitleText": "添加授权人",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "add_authorizedEnterprise",
			"style": {
				"navigationBarTitleText": "添加授权企业",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "finance_detail",
			"style": {
				"navigationBarTitleText": "财务状况",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "guarantee/guaranteeAnalysis",
			"style": {
				"navigationBarTitleText": "担保分析",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "guarantee/creditReport",
			"style": {
				"navigationBarTitleText": "财务状况",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "imageReport/imageReport",
			"style": {
				"navigationBarTitleText": "影像及报告查看",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "imageReport/imageReportData",
			"style": {
				"navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "imageReport/imageReportView",
			"style": {
				"navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "agentHandover/transfer",
			"style": {
				"navigationBarTitleText": "代办转移",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "agentHandover/handover",
			"style": {
				"navigationBarTitleText": "待办任务交接",
				"enablePullDownRefresh": false
			}
		},
		// 集团视图
		{
			"path": "groupView/riskInfo",
			"style": {
				"navigationBarTitleText": "风险信息",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/credit",
			"style": {
				"navigationBarTitleText": "征信信息",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/sales",
			"style": {
				"navigationBarTitleText": "销售情况",
				"enablePullDownRefresh": false
			}
		},
        
		{
			"path": "groupView/groupIllegal",
			"style": {
				"navigationBarTitleText": "集团各成员违约明细",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/cooperation",
			"style": {
				"navigationBarTitleText": "合作信誉",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/groupMemberDefault",
			"style": {
				"navigationBarTitleText": "集团各成员违约明细",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/baseInfo",
			"style": {
				"navigationBarTitleText": "基本信息",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/search",
			"style": {
				"navigationBarTitleText": "集团查询",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/groupViewMain",
			"style": {
				"navigationBarTitleText": "集团视图",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "groupView/uasgeList",
			"style": {
				"navigationBarTitleText": "合同额度使用情况",
				"enablePullDownRefresh": false
			}
		},
        
		{
			"path": "approvalTrajectory",
			"style": {
				"navigationBarTitleText": "审批轨迹",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "adviseAndtrack",
			"style": {
				"navigationBarTitleText": "调查意见",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/basicInfo_",
			"style": {
				"navigationBarTitleText": "基本信息",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/cooperation_",
			"style": {
				"navigationBarTitleText": "合作信誉",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/credit_",
			"style": {
				"navigationBarTitleText": "征信信息",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/finance_",
			"style": {
				"navigationBarTitleText": "财务报表",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/management_",
			"style": {
				"navigationBarTitleText": "经营信息",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/riskInfo_",
			"style": {
				"navigationBarTitleText": "风险信息",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/guaranteeAnalysis_",
			"style": {
				// "navigationBarTitleText": "担保信息",
				// "enablePullDownRefresh": false
				"navigationStyle": "custom"
			}
		},
		{
			"path": "distributorView/imageReport_",
			"style": {
				"navigationBarTitleText": "影像及报告查看",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "distributorView/imageReportView_",
			"style": {
				"navigationBarTitleText": "影像及报告查看",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "riskInfo",
			"style": {
				"navigationBarTitleText": "风险分析",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "riskInfo",
			"style": {
				"navigationBarTitleText": "风险分析",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "creditQuery",
			"style": {
				// "navigationBarTitleText": "",
				// "enablePullDownRefresh": false
				"navigationStyle": "custom"
			}
		},
		{
			"path": "creditSearchJXS",
			"style": {
				"navigationBarTitleText": "高级搜索",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "creditInvestigat/creditInvestigat",
			"style": {
				"navigationBarTitleText": "征信查询",
				"navigationStyle": "custom",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "creditInvestigat/queryCreditManage",
			"style": {
				"navigationBarTitleText": "征信查询审批",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},

		{
			"path": "creditInvestigat/queryManyCreditManage",
			"style": {
				"navigationBarTitleText": "批量征信查询审批",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		{
			"path": "creditInvestigat/upLoadImageView",
			"style": {
				"navigationBarTitleText": "上传影像",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		{
			"path": "creditInvestigat/manageCredit",
			"style": {
				"navigationBarTitleText": "到期影像上传",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},

		{
			"path": "creditInvestigat/upLoadImageReport",
			"style": {
				"navigationBarTitleText": "上传影像",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},

		{
			"path": "groupView/personRiskDetail",
			"style": {
				"navigationBarTitleText": "个人司法数据信息",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		{
			"path": "creditInvestigat/creditAuthorize_names",
			"style": {
				"navigationBarTitleText": "征信授权名单",
				"navigationStyle": "custom"
			}
		},
		{
			"path": "creditInvestigat/add_eleAuthorizer",
			"style": {
				"navigationBarTitleText": "新增个人征信",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "creditInvestigat/add_eleAuthorizedEnterprise",
			"style": {
				"navigationBarTitleText": "添加授权企业",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "guarantee/addGuaranteePopup",
			"style": {
				"navigationBarTitleText": "修改担保人",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "guarantee/addEnterprisePopup",
			"style": {
				"navigationBarTitleText": "修改担保企业",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "guarantee/addMortgagePopup",
			"style": {
				"navigationBarTitleText": "修改担保抵押质物",
				"enablePullDownRefresh": false
			}
		},
        
		{
			"path": "creditInvestigat/creditIndex",
			"style": {
				"navigationBarTitleText": "征信查询",
				"navigationStyle": "custom",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "imageReport/viewPDF",
			"style": {
				"navigationBarTitleText": "查看PDF",
				"enablePullDownRefresh": false
			}
		},
		// 关联企业页面
		{
			"path": "relationPrise",
			"style": {
				"navigationBarTitleText": "增加关联企业"
			}
		},
		// 编辑关联企业
		{
			"path": "edit_relationPrise",
			"style": {
				"navigationBarTitleText": "编辑关联企业"
			}
		},
		// 新增集团客户
		{
			"path": "loanApplyGroup",
			"style": {
				"navigationBarTitleText": "新增集团客户",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 集团成员
		{
			"path": "loanApplyGroupPerson",
			"style": {
				"navigationBarTitleText": "集团成员",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 新增集团成员
		{
			"path": "loanApplyGroupMembers",
			"style": {
				"navigationBarTitleText": "新增集团成员",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 司法风险
		{
			"path": "judicial",
			"style": {
				"navigationBarTitleText": "个人司法数据信息",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 新增基本信息管理层
		{
			"path": "newManage",
			"style": {
				"navigationBarTitleText": "新增共同控制人",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 编辑共同控制人
		{
			"path": "edit_manage",
			"style": {
				"navigationBarTitleText": "编辑管理层",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},// 新增股东
		{
			"path": "add_shareholder",
			"style": {
				"navigationBarTitleText": "新增股东",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 编辑股东
		{
			"path": "edit_shareholder",
			"style": {
				"navigationBarTitleText": "编辑股东",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 新增股东（自然人）
		{
			"path": "add_shareholderNature",
			"style": {
				"navigationBarTitleText": "新增股东",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 编辑股东（自然人）
		{
			"path": "edit_shareholderNature",
			"style": {
				"navigationBarTitleText": "编辑股东",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 共同控制人
		{
			"path": "add_controler",
			"style": {
				"navigationBarTitleText": "新增共同控制人",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 第一受益人
		{
			"path": "add_firstPerson",
			"style": {
				"navigationBarTitleText": "新增第一受益人",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 编辑第一受益人
		{
			"path": "edit_firstPerson",
			"style": {
				"navigationBarTitleText": "编辑第一受益人",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 家庭成员
		{
			"path": "add_familyMember",
			"style": {
				"navigationBarTitleText": "新增家庭成员",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 编辑家庭成员
		{
			"path": "edit_familyMember",
			"style": {
				"navigationBarTitleText": "编辑家庭成员",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 关联企业
		{
			"path": "add_relevance",
			"style": {
				"navigationBarTitleText": "新增关联企业",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 财务报表
		{
			"path": "add_financial_table",
			"style": {
				"navigationBarTitleText": "财务报表",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		{
			"path": "creditInvestigat/uploadImg",
			"style": {
				"navigationStyle": "custom",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		{
			"path": "handle/reportFormsSign",
			"style": {
				"navigationBarTitleText": "报表管理详情",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "handle/elecCreditAuthor",
			"style": {
				"navigationBarTitleText": "征信电子授权处置",
				"navigationStyle": "custom"
			}
		},
        {
			"path": "reviewOpinions",
			"style": {
				"navigationBarTitleText": "审查意见",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "approvalOpinions",
			"style": {
				"navigationBarTitleText": "审批意见",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
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
			"path": "approvalOpinionBook",
			"style": {
				"navigationBarTitleText": "审批意见书",
				"enablePullDownRefresh": false,
				"app-plus": {
					"titleNView": {
						"buttons": [
							{
								"fontSrc": "/static/iconfont/iconfont.ttf",
								"text": "\ue610",
								"color": "#333333",
								"fontSize": "25px",
								"onclick": "menu"
							}
						]
					}
				}
			}
		},
    ]
}]