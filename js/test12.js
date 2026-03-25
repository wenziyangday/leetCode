const obj = {
	late: '迟到次数',
	early: '早退次数',
	absence: '旷工次数',
	addsignin: '补卡次数',
	evection: '出差时长',
	overtime: '加班时长',
	unusual: '考勤异常',
	vacate: '请假时长',
	workcalendar: '工作日历',
	lackcard: '缺卡次数',
	islate: '迟到',
	isearly: '早退',
	islackcard: '缺卡',
	isabsence: '旷工',
	isaddsignin: '补卡',
	isvacate: '请假',
	isevection: '出差',
	isovertime: '加班',
	hasunusual: '异常',
	realworktime: '实际工作时长',
};

const obj2 = {}
Object.keys(obj).forEach(key => {
	const r = parseInt(`${Math.random() * 255}`)
	const g = parseInt(`${Math.random() * 255}`)
	const b = parseInt(`${Math.random() * 255}`)
	obj2[key] = {
		cn: obj[key],
		unit: '',
		icon: {},
		bgColor: `rgb(${r}, ${g}, ${b})`
	}
});

console.log(obj2)


function deepSet(obj, path, value) {
	const keys = path.split('.');
	let current = obj;
	for (let i = 0; i < keys.length - 1; i++) {
		const key = keys[i];
		if (!current[key] || typeof current[key] !== 'object') {
			current[key] = {}; // 自动创建中间对象
		}
		current = current[key];
	}
	const lastKey = keys[keys.length - 1];
	current[lastKey] = value;
}

// 使用示例
const form = { a: { ab: 1 }, b: 2 };
deepSet(form, 'a.b', 100); // 修改 a 下的 b 属性
console.log(form); // 输出: { a: { ab: 1, b: 100 }, b: 2 }

deepSet(form, 'x.y.z', '嵌套值'); // 自动创建 x.y 的层级结构
console.log(form.x.y.z); // 输出: "嵌套值"


function deepGet(obj, path, defaultValue = undefined) {
	// 拆分路径为层级数组（如 "a.abb.name" → ["a", "abb", "name"]）
	const keys = path.split('.');
	let current = obj;

	// 逐层遍历对象
	for (const key of keys) {
		// 如果中间层不存在或不是对象，直接返回默认值
		if (current === null || typeof current !== 'object') {
			return defaultValue;
		}
		current = current[key];
		// 如果中间值为 undefined，提前终止
		if (current === undefined) break;
	}

	// 返回最终值或默认值
	return current !== undefined ? current : defaultValue;
}

// 示例使用
const form2 = { a: { ab: 1, abb: { name: '12' } }, b: 2 };

// 获取深层值
console.log(deepGet(form2, 'a.abb.name'));    // 输出: '12'
console.log(deepGet(form2, 'a.abb'));         // 输出: { name: '12' }
console.log(deepGet(form2, 'b'));             // 输出: 2
console.log(deepGet(form2, 'x.y.z', '默认'));  // 输出: '默认'


function traverse(obj, path = [], result = []) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const currentPath = [...path, key];
			const value = obj[key];

			if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
				result.push({ path: currentPath, isObject: true });
				traverse(value, currentPath, result);
			} else {
				result.push({ path: currentPath, value });
			}
		}
	}
	return result;
}

// 测试用例
const data = {
	aa: { mm: '12' },
	bb: { name: '1223' },
	cc: 'asd'
};

console.log(traverse(data));

function transform(obj) {
	// 深度复制原对象以保留结构
	const copy = JSON.parse(JSON.stringify(obj));

	// 递归收集所有叶子节点的扁平化键值对
	const flatten = (currentObj, path = '', result = {}) => {
		for (const key in currentObj) {
			const value = currentObj[key];
			const currentPath = path ? `${path}.${key}` : key;

			if (typeof value === 'object' && value !== null) {
				// 递归处理嵌套对象
				flatten(value, currentPath, result);
			} else {
				// 叶子节点，记录扁平化键
				result[currentPath] = value;
			}
		}
		return result;
	};

	// 合并原对象和扁平化键值对
	return flatten(obj);
}

// 测试用例
const input = {
	checkType: 'BACK',
	nextJumpType: 'normal',
	destNodeId: '',
	pickerValueNodeId: [],
	opinion: '',
	fileList: [],
	copyUsers: [],//抄送
	form: {
		transferType: "waitAllVoted",
		approveType: "parallel",
		completeType: 0,
		completeJudgeType: "voteCount",
		completeSetting: 1,
		opinion: "",
		toUser: [],
		_toUser: '',
		msgTypes: []
	},
};
const output = transform(input);

console.log(output);
// 输出: {
//   a: { b: 11 },
//   ab: { b: { bb: 1 } },
//   'a.b': 11,
//   'ab.b.bb': 1
// }
