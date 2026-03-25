const flatArray = [
	{
		"name": "s1",
		"id": "Activity_0qae6rb",
		"pName": "gww测试发送消息子流程",
		"pId": "1866727224011403266",
		"_X_ROW_KEY": "row_60"
	},
	{
		"name": "s2",
		"id": "Activity_05a8noa",
		"pName": "gww测试发送消息子流程",
		"pId": "1866727224011403266",
		"_X_ROW_KEY": "row_61"
	},
	{
		"name": "1",
		"id": "Activity_0glkowa",
		"pName": "gww测试流程路径",
		"pId": "1860884231498600450",
		"_X_ROW_KEY": "row_62"
	},
	{
		"name": "22",
		"id": "Activity_1q7bppo",
		"pName": "gww测试流程路径",
		"pId": "1860884231498600450",
		"_X_ROW_KEY": "row_63"
	},
	{
		"name": "11",
		"id": "Activity_0go0qex",
		"pName": "gww测试流程路径",
		"pId": "1860884231498600450",
		"_X_ROW_KEY": "row_64"
	},
	{
		"name": "33",
		"id": "Activity_1epp2zb",
		"pName": "gww测试流程路径",
		"pId": "1860884231498600450",
		"_X_ROW_KEY": "row_65"
	},
	{
		"name": "5",
		"id": "Activity_0kpcac6",
		"pName": "gww测试流程路径",
		"pId": "1860884231498600450",
		"_X_ROW_KEY": "row_66"
	}
];

function arrayToTree(data) {
	// 创建一个映射来存储所有的节点
	const idMapping = {};
	// 创建一个映射来存储父节点的引用
	const parentMapping = {};
	// 初始化根节点数组
	const root = [];

	// 遍历数据数组，构建节点映射和父节点映射
	data.forEach(item => {
		idMapping[item.id] = { ...item, children: [] };
		if (item.pId) {
			// 如果父节点映射中不存在该父节点，则创建一个占位符
			if (!parentMapping[item.pId]) {
				parentMapping[item.pId] = { name: item.pName, id: item.pId, children: [] };
			}
			// 将当前节点添加到父节点的children数组中
			parentMapping[item.pId].children.push(idMapping[item.id]);
		} else {
			// 没有pId的节点是根节点
			root.push(idMapping[item.id]);
		}
	});

	// 将父节点映射中的节点添加到根节点数组中（如果它们不是其他节点的子节点）
	// 在这个特定的例子中，这一步实际上是不需要的，因为所有的父节点都已经通过子节点被引用了
	// 但如果数据中有孤立的父节点，这一步将是必要的
	for (const parentId in parentMapping) {
		if (!idMapping[parentId]) {
			// 如果父节点没有在idMapping中（即它不是任何子节点的父节点），则将其添加到根中
			root.push(parentMapping[parentId]);
		}
	}

	// 返回根节点数组，它现在包含了完整的树形结构
	return root;
}

const tree = arrayToTree(flatArray);
console.log(JSON.stringify(tree, null, 2));


