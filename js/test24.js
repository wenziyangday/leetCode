function addParentTitles(node, currentPath = []) {
	// 为当前节点添加 p_title_0, p_title_1 等属性
	currentPath.forEach((title, index) => {
		node[`p_title_${index}`] = title;
	});

	// 递归处理子节点
	if (node.children && node.children.length > 0) {
		const newPath = [...currentPath, node.title]; // 拷贝当前路径并添加自身ID
		node.children.forEach(child => {
			addParentTitles(child, newPath);
		});
	}
}

// 示例数据
const data = [
	{
		"title": "202403",
		"month": 3,
		"year": 2024,
		"children": []
	},
	{
		"title": "202402",
		"month": 2,
		"year": 2024,
		"children": [
			{
				"title": "公积金超上限测试",
				"children": [
					{
						"enableEmployeeConfirm": false,
						"confirmStatus": false,
						"title": "人民币",
						"time": 1,
						"children": [
							{
								"title": "核算当期员工信息",
								"children": [
									{
										"title": "部门简称",
										"value": "国金证券股份有限公司",
										"type": "string",
										"width": "100px",
										"dataIndex": "部门简称",
										"key": "部门简称"
									},
									{
										"title": "薪资_代发银行_代发组织",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "薪资_代发银行_代发组织",
										"key": "薪资_代发银行_代发组织"
									},
									{
										"title": "公司",
										"value": "国金证券股份有限公司",
										"type": "string",
										"width": "100px",
										"dataIndex": "公司",
										"key": "公司"
									},
									{
										"title": "部门一",
										"value": "人力资源部",
										"type": "string",
										"width": "100px",
										"dataIndex": "部门一",
										"key": "部门一"
									},
									{
										"title": "部门二",
										"value": "组织发展与共享服务部",
										"type": "string",
										"width": "100px",
										"dataIndex": "部门二",
										"key": "部门二"
									},
									{
										"title": "工号",
										"value": "9810013580",
										"type": "string",
										"width": "100px",
										"dataIndex": "工号",
										"key": "工号"
									},
									{
										"title": "证件号",
										"value": "310115198808062933",
										"type": "string",
										"width": "100px",
										"dataIndex": "证件号",
										"key": "证件号"
									},
									{
										"title": "姓名",
										"value": "戴曙立",
										"type": "string",
										"width": "100px",
										"dataIndex": "姓名",
										"key": "姓名"
									},
									{
										"title": "入职日期",
										"value": "2022-06-27",
										"type": "string",
										"width": "100px",
										"dataIndex": "入职日期",
										"key": "入职日期"
									},
									{
										"title": "用工关系状态",
										"value": "转正",
										"type": "string",
										"width": "100px",
										"dataIndex": "用工关系状态",
										"key": "用工关系状态"
									},
									{
										"title": "工作地",
										"value": "上海市",
										"type": "string",
										"width": "100px",
										"dataIndex": "工作地",
										"key": "工作地"
									},
									{
										"title": "工资报盘单位",
										"value": "请检查",
										"type": "string",
										"width": "100px",
										"dataIndex": "工资报盘单位",
										"key": "工资报盘单位"
									},
									{
										"title": "证件类型",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "证件类型",
										"key": "证件类型"
									},
									{
										"title": "用工关系类型",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "用工关系类型",
										"key": "用工关系类型"
									}
								]
							},
							{
								"title": "基本薪酬",
								"children": [
									{
										"title": "基本工资",
										"value": "100.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "基本工资",
										"key": "基本工资"
									}
								]
							},
							{
								"title": "基本工资",
								"children": [
									{
										"title": "基本工资追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_01_004基本工资追溯",
										"key": "A_01_004基本工资追溯"
									}
								]
							},
							{
								"title": "绩效工资",
								"children": [
									{
										"title": "考核分数",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_02_008考核分数",
										"key": "A_02_008考核分数"
									},
									{
										"title": "试用期发放比例",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_02_013试用期发放比例",
										"key": "A_02_013试用期发放比例"
									},
									{
										"title": "绩效工资追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_023绩效工资追溯",
										"key": "A_02_023绩效工资追溯"
									},
									{
										"title": "个人月度预发追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_024个人月度预发追溯",
										"key": "A_02_024个人月度预发追溯"
									},
									{
										"title": "考核绩效工资追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_025考核绩效工资追溯",
										"key": "A_02_025考核绩效工资追溯"
									},
									{
										"title": "绩效津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_026绩效津贴追溯",
										"key": "A_02_026绩效津贴追溯"
									}
								]
							},
							{
								"title": "考勤扣款",
								"children": [
									{
										"title": "是否结转考勤异常",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_025是否结转考勤异常",
										"key": "A_04_025是否结转考勤异常"
									},
									{
										"title": "病假扣款基数",
										"value": "100.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_026病假扣款基数",
										"key": "A_04_026病假扣款基数"
									},
									{
										"title": "事假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_030事假天数追溯",
										"key": "A_04_030事假天数追溯"
									},
									{
										"title": "病假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_031病假天数追溯",
										"key": "A_04_031病假天数追溯"
									},
									{
										"title": "产假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_032产假天数追溯",
										"key": "A_04_032产假天数追溯"
									},
									{
										"title": "产假天数追溯（不含节假日）",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_033产假天数追溯（不含节假日）",
										"key": "A_04_033产假天数追溯（不含节假日）"
									},
									{
										"title": "产假天数追溯（自然日）",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_034产假天数追溯（自然日）",
										"key": "A_04_034产假天数追溯（自然日）"
									}
								]
							},
							{
								"title": "实习生津贴",
								"children": [
									{
										"title": "实习生津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "B_01_004实习生津贴追溯",
										"key": "B_01_004实习生津贴追溯"
									}
								]
							},
							{
								"title": "低于最低工资补差",
								"children": [
									{
										"title": "最低工资标准判断依据",
										"value": "市",
										"type": "string",
										"width": "100px",
										"dataIndex": "E_03最低工资标准判断依据",
										"key": "E_03最低工资标准判断依据"
									}
								]
							},
							{
								"title": "社保公积金",
								"children": [
									{
										"title": "个人合计",
										"value": "8000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01个人合计",
										"key": "F_01个人合计"
									}
								]
							},
							{
								"title": "个人合计",
								"children": [
									{
										"title": "个人公积金申报金额",
										"value": "4000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_008个人公积金申报金额",
										"key": "F_01_008个人公积金申报金额"
									}
								]
							},
							{
								"title": "变动奖金",
								"children": [
									{
										"title": "行政津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "G_02_013行政津贴追溯",
										"key": "G_02_013行政津贴追溯"
									}
								]
							},
							{
								"title": "津贴",
								"children": [
									{
										"title": "福利津贴",
										"value": "500.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03福利津贴",
										"key": "H_03福利津贴"
									}
								]
							},
							{
								"title": "岗位津贴",
								"children": [
									{
										"title": "内控联系人津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_01_021内控联系人津贴追溯",
										"key": "H_01_021内控联系人津贴追溯"
									},
									{
										"title": "专兼职合规津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_01_022专兼职合规津贴追溯",
										"key": "H_01_022专兼职合规津贴追溯"
									},
									{
										"title": "风险管理岗津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_01_023风险管理岗津贴追溯",
										"key": "H_01_023风险管理岗津贴追溯"
									},
									{
										"title": "保密岗津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_01_024保密岗津贴追溯",
										"key": "H_01_024保密岗津贴追溯"
									},
									{
										"title": "其他岗位津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_01_025其他岗位津贴追溯",
										"key": "H_01_025其他岗位津贴追溯"
									},
									{
										"title": "讲师津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_019讲师津贴追溯",
										"key": "H_02_019讲师津贴追溯"
									},
									{
										"title": "伯乐奖追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_020伯乐奖追溯",
										"key": "H_02_020伯乐奖追溯"
									},
									{
										"title": "津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_021IT津贴追溯",
										"key": "H_02_021IT津贴追溯"
									},
									{
										"title": "财富委佣金津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_022财富委佣金津贴追溯",
										"key": "H_02_022财富委佣金津贴追溯"
									},
									{
										"title": "稿费追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_023稿费追溯",
										"key": "H_02_023稿费追溯"
									},
									{
										"title": "竞业协议津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_024竞业协议津贴追溯",
										"key": "H_02_024竞业协议津贴追溯"
									},
									{
										"title": "特殊班次津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_025特殊班次津贴追溯",
										"key": "H_02_025特殊班次津贴追溯"
									},
									{
										"title": "文化奖励追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_026文化奖励追溯",
										"key": "H_02_026文化奖励追溯"
									},
									{
										"title": "其他工作津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_027其他工作津贴追溯",
										"key": "H_02_027其他工作津贴追溯"
									},
									{
										"title": "持续督导津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_02_028持续督导津贴追溯",
										"key": "H_02_028持续督导津贴追溯"
									},
									{
										"title": "人才补贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_027人才补贴追溯",
										"key": "H_03_027人才补贴追溯"
									},
									{
										"title": "电脑补贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_028电脑补贴追溯",
										"key": "H_03_028电脑补贴追溯"
									},
									{
										"title": "过节费追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_029过节费追溯",
										"key": "H_03_029过节费追溯"
									},
									{
										"title": "未休年休假补贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_030未休年休假补贴追溯",
										"key": "H_03_030未休年休假补贴追溯"
									},
									{
										"title": "午餐补贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_031午餐补贴追溯",
										"key": "H_03_031午餐补贴追溯"
									},
									{
										"title": "通讯补贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_032通讯补贴追溯",
										"key": "H_03_032通讯补贴追溯"
									},
									{
										"title": "交通补贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_033交通补贴追溯",
										"key": "H_03_033交通补贴追溯"
									},
									{
										"title": "独生子女津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_04_03独生子女津贴追溯",
										"key": "H_04_03独生子女津贴追溯"
									},
									{
										"title": "其他福利补贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "H_03_034其他福利补贴追溯",
										"key": "H_03_034其他福利补贴追溯"
									},
									{
										"title": "岗位津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_06_004岗位津贴追溯",
										"key": "A_06_004岗位津贴追溯"
									}
								]
							},
							{
								"title": "福利津贴",
								"children": [
									{
										"title": "午餐补贴标准",
										"value": "25.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_006午餐补贴标准",
										"key": "H_03_006午餐补贴标准"
									},
									{
										"title": "午餐补贴",
										"value": "400.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_007午餐补贴",
										"key": "H_03_007午餐补贴"
									},
									{
										"title": "通讯补贴天数",
										"value": "21.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_018通讯补贴天数",
										"key": "H_03_018通讯补贴天数"
									}
								]
							},
							{
								"title": "假勤汇总",
								"children": [
									{
										"title": "应出勤天数",
										"value": "21.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_01应出勤天数",
										"key": "J_01应出勤天数"
									},
									{
										"title": "实际出勤天数",
										"value": "21.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_02实际出勤天数",
										"key": "J_02实际出勤天数"
									},
									{
										"title": "预留月份数",
										"value": "10.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_05预留月份数",
										"key": "J_05预留月份数"
									},
									{
										"title": "不含节假日工作日天数",
										"value": "16.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_08不含节假日工作日天数",
										"key": "J_08不含节假日工作日天数"
									},
									{
										"title": "午餐补贴天数",
										"value": "16.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_10午餐补贴天数",
										"key": "J_10午餐补贴天数"
									},
									{
										"title": "工作日天数",
										"value": "21.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_09工作日天数",
										"key": "J_09工作日天数"
									}
								]
							},
							{
								"title": "薪资计算",
								"children": [
									{
										"title": "应发金额",
										"value": "45000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_01应发金额",
										"key": "L_01应发金额"
									},
									{
										"title": "实发金额",
										"value": "36900.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_02实发金额",
										"key": "L_02实发金额"
									},
									{
										"title": "员工成本",
										"value": "45000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_03员工成本",
										"key": "L_03员工成本"
									},
									{
										"title": "税后加减项",
										"value": "-100.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_04税后加减项",
										"key": "L_04税后加减项"
									},
									{
										"title": "计税工资（居民正式员工）",
										"value": "37000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_05计税工资（居民正式员工）",
										"key": "L_05计税工资（居民正式员工）"
									},
									{
										"title": "税后金额",
										"value": "37000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_06税后金额",
										"key": "L_06税后金额"
									},
									{
										"title": "全年可发收入",
										"value": "1000000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_10全年可发收入",
										"key": "L_10全年可发收入"
									},
									{
										"title": "不含最低工资补差应发金额",
										"value": "600.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_14不含最低工资补差应发金额",
										"key": "L_14不含最低工资补差应发金额"
									},
									{
										"title": "不含最低工资补差实发金额",
										"value": "36900.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_15不含最低工资补差实发金额",
										"key": "L_15不含最低工资补差实发金额"
									}
								]
							},
							{
								"title": "应发金额",
								"children": [
									{
										"title": "基本薪酬",
										"value": "100.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A基本薪酬",
										"key": "A基本薪酬"
									},
									{
										"title": "社保公积金",
										"value": "8000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F社保公积金",
										"key": "F社保公积金"
									},
									{
										"title": "津贴",
										"value": "500.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H津贴",
										"key": "H津贴"
									}
								]
							},
							{
								"title": "其他纳税收入",
								"children": [
									{
										"title": "工会福利费",
										"value": "100.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_06工会福利费",
										"key": "Q_06工会福利费"
									}
								]
							}
						],
						"align": "left"
					}
				],
				"align": "left"
			},
			{
				"title": "正式国金总部",
				"children": [
					{
						"enableEmployeeConfirm": false,
						"confirmStatus": true,
						"title": "人民币",
						"time": 1,
						"children": [
							{
								"title": "核算当期员工信息",
								"children": [
									{
										"title": "证件类型",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "证件类型",
										"key": "证件类型"
									},
									{
										"title": "用工关系类型",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "用工关系类型",
										"key": "用工关系类型"
									},
									{
										"title": "发薪业务组织",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "发薪业务组织",
										"key": "发薪业务组织"
									},
									{
										"title": "实习津贴计算方式",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "实习津贴计算方式",
										"key": "实习津贴计算方式"
									}
								]
							},
							{
								"title": "基本薪酬",
								"children": [
									{
										"title": "基本工资",
										"value": "6666.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "基本工资",
										"key": "基本工资"
									},
									{
										"title": "绩效工资",
										"value": "6667.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_02绩效工资",
										"key": "A_02绩效工资"
									},
									{
										"title": "岗位津贴",
										"value": "6668.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "岗位津贴",
										"key": "岗位津贴"
									}
								]
							},
							{
								"title": "基本工资",
								"children": [
									{
										"title": "基本工资追溯",
										"value": "6672.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_01_004基本工资追溯",
										"key": "A_01_004基本工资追溯"
									}
								]
							},
							{
								"title": "绩效工资",
								"children": [
									{
										"title": "绩效奖励（财富委）",
										"value": "6836.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_024绩效奖励（财富委）",
										"key": "G_03_024绩效奖励（财富委）"
									},
									{
										"title": "绩效工资追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_023绩效工资追溯",
										"key": "A_02_023绩效工资追溯"
									},
									{
										"title": "个人月度预发追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_024个人月度预发追溯",
										"key": "A_02_024个人月度预发追溯"
									},
									{
										"title": "考核绩效工资追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_025考核绩效工资追溯",
										"key": "A_02_025考核绩效工资追溯"
									},
									{
										"title": "绩效津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_026绩效津贴追溯",
										"key": "A_02_026绩效津贴追溯"
									}
								]
							},
							{
								"title": "其他应补应扣工资",
								"children": [
									{
										"title": "基本工资折算",
										"value": "-6717.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_011基本工资折算",
										"key": "A_03_011基本工资折算"
									},
									{
										"title": "其他应补应扣",
										"value": "6708.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_001其他应补应扣",
										"key": "A_03_001其他应补应扣"
									},
									{
										"title": "入职补发工资",
										"value": "6709.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_002入职补发工资",
										"key": "A_03_002入职补发工资"
									},
									{
										"title": "上月入职未核算天数的工资结算",
										"value": "6710.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_004上月入职未核算天数的工资结算",
										"key": "A_03_004上月入职未核算天数的工资结算"
									},
									{
										"title": "不含节假日不在职天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_005不含节假日不在职天数",
										"key": "A_03_005不含节假日不在职天数"
									},
									{
										"title": "不在职天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_010不在职天数",
										"key": "A_03_010不在职天数"
									},
									{
										"title": "是否当月入职",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_007是否当月入职",
										"key": "A_03_007是否当月入职"
									},
									{
										"title": "是否当月离职",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_008是否当月离职",
										"key": "A_03_008是否当月离职"
									},
									{
										"title": "是否当月同时入离职",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_009是否当月同时入离职",
										"key": "A_03_009是否当月同时入离职"
									}
								]
							},
							{
								"title": "考勤扣款",
								"children": [
									{
										"title": "年累计病假天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_011年累计病假天数",
										"key": "A_04_011年累计病假天数"
									},
									{
										"title": "当月病假天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_010当月病假天数",
										"key": "A_04_010当月病假天数"
									},
									{
										"title": "半天旷工次数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_012半天旷工次数",
										"key": "A_04_012半天旷工次数"
									},
									{
										"title": "全天旷工次数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_013全天旷工次数",
										"key": "A_04_013全天旷工次数"
									},
									{
										"title": "迟到次数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_006迟到次数",
										"key": "A_04_006迟到次数"
									},
									{
										"title": "早退次数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_007早退次数",
										"key": "A_04_007早退次数"
									},
									{
										"title": "当月事假天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_008当月事假天数",
										"key": "A_04_008当月事假天数"
									},
									{
										"title": "年累计事假天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_009年累计事假天数",
										"key": "A_04_009年累计事假天数"
									},
									{
										"title": "含节假日产假天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_014含节假日产假天数",
										"key": "A_04_014含节假日产假天数"
									},
									{
										"title": "年累计产假天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_015年累计产假天数",
										"key": "A_04_015年累计产假天数"
									},
									{
										"title": "当月病假绩效扣款天数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_016当月病假绩效扣款天数",
										"key": "A_04_016当月病假绩效扣款天数"
									},
									{
										"title": "病假扣款基数",
										"value": "6743.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_026病假扣款基数",
										"key": "A_04_026病假扣款基数"
									},
									{
										"title": "事假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_030事假天数追溯",
										"key": "A_04_030事假天数追溯"
									},
									{
										"title": "病假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_031病假天数追溯",
										"key": "A_04_031病假天数追溯"
									},
									{
										"title": "产假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_032产假天数追溯",
										"key": "A_04_032产假天数追溯"
									},
									{
										"title": "产假天数追溯（不含节假日）",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_033产假天数追溯（不含节假日）",
										"key": "A_04_033产假天数追溯（不含节假日）"
									},
									{
										"title": "产假天数追溯（自然日）",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_034产假天数追溯（自然日）",
										"key": "A_04_034产假天数追溯（自然日）"
									}
								]
							},
							{
								"title": "加班工资",
								"children": [
									{
										"title": "平时加班小时数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_005平时加班小时数",
										"key": "A_05_005平时加班小时数"
									},
									{
										"title": "周末加班小时数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_006周末加班小时数",
										"key": "A_05_006周末加班小时数"
									},
									{
										"title": "假日加班小时数",
										"value": "4.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_007假日加班小时数",
										"key": "A_05_007假日加班小时数"
									},
									{
										"title": "固定加班津贴",
										"value": "6755.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_004固定加班津贴",
										"key": "A_05_004固定加班津贴"
									},
									{
										"title": "平时加班工资",
										"value": "6752.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_001平时加班工资",
										"key": "A_05_001平时加班工资"
									},
									{
										"title": "周末加班工资",
										"value": "6753.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_002周末加班工资",
										"key": "A_05_002周末加班工资"
									},
									{
										"title": "假日加班工资",
										"value": "6754.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_003假日加班工资",
										"key": "A_05_003假日加班工资"
									}
								]
							},
							{
								"title": "其他工资",
								"children": [
									{
										"title": "实习生津贴",
										"value": "6760.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01实习生津贴",
										"key": "B_01实习生津贴"
									},
									{
										"title": "劳务报酬",
										"value": "6761.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_02劳务报酬",
										"key": "B_02劳务报酬"
									}
								]
							},
							{
								"title": "实习生津贴",
								"children": [
									{
										"title": "实习生津贴标准",
										"value": "6763.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_001实习生津贴标准",
										"key": "B_01_001实习生津贴标准"
									},
									{
										"title": "实习生出勤天数",
										"value": "23.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_003实习生出勤天数",
										"key": "B_01_003实习生出勤天数"
									},
									{
										"title": "应扣实习生出勤天数",
										"value": "23.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_002应扣实习生出勤天数",
										"key": "B_01_002应扣实习生出勤天数"
									},
									{
										"title": "不含午餐补贴实习生津贴",
										"value": "6767.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_005不含午餐补贴实习生津贴",
										"key": "B_01_005不含午餐补贴实习生津贴"
									},
									{
										"title": "实习生津贴追溯",
										"value": "6766.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_004实习生津贴追溯",
										"key": "B_01_004实习生津贴追溯"
									}
								]
							},
							{
								"title": "违规违纪扣罚",
								"children": [
									{
										"title": "违规违纪扣罚-绩效工资",
										"value": "6768.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C_01违规违纪扣罚-绩效工资",
										"key": "C_01违规违纪扣罚-绩效工资"
									},
									{
										"title": "违规违纪扣罚-利润奖",
										"value": "6769.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C_02违规违纪扣罚-利润奖",
										"key": "C_02违规违纪扣罚-利润奖"
									},
									{
										"title": "违规违纪扣罚-考核奖",
										"value": "6770.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C_03违规违纪扣罚-考核奖",
										"key": "C_03违规违纪扣罚-考核奖"
									}
								]
							},
							{
								"title": "离职补偿金",
								"children": [
									{
										"title": "代通知金",
										"value": "6772.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "D_02代通知金",
										"key": "D_02代通知金"
									},
									{
										"title": "离职补偿金",
										"value": "6771.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "D_01离职补偿金",
										"key": "D_01离职补偿金"
									}
								]
							},
							{
								"title": "低于最低工资补差",
								"children": [
									{
										"title": "预发最低工资差额（税前）",
										"value": "6773.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "E_01预发最低工资差额（税前）",
										"key": "E_01预发最低工资差额（税前）"
									},
									{
										"title": "预发最低工资差额（税后）",
										"value": "6774.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "E_02预发最低工资差额（税后）",
										"key": "E_02预发最低工资差额（税后）"
									},
									{
										"title": "最低工资标准判断依据",
										"value": "6775",
										"type": "string",
										"width": "100px",
										"dataIndex": "E_03最低工资标准判断依据",
										"key": "E_03最低工资标准判断依据"
									}
								]
							},
							{
								"title": "社保公积金",
								"children": [
									{
										"title": "个人合计",
										"value": "6776.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01个人合计",
										"key": "F_01个人合计"
									},
									{
										"title": "公司合计",
										"value": "6777.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02公司合计",
										"key": "F_02公司合计"
									}
								]
							},
							{
								"title": "个人合计",
								"children": [
									{
										"title": "个人公积金申报金额",
										"value": "6785.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_008个人公积金申报金额",
										"key": "F_01_008个人公积金申报金额"
									},
									{
										"title": "个人养老",
										"value": "6778.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_001个人养老",
										"key": "F_01_001个人养老"
									},
									{
										"title": "个人医疗",
										"value": "6779.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_002个人医疗",
										"key": "F_01_002个人医疗"
									},
									{
										"title": "个人大病",
										"value": "6780.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_003个人大病",
										"key": "F_01_003个人大病"
									},
									{
										"title": "个人失业",
										"value": "6781.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_004个人失业",
										"key": "F_01_004个人失业"
									},
									{
										"title": "个人公积金",
										"value": "6782.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_005个人公积金",
										"key": "F_01_005个人公积金"
									},
									{
										"title": "湖南新疆专用大病个人",
										"value": "6784.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_007湖南新疆专用大病个人",
										"key": "F_01_007湖南新疆专用大病个人"
									},
									{
										"title": "公积金超上限金额",
										"value": "6783.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_006公积金超上限金额",
										"key": "F_01_006公积金超上限金额"
									}
								]
							},
							{
								"title": "公司合计",
								"children": [
									{
										"title": "公司养老",
										"value": "6786.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_001公司养老",
										"key": "F_02_001公司养老"
									},
									{
										"title": "公司医疗",
										"value": "6787.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_002公司医疗",
										"key": "F_02_002公司医疗"
									},
									{
										"title": "公司大病",
										"value": "6788.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_003公司大病",
										"key": "F_02_003公司大病"
									},
									{
										"title": "公司失业",
										"value": "6789.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_004公司失业",
										"key": "F_02_004公司失业"
									},
									{
										"title": "公司工伤",
										"value": "6790.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_005公司工伤",
										"key": "F_02_005公司工伤"
									},
									{
										"title": "公司生育",
										"value": "6791.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_006公司生育",
										"key": "F_02_006公司生育"
									},
									{
										"title": "公司公积金",
										"value": "6792.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_007公司公积金",
										"key": "F_02_007公司公积金"
									},
									{
										"title": "管理费",
										"value": "6793.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_008管理费",
										"key": "F_02_008管理费"
									},
									{
										"title": "是否缴纳管理费",
										"value": "6794",
										"type": "string",
										"width": "100px",
										"dataIndex": "F_02_009是否缴纳管理费",
										"key": "F_02_009是否缴纳管理费"
									}
								]
							},
							{
								"title": "变动奖金",
								"children": [
									{
										"title": "往年递延奖金",
										"value": "6795.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "往年递延奖金",
										"key": "往年递延奖金"
									},
									{
										"title": "利润奖",
										"value": "6796.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02利润奖",
										"key": "G_02利润奖"
									},
									{
										"title": "考核奖",
										"value": "6797.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03考核奖",
										"key": "G_03考核奖"
									},
									{
										"title": "投行固薪调整额_2016年",
										"value": "7050.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_01投行固薪调整额_2016年",
										"key": "G_04_01投行固薪调整额_2016年"
									},
									{
										"title": "投行固薪调整额_2017年",
										"value": "7051.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_02投行固薪调整额_2017年",
										"key": "G_04_02投行固薪调整额_2017年"
									},
									{
										"title": "投行固薪调整额_2018年",
										"value": "7052.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_03投行固薪调整额_2018年",
										"key": "G_04_03投行固薪调整额_2018年"
									},
									{
										"title": "投行固薪调整额_2019年",
										"value": "7053.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_04投行固薪调整额_2019年",
										"key": "G_04_04投行固薪调整额_2019年"
									},
									{
										"title": "投行固薪调整额_2020年",
										"value": "7054.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_05投行固薪调整额_2020年",
										"key": "G_04_05投行固薪调整额_2020年"
									},
									{
										"title": "投行固薪调整额_2021年",
										"value": "7055.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_06投行固薪调整额_2021年",
										"key": "G_04_06投行固薪调整额_2021年"
									},
									{
										"title": "投行固薪调整额_2022年7月",
										"value": "7056.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_07投行固薪调整额_2022年7月",
										"key": "G_04_07投行固薪调整额_2022年7月"
									},
									{
										"title": "投行固薪调整额_2023年4月",
										"value": "7057.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_08投行固薪调整额_2023年4月",
										"key": "G_04_08投行固薪调整额_2023年4月"
									},
									{
										"title": "投行固薪调整额_2024年10月",
										"value": "7058.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_09投行固薪调整额_2024年10月",
										"key": "G_04_09投行固薪调整额_2024年10月"
									},
									{
										"title": "后台固薪调整额_2018年5月",
										"value": "7059.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_10后台固薪调整额_2018年5月",
										"key": "G_04_10后台固薪调整额_2018年5月"
									},
									{
										"title": "后台固薪调整额_2021年2月",
										"value": "7060.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_11后台固薪调整额_2021年2月",
										"key": "G_04_11后台固薪调整额_2021年2月"
									},
									{
										"title": "后台固薪调整额_2022年1月",
										"value": "7061.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_12后台固薪调整额_2022年1月",
										"key": "G_04_12后台固薪调整额_2022年1月"
									},
									{
										"title": "资管固薪调整额_2022年8月",
										"value": "7062.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_13资管固薪调整额_2022年8月",
										"key": "G_04_13资管固薪调整额_2022年8月"
									},
									{
										"title": "资管结构融资固薪调整额_2024年",
										"value": "7063.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_14资管结构融资固薪调整额_2024年",
										"key": "G_04_14资管结构融资固薪调整额_2024年"
									},
									{
										"title": "固薪调整额1",
										"value": "7064.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_15固薪调整额1",
										"key": "G_04_15固薪调整额1"
									},
									{
										"title": "固薪调整额2",
										"value": "7065.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_16固薪调整额2",
										"key": "G_04_16固薪调整额2"
									},
									{
										"title": "固薪调整额3",
										"value": "7066.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_17固薪调整额3",
										"key": "G_04_17固薪调整额3"
									},
									{
										"title": "固薪调整额4",
										"value": "7067.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_18固薪调整额4",
										"key": "G_04_18固薪调整额4"
									},
									{
										"title": "固薪调整额5",
										"value": "7068.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_19固薪调整额5",
										"key": "G_04_19固薪调整额5"
									},
									{
										"title": "行政津贴追溯",
										"value": "6813.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_013行政津贴追溯",
										"key": "G_02_013行政津贴追溯"
									}
								]
							},
							{
								"title": "往年递延奖金",
								"children": [
									{
										"title": "往年递延奖金-利润奖",
										"value": "6799.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_01_001往年递延奖金-利润奖",
										"key": "G_01_001往年递延奖金-利润奖"
									},
									{
										"title": "往年递延奖金-考核奖",
										"value": "6800.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_01_002往年递延奖金-考核奖",
										"key": "G_01_002往年递延奖金-考核奖"
									}
								]
							},
							{
								"title": "利润奖",
								"children": [
									{
										"title": "行政津贴",
										"value": "6801.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_001行政津贴",
										"key": "G_02_001行政津贴"
									},
									{
										"title": "其他津贴",
										"value": "6803.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_003其他津贴",
										"key": "G_02_003其他津贴"
									},
									{
										"title": "季度预发奖金",
										"value": "6804.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_004季度预发奖金",
										"key": "G_02_004季度预发奖金"
									},
									{
										"title": "文化奖励",
										"value": "6805.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_005文化奖励",
										"key": "G_02_005文化奖励"
									},
									{
										"title": "创优评先奖励",
										"value": "6806.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_006创优评先奖励",
										"key": "G_02_006创优评先奖励"
									},
									{
										"title": "内核津贴",
										"value": "6807.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_007内核津贴",
										"key": "G_02_007内核津贴"
									},
									{
										"title": "过节费",
										"value": "6809.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_009过节费",
										"key": "G_02_009过节费"
									},
									{
										"title": "其他奖金",
										"value": "6810.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_010其他奖金",
										"key": "G_02_010其他奖金"
									}
								]
							},
							{
								"title": "考核奖",
								"children": [
									{
										"title": "一般考核奖",
										"value": "6814.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_002一般考核奖",
										"key": "G_03_002一般考核奖"
									},
									{
										"title": "业绩考核奖",
										"value": "6815.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_003业绩考核奖",
										"key": "G_03_003业绩考核奖"
									},
									{
										"title": "业务奖惩",
										"value": "6816.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_004业务奖惩",
										"key": "G_03_004业务奖惩"
									},
									{
										"title": "类奖金后置",
										"value": "6817.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_005 B类奖金后置",
										"key": "G_03_005 B类奖金后置"
									},
									{
										"title": "类奖金预发",
										"value": "6818.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_006 B类奖金预发",
										"key": "G_03_006 B类奖金预发"
									},
									{
										"title": "管理奖",
										"value": "6819.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_007管理奖",
										"key": "G_03_007管理奖"
									},
									{
										"title": "产品奖励",
										"value": "6820.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_008产品奖励",
										"key": "G_03_008产品奖励"
									},
									{
										"title": "专项奖励",
										"value": "6821.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_009专项奖励",
										"key": "G_03_009专项奖励"
									},
									{
										"title": "竞赛奖励",
										"value": "6822.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_010竞赛奖励",
										"key": "G_03_010竞赛奖励"
									},
									{
										"title": "营销奖励",
										"value": "6823.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_011营销奖励",
										"key": "G_03_011营销奖励"
									},
									{
										"title": "目标奖金",
										"value": "6824.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_012目标奖金",
										"key": "G_03_012目标奖金"
									},
									{
										"title": "其他奖励",
										"value": "6825.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_013其他奖励",
										"key": "G_03_013其他奖励"
									},
									{
										"title": "风险金返还",
										"value": "-6826.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_014风险金返还",
										"key": "G_03_014风险金返还"
									},
									{
										"title": "风险金计提",
										"value": "6827.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_015风险金计提",
										"key": "G_03_015风险金计提"
									},
									{
										"title": "协同考核奖",
										"value": "6828.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_016协同考核奖",
										"key": "G_03_016协同考核奖"
									},
									{
										"title": "累计待返还风险金",
										"value": "6829.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_017累计待返还风险金",
										"key": "G_03_017累计待返还风险金"
									},
									{
										"title": "风险金扣罚",
										"value": "-6830.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_018风险金扣罚",
										"key": "G_03_018风险金扣罚"
									},
									{
										"title": "风险金预发",
										"value": "6831.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_019风险金预发",
										"key": "G_03_019风险金预发"
									},
									{
										"title": "项目保证金",
										"value": "6832.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_020项目保证金",
										"key": "G_03_020项目保证金"
									},
									{
										"title": "固定收益销售交易部考核奖",
										"value": "6834.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_022固定收益销售交易部考核奖",
										"key": "G_03_022固定收益销售交易部考核奖"
									},
									{
										"title": "期初累计待返还风险金",
										"value": "6835.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_023期初累计待返还风险金",
										"key": "G_03_023期初累计待返还风险金"
									}
								]
							},
							{
								"title": "津贴",
								"children": [
									{
										"title": "岗位津贴",
										"value": "6842.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01岗位津贴",
										"key": "H_01岗位津贴"
									},
									{
										"title": "工作津贴",
										"value": "6838.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02工作津贴",
										"key": "H_02工作津贴"
									},
									{
										"title": "福利津贴",
										"value": "6839.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03福利津贴",
										"key": "H_03福利津贴"
									},
									{
										"title": "独生子女津贴",
										"value": "6840.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_04独生子女津贴",
										"key": "H_04独生子女津贴"
									},
									{
										"title": "投行交通补贴标准",
										"value": "6922.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_026投行交通补贴标准",
										"key": "H_03_026投行交通补贴标准"
									}
								]
							},
							{
								"title": "岗位津贴",
								"children": [
									{
										"title": "保荐人津贴",
										"value": "6843.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_001保荐人津贴",
										"key": "H_01_001保荐人津贴"
									},
									{
										"title": "内控联系人津贴",
										"value": "6844.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_002内控联系人津贴",
										"key": "H_01_002内控联系人津贴"
									},
									{
										"title": "专兼职合规津贴",
										"value": "6845.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_003专兼职合规津贴",
										"key": "H_01_003专兼职合规津贴"
									},
									{
										"title": "风险管理岗津贴",
										"value": "6846.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_004风险管理岗津贴",
										"key": "H_01_004风险管理岗津贴"
									},
									{
										"title": "保密岗津贴",
										"value": "6847.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_005保密岗津贴",
										"key": "H_01_005保密岗津贴"
									},
									{
										"title": "其他岗位津贴",
										"value": "6848.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_006其他岗位津贴",
										"key": "H_01_006其他岗位津贴"
									},
									{
										"title": "内控联系人津贴追溯",
										"value": "6863.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_021内控联系人津贴追溯",
										"key": "H_01_021内控联系人津贴追溯"
									},
									{
										"title": "专兼职合规津贴追溯",
										"value": "6864.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_022专兼职合规津贴追溯",
										"key": "H_01_022专兼职合规津贴追溯"
									},
									{
										"title": "风险管理岗津贴追溯",
										"value": "6865.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_023风险管理岗津贴追溯",
										"key": "H_01_023风险管理岗津贴追溯"
									},
									{
										"title": "保密岗津贴追溯",
										"value": "6866.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_024保密岗津贴追溯",
										"key": "H_01_024保密岗津贴追溯"
									},
									{
										"title": "其他岗位津贴追溯",
										"value": "6867.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_025其他岗位津贴追溯",
										"key": "H_01_025其他岗位津贴追溯"
									},
									{
										"title": "讲师津贴追溯",
										"value": "6886.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_019讲师津贴追溯",
										"key": "H_02_019讲师津贴追溯"
									},
									{
										"title": "伯乐奖追溯",
										"value": "6887.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_020伯乐奖追溯",
										"key": "H_02_020伯乐奖追溯"
									},
									{
										"title": "津贴追溯",
										"value": "6888.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_021IT津贴追溯",
										"key": "H_02_021IT津贴追溯"
									},
									{
										"title": "财富委佣金津贴追溯",
										"value": "6889.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_022财富委佣金津贴追溯",
										"key": "H_02_022财富委佣金津贴追溯"
									},
									{
										"title": "稿费追溯",
										"value": "6890.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_023稿费追溯",
										"key": "H_02_023稿费追溯"
									},
									{
										"title": "竞业协议津贴追溯",
										"value": "6891.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_024竞业协议津贴追溯",
										"key": "H_02_024竞业协议津贴追溯"
									},
									{
										"title": "特殊班次津贴追溯",
										"value": "6892.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_025特殊班次津贴追溯",
										"key": "H_02_025特殊班次津贴追溯"
									},
									{
										"title": "文化奖励追溯",
										"value": "6893.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_026文化奖励追溯",
										"key": "H_02_026文化奖励追溯"
									},
									{
										"title": "其他工作津贴追溯",
										"value": "6894.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_027其他工作津贴追溯",
										"key": "H_02_027其他工作津贴追溯"
									},
									{
										"title": "持续督导津贴追溯",
										"value": "6895.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_028持续督导津贴追溯",
										"key": "H_02_028持续督导津贴追溯"
									},
									{
										"title": "人才补贴追溯",
										"value": "6923.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_027人才补贴追溯",
										"key": "H_03_027人才补贴追溯"
									},
									{
										"title": "电脑补贴追溯",
										"value": "6924.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_028电脑补贴追溯",
										"key": "H_03_028电脑补贴追溯"
									},
									{
										"title": "过节费追溯",
										"value": "6925.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_029过节费追溯",
										"key": "H_03_029过节费追溯"
									},
									{
										"title": "未休年休假补贴追溯",
										"value": "6926.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_030未休年休假补贴追溯",
										"key": "H_03_030未休年休假补贴追溯"
									},
									{
										"title": "午餐补贴追溯",
										"value": "6927.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_031午餐补贴追溯",
										"key": "H_03_031午餐补贴追溯"
									},
									{
										"title": "通讯补贴追溯",
										"value": "6928.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_032通讯补贴追溯",
										"key": "H_03_032通讯补贴追溯"
									},
									{
										"title": "交通补贴追溯",
										"value": "6929.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_033交通补贴追溯",
										"key": "H_03_033交通补贴追溯"
									},
									{
										"title": "独生子女津贴追溯",
										"value": "6934.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_04_03独生子女津贴追溯",
										"key": "H_04_03独生子女津贴追溯"
									},
									{
										"title": "其他福利补贴追溯",
										"value": "6930.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_034其他福利补贴追溯",
										"key": "H_03_034其他福利补贴追溯"
									},
									{
										"title": "岗位津贴追溯",
										"value": "7011.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_06_004岗位津贴追溯",
										"key": "A_06_004岗位津贴追溯"
									}
								]
							},
							{
								"title": "工作津贴",
								"children": [
									{
										"title": "持续督导津贴",
										"value": "6877.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_010持续督导津贴",
										"key": "H_02_010持续督导津贴"
									},
									{
										"title": "讲师津贴",
										"value": "6868.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_001讲师津贴",
										"key": "H_02_001讲师津贴"
									},
									{
										"title": "伯乐奖",
										"value": "6869.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_002伯乐奖",
										"key": "H_02_002伯乐奖"
									},
									{
										"title": "津贴",
										"value": "6870.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_003IT津贴",
										"key": "H_02_003IT津贴"
									},
									{
										"title": "财富委佣金津贴",
										"value": "6871.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_004财富委佣金津贴",
										"key": "H_02_004财富委佣金津贴"
									},
									{
										"title": "稿费",
										"value": "6872.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_005稿费",
										"key": "H_02_005稿费"
									},
									{
										"title": "竞业协议津贴",
										"value": "6873.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_006竞业协议津贴",
										"key": "H_02_006竞业协议津贴"
									},
									{
										"title": "特殊班次津贴",
										"value": "6874.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_007特殊班次津贴",
										"key": "H_02_007特殊班次津贴"
									},
									{
										"title": "文化奖励",
										"value": "6875.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_008文化奖励",
										"key": "H_02_008文化奖励"
									},
									{
										"title": "其他工作津贴",
										"value": "6876.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_009其他工作津贴",
										"key": "H_02_009其他工作津贴"
									},
									{
										"title": "外派补贴",
										"value": "6883.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_016外派补贴",
										"key": "H_02_016外派补贴"
									}
								]
							},
							{
								"title": "福利津贴",
								"children": [
									{
										"title": "人才补贴",
										"value": "6898.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_001人才补贴",
										"key": "H_03_001人才补贴"
									},
									{
										"title": "电脑补贴",
										"value": "6899.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_002电脑补贴",
										"key": "H_03_002电脑补贴"
									},
									{
										"title": "过节费",
										"value": "6900.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_003过节费",
										"key": "H_03_003过节费"
									},
									{
										"title": "未休年休假天数",
										"value": "6901.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_004未休年休假天数",
										"key": "H_03_004未休年休假天数"
									},
									{
										"title": "未休年休假补贴",
										"value": "6902.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_005未休年休假补贴",
										"key": "H_03_005未休年休假补贴"
									},
									{
										"title": "午餐补贴标准",
										"value": "6903.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_006午餐补贴标准",
										"key": "H_03_006午餐补贴标准"
									},
									{
										"title": "午餐补贴",
										"value": "6904.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_007午餐补贴",
										"key": "H_03_007午餐补贴"
									},
									{
										"title": "通讯补贴",
										"value": "6906.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_009通讯补贴",
										"key": "H_03_009通讯补贴"
									},
									{
										"title": "交通补贴",
										"value": "6908.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_011交通补贴",
										"key": "H_03_011交通补贴"
									},
									{
										"title": "其他补贴",
										"value": "6909.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_012其他补贴",
										"key": "H_03_012其他补贴"
									},
									{
										"title": "其他福利津贴",
										"value": "6920.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_024其他福利津贴",
										"key": "H_03_024其他福利津贴"
									}
								]
							},
							{
								"title": "假勤汇总",
								"children": [
									{
										"title": "应出勤天数",
										"value": "23.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_01应出勤天数",
										"key": "J_01应出勤天数"
									},
									{
										"title": "实际出勤天数",
										"value": "23.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_02实际出勤天数",
										"key": "J_02实际出勤天数"
									}
								]
							},
							{
								"title": "会员会费",
								"children": [
									{
										"title": "工会会员会费",
										"value": "-200.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "K_01工会会员会费",
										"key": "K_01工会会员会费"
									},
									{
										"title": "爱心基金会员会费",
										"value": "-80.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "K_02爱心基金会员会费",
										"key": "K_02爱心基金会员会费"
									}
								]
							},
							{
								"title": "薪资计算",
								"children": [
									{
										"title": "应发金额",
										"value": "6947.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_01应发金额",
										"key": "L_01应发金额"
									},
									{
										"title": "实发金额",
										"value": "6948.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_02实发金额",
										"key": "L_02实发金额"
									},
									{
										"title": "员工成本",
										"value": "6949.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_03员工成本",
										"key": "L_03员工成本"
									},
									{
										"title": "税后加减项",
										"value": "6950.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_04税后加减项",
										"key": "L_04税后加减项"
									},
									{
										"title": "计税工资（居民正式员工）",
										"value": "6951.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_05计税工资（居民正式员工）",
										"key": "L_05计税工资（居民正式员工）"
									},
									{
										"title": "税后金额",
										"value": "6952.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_06税后金额",
										"key": "L_06税后金额"
									},
									{
										"title": "不含增值税金额",
										"value": "6953.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_07不含增值税金额",
										"key": "L_07不含增值税金额"
									},
									{
										"title": "费用",
										"value": "6954.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_08费用",
										"key": "L_08费用"
									},
									{
										"title": "展业成本",
										"value": "6955.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_09展业成本",
										"key": "L_09展业成本"
									},
									{
										"title": "全年可发收入",
										"value": "6956.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_10全年可发收入",
										"key": "L_10全年可发收入"
									},
									{
										"title": "预留年底发放的收入",
										"value": "6957.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_11预留年底发放的收入",
										"key": "L_11预留年底发放的收入"
									},
									{
										"title": "剩余额度",
										"value": "6958.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_12剩余额度",
										"key": "L_12剩余额度"
									},
									{
										"title": "累计不含税金额",
										"value": "6959.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_13累计不含税金额",
										"key": "L_13累计不含税金额"
									},
									{
										"title": "不含最低工资补差应发金额",
										"value": "6960.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_14不含最低工资补差应发金额",
										"key": "L_14不含最低工资补差应发金额"
									},
									{
										"title": "不含最低工资补差实发金额",
										"value": "6961.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_15不含最低工资补差实发金额",
										"key": "L_15不含最低工资补差实发金额"
									},
									{
										"title": "计税工资（居民实习生）",
										"value": "6962.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_16计税工资（居民实习生）",
										"key": "L_16计税工资（居民实习生）"
									},
									{
										"title": "计税工资（非居民正式员工）",
										"value": "6964.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_18计税工资（非居民正式员工）",
										"key": "L_18计税工资（非居民正式员工）"
									},
									{
										"title": "计税工资（非居民实习生）",
										"value": "6965.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_19计税工资（非居民实习生）",
										"key": "L_19计税工资（非居民实习生）"
									},
									{
										"title": "计税工资（劳务)",
										"value": "6966.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_20计税工资（劳务)",
										"key": "L_20计税工资（劳务)"
									}
								]
							},
							{
								"title": "税局项目",
								"children": [
									{
										"title": "本期免税收入",
										"value": "6967.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_01本期免税收入",
										"key": "M_01本期免税收入"
									},
									{
										"title": "年金",
										"value": "6968.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_02年金",
										"key": "M_02年金"
									},
									{
										"title": "商业健康保险",
										"value": "6969.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_03商业健康保险",
										"key": "M_03商业健康保险"
									},
									{
										"title": "税延养老保险",
										"value": "6970.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_04税延养老保险",
										"key": "M_04税延养老保险"
									},
									{
										"title": "城建及教育费附加",
										"value": "6971.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_05城建及教育费附加",
										"key": "M_05城建及教育费附加"
									},
									{
										"title": "累计收入额",
										"value": "6972.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_06累计收入额",
										"key": "M_06累计收入额"
									},
									{
										"title": "累计减除费用",
										"value": "6973.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_07累计减除费用",
										"key": "M_07累计减除费用"
									},
									{
										"title": "累计专项扣除",
										"value": "6974.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_08累计专项扣除",
										"key": "M_08累计专项扣除"
									},
									{
										"title": "累计子女教育专项附加扣除",
										"value": "6975.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_09累计子女教育专项附加扣除",
										"key": "M_09累计子女教育专项附加扣除"
									},
									{
										"title": "累计赡养老人专项附加扣除",
										"value": "6976.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_10累计赡养老人专项附加扣除",
										"key": "M_10累计赡养老人专项附加扣除"
									},
									{
										"title": "累计住房贷款利息专项附加扣除",
										"value": "6977.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_11累计住房贷款利息专项附加扣除",
										"key": "M_11累计住房贷款利息专项附加扣除"
									},
									{
										"title": "累计住房租金专项附加扣除",
										"value": "6978.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_12累计住房租金专项附加扣除",
										"key": "M_12累计住房租金专项附加扣除"
									},
									{
										"title": "累计继续教育专项附加扣除",
										"value": "6979.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_13累计继续教育专项附加扣除",
										"key": "M_13累计继续教育专项附加扣除"
									},
									{
										"title": "累计3岁以下婴幼儿照护专项附加扣除",
										"value": "6980.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_14累计3岁以下婴幼儿照护专项附加扣除",
										"key": "M_14累计3岁以下婴幼儿照护专项附加扣除"
									},
									{
										"title": "累计个人养老金",
										"value": "6981.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_15累计个人养老金",
										"key": "M_15累计个人养老金"
									},
									{
										"title": "累计其他扣除",
										"value": "6982.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_16累计其他扣除",
										"key": "M_16累计其他扣除"
									},
									{
										"title": "累计预扣预缴应纳税所得额",
										"value": "6983.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_17累计预扣预缴应纳税所得额",
										"key": "M_17累计预扣预缴应纳税所得额"
									},
									{
										"title": "个人所得税税率",
										"value": "6984.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_18个人所得税税率",
										"key": "M_18个人所得税税率"
									},
									{
										"title": "速算扣除数",
										"value": "6985.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_19速算扣除数",
										"key": "M_19速算扣除数"
									},
									{
										"title": "累计应纳税额",
										"value": "6986.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_20累计应纳税额",
										"key": "M_20累计应纳税额"
									},
									{
										"title": "累计减免税额",
										"value": "6987.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_21累计减免税额",
										"key": "M_21累计减免税额"
									},
									{
										"title": "累计已缴税额",
										"value": "6988.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_22累计已缴税额",
										"key": "M_22累计已缴税额"
									},
									{
										"title": "应补/退税额",
										"value": "6989.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_23应补/退税额",
										"key": "M_23应补/退税额"
									},
									{
										"title": "应补/退税额（离职补偿金）",
										"value": "6990.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_25应补/退税额（离职补偿金）",
										"key": "M_25应补/退税额（离职补偿金）"
									},
									{
										"title": "增值税",
										"value": "6991.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_24增值税",
										"key": "M_24增值税"
									}
								]
							},
							{
								"title": "应发金额",
								"children": [
									{
										"title": "基本薪酬",
										"value": "6993.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A基本薪酬",
										"key": "A基本薪酬"
									},
									{
										"title": "其他应补应扣工资",
										"value": "6994.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03其他应补应扣工资",
										"key": "A_03其他应补应扣工资"
									},
									{
										"title": "考勤扣款",
										"value": "-6995.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04考勤扣款",
										"key": "A_04考勤扣款"
									},
									{
										"title": "加班工资",
										"value": "6996.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05加班工资",
										"key": "A_05加班工资"
									},
									{
										"title": "其他工资",
										"value": "6997.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B其他工资",
										"key": "B其他工资"
									},
									{
										"title": "违规违纪扣罚",
										"value": "6998.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C违规违纪扣罚",
										"key": "C违规违纪扣罚"
									},
									{
										"title": "离职补偿金合计",
										"value": "6999.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "D离职补偿金合计",
										"key": "D离职补偿金合计"
									},
									{
										"title": "低于最低工资补差",
										"value": "7000.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "E低于最低工资补差",
										"key": "E低于最低工资补差"
									},
									{
										"title": "社保公积金",
										"value": "7001.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F社保公积金",
										"key": "F社保公积金"
									},
									{
										"title": "变动奖金",
										"value": "7002.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G变动奖金",
										"key": "G变动奖金"
									},
									{
										"title": "津贴",
										"value": "6837.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H津贴",
										"key": "H津贴"
									},
									{
										"title": "捐款",
										"value": "7003.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "I捐款",
										"key": "I捐款"
									},
									{
										"title": "假勤汇总",
										"value": "7004.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J假勤汇总",
										"key": "J假勤汇总"
									},
									{
										"title": "会员会费",
										"value": "7005.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "K会员会费",
										"key": "K会员会费"
									},
									{
										"title": "薪资计算",
										"value": "7006.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L薪资计算",
										"key": "L薪资计算"
									},
									{
										"title": "税局项目",
										"value": "7007.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M税局项目",
										"key": "M税局项目"
									},
									{
										"title": "月工资",
										"value": "6963.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_17月工资",
										"key": "L_17月工资"
									}
								]
							},
							{
								"title": "岗位工资",
								"children": [
									{
										"title": "月标准岗位津贴",
										"value": "7008.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_06_001月标准岗位津贴",
										"key": "A_06_001月标准岗位津贴"
									},
									{
										"title": "岗位津贴扣款",
										"value": "7009.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_06_002岗位津贴扣款",
										"key": "A_06_002岗位津贴扣款"
									},
									{
										"title": "岗位津贴折算",
										"value": "7010.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_06_003岗位津贴折算",
										"key": "A_06_003岗位津贴折算"
									}
								]
							},
							{
								"title": "其他纳税收入",
								"children": [
									{
										"title": "工会福利费",
										"value": "7049.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_06工会福利费",
										"key": "Q_06工会福利费"
									},
									{
										"title": "其他纳税收入",
										"value": "7043.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_其他纳税收入",
										"key": "Q_其他纳税收入"
									},
									{
										"title": "忠诚奖",
										"value": "7044.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_01忠诚奖",
										"key": "Q_01忠诚奖"
									},
									{
										"title": "补充医疗",
										"value": "7045.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_02补充医疗",
										"key": "Q_02补充医疗"
									},
									{
										"title": "个税调整",
										"value": "7046.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_03个税调整",
										"key": "Q_03个税调整"
									},
									{
										"title": "其他1",
										"value": "7047.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_04其他1",
										"key": "Q_04其他1"
									},
									{
										"title": "其他2",
										"value": "7048.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_05其他2",
										"key": "Q_05其他2"
									}
								]
							}
						],
						"align": "left"
					}
				],
				"align": "left"
			}
		]
	},
	{
		"title": "202401",
		"month": 1,
		"year": 2024,
		"children": [
			{
				"title": "正式国金总部",
				"children": [
					{
						"enableEmployeeConfirm": false,
						"confirmStatus": true,
						"title": "人民币",
						"time": 1,
						"children": [
							{
								"title": "核算当期员工信息",
								"children": [
									{
										"title": "证件类型",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "证件类型",
										"key": "证件类型"
									},
									{
										"title": "用工关系类型",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "用工关系类型",
										"key": "用工关系类型"
									},
									{
										"title": "发薪业务组织",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "发薪业务组织",
										"key": "发薪业务组织"
									},
									{
										"title": "实习津贴计算方式",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "实习津贴计算方式",
										"key": "实习津贴计算方式"
									}
								]
							},
							{
								"title": "基本薪酬",
								"children": [
									{
										"title": "基本工资",
										"value": "5555.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "基本工资",
										"key": "基本工资"
									},
									{
										"title": "绩效工资",
										"value": "5556.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_02绩效工资",
										"key": "A_02绩效工资"
									},
									{
										"title": "岗位津贴",
										"value": "5557.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "岗位津贴",
										"key": "岗位津贴"
									}
								]
							},
							{
								"title": "基本工资",
								"children": [
									{
										"title": "基本工资追溯",
										"value": "5561.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_01_004基本工资追溯",
										"key": "A_01_004基本工资追溯"
									}
								]
							},
							{
								"title": "绩效工资",
								"children": [
									{
										"title": "绩效奖励（财富委）",
										"value": "5725.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_024绩效奖励（财富委）",
										"key": "G_03_024绩效奖励（财富委）"
									},
									{
										"title": "绩效工资追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_023绩效工资追溯",
										"key": "A_02_023绩效工资追溯"
									},
									{
										"title": "个人月度预发追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_024个人月度预发追溯",
										"key": "A_02_024个人月度预发追溯"
									},
									{
										"title": "考核绩效工资追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_025考核绩效工资追溯",
										"key": "A_02_025考核绩效工资追溯"
									},
									{
										"title": "绩效津贴追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_02_026绩效津贴追溯",
										"key": "A_02_026绩效津贴追溯"
									}
								]
							},
							{
								"title": "其他应补应扣工资",
								"children": [
									{
										"title": "基本工资折算",
										"value": "-5606.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_011基本工资折算",
										"key": "A_03_011基本工资折算"
									},
									{
										"title": "其他应补应扣",
										"value": "5597.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_001其他应补应扣",
										"key": "A_03_001其他应补应扣"
									},
									{
										"title": "入职补发工资",
										"value": "5598.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_002入职补发工资",
										"key": "A_03_002入职补发工资"
									},
									{
										"title": "上月入职未核算天数的工资结算",
										"value": "5599.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_004上月入职未核算天数的工资结算",
										"key": "A_03_004上月入职未核算天数的工资结算"
									},
									{
										"title": "不含节假日不在职天数",
										"value": "2.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_005不含节假日不在职天数",
										"key": "A_03_005不含节假日不在职天数"
									},
									{
										"title": "不在职天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_010不在职天数",
										"key": "A_03_010不在职天数"
									},
									{
										"title": "是否当月入职",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_007是否当月入职",
										"key": "A_03_007是否当月入职"
									},
									{
										"title": "是否当月离职",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_008是否当月离职",
										"key": "A_03_008是否当月离职"
									},
									{
										"title": "是否当月同时入离职",
										"value": "1.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03_009是否当月同时入离职",
										"key": "A_03_009是否当月同时入离职"
									}
								]
							},
							{
								"title": "考勤扣款",
								"children": [
									{
										"title": "年累计病假天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_011年累计病假天数",
										"key": "A_04_011年累计病假天数"
									},
									{
										"title": "当月病假天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_010当月病假天数",
										"key": "A_04_010当月病假天数"
									},
									{
										"title": "半天旷工次数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_012半天旷工次数",
										"key": "A_04_012半天旷工次数"
									},
									{
										"title": "迟到扣款",
										"value": "-5607.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_001迟到扣款",
										"key": "A_04_001迟到扣款"
									},
									{
										"title": "全天旷工次数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_013全天旷工次数",
										"key": "A_04_013全天旷工次数"
									},
									{
										"title": "早退扣款",
										"value": "-5608.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_002早退扣款",
										"key": "A_04_002早退扣款"
									},
									{
										"title": "事假扣款",
										"value": "-5609.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_003事假扣款",
										"key": "A_04_003事假扣款"
									},
									{
										"title": "病假扣款",
										"value": "-5610.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_004病假扣款",
										"key": "A_04_004病假扣款"
									},
									{
										"title": "旷工扣款",
										"value": "-5611.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_005旷工扣款",
										"key": "A_04_005旷工扣款"
									},
									{
										"title": "迟到次数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_006迟到次数",
										"key": "A_04_006迟到次数"
									},
									{
										"title": "早退次数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_007早退次数",
										"key": "A_04_007早退次数"
									},
									{
										"title": "当月事假天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_008当月事假天数",
										"key": "A_04_008当月事假天数"
									},
									{
										"title": "年累计事假天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_009年累计事假天数",
										"key": "A_04_009年累计事假天数"
									},
									{
										"title": "含节假日产假天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_014含节假日产假天数",
										"key": "A_04_014含节假日产假天数"
									},
									{
										"title": "年累计产假天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_015年累计产假天数",
										"key": "A_04_015年累计产假天数"
									},
									{
										"title": "地区病假扣款",
										"value": "-5623.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_017地区病假扣款",
										"key": "A_04_017地区病假扣款"
									},
									{
										"title": "当月病假绩效扣款天数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_016当月病假绩效扣款天数",
										"key": "A_04_016当月病假绩效扣款天数"
									},
									{
										"title": "公司病假扣款",
										"value": "-5625.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_019公司病假扣款",
										"key": "A_04_019公司病假扣款"
									},
									{
										"title": "病假扣款基数",
										"value": "5632.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04_026病假扣款基数",
										"key": "A_04_026病假扣款基数"
									},
									{
										"title": "事假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_030事假天数追溯",
										"key": "A_04_030事假天数追溯"
									},
									{
										"title": "病假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_031病假天数追溯",
										"key": "A_04_031病假天数追溯"
									},
									{
										"title": "产假天数追溯",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_032产假天数追溯",
										"key": "A_04_032产假天数追溯"
									},
									{
										"title": "产假天数追溯（不含节假日）",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_033产假天数追溯（不含节假日）",
										"key": "A_04_033产假天数追溯（不含节假日）"
									},
									{
										"title": "产假天数追溯（自然日）",
										"value": "",
										"type": "string",
										"width": "100px",
										"dataIndex": "A_04_034产假天数追溯（自然日）",
										"key": "A_04_034产假天数追溯（自然日）"
									}
								]
							},
							{
								"title": "加班工资",
								"children": [
									{
										"title": "平时加班小时数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_005平时加班小时数",
										"key": "A_05_005平时加班小时数"
									},
									{
										"title": "周末加班小时数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_006周末加班小时数",
										"key": "A_05_006周末加班小时数"
									},
									{
										"title": "假日加班小时数",
										"value": "3.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_007假日加班小时数",
										"key": "A_05_007假日加班小时数"
									},
									{
										"title": "固定加班津贴",
										"value": "5644.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_004固定加班津贴",
										"key": "A_05_004固定加班津贴"
									},
									{
										"title": "平时加班工资",
										"value": "5641.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_001平时加班工资",
										"key": "A_05_001平时加班工资"
									},
									{
										"title": "周末加班工资",
										"value": "5642.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_002周末加班工资",
										"key": "A_05_002周末加班工资"
									},
									{
										"title": "假日加班工资",
										"value": "5643.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05_003假日加班工资",
										"key": "A_05_003假日加班工资"
									}
								]
							},
							{
								"title": "其他工资",
								"children": [
									{
										"title": "实习生津贴",
										"value": "5649.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01实习生津贴",
										"key": "B_01实习生津贴"
									},
									{
										"title": "劳务报酬",
										"value": "5650.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_02劳务报酬",
										"key": "B_02劳务报酬"
									}
								]
							},
							{
								"title": "实习生津贴",
								"children": [
									{
										"title": "实习生津贴标准",
										"value": "5652.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_001实习生津贴标准",
										"key": "B_01_001实习生津贴标准"
									},
									{
										"title": "实习生出勤天数",
										"value": "22.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_003实习生出勤天数",
										"key": "B_01_003实习生出勤天数"
									},
									{
										"title": "应扣实习生出勤天数",
										"value": "22.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_002应扣实习生出勤天数",
										"key": "B_01_002应扣实习生出勤天数"
									},
									{
										"title": "不含午餐补贴实习生津贴",
										"value": "5656.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_005不含午餐补贴实习生津贴",
										"key": "B_01_005不含午餐补贴实习生津贴"
									},
									{
										"title": "实习生津贴追溯",
										"value": "5655.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B_01_004实习生津贴追溯",
										"key": "B_01_004实习生津贴追溯"
									}
								]
							},
							{
								"title": "违规违纪扣罚",
								"children": [
									{
										"title": "违规违纪扣罚-绩效工资",
										"value": "5657.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C_01违规违纪扣罚-绩效工资",
										"key": "C_01违规违纪扣罚-绩效工资"
									},
									{
										"title": "违规违纪扣罚-利润奖",
										"value": "5658.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C_02违规违纪扣罚-利润奖",
										"key": "C_02违规违纪扣罚-利润奖"
									},
									{
										"title": "违规违纪扣罚-考核奖",
										"value": "5659.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C_03违规违纪扣罚-考核奖",
										"key": "C_03违规违纪扣罚-考核奖"
									}
								]
							},
							{
								"title": "离职补偿金",
								"children": [
									{
										"title": "代通知金",
										"value": "5661.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "D_02代通知金",
										"key": "D_02代通知金"
									},
									{
										"title": "离职补偿金",
										"value": "5660.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "D_01离职补偿金",
										"key": "D_01离职补偿金"
									}
								]
							},
							{
								"title": "低于最低工资补差",
								"children": [
									{
										"title": "预发最低工资差额（税前）",
										"value": "5662.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "E_01预发最低工资差额（税前）",
										"key": "E_01预发最低工资差额（税前）"
									},
									{
										"title": "预发最低工资差额（税后）",
										"value": "5663.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "E_02预发最低工资差额（税后）",
										"key": "E_02预发最低工资差额（税后）"
									},
									{
										"title": "最低工资标准判断依据",
										"value": "5664",
										"type": "string",
										"width": "100px",
										"dataIndex": "E_03最低工资标准判断依据",
										"key": "E_03最低工资标准判断依据"
									}
								]
							},
							{
								"title": "社保公积金",
								"children": [
									{
										"title": "个人合计",
										"value": "5665.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01个人合计",
										"key": "F_01个人合计"
									},
									{
										"title": "公司合计",
										"value": "5666.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02公司合计",
										"key": "F_02公司合计"
									}
								]
							},
							{
								"title": "个人合计",
								"children": [
									{
										"title": "个人公积金申报金额",
										"value": "5674.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_008个人公积金申报金额",
										"key": "F_01_008个人公积金申报金额"
									},
									{
										"title": "个人养老",
										"value": "5667.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_001个人养老",
										"key": "F_01_001个人养老"
									},
									{
										"title": "个人医疗",
										"value": "5668.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_002个人医疗",
										"key": "F_01_002个人医疗"
									},
									{
										"title": "个人大病",
										"value": "5669.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_003个人大病",
										"key": "F_01_003个人大病"
									},
									{
										"title": "个人失业",
										"value": "5670.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_004个人失业",
										"key": "F_01_004个人失业"
									},
									{
										"title": "个人公积金",
										"value": "5671.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_005个人公积金",
										"key": "F_01_005个人公积金"
									},
									{
										"title": "湖南新疆专用大病个人",
										"value": "5673.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_007湖南新疆专用大病个人",
										"key": "F_01_007湖南新疆专用大病个人"
									},
									{
										"title": "公积金超上限金额",
										"value": "5672.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_01_006公积金超上限金额",
										"key": "F_01_006公积金超上限金额"
									}
								]
							},
							{
								"title": "公司合计",
								"children": [
									{
										"title": "公司养老",
										"value": "5675.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_001公司养老",
										"key": "F_02_001公司养老"
									},
									{
										"title": "公司医疗",
										"value": "5676.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_002公司医疗",
										"key": "F_02_002公司医疗"
									},
									{
										"title": "公司大病",
										"value": "5677.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_003公司大病",
										"key": "F_02_003公司大病"
									},
									{
										"title": "公司失业",
										"value": "5678.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_004公司失业",
										"key": "F_02_004公司失业"
									},
									{
										"title": "公司工伤",
										"value": "5679.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_005公司工伤",
										"key": "F_02_005公司工伤"
									},
									{
										"title": "公司生育",
										"value": "5680.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_006公司生育",
										"key": "F_02_006公司生育"
									},
									{
										"title": "公司公积金",
										"value": "5681.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_007公司公积金",
										"key": "F_02_007公司公积金"
									},
									{
										"title": "管理费",
										"value": "5682.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F_02_008管理费",
										"key": "F_02_008管理费"
									},
									{
										"title": "是否缴纳管理费",
										"value": "5683",
										"type": "string",
										"width": "100px",
										"dataIndex": "F_02_009是否缴纳管理费",
										"key": "F_02_009是否缴纳管理费"
									}
								]
							},
							{
								"title": "变动奖金",
								"children": [
									{
										"title": "往年递延奖金",
										"value": "5684.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "往年递延奖金",
										"key": "往年递延奖金"
									},
									{
										"title": "利润奖",
										"value": "5685.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02利润奖",
										"key": "G_02利润奖"
									},
									{
										"title": "考核奖",
										"value": "5686.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03考核奖",
										"key": "G_03考核奖"
									},
									{
										"title": "投行固薪调整额_2016年",
										"value": "5939.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_01投行固薪调整额_2016年",
										"key": "G_04_01投行固薪调整额_2016年"
									},
									{
										"title": "投行固薪调整额_2017年",
										"value": "5940.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_02投行固薪调整额_2017年",
										"key": "G_04_02投行固薪调整额_2017年"
									},
									{
										"title": "投行固薪调整额_2018年",
										"value": "5941.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_03投行固薪调整额_2018年",
										"key": "G_04_03投行固薪调整额_2018年"
									},
									{
										"title": "投行固薪调整额_2019年",
										"value": "5942.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_04投行固薪调整额_2019年",
										"key": "G_04_04投行固薪调整额_2019年"
									},
									{
										"title": "投行固薪调整额_2020年",
										"value": "5943.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_05投行固薪调整额_2020年",
										"key": "G_04_05投行固薪调整额_2020年"
									},
									{
										"title": "投行固薪调整额_2021年",
										"value": "5944.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_06投行固薪调整额_2021年",
										"key": "G_04_06投行固薪调整额_2021年"
									},
									{
										"title": "投行固薪调整额_2022年7月",
										"value": "5945.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_07投行固薪调整额_2022年7月",
										"key": "G_04_07投行固薪调整额_2022年7月"
									},
									{
										"title": "投行固薪调整额_2023年4月",
										"value": "5946.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_08投行固薪调整额_2023年4月",
										"key": "G_04_08投行固薪调整额_2023年4月"
									},
									{
										"title": "投行固薪调整额_2024年10月",
										"value": "5947.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_09投行固薪调整额_2024年10月",
										"key": "G_04_09投行固薪调整额_2024年10月"
									},
									{
										"title": "后台固薪调整额_2018年5月",
										"value": "5948.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_10后台固薪调整额_2018年5月",
										"key": "G_04_10后台固薪调整额_2018年5月"
									},
									{
										"title": "后台固薪调整额_2021年2月",
										"value": "5949.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_11后台固薪调整额_2021年2月",
										"key": "G_04_11后台固薪调整额_2021年2月"
									},
									{
										"title": "后台固薪调整额_2022年1月",
										"value": "5950.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_12后台固薪调整额_2022年1月",
										"key": "G_04_12后台固薪调整额_2022年1月"
									},
									{
										"title": "资管固薪调整额_2022年8月",
										"value": "5951.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_13资管固薪调整额_2022年8月",
										"key": "G_04_13资管固薪调整额_2022年8月"
									},
									{
										"title": "资管结构融资固薪调整额_2024年",
										"value": "5952.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_14资管结构融资固薪调整额_2024年",
										"key": "G_04_14资管结构融资固薪调整额_2024年"
									},
									{
										"title": "固薪调整额1",
										"value": "5953.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_15固薪调整额1",
										"key": "G_04_15固薪调整额1"
									},
									{
										"title": "固薪调整额2",
										"value": "5954.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_16固薪调整额2",
										"key": "G_04_16固薪调整额2"
									},
									{
										"title": "固薪调整额3",
										"value": "5955.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_17固薪调整额3",
										"key": "G_04_17固薪调整额3"
									},
									{
										"title": "固薪调整额4",
										"value": "5956.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_18固薪调整额4",
										"key": "G_04_18固薪调整额4"
									},
									{
										"title": "固薪调整额5",
										"value": "5957.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_04_19固薪调整额5",
										"key": "G_04_19固薪调整额5"
									},
									{
										"title": "行政津贴追溯",
										"value": "5702.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_013行政津贴追溯",
										"key": "G_02_013行政津贴追溯"
									}
								]
							},
							{
								"title": "往年递延奖金",
								"children": [
									{
										"title": "往年递延奖金-利润奖",
										"value": "5688.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_01_001往年递延奖金-利润奖",
										"key": "G_01_001往年递延奖金-利润奖"
									},
									{
										"title": "往年递延奖金-考核奖",
										"value": "5689.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_01_002往年递延奖金-考核奖",
										"key": "G_01_002往年递延奖金-考核奖"
									}
								]
							},
							{
								"title": "利润奖",
								"children": [
									{
										"title": "行政津贴",
										"value": "5690.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_001行政津贴",
										"key": "G_02_001行政津贴"
									},
									{
										"title": "其他津贴",
										"value": "5692.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_003其他津贴",
										"key": "G_02_003其他津贴"
									},
									{
										"title": "季度预发奖金",
										"value": "5693.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_004季度预发奖金",
										"key": "G_02_004季度预发奖金"
									},
									{
										"title": "文化奖励",
										"value": "5694.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_005文化奖励",
										"key": "G_02_005文化奖励"
									},
									{
										"title": "创优评先奖励",
										"value": "5695.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_006创优评先奖励",
										"key": "G_02_006创优评先奖励"
									},
									{
										"title": "内核津贴",
										"value": "5696.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_007内核津贴",
										"key": "G_02_007内核津贴"
									},
									{
										"title": "过节费",
										"value": "5698.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_009过节费",
										"key": "G_02_009过节费"
									},
									{
										"title": "其他奖金",
										"value": "5699.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_02_010其他奖金",
										"key": "G_02_010其他奖金"
									}
								]
							},
							{
								"title": "考核奖",
								"children": [
									{
										"title": "一般考核奖",
										"value": "5703.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_002一般考核奖",
										"key": "G_03_002一般考核奖"
									},
									{
										"title": "业绩考核奖",
										"value": "5704.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_003业绩考核奖",
										"key": "G_03_003业绩考核奖"
									},
									{
										"title": "业务奖惩",
										"value": "5705.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_004业务奖惩",
										"key": "G_03_004业务奖惩"
									},
									{
										"title": "类奖金后置",
										"value": "5706.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_005 B类奖金后置",
										"key": "G_03_005 B类奖金后置"
									},
									{
										"title": "类奖金预发",
										"value": "5707.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_006 B类奖金预发",
										"key": "G_03_006 B类奖金预发"
									},
									{
										"title": "管理奖",
										"value": "5708.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_007管理奖",
										"key": "G_03_007管理奖"
									},
									{
										"title": "产品奖励",
										"value": "5709.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_008产品奖励",
										"key": "G_03_008产品奖励"
									},
									{
										"title": "专项奖励",
										"value": "5710.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_009专项奖励",
										"key": "G_03_009专项奖励"
									},
									{
										"title": "竞赛奖励",
										"value": "5711.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_010竞赛奖励",
										"key": "G_03_010竞赛奖励"
									},
									{
										"title": "营销奖励",
										"value": "5712.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_011营销奖励",
										"key": "G_03_011营销奖励"
									},
									{
										"title": "目标奖金",
										"value": "5713.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_012目标奖金",
										"key": "G_03_012目标奖金"
									},
									{
										"title": "其他奖励",
										"value": "5714.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_013其他奖励",
										"key": "G_03_013其他奖励"
									},
									{
										"title": "风险金返还",
										"value": "-5715.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_014风险金返还",
										"key": "G_03_014风险金返还"
									},
									{
										"title": "风险金计提",
										"value": "5716.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_015风险金计提",
										"key": "G_03_015风险金计提"
									},
									{
										"title": "协同考核奖",
										"value": "5717.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_016协同考核奖",
										"key": "G_03_016协同考核奖"
									},
									{
										"title": "累计待返还风险金",
										"value": "5718.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_017累计待返还风险金",
										"key": "G_03_017累计待返还风险金"
									},
									{
										"title": "风险金扣罚",
										"value": "-5719.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_018风险金扣罚",
										"key": "G_03_018风险金扣罚"
									},
									{
										"title": "风险金预发",
										"value": "5720.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_019风险金预发",
										"key": "G_03_019风险金预发"
									},
									{
										"title": "项目保证金",
										"value": "5721.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_020项目保证金",
										"key": "G_03_020项目保证金"
									},
									{
										"title": "固定收益销售交易部考核奖",
										"value": "5723.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_022固定收益销售交易部考核奖",
										"key": "G_03_022固定收益销售交易部考核奖"
									},
									{
										"title": "期初累计待返还风险金",
										"value": "5724.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G_03_023期初累计待返还风险金",
										"key": "G_03_023期初累计待返还风险金"
									}
								]
							},
							{
								"title": "津贴",
								"children": [
									{
										"title": "岗位津贴",
										"value": "5731.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01岗位津贴",
										"key": "H_01岗位津贴"
									},
									{
										"title": "工作津贴",
										"value": "5727.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02工作津贴",
										"key": "H_02工作津贴"
									},
									{
										"title": "福利津贴",
										"value": "5728.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03福利津贴",
										"key": "H_03福利津贴"
									},
									{
										"title": "独生子女津贴",
										"value": "5729.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_04独生子女津贴",
										"key": "H_04独生子女津贴"
									},
									{
										"title": "投行交通补贴标准",
										"value": "5811.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_026投行交通补贴标准",
										"key": "H_03_026投行交通补贴标准"
									}
								]
							},
							{
								"title": "岗位津贴",
								"children": [
									{
										"title": "保荐人津贴",
										"value": "5732.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_001保荐人津贴",
										"key": "H_01_001保荐人津贴"
									},
									{
										"title": "内控联系人津贴",
										"value": "5733.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_002内控联系人津贴",
										"key": "H_01_002内控联系人津贴"
									},
									{
										"title": "专兼职合规津贴",
										"value": "5734.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_003专兼职合规津贴",
										"key": "H_01_003专兼职合规津贴"
									},
									{
										"title": "风险管理岗津贴",
										"value": "5735.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_004风险管理岗津贴",
										"key": "H_01_004风险管理岗津贴"
									},
									{
										"title": "保密岗津贴",
										"value": "5736.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_005保密岗津贴",
										"key": "H_01_005保密岗津贴"
									},
									{
										"title": "其他岗位津贴",
										"value": "5737.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_006其他岗位津贴",
										"key": "H_01_006其他岗位津贴"
									},
									{
										"title": "内控联系人津贴追溯",
										"value": "5752.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_021内控联系人津贴追溯",
										"key": "H_01_021内控联系人津贴追溯"
									},
									{
										"title": "专兼职合规津贴追溯",
										"value": "5753.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_022专兼职合规津贴追溯",
										"key": "H_01_022专兼职合规津贴追溯"
									},
									{
										"title": "风险管理岗津贴追溯",
										"value": "5754.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_023风险管理岗津贴追溯",
										"key": "H_01_023风险管理岗津贴追溯"
									},
									{
										"title": "保密岗津贴追溯",
										"value": "5755.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_024保密岗津贴追溯",
										"key": "H_01_024保密岗津贴追溯"
									},
									{
										"title": "其他岗位津贴追溯",
										"value": "5756.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_01_025其他岗位津贴追溯",
										"key": "H_01_025其他岗位津贴追溯"
									},
									{
										"title": "讲师津贴追溯",
										"value": "5775.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_019讲师津贴追溯",
										"key": "H_02_019讲师津贴追溯"
									},
									{
										"title": "伯乐奖追溯",
										"value": "5776.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_020伯乐奖追溯",
										"key": "H_02_020伯乐奖追溯"
									},
									{
										"title": "津贴追溯",
										"value": "5777.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_021IT津贴追溯",
										"key": "H_02_021IT津贴追溯"
									},
									{
										"title": "财富委佣金津贴追溯",
										"value": "5778.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_022财富委佣金津贴追溯",
										"key": "H_02_022财富委佣金津贴追溯"
									},
									{
										"title": "稿费追溯",
										"value": "5779.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_023稿费追溯",
										"key": "H_02_023稿费追溯"
									},
									{
										"title": "竞业协议津贴追溯",
										"value": "5780.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_024竞业协议津贴追溯",
										"key": "H_02_024竞业协议津贴追溯"
									},
									{
										"title": "特殊班次津贴追溯",
										"value": "5781.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_025特殊班次津贴追溯",
										"key": "H_02_025特殊班次津贴追溯"
									},
									{
										"title": "文化奖励追溯",
										"value": "5782.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_026文化奖励追溯",
										"key": "H_02_026文化奖励追溯"
									},
									{
										"title": "其他工作津贴追溯",
										"value": "5783.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_027其他工作津贴追溯",
										"key": "H_02_027其他工作津贴追溯"
									},
									{
										"title": "持续督导津贴追溯",
										"value": "5784.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_028持续督导津贴追溯",
										"key": "H_02_028持续督导津贴追溯"
									},
									{
										"title": "人才补贴追溯",
										"value": "5812.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_027人才补贴追溯",
										"key": "H_03_027人才补贴追溯"
									},
									{
										"title": "电脑补贴追溯",
										"value": "5813.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_028电脑补贴追溯",
										"key": "H_03_028电脑补贴追溯"
									},
									{
										"title": "过节费追溯",
										"value": "5814.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_029过节费追溯",
										"key": "H_03_029过节费追溯"
									},
									{
										"title": "未休年休假补贴追溯",
										"value": "5815.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_030未休年休假补贴追溯",
										"key": "H_03_030未休年休假补贴追溯"
									},
									{
										"title": "午餐补贴追溯",
										"value": "5816.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_031午餐补贴追溯",
										"key": "H_03_031午餐补贴追溯"
									},
									{
										"title": "通讯补贴追溯",
										"value": "5817.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_032通讯补贴追溯",
										"key": "H_03_032通讯补贴追溯"
									},
									{
										"title": "交通补贴追溯",
										"value": "5818.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_033交通补贴追溯",
										"key": "H_03_033交通补贴追溯"
									},
									{
										"title": "独生子女津贴追溯",
										"value": "5823.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_04_03独生子女津贴追溯",
										"key": "H_04_03独生子女津贴追溯"
									},
									{
										"title": "其他福利补贴追溯",
										"value": "5819.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_034其他福利补贴追溯",
										"key": "H_03_034其他福利补贴追溯"
									},
									{
										"title": "岗位津贴追溯",
										"value": "5900.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_06_004岗位津贴追溯",
										"key": "A_06_004岗位津贴追溯"
									}
								]
							},
							{
								"title": "工作津贴",
								"children": [
									{
										"title": "持续督导津贴",
										"value": "5766.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_010持续督导津贴",
										"key": "H_02_010持续督导津贴"
									},
									{
										"title": "讲师津贴",
										"value": "5757.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_001讲师津贴",
										"key": "H_02_001讲师津贴"
									},
									{
										"title": "伯乐奖",
										"value": "5758.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_002伯乐奖",
										"key": "H_02_002伯乐奖"
									},
									{
										"title": "津贴",
										"value": "5759.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_003IT津贴",
										"key": "H_02_003IT津贴"
									},
									{
										"title": "财富委佣金津贴",
										"value": "5760.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_004财富委佣金津贴",
										"key": "H_02_004财富委佣金津贴"
									},
									{
										"title": "稿费",
										"value": "5761.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_005稿费",
										"key": "H_02_005稿费"
									},
									{
										"title": "竞业协议津贴",
										"value": "5762.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_006竞业协议津贴",
										"key": "H_02_006竞业协议津贴"
									},
									{
										"title": "特殊班次津贴",
										"value": "5763.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_007特殊班次津贴",
										"key": "H_02_007特殊班次津贴"
									},
									{
										"title": "文化奖励",
										"value": "5764.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_008文化奖励",
										"key": "H_02_008文化奖励"
									},
									{
										"title": "其他工作津贴",
										"value": "5765.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_009其他工作津贴",
										"key": "H_02_009其他工作津贴"
									},
									{
										"title": "外派补贴",
										"value": "5772.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_02_016外派补贴",
										"key": "H_02_016外派补贴"
									}
								]
							},
							{
								"title": "福利津贴",
								"children": [
									{
										"title": "人才补贴",
										"value": "5787.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_001人才补贴",
										"key": "H_03_001人才补贴"
									},
									{
										"title": "电脑补贴",
										"value": "5788.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_002电脑补贴",
										"key": "H_03_002电脑补贴"
									},
									{
										"title": "过节费",
										"value": "5789.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_003过节费",
										"key": "H_03_003过节费"
									},
									{
										"title": "未休年休假天数",
										"value": "5790.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_004未休年休假天数",
										"key": "H_03_004未休年休假天数"
									},
									{
										"title": "未休年休假补贴",
										"value": "5791.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_005未休年休假补贴",
										"key": "H_03_005未休年休假补贴"
									},
									{
										"title": "午餐补贴标准",
										"value": "5792.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_006午餐补贴标准",
										"key": "H_03_006午餐补贴标准"
									},
									{
										"title": "午餐补贴",
										"value": "5793.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_007午餐补贴",
										"key": "H_03_007午餐补贴"
									},
									{
										"title": "通讯补贴",
										"value": "5795.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_009通讯补贴",
										"key": "H_03_009通讯补贴"
									},
									{
										"title": "交通补贴",
										"value": "5797.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_011交通补贴",
										"key": "H_03_011交通补贴"
									},
									{
										"title": "其他补贴",
										"value": "5798.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_012其他补贴",
										"key": "H_03_012其他补贴"
									},
									{
										"title": "其他福利津贴",
										"value": "5809.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H_03_024其他福利津贴",
										"key": "H_03_024其他福利津贴"
									}
								]
							},
							{
								"title": "假勤汇总",
								"children": [
									{
										"title": "应出勤天数",
										"value": "23.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_01应出勤天数",
										"key": "J_01应出勤天数"
									},
									{
										"title": "实际出勤天数",
										"value": "23.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J_02实际出勤天数",
										"key": "J_02实际出勤天数"
									}
								]
							},
							{
								"title": "会员会费",
								"children": [
									{
										"title": "工会会员会费",
										"value": "-200.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "K_01工会会员会费",
										"key": "K_01工会会员会费"
									},
									{
										"title": "爱心基金会员会费",
										"value": "-70.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "K_02爱心基金会员会费",
										"key": "K_02爱心基金会员会费"
									}
								]
							},
							{
								"title": "薪资计算",
								"children": [
									{
										"title": "应发金额",
										"value": "5836.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_01应发金额",
										"key": "L_01应发金额"
									},
									{
										"title": "实发金额",
										"value": "5837.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_02实发金额",
										"key": "L_02实发金额"
									},
									{
										"title": "员工成本",
										"value": "5838.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_03员工成本",
										"key": "L_03员工成本"
									},
									{
										"title": "税后加减项",
										"value": "5839.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_04税后加减项",
										"key": "L_04税后加减项"
									},
									{
										"title": "计税工资（居民正式员工）",
										"value": "5840.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_05计税工资（居民正式员工）",
										"key": "L_05计税工资（居民正式员工）"
									},
									{
										"title": "税后金额",
										"value": "5841.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_06税后金额",
										"key": "L_06税后金额"
									},
									{
										"title": "不含增值税金额",
										"value": "5842.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_07不含增值税金额",
										"key": "L_07不含增值税金额"
									},
									{
										"title": "费用",
										"value": "5843.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_08费用",
										"key": "L_08费用"
									},
									{
										"title": "展业成本",
										"value": "5844.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_09展业成本",
										"key": "L_09展业成本"
									},
									{
										"title": "全年可发收入",
										"value": "5845.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_10全年可发收入",
										"key": "L_10全年可发收入"
									},
									{
										"title": "预留年底发放的收入",
										"value": "5846.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_11预留年底发放的收入",
										"key": "L_11预留年底发放的收入"
									},
									{
										"title": "剩余额度",
										"value": "5847.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_12剩余额度",
										"key": "L_12剩余额度"
									},
									{
										"title": "累计不含税金额",
										"value": "5848.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_13累计不含税金额",
										"key": "L_13累计不含税金额"
									},
									{
										"title": "不含最低工资补差应发金额",
										"value": "5849.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_14不含最低工资补差应发金额",
										"key": "L_14不含最低工资补差应发金额"
									},
									{
										"title": "不含最低工资补差实发金额",
										"value": "5850.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_15不含最低工资补差实发金额",
										"key": "L_15不含最低工资补差实发金额"
									},
									{
										"title": "计税工资（居民实习生）",
										"value": "5851.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_16计税工资（居民实习生）",
										"key": "L_16计税工资（居民实习生）"
									},
									{
										"title": "计税工资（非居民正式员工）",
										"value": "5853.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_18计税工资（非居民正式员工）",
										"key": "L_18计税工资（非居民正式员工）"
									},
									{
										"title": "计税工资（非居民实习生）",
										"value": "5854.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_19计税工资（非居民实习生）",
										"key": "L_19计税工资（非居民实习生）"
									},
									{
										"title": "计税工资（劳务)",
										"value": "5855.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_20计税工资（劳务)",
										"key": "L_20计税工资（劳务)"
									}
								]
							},
							{
								"title": "税局项目",
								"children": [
									{
										"title": "本期免税收入",
										"value": "5856.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_01本期免税收入",
										"key": "M_01本期免税收入"
									},
									{
										"title": "年金",
										"value": "5857.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_02年金",
										"key": "M_02年金"
									},
									{
										"title": "商业健康保险",
										"value": "5858.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_03商业健康保险",
										"key": "M_03商业健康保险"
									},
									{
										"title": "税延养老保险",
										"value": "5859.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_04税延养老保险",
										"key": "M_04税延养老保险"
									},
									{
										"title": "城建及教育费附加",
										"value": "5860.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_05城建及教育费附加",
										"key": "M_05城建及教育费附加"
									},
									{
										"title": "累计收入额",
										"value": "5861.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_06累计收入额",
										"key": "M_06累计收入额"
									},
									{
										"title": "累计减除费用",
										"value": "5862.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_07累计减除费用",
										"key": "M_07累计减除费用"
									},
									{
										"title": "累计专项扣除",
										"value": "5863.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_08累计专项扣除",
										"key": "M_08累计专项扣除"
									},
									{
										"title": "累计子女教育专项附加扣除",
										"value": "5864.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_09累计子女教育专项附加扣除",
										"key": "M_09累计子女教育专项附加扣除"
									},
									{
										"title": "累计赡养老人专项附加扣除",
										"value": "5865.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_10累计赡养老人专项附加扣除",
										"key": "M_10累计赡养老人专项附加扣除"
									},
									{
										"title": "累计住房贷款利息专项附加扣除",
										"value": "5866.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_11累计住房贷款利息专项附加扣除",
										"key": "M_11累计住房贷款利息专项附加扣除"
									},
									{
										"title": "累计住房租金专项附加扣除",
										"value": "5867.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_12累计住房租金专项附加扣除",
										"key": "M_12累计住房租金专项附加扣除"
									},
									{
										"title": "累计继续教育专项附加扣除",
										"value": "5868.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_13累计继续教育专项附加扣除",
										"key": "M_13累计继续教育专项附加扣除"
									},
									{
										"title": "累计3岁以下婴幼儿照护专项附加扣除",
										"value": "5869.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_14累计3岁以下婴幼儿照护专项附加扣除",
										"key": "M_14累计3岁以下婴幼儿照护专项附加扣除"
									},
									{
										"title": "累计个人养老金",
										"value": "5870.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_15累计个人养老金",
										"key": "M_15累计个人养老金"
									},
									{
										"title": "累计其他扣除",
										"value": "5871.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_16累计其他扣除",
										"key": "M_16累计其他扣除"
									},
									{
										"title": "累计预扣预缴应纳税所得额",
										"value": "5872.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_17累计预扣预缴应纳税所得额",
										"key": "M_17累计预扣预缴应纳税所得额"
									},
									{
										"title": "个人所得税税率",
										"value": "5873.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_18个人所得税税率",
										"key": "M_18个人所得税税率"
									},
									{
										"title": "速算扣除数",
										"value": "5874.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_19速算扣除数",
										"key": "M_19速算扣除数"
									},
									{
										"title": "累计应纳税额",
										"value": "5875.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_20累计应纳税额",
										"key": "M_20累计应纳税额"
									},
									{
										"title": "累计减免税额",
										"value": "5876.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_21累计减免税额",
										"key": "M_21累计减免税额"
									},
									{
										"title": "累计已缴税额",
										"value": "5877.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_22累计已缴税额",
										"key": "M_22累计已缴税额"
									},
									{
										"title": "应补/退税额",
										"value": "5878.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_23应补/退税额",
										"key": "M_23应补/退税额"
									},
									{
										"title": "应补/退税额（离职补偿金）",
										"value": "5879.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_25应补/退税额（离职补偿金）",
										"key": "M_25应补/退税额（离职补偿金）"
									},
									{
										"title": "增值税",
										"value": "5880.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M_24增值税",
										"key": "M_24增值税"
									}
								]
							},
							{
								"title": "应发金额",
								"children": [
									{
										"title": "基本薪酬",
										"value": "5882.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A基本薪酬",
										"key": "A基本薪酬"
									},
									{
										"title": "其他应补应扣工资",
										"value": "5883.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_03其他应补应扣工资",
										"key": "A_03其他应补应扣工资"
									},
									{
										"title": "考勤扣款",
										"value": "-5884.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_04考勤扣款",
										"key": "A_04考勤扣款"
									},
									{
										"title": "加班工资",
										"value": "5885.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_05加班工资",
										"key": "A_05加班工资"
									},
									{
										"title": "其他工资",
										"value": "5886.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "B其他工资",
										"key": "B其他工资"
									},
									{
										"title": "违规违纪扣罚",
										"value": "5887.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "C违规违纪扣罚",
										"key": "C违规违纪扣罚"
									},
									{
										"title": "离职补偿金合计",
										"value": "5888.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "D离职补偿金合计",
										"key": "D离职补偿金合计"
									},
									{
										"title": "低于最低工资补差",
										"value": "5889.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "E低于最低工资补差",
										"key": "E低于最低工资补差"
									},
									{
										"title": "社保公积金",
										"value": "5890.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "F社保公积金",
										"key": "F社保公积金"
									},
									{
										"title": "变动奖金",
										"value": "5891.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "G变动奖金",
										"key": "G变动奖金"
									},
									{
										"title": "津贴",
										"value": "5726.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "H津贴",
										"key": "H津贴"
									},
									{
										"title": "捐款",
										"value": "5892.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "I捐款",
										"key": "I捐款"
									},
									{
										"title": "假勤汇总",
										"value": "5893.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "J假勤汇总",
										"key": "J假勤汇总"
									},
									{
										"title": "会员会费",
										"value": "5894.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "K会员会费",
										"key": "K会员会费"
									},
									{
										"title": "薪资计算",
										"value": "5895.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L薪资计算",
										"key": "L薪资计算"
									},
									{
										"title": "税局项目",
										"value": "5896.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "M税局项目",
										"key": "M税局项目"
									},
									{
										"title": "月工资",
										"value": "5852.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "L_17月工资",
										"key": "L_17月工资"
									}
								]
							},
							{
								"title": "岗位工资",
								"children": [
									{
										"title": "月标准岗位津贴",
										"value": "5897.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_06_001月标准岗位津贴",
										"key": "A_06_001月标准岗位津贴"
									},
									{
										"title": "岗位津贴扣款",
										"value": "5898.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "A_06_002岗位津贴扣款",
										"key": "A_06_002岗位津贴扣款"
									}
								]
							},
							{
								"title": "其他纳税收入",
								"children": [
									{
										"title": "工会福利费",
										"value": "5938.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_06工会福利费",
										"key": "Q_06工会福利费"
									},
									{
										"title": "其他纳税收入",
										"value": "5932.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_其他纳税收入",
										"key": "Q_其他纳税收入"
									},
									{
										"title": "忠诚奖",
										"value": "5933.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_01忠诚奖",
										"key": "Q_01忠诚奖"
									},
									{
										"title": "补充医疗",
										"value": "5934.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_02补充医疗",
										"key": "Q_02补充医疗"
									},
									{
										"title": "个税调整",
										"value": "5935.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_03个税调整",
										"key": "Q_03个税调整"
									},
									{
										"title": "其他1",
										"value": "5936.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_04其他1",
										"key": "Q_04其他1"
									},
									{
										"title": "其他2",
										"value": "5937.00",
										"type": "number",
										"width": "100px",
										"dataIndex": "Q_05其他2",
										"key": "Q_05其他2"
									}
								]
							}
						],
						"align": "left"
					}
				],
				"align": "left"
			}
		]
	}
][1];

// 调用函数处理数据
addParentTitles(data);

// 输出结果
console.log(JSON.stringify(data, null, 2));
