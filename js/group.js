const rawList = [
	{ id: 101, name: 'Alice', role: 'Dev', location: 'Shenzhen', age: 24 },
	{ id: 102, name: 'Bob', role: 'Dev', location: 'Beijing', age: 26 },
	{ id: 103, name: 'Carol', role: 'Designer', location: 'Shenzhen', age: 22 },
	{ id: 104, name: 'Dave', role: 'PM', location: 'Beijing', age: 30 },
	{ id: 105, name: 'Eve', role: 'Dev', location: 'Shenzhen', age: 28 },
	{ id: 106, name: 'Frank', role: 'Designer', location: 'Shanghai', age: 25 },
];


// utils/groupHelper.js
// ---------------------------------------------------------
// 优化版：递归实现 (推荐使用这个版本，支持无限层级且逻辑清晰)
// ---------------------------------------------------------
function groupByRecursive(list, fields, options = {}) {
	const { childrenKey = 'children', idKey = 'id' } = options;

	// 递归终止条件：没有分组字段了，直接返回数据列表
	if (!fields || fields.length === 0) return list;

	// 取出当前层级的分组字段
	const [currentField, ...restFields] = fields;

	// 1. 按当前字段归类
	const groups = new Map();
	list.forEach(item => {
		const key = item[currentField];
		if (!groups.has(key)) {
			groups.set(key, []);
		}
		groups.get(key).push(item);
	});

	// 2. 构建当前层级结构
	const result = [];
	let index = 0;

	for (const [key, items] of groups) {
		// 递归处理剩余字段
		const children = groupByRecursive(items, restFields, options);

		const groupRow = {
			[idKey]: `group_${currentField}_${key}_${index++}`, // 确保ID唯一
			[currentField]: key,  // 把分组的值赋给对应的列，这样该列就能显示内容
			isGroup: true,        // 业务标记
			groupTitle: key,      // 专门用于显示的字段（可选）
			size: items.length,   // 统计行数
			[childrenKey]: children
		};

		result.push(groupRow);
	}

	return result;
}
