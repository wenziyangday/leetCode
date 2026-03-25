function promoteDescendantsAndRemoveIntermediates(arr) {
	// 定义一个递归函数来处理节点
	function processNode(node) {
		// 如果节点没有children，则直接返回该节点
		if (!node.children || node.children.length === 0) {
			return node;
		}

		// 创建一个新的children数组来存储处理后的子节点
		const newChildren = [];

		// 遍历当前节点的children
		for (let child of node.children) {
			// 递归处理子节点，并将结果添加到新的children数组中
			const processedChild = processNode(child);

			// 如果处理后的子节点有children（即它本身也是中间节点，但已经被处理过），
			// 则将这些子节点的children（即原本的孙辈或更深层次的子孙）添加到新的children数组中
			if (processedChild.children && processedChild.children.length > 0) {
				newChildren.push(...processedChild.children);
			} else {
				// 如果处理后的子节点没有children，则直接添加到新的children数组中
				newChildren.push(processedChild);
			}
		}

		// 创建一个新对象来复制当前节点的属性（除了children）
		const newObj = { ...node };

		// 更新新对象的children属性为处理后的子节点数组
		// 注意：这里不直接删除原始节点的children属性，因为我们是返回一个新对象
		newObj.children = newChildren;

		return newObj;
	}

	// 创建一个新的数组来存储处理后的对象
	const result = [];

	// 遍历输入数组，并对每个对象调用递归函数进行处理
	for (let obj of arr) {
		const processedObj = processNode(obj);
		result.push(processedObj);
	}

	return result;
}

// 示例数据（可以包含多级嵌套）
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
								"children": [
									// 可以继续嵌套更多层级
								]
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
				"children": [
					// 另一个测试案例，可以包含嵌套结构
				]
			}
		]
	}
];

// 调用函数并打印结果
const processedData = promoteDescendantsAndRemoveIntermediates(data);
console.log(JSON.stringify(processedData, null, 2));
