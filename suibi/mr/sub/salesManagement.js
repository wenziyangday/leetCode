module.exports=[{
    "root": "pages/salesManagement",
    "pages": [
        //线索盯催
		{
			"path": "clueTracking/clueTracking",
			"style": {
				"navigationBarTitleText": "线索查看",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		//线索盯催详情
		{
			"path": "clueTracking/clueTrackingDetail",
			"style": {
				"navigationBarTitleText": "经销商线索",
				"navigationBarBackgroundColor": "#FFFFFF",
				"enablePullDownRefresh": true
			}
		},
		//线索详情
		{
			"path": "clueTracking/clueDetail",
			"style": {
				"navigationBarTitleText": "线索详情",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		//投诉处理
		{
			"path": "complaintHandling/complaintHandling",
			"style": {
				"navigationStyle": "custom"
			}
		},
		//投诉处理详情
		{
			"path": "complaintHandling/complaintHandlingDetail",
			"style": {
				"navigationBarTitleText": "投诉详情",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		{
			"path": "complaintHandling/complainDetails",
			"style": {
				"navigationBarTitleText": "投诉视频",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 合作商抽检
		{
			"path": "loadUserCheck/parterCheck",
			"style": {
				"navigationBarTitleText": "合作商抽检",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 放款客户抽检
		{
			"path": "loadUserCheck/loadUserInfo/loadUserInfo",
			"style": {
				"navigationBarTitleText": "放款客户抽检",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 抽检详情
		{
			"path": "loadUserCheck/loadUserInfo/checkDetails",
			"style": {
				"navigationBarTitleText": "抽检详情",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 投诉案例库
		{
			"path": "caseLibrary/index",
			"style": {
				"navigationBarTitleText": "投诉案例库",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		// 投诉案例库详情
		{
			"path": "caseLibrary/detail",
			"style": {
				"navigationBarTitleText": "投诉案例详情",
				"navigationBarBackgroundColor": "#FFFFFF"
			}
		},
		//投诉处理录音材料
		{
			"path": "complaintHandling/complainAudio",
			"style": {
				"navigationBarTitleText": "录音材料",
				"enablePullDownRefresh": true
			}
		},
		//投诉处理历史催收记录
		{
			"path": "complaintHandling/complainHistory",
			"style": {
				"navigationBarTitleText": "客户历史催收记录",
				"enablePullDownRefresh": true
			}
		},
		//投诉处理影像列表
		{
			"path": "complaintHandling/complainImage",
			"style": {
				"navigationBarTitleText": "影像材料",
				"enablePullDownRefresh": true
			}
		},
        {
			"path": "complaintHandling/complainAudioDetail",
			"style": {
				"navigationBarTitleText": "信审录音",
				"enablePullDownRefresh": false
			}
		},
        {
			"path": "complaintHandling/complainVideo",
			"style": {
				"navigationBarTitleText": "双录视频",
				"enablePullDownRefresh": false
			}
		},
        {
			"path": "complaintHandling/complainImageView",
			"style": {
				"navigationBarTitleText": "影像材料",
				"enablePullDownRefresh": false
			}
		},
        {
			"path": "complaintHandling/complainImageViewPdf",
			"style": {
				"navigationBarTitleText": "影像材料",
                "enablePullDownRefresh": false
            }
        }
    ]
}]