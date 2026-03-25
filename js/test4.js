const aaa = {
	"name": "BpmInstOperator",
	"components": {
		"RxDialog": {
			"name": "RxDialog",
			"emits": [
				"ok",
				"cancel"
			],
			"props": {
				"toolbarPlace": {
					"default": "bottom"
				},
				"btnAlign": {
					"default": "right"
				},
				"btnGroup": {
					"default": false
				},
				"okText": {
					"default": "确认"
				},
				"cancelText": {
					"default": "取消"
				},
				"isOk": {
					"default": true
				},
				"isCancel": {
					"default": true
				}
			},
			"computed": {},
			"methods": {},
			"__scopeId": "data-v-3be5df9f"
		},
		"RxFit": {
			"name": "RxFit",
			"props": {
				"modelValue": {
					"default": false
				},
				"searchBox": {
					"default": "middle"
				},
				"searchBoxStyle": {}
			},
			"emits": [
				"update:modelValue"
			],
			"methods": {},
			"watch": {
				"modelValue": {
					"immediate": true
				}
			},
			"__scopeId": "data-v-ac51741d"
		},
		"RxForms": {
			"name": "rx-forms",
			"methods": {},
			"__hmrId": "cc3939d2",
			"__scopeId": "data-v-cc3939d2",
			"__file": "/Users/vincent.wen/Documents/company/qizhi/appfront-original/src/views/modules/bpm/OpenDoc/RxForms.vue"
		},
		"BpmInstMsgs": {
			"name": "BpmInstMsgs",
			"emits": [
				"update:msgShow"
			],
			"props": {
				"instId": {
					"required": true
				},
				"msgShow": {
					"default": false
				}
			},
			"methods": {},
			"watch": {},
			"__hmrId": "9475eed2",
			"__scopeId": "data-v-9475eed2",
			"__file": "/Users/vincent.wen/Documents/company/qizhi/appfront-original/src/views/modules/bpm/components/BpmInstMsgs.vue"
		},
		"BpmInstLogs": {
			"name": "BpmInstLogs",
			"emits": [
				"update:logShow"
			],
			"props": {
				"instId": {
					"required": true
				},
				"logShow": {
					"default": false
				}
			},
			"methods": {},
			"watch": {},
			"__hmrId": "8b910678",
			"__file": "/Users/vincent.wen/Documents/company/qizhi/appfront-original/src/views/modules/bpm/components/BpmInstLogs.vue"
		},
		"BpmImageView": {
			"name": "BpmImageView",
			"components": {
				"flowNode": "\n<div class=\"rx-npmn-window\">\n<div class=\"flow-window-container\">\n<div class=\"flow-window-content\">\n<ul>\n    <% \n    var histories = data.histories;\n    var hasHistory=histories && histories.length>0;\n    var users= data.taskNodeUser.configExecutors;\n    %>\n    <li class=\"flow-item-li\" >  \n        <div class=\"flow-item-icon\"></div>\n         <div class=\"flow-item-text\">\n            <div class=\"flow-item-header\">\n                <span class=\"flow-item-name\"><%=data.taskNodeUser.nodeText %>\n                     <% var type = data.taskNodeUser.multiInstance;\n                    if(type && type == 'parallel'){%>\n                        <span class=\"flow-node-text flow-node-text-type\">并行</span>\n                    <%}else if(type == 'sequential'){%>\n                        <span class=\"flow-node-text flow-node-text-type\">串行</span>\n                    <%}%>\n                </span>     \n              \n            </div>\n            <%if(!hasHistory){%>\n            <div class=\"flow-item-title\">\n                <%for(var i = 0;i< users.length;i++ ){\n                    var user=users[i];\n                %>\n                    <span class=\"flow-node-text\"><%=user.name %></span>\n                <%}%>\n            </div>\n            <%}%>\n            <div class=\"history-content\">\n            <% \n            var flag=false;\n            for(var n = 0,m = histories.length;n < m ;n++ ){\n                var history= histories[n];\n                var handlerId = history.handlerId ;\n                flag=true; \n                var createTime = history.createTime ; \n                var jumpTypeName = history.jumpTypeName;\n                var updateTime =history.updateTime ;\n                var remark = history.remark || \"\" ;\n                var handlerUserName=history.handlerUserName ;\n            %>\n                  <div class=\"flow-item-details\">\n                    <dl>\n                        <dd>\n                            <span class=\"leftText\">审批人&nbsp;&nbsp;&nbsp;:</span>\n                            <span class=\"rightText\"><span class=\"flow-node-text\"><%=handlerUserName%></span></span>\n                        </dd>\n                        <dd>\n                            <span class=\"leftText\">到达时间:</span>\n                            <span class=\"rightText\"><%=createTime%></span>\n                        </dd>\n                        <dd>\n                            <span class=\"leftText\">审批时间:</span>\n                            <span class=\"rightText\"><%=updateTime%></span>\n                        </dd>\n                        <dd>\n                            <span class=\"leftText\">审批动作:</span>\n                            <span class=\"rightText\"><span class=\"flow-node-text\"><%=jumpTypeName%></span></span>\n                        </dd>\n                        <dd>\n                            <span class=\"leftText\">审批意见:</span>\n                            <span class=\"rightText\"><%=remark%></span>\n                        </dd>\n                    </dl>\n                </div>\n                <% if (n < m-1) { %>\n                <div class=\"split-line\"></div>\n                <% } %>\n             <%}if(!flag){%>\n                <div class=\"noedit\"><span class=\"empty\"> 暂无操作</span></div>\n            <%}%>   \n             </div> \n        </div>            \n    </li>      \n \n</ul>\n</div>\n</div>\n</div>\n"
			},
			"props": {
				"showTips": {
					"default": true
				},
				"preview": {
					"default": false
				}
			},
			"methods": {},
			"__scopeId": "data-v-e8211225"
		},
		"BpmCheckHistory": {
			"name": "bpm-check-history",
			"props": {
				"instId": {},
				"bpmTask": {
					"required": false
				},
				"historyShow": {
					"default": false
				},
				"destroy": {}
			},
			"emits": [
				"update:historyShow"
			],
			"mixins": [
				{
					"computed": {},
					"methods": {}
				}
			],
			"components": {
				"RxUserComponent": {
					"name": "rx-user-component",
					"components": {
						"RxTextList": {
							"name": "rx-text-list",
							"components": {
								"RxIconShow": {
									"name": "RxIconShow",
									"props": {
										"icon": {},
										"size": {
											"default": "16px"
										},
										"title": {
											"default": ""
										}
									},
									"computed": {},
									"__scopeId": "data-v-bc878355"
								}
							},
							"emits": [
								"update:modelValue",
								"change",
								"click"
							],
							"props": {
								"modelValue": {
									"type": [
										null
									]
								},
								"showclose": {
									"default": true
								},
								"readonly": {
									"default": false
								},
								"textfield": {
									"default": "text"
								},
								"valuefield": {
									"default": "value"
								}
							},
							"methods": {},
							"watch": {
								"modelValue": {
									"deep": true
								},
								"readonly": {
									"deep": true
								}
							},
							"__scopeId": "data-v-a3280684"
						}
					},
					"emits": [
						"update:modelValue",
						"change"
					],
					"props": {
						"modelValue": {},
						"single": {
							"default": true
						},
						"filter": {},
						"showclose": {
							"default": true
						},
						"readonly": {
							"default": false
						},
						"isAccount": {
							"default": false
						}
					},
					"methods": {},
					"watch": {
						"modelValue": {
							"deep": true
						},
						"localUser": {
							"deep": true
						}
					}
				}
			},
			"methods": {},
			"watch": {},
			"__hmrId": "f7e8ee17",
			"__file": "/Users/vincent.wen/Documents/company/qizhi/appfront-original/src/views/modules/bpm/components/BpmCheckHistory.vue"
		},
		"BpmInstVars": {
			"name": "BpmInstVars",
			"props": {
				"actInstId": {}
			},
			"methods": {},
			"watch": {},
			"__hmrId": "b61e7e44",
			"__file": "/Users/vincent.wen/Documents/company/qizhi/appfront-original/src/views/modules/bpm/components/BpmInstVars.vue"
		},
		"BpmInstUsers": {
			"name": "BpmInstUsers",
			"props": {},
			"emits": [
				"subCloseWindow"
			],
			"components": {
				"RxDialog": {
					"name": "RxDialog",
					"emits": [
						"ok",
						"cancel"
					],
					"props": {
						"toolbarPlace": {
							"default": "bottom"
						},
						"btnAlign": {
							"default": "right"
						},
						"btnGroup": {
							"default": false
						},
						"okText": {
							"default": "确认"
						},
						"cancelText": {
							"default": "取消"
						},
						"isOk": {
							"default": true
						},
						"isCancel": {
							"default": true
						}
					},
					"computed": {},
					"methods": {},
					"__scopeId": "data-v-3be5df9f"
				},
				"RxFit": {
					"name": "RxFit",
					"props": {
						"modelValue": {
							"default": false
						},
						"searchBox": {
							"default": "middle"
						},
						"searchBoxStyle": {}
					},
					"emits": [
						"update:modelValue"
					],
					"methods": {},
					"watch": {
						"modelValue": {
							"immediate": true
						}
					},
					"__scopeId": "data-v-ac51741d"
				}
			},
			"methods": {},
			"watch": {},
			"__hmrId": "6e6e2929",
			"__file": "/Users/vincent.wen/Documents/company/qizhi/appfront-original/src/views/modules/bpm/components/BpmInstUsers.vue"
		}
	},
	"mixins": [
		{
			"mixins": [
				{
					"computed": {},
					"methods": {}
				},
				{
					"methods": {}
				},
				{
					"methods": {}
				}
			],
			"computed": {},
			"methods": {}
		}
	],
	"computed": {},
	"props": {
		"instId": {
			"required": true
		},
		"backNodeId": {
			"required": false
		}
	},
	"methods": {},
	"__hmrId": "e55c82bc",
	"__scopeId": "data-v-e55c82bc",
	"__file": "/Users/vincent.wen/Documents/company/qizhi/appfront-original/src/views/modules/bpm/OpenDoc/BpmInstOperator.vue"
}
