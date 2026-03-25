function countNodes(nodes) {
	let parentCount = 0;
	let childCount = 0;

	// 遍历顶层节点
	nodes.forEach(node => {
		// 每个顶层节点都是一个父节点
		parentCount++;

		// 遍历该节点的子节点
		if (node.children && node.children.length > 0) {
			childCount += node.children.length;

			// 如果需要递归计算更深层的子节点，可以在这里添加逻辑
			// 但在这个例子中，我们只计算直接子节点
		}
	});

	return {
		parentCount: parentCount,
		childCount: childCount
	};
}

// 给定的JSON数据
const data = [
	{
		"name": "gww测试发送待办消息主流程",
		"id": "1861949053824692226",
		"children": []
	},
	{
		"name": "gww测试发送消息子流程",
		"id": "1866727224011403266",
		"children": [
			{
				"name": "s1",
				"id": "Activity_0qae6rb",
				// ... 其他属性
				"children": []
			},
			{
				"name": "s2",
				"id": "Activity_05a8noa",
				// ... 其他属性
				"children": []
			}
		]
	}
];

// 调用函数并获取结果
const result = countNodes(data);
console.log(`父节点数: ${result.parentCount}, 子节点数: ${result.childCount}`);
