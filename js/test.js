function processNode(node, level) {
	// 如果是叶子节点，保留 name
	if (!node.children || node.children.length === 0) {
		return;
	}

	// 如果不是一级节点，删除 name
	if (level > 1) {
		delete node.name;
	}

	// 递归处理子节点，层级加一
	node.children.forEach(child => processNode(child, level + 1));
}

// 原始 JSON 数据
const data = [
	{
		"name": "Dashboard",
		"path": "/s-HRPlus/",
		"children": [
			{
				"name": "Analytics-1",
				"children": [
					{
						"name": "Analytics",
						"path": "/s-HRPlus/analytics-1",
						"children": [
							{
								"name": "Analytics-1-1",
								"path": "/s-HRPlus/analytics-1-1",
								"children": [] // 可以继续嵌套更多层级
							}
						]
					}
				],
				"path": "/s-HRPlus//undefined"
			},
			{
				"name": "Workspace",
				"path": "/s-HRPlus/workspace",
				"children": [
					{
						"name": "Workspace-1",
						"path": "/s-HRPlus/workspace-1",
						"children": []
					}
				]
			},
			{
				"name": "Test",
				"path": "/s-HRPlus/test",
				"children": [] // 另一个测试案例，可以包含嵌套结构
			}
		]
	}
];

// 处理数据，从一级节点开始（level = 1）
data.forEach(node => processNode(node, 1));

// 输出处理后的数据
// console.log(JSON.stringify(data, null, 2));

const aaa = [
	"../views/_core/about/index.vue",
	"../views/_core/authentication/code-login.vue",
	"../views/_core/authentication/forget-password.vue",
	"../views/_core/authentication/login.vue",
	"../views/_core/authentication/qrcode-login.vue",
	"../views/_core/authentication/register.vue",
	"../views/_core/fallback/coming-soon.vue",
	"../views/_core/fallback/forbidden.vue",
	"../views/_core/fallback/internal-error.vue",
	"../views/_core/fallback/not-found.vue",
	"../views/_core/fallback/offline.vue",
	"../views/dashboard/analytics/analytics-trends.vue",
	"../views/dashboard/analytics/analytics-visits-data.vue",
	"../views/dashboard/analytics/analytics-visits-sales.vue",
	"../views/dashboard/analytics/analytics-visits-source.vue",
	"../views/dashboard/analytics/analytics-visits.vue",
	"../views/dashboard/analytics/index.vue",
	"../views/dashboard/test/Tables.vue",
	"../views/dashboard/test/index.vue",
	"../views/dashboard/workspace/index.vue",
	"../views/demos/antd/index.vue",
	"../views/layout/LeftAndRightLayout.vue",
	"../views/layout/TopAndBottomLayout.vue",
	"../views/layout/localControl/NavigationBar-tab.vue",
	"../views/layout/localControl/NavigationBar.vue",
	"../views/layout/localControl/RxMenu-tab.vue",
	"../views/layout/localControl/RxMenu.vue",
	"../views/layout/localControl/RxSubMenu.vue",
	"../views/layout/localControl/SystemSetting.vue",
	"../views/layout/localControl/UserToolBar.vue",
	"../views/modules/bpm/BpmAsyncTask/BpmAsyncTaskEdit.vue",
	"../views/modules/bpm/BpmAsyncTask/BpmAsyncTaskList.vue",
	"../views/modules/bpm/OpenDoc/AccomplishBpm.vue",
	"../views/modules/bpm/OpenDoc/BpmDetailButtons.vue",
	"../views/modules/bpm/OpenDoc/BpmInstDetail.vue",
	"../views/modules/bpm/OpenDoc/BpmInstOperator.vue",
	"../views/modules/bpm/OpenDoc/BpmInstPrint.vue",
	"../views/modules/bpm/OpenDoc/BpmInstStart.vue",
	"../views/modules/bpm/OpenDoc/BpmTaskStart.vue",
	"../views/modules/bpm/OpenDoc/BpmTestView.vue",
	"../views/modules/bpm/OpenDoc/OpenDoc.vue",
	"../views/modules/bpm/OpenDoc/ProcessToolBar.vue",
	"../views/modules/bpm/OpenDoc/RxForms.vue",
	"../views/modules/bpm/OpenDoc/TaskToolBar.vue",
	"../views/modules/bpm/OpenDoc/bpmHeader.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskAddSign.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskBack.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskCheck.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskLinkup.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskRoam.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskRoamTransfer.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskTransferCheck.vue",
	"../views/modules/bpm/OpenDoc/task/BpmTaskTransferEdit.vue",
	"../views/modules/bpm/components/BpmCheckHistory.vue",
	"../views/modules/bpm/components/BpmCommuHistory.vue",
	"../views/modules/bpm/components/BpmExecutors.vue",
	"../views/modules/bpm/components/BpmHistoryTable.vue",
	"../views/modules/bpm/components/BpmInstFormOperat.vue",
	"../views/modules/bpm/components/BpmInstInfo.vue",
	"../views/modules/bpm/components/BpmInstLogs.vue",
	"../views/modules/bpm/components/BpmInstMsgs.vue",
	"../views/modules/bpm/components/BpmInstStartConfirm.vue",
	"../views/modules/bpm/components/BpmInstTakeBack.vue",
	"../views/modules/bpm/components/BpmInstTransfer.vue",
	"../views/modules/bpm/components/BpmInstUsers.vue",
	"../views/modules/bpm/components/BpmInstVars.vue",
	"../views/modules/bpm/components/BpmNodeJump.vue",
	"../views/modules/bpm/components/BpmPrognosticImage.vue",
	"../views/modules/bpm/components/BpmTaskExecutors.vue",
	"../views/modules/bpm/components/NodesExecutors.vue",
	"../views/modules/bpm/components/TaskCommu.vue",
	"../views/modules/bpm/components/TaskCommuReply.vue",
	"../views/modules/bpm/components/bpmHistory.vue",
	"../views/modules/bpm/components/dialog/BpmMyEvents.vue",
	"../views/modules/bpm/components/withdrawTips.vue",
	"../views/modules/bpm/tribute/rx-tribute.vue",
	"../views/modules/bpm/ws/MyBpmApprovedTasks/MyBpmApprovedTasks.vue",
	"../views/modules/bpm/ws/MyBpmAsyncTaskList/MyBpmAsyncTaskList.vue",
	"../views/modules/bpm/ws/MyBpmConcern/MyBpmConcern.vue",
	"../views/modules/bpm/ws/MyBpmInstList/MyBpmInstList.vue",
	"../views/modules/bpm/ws/MyBpmReceiveTask/MyBpmReceiveTask.vue",
	"../views/modules/bpm/ws/MyBpmTaskList/MyBpmTaskList.vue",
	"../views/modules/bpm/ws/MyBpmTracked/MyBpmTracked.vue",
	"../views/modules/bpm/ws/MyBpmTransOutTask/BpmRetrieveTask.vue",
	"../views/modules/bpm/ws/MyBpmTransOutTask/MyBpmTransOutTask.vue",
	"../views/modules/bpm/ws/MyBpmTurnTo/BpmInstCcDetail.vue",
	"../views/modules/bpm/ws/MyBpmTurnTo/MyBpmTurnTo.vue",
	"../views/modules/bpm/ws/MyTaskByDefKey.vue",
	"../views/modules/bpm/ws/TaskBatApprove.vue",
	"../views/modules/bpm/ws/TaskBatchApprove.vue",
	"../views/modules/bpm/ws/myBpmPending/MyBpmPending.vue",
	"../views/modules/bpm/ws/myBpmReceiveCopy/myBpmReceiveCopy.vue",
	"../views/modules/column/ProcessWorkbench/ProcessWorkbench.vue",
	"../views/modules/column/mixCharts/MixCharts.vue",
	"../views/modules/column/myBpmInstList/myBpmInstList.vue",
	"../views/modules/column/myCharge/myCharge.vue",
	"../views/modules/column/processMatters/processMatters.vue",
	"../views/modules/column/processOverview/processOverview.vue",
	"../views/modules/column/processOverview/rx-category-treeeditor.vue",
	"../views/modules/common/DynamicView.vue",
	"../views/modules/common/FormPdfHtml.vue",
	"../views/modules/common/IframeView.vue",
	"../views/modules/demo/component1.vue",
	"../views/modules/demo/component2.vue",
	"../views/modules/demo/componentParams.vue",
	"../views/modules/demo/demo.vue",
	"../views/modules/demo/demoVuels.vue",
	"../views/modules/demo/democomp.vue",
	"../views/modules/demo/dynamicComponent.vue",
	"../views/modules/form/FormBoListPreview/FormBoListPreview.vue",
	"../views/modules/form/FormBusSolutionShow/FormBusSolutionShow.vue",
	"../views/modules/form/FormCalendarViewShow/FormCalendarViewShow.vue",
	"../views/modules/form/FormCustomView/CustomLayoutView/CustomLayoutView.vue",
	"../views/modules/form/FormCustomView/CustomLayoutView/LayoutTab.vue",
	"../views/modules/form/FormCustomView/CustomLayoutView/LayoutView.vue",
	"../views/modules/form/FormCustomView/FormCustomView.vue",
	"../views/modules/form/FormCustomView/GridLayoutView/FormCustomControl.vue",
	"../views/modules/form/FormCustomView/GridLayoutView/GridLayoutView.vue",
	"../views/modules/form/FormCustomView/components/BpmView/BpmView.vue",
	"../views/modules/form/FormCustomView/components/CalendarView/CalendarView.vue",
	"../views/modules/form/FormCustomView/components/CarouselView/CarouselView.vue",
	"../views/modules/form/FormCustomView/components/ChartView/ChartView.vue",
	"../views/modules/form/FormCustomView/components/ChartView/FilterParams.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/BarComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/CustomChartComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/FunnelComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/GaugeComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/LineBarComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/LineComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/MapComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/NumericalComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/PieComponent.vue",
	"../views/modules/form/FormCustomView/components/ChartView/chartComponent/RadarComponent.vue",
	"../views/modules/form/FormCustomView/components/ColumnView/ColumnView.vue",
	"../views/modules/form/FormCustomView/components/ColumnView/UrlView.vue",
	"../views/modules/form/FormCustomView/components/CustomColumnView/CustomColumnView.vue",
	"../views/modules/form/FormCustomView/components/CustomView/CustomView.vue",
	"../views/modules/form/FormCustomView/components/FilterView/FilterView.vue",
	"../views/modules/form/FormCustomView/components/FormView/FormView.vue",
	"../views/modules/form/FormCustomView/components/ListView/ListView.vue",
	"../views/modules/form/FormCustomView/components/QuickEntranceView/MenuDialog.vue",
	"../views/modules/form/FormCustomView/components/QuickEntranceView/QuickEntranceDialog.vue",
	"../views/modules/form/FormCustomView/components/QuickEntranceView/QuickEntranceView.vue",
	"../views/modules/form/FormCustomView/components/QuickEntranceView/QuickSortDialog.vue",
	"../views/modules/form/FormCustomView/components/QuillEditorView/QuillEditorView.vue",
	"../views/modules/form/FormCustomView/components/ScreenChartView/ScreenChartView.vue",
	"../views/modules/form/FormCustomView/components/TabContainerView/TabContainerView.vue",
	"../views/modules/form/FormCustomView/components/TreeView/TreeView.vue",
	"../views/modules/form/FormCustomView/components/UreportView/UreportView.vue",
	"../views/modules/form/FormEntityDataSetting/FormEntityDataSettingEdit.vue",
	"../views/modules/form/FormEntityDataSetting/FormEntityDataSettingList.vue",
	"../views/modules/form/FormFun/FunPanel.vue",
	"../views/modules/form/FormFun/FunPanelBlock.vue",
	"../views/modules/form/FormFun/FunPanelTabs.vue",
	"../views/modules/form/FormSolutionPrint/FormSolutionPrint.vue",
	"../views/modules/form/FormSolutionShow/FormSolutionShow.vue",
	"../views/modules/form/FormSolutionShow/FormSolutionTreeShow.vue",
	"../views/modules/form/FormSolutionShow/sendMessagePreview.vue",
	"../views/modules/form/expandRow/RxFormBoList.vue",
	"../views/modules/form/expandRow/RxFormSolutionShow.vue",
	"../views/modules/protal/InsNews/InsNewsDetail.vue",
	"../views/modules/protal/InsNews/InsNewsList.vue",
	"../views/modules/protal/PortalLayoutPreview/PortalLayoutPreview.vue",
	"../views/modules/protal/PortalLayoutPreview/PortalLayoutPreviewAdd.vue",
	"../views/modules/system/SysDicView/SysDicColorConfig.vue",
	"../views/modules/system/SysDicView/SysDicView.vue"
];
console.log(aaa.filter(x => {
	console.log(x, x.toLowerCase().includes('/modules/bpm/ws/myBpmPending/myBpmPending.vue'.toLowerCase()));
	return x;
}))
