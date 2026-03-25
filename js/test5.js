function removeNestedIcons(items, isTopLevel = true) {
	items.forEach(item => {
		// 如果不是顶层节点，删除meta.icon
		if (!isTopLevel && item.meta && item.meta.icon) {
			delete item.meta.icon;
		}
		// 如果有children，递归处理，并标记为不是顶层节点
		if (item.children && item.children.length > 0) {
			removeNestedIcons(item.children, false);
		}
	});
}

// 假设jsonData是你的原始JSON数据
const jsonData = [
	{
		"children": [
			{
				"children": [],
				"meta": {
					"title": "员工门户",
					"id": "1861373608333504513",
					"params": "{\"alias\":\"userCenterPage\"}",
					"icon": {
						"iconType": "icon-park",
						"name": "home",
						"theme": "outline",
						"fill": "#333",
						"strokeLinejoin": "round",
						"strokeLinecap": "round",
						"strokeWidth": 4
					}
				},
				"componentOrigin": "modules/form/FormCustomView/FormCustomView"
			}
		],
		"meta": {
			"title": "员工门户",
			"id": "1861373608333504513",
			"params": "{\"alias\":\"userCenterPage\"}",
			"icon": {
				"iconType": "icon-park",
				"name": "home",
				"theme": "outline",
				"fill": "#333",
				"strokeLinejoin": "round",
				"strokeLinecap": "round",
				"strokeWidth": 4
			}
		},
		"componentOrigin": "modules/form/FormCustomView/FormCustomView"
	}
]


// 调用函数，开始处理数据
removeNestedIcons(jsonData);

// 输出处理后的数据
console.log(JSON.stringify(jsonData, null, 2));



