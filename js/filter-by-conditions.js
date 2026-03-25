/**
 * 通用数据筛选函数
 * @param {Array} dataSource - 数据源
 * @param {Object|Array} ruleConfig - 筛选规则，支持单个对象 {conditions:[]} 或 数组 [{conditions:[]}, ...]
 * @param {String} relation - [可选] 当 ruleConfig 为数组时，规则间的关系。'AND'(默认，交集) | 'OR'(并集)
 * @returns {Array} 筛选后的数据
 */
function filterData(dataSource, ruleConfig, relation = 'AND') {
	// 0. 基础校验
	if (!Array.isArray(dataSource)) return [];
	if (!ruleConfig) return dataSource; // 无规则则返回全部

	// 1. 归一化：无论传入的是对象还是数组，统一转换为数组处理
	//    如果传入 null/undefined/空数组，configList 为空
	const configList = Array.isArray(ruleConfig) ? ruleConfig : [ruleConfig];

	// 如果没有有效规则，直接返回原数据
	if (configList.length === 0) return dataSource;


	// 内部工具：判断值是否为空

	const isEmpty = (val) => {
		return val === null || val === undefined || val === '' || (Array.isArray(val) && val.length === 0);
	};


	// 内部核心：递归评估单个逻辑节点 (Node)

	const evaluateNode = (item, node) => {
		// A. 逻辑分支节点 (包含 child)
		if (node.child && node.child.length > 0) {
			const operator = node.logicalOperator; // '&' 或 '||'
			if (operator === '&') {
				return node.child.every(child => evaluateNode(item, child));
			} else {
				return node.child.some(child => evaluateNode(item, child));
			}
		}

		// B. 条件叶子节点 (包含 fieldTitle)
		if (node.fieldTitle && node.fieldTitle.length > 0) {
			const fieldKey = node.fieldTitle[0].value;
			const op = (node.operator && node.operator.length > 0) ? node.operator[0].value : 'eq';
			const targetValues = node.value ? node.value.map(v => v.value) : [];
			const dataValue = item[fieldKey];

			switch (op) {
				// 精确匹配
				case 'eq': // 等于 (支持多选)
					return targetValues.includes(dataValue);
				case 'ne': // 不等于
					return !targetValues.includes(dataValue);

				// 模糊匹配 (仅对字符串有效，防止报错)
				case 'in': // 包含
					if (typeof dataValue === 'string') {
						return targetValues.some(tv => dataValue.includes(String(tv)));
					}
					return false;
				case 'notIn': // 不包含
					if (typeof dataValue === 'string') {
						return !targetValues.some(tv => dataValue.includes(String(tv)));
					}
					return true;

				// 空值检查
				case 'empty':
					return isEmpty(dataValue);
				case 'notEmpty':
					return !isEmpty(dataValue);

				// 数值比较 (扩展支持)
				case 'gt': return Number(dataValue) > Number(targetValues[0]);
				case 'lt': return Number(dataValue) < Number(targetValues[0]);

				default:
					return false; // 未知操作符默认不通过
			}
		}
		return true; // 空节点默认通过
	};


	// 内部核心：评估单条数据是否满足 某一套完整配置 (Config)
	const checkSingleConfig = (item, config) => {
		if (!config || !config.conditions || config.conditions.length === 0) return true;
		// config.conditions 根数组通常默认为 "且" 的关系
		return config.conditions.every(rootNode => evaluateNode(item, rootNode));
	};


	// 2. 执行筛选

	return dataSource.filter(item => {
		if (relation === 'OR') {
			// [模式 B] 并集：满足任意一套规则即可
			return configList.some(conf => checkSingleConfig(item, conf));
		} else {
			// [模式 A] 交集(默认)：必须满足所有规则
			return configList.every(conf => checkSingleConfig(item, conf));
		}
	});
}

const data = [
	{ id: 1, name: "张三", dept: "研发部", status: "正式" },
	{ id: 2, name: "李四", dept: "销售部", status: "试用" },
	{ id: 3, name: "王五", dept: "研发部", status: "试用" },
	{ id: 4, name: "赵六", dept: "市场部", status: "离职" }
];

const ruleDept = {
	conditions: [{
		logicalOperator: "&",
		child: [{
			fieldTitle: [{ value: "dept" }],
			operator: [{ value: "eq" }],
			value: [{ value: "研发部" }]
		}]
	}]
};

// 直接传入对象
const res1 = filterData(data, ruleDept);
console.log("场景1:", res1); // 结果: 张三, 王五

const ruleStatus = {
	conditions: [{
		logicalOperator: "&",
		child: [{
			fieldTitle: [{ value: "status" }],
			operator: [{ value: "eq" }],
			value: [{ value: "试用" }]
		}]
	}]
};

// 传入数组 [rule1, rule2]，默认是 AND 关系
const res2 = filterData(data, [ruleDept, ruleStatus]);
console.log("场景2:", res2); // 结果: 王五 (只有他同时满足)


const ruleSales = {
	conditions: [{
		logicalOperator: "&",
		child: [{ fieldTitle: [{ value: "dept" }], operator: [{ value: "eq" }], value: [{ value: "销售部" }] }]
	}]
};

// 第三个参数传 'OR'
const res3 = filterData(data, [ruleSales, ruleStatus], 'OR');
console.log("场景3:", res3);
// 结果:
// 李四 (满足销售部)
// 王五 (满足试用期)
// 注意：李四其实两个都满足，也会被选出来



// 第三个参数传 'OR'
const res4 = filterData(data, [], 'OR');
console.log("场景4:", res4);
// 结果:
// 李四 (满足销售部)
// 王五 (满足试用期)
// 注意：李四其实两个都满足，也会被选出来
