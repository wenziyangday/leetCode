function convertFlowData(data) {
	// 初始化结果数组
	const result = [];

	// 遍历对象的属性，以"defName"为键的模式来识别流程定义
	for (let key in data) {
		if (key.startsWith('defName')) {
			// 提取索引号，假设键名是以"defName"开头，后跟一个数字
			const index = key.slice(7);

			// 构造新的对象，并添加到结果数组中
			result.push({
				defName: data[`defName${index}`],
				defId: data[`defId${index}`],
				icon: data[`icon${index}`],
				iconBackColor: data[`iconBackColor${index}`],
				recommended: data[`recommended${index}`],
				order: data[`order${index}`],
				flowPathId: data.flowPathId
			});
		}
	}

	return result;
}

// 示例数据
const flowData = {
	"flowPathId": "1887349811256578050",
	"defName0": "入职确认",
	"icon0": "{\"iconType\":\"icon-park\",\"name\":\"add-computer\",\"theme\":\"outline\",\"fill\":\"#333\",\"strokeLinejoin\":\"round\",\"strokeLinecap\":\"round\",\"strokeWidth\":4}",
	"iconBackColor0": "#4285f4",
	"order0": 10,
	"recommended0": "N",
	"defName1": "gww测试发送消息子流程",
	"icon1": "{\"iconType\":\"icon-park\",\"name\":\"add-computer\",\"theme\":\"outline\",\"fill\":\"#333\",\"strokeLinejoin\":\"round\",\"strokeLinecap\":\"round\",\"strokeWidth\":4}",
	"iconBackColor1": "#4285f4",
	"order1": 20,
	"recommended1": "N"
};

// 调用函数并打印结果
const convertedData = convertFlowData(flowData);
console.log(convertedData);
