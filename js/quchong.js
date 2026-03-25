const sub__EMP_sub_revokeJobs_InfoBill = [
	{
		"_key": "6998dl",
		"declarationType": "001",
		"person": "{\"value\":\"1918748701308870658\",\"label\":\"gjzqhrrpa\",\"hrId\":\"IreeQbMYQk2DqrnuOtYShoDvfe0=\",\"photo\":\"\",\"userNo\":\"gjzqhrrpa\"}",
		// 工号
		"empNumber": "gjzqhrrpa",
		// 部门
		"displayName": "{\"label\":\"系统人员库\",\"value\":\"1918722210223218690\"}",
		"comPositionInfoBill": "",
		"positionType": "",
		"applySuperDepartment": "",
		"departmentType": "",
		"beginDate": "",
		"endDate": "",
		"remark": ""
	}
];
const sub__EMP_sub_addJobs_InfoBill = [
	{
		"_key": "azapom",
		"declarationType": "002",
		"person": "{\"value\":\"1918748701308870658\",\"label\":\"gjzqhrrpa\",\"hrId\":\"IreeQbMYQk2DqrnuOtYShoDvfe0=\",\"photo\":\"\",\"userNo\":\"gjzqhrrpa\"}",
		"empNumber": "gjzqhrrpa",
		"displayName": "{\"label\":\"系统人员库\",\"value\":\"1918722210223218690\"}",
		"positionType": "",
		"applySuperDepartment": "",
		"departmentType": "",
		"beginDate": "",
		"endDate": "",
		"declarationDoc": "",
		"remark": ""
	},
	{
		"_key": "sklipe",
		"declarationType": "002",
		"person": "{\"value\":\"1913401305555652609\",\"label\":\"顾宏\",\"hrId\":\"e/r2drRJQbSJYYFLoRprTYDvfe0=\",\"photo\":\"\",\"userNo\":\"DF00003587\"}",
		"empNumber": "",
		"displayName": "",
		"positionType": "",
		"applySuperDepartment": "",
		"departmentType": "",
		"beginDate": "",
		"endDate": "",
		"declarationDoc": "",
		"remark": "",
		"_is_blank_row": true
	}
];

const sub__EMP_sub_CompliaAllowBill = [
	{
		"_key": "thzvxt",
		"person": "",
		"empNumber": "",
		"department": "",
		"positionType": "",
		"presentAllowanceID": "",
		"reportType": "",
		"newCompliance": "002",
		"startDate": "",
		"H_01_002": "",
		"H_01_003": "",
		"costCenter": "{\"label\":\"合规管理部\",\"value\":\"KH01010214\"}",
		"remark": ""
	}
];

const data = {
	sub__EMP_sub_revokeJobs_InfoBill, sub__EMP_sub_addJobs_InfoBill, sub__EMP_sub_CompliaAllowBill
}


function uniqueBy(arr, keys, {keep = 'first'} = {}) {
	const seen = new Set();
	if (keep === 'first') {
		return arr.filter(item => {
			const compoundKey = keys.map(k => JSON.stringify(item[k])).join('|');
			return seen.has(compoundKey) ? false : seen.add(compoundKey);
		});
	} else { // keep === 'last'
		const lastIndexMap = new Map();
		arr.forEach((item, index) => {
			const compoundKey = keys.map(k => JSON.stringify(item[k])).join('|');
			lastIndexMap.set(compoundKey, index);
		});
		return arr.filter((_, index) =>
			[...lastIndexMap.values()].includes(index)
		);
	}
}

// console.log(
// 	uniqueBy([...sub__EMP_sub_revokeJobs_InfoBill, ...sub__EMP_sub_addJobs_InfoBill], ['person', 'empNumber']))


function mergeAndDeduplicate(arr1, arr2, keyFields, fieldMapping = {}) {
	const mappedArr1 = arr1.map(item => {
		const mappedItem = {};
		for (const [arr1Field, arr2Field] of Object.entries(fieldMapping)) {
			mappedItem[arr2Field] = item[arr1Field];
		}
		return {...item, ...mappedItem};
	});

	const combinedArr = [...arr2, ...mappedArr1];

	const seen = new Map();
	for (const item of combinedArr) {
		const compoundKey = keyFields.map(key => JSON.stringify(item[key])).join('|');
		if (!seen.has(compoundKey)) {
			seen.set(compoundKey, item);
		}
	}

	return Array.from(seen.values()).map(x => ({
	...{
		"person": "",
		"empNumber": "",
		"department": "",
		"positionType": "",
		"presentAllowanceID": "",
		"reportType": "",
		"newCompliance": "002",
		"startDate": "",
		"H_01_002": "",
		"H_01_003": "",
		"costCenter": "",
		"remark": ""
	}, ...x
}));
}

// const {sub__EMP_sub_revokeJobs_InfoBill, sub__EMP_sub_addJobs_InfoBill, sub__EMP_sub_CompliaAllowBill} = data;
//
// this.data.sub__EMP_sub_CompliaAllowBill = mergeAndDeduplicate([...sub__EMP_sub_revokeJobs_InfoBill, ...sub__EMP_sub_addJobs_InfoBill], sub__EMP_sub_CompliaAllowBill, ["person", "empNumber"], {
// 	person: 'personMKL'
// });
// console.log(result);


// Example usage:
const arr1 = [
	{id: "1", name: "Alice", department: "HR"},
	{id: "2", name: "Bob", department: "Finance"}
];

const arr2 = [
	{empId: "1", fullName: "Alice", dept: "HR"},
	{empId: "3", fullName: "Charlie", dept: "IT"}
];

const fieldMapping = {id: "empId", name: "fullName", department: "dept"};
const keyFields = ["empId", "fullName"];




//
// const result = mergeAndDeduplicate(arr1, arr2, keyFields, fieldMapping);
// console.log(result);



/**
 * arr1 去重对象
 * arr2 留存对象（arr1 和 arr2 合并去重后 以arr2 的对象优先级高）
 * keyFields 指定对象去重 依据的属性
 * fieldMapping {a: b} 将arr1[a] 映射到arr2[b] 上
 *
 */
function mergeAndDeduplicate(arr1, arr2, keyFields, fieldMapping = {}) {
	const mappedArr1 = arr1.map(item => {
		const mappedItem = {};
		for (const [arr1Field, arr2Field] of Object.entries(fieldMapping)) {
			mappedItem[arr2Field] = item[arr1Field];
		}
		return {...item, ...mappedItem};
	});

	const combinedArr = [...arr2, ...mappedArr1];

	const seen = new Map();
	for (const item of combinedArr) {
		const compoundKey = keyFields.map(key => JSON.stringify(item[key])).join('|');
		if (!seen.has(compoundKey)) {
			seen.set(compoundKey, item);
		}
	}

	return Array.from(seen.values()).map(x => ({
		...{
			"person": "",
			"empNumber": "",
			"department": "",
			"positionType": "",
			"presentAllowanceID": "",
			"reportType": "",
			"newCompliance": "",
			"startDate": "",
			"H_01_002": "",
			"H_01_003": "",
			"costCenter": "",
			"remark": ""
		}, ...x
	}));
}
function addTagByTableName(arr, name) {
	return arr.map(x => ({...x, TAGKEY_ANY: name}))
}

function filterTagInTarget(arr, target) {
	return arr.filter(x => !target.includes(x.TAGKEY_ANY));
}

setTimeout(() => {
	// const {sub__EMP_sub_revokeJobs_InfoBill, sub__EMP_sub_addJobs_InfoBill, sub__EMP_sub_CompliaAllowBill} = this.data;
	const _subESRI = addTagByTableName(sub__EMP_sub_revokeJobs_InfoBill, 'sub__EMP_sub_revokeJobs_InfoBill');
	const _subESAI = addTagByTableName(sub__EMP_sub_addJobs_InfoBill, 'sub__EMP_sub_addJobs_InfoBill');
	const _subRSC = filterTagInTarget(sub__EMP_sub_CompliaAllowBill, ['sub__EMP_sub_revokeJobs_InfoBill', 'sub__EMP_sub_addJobs_InfoBill']);

	const _mergeData = mergeAndDeduplicate([..._subESRI, ..._subESAI], _subRSC, ["empNumber"], {
		displayName: "department",
		position:"positionType"
	})
	console.log(_mergeData)
	// this.data.sub__EMP_sub_CompliaAllowBill = _finalData;
}, 500)
