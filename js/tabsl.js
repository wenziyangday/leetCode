const queryParams = {
	"menuId": "1982636844701028353",
	"appId": "1781325137178607617",
	"Q_PERSON_NAME_S_LK": "请问恶趣味恶趣味",
	"Q_EMPNUMBER_S_LK": null,
	"Q_BIZDATE_D_GE": "2025-10-22 09:32:20",
	"Q_BIZDATE_D_LE": "2025-11-28 09:32:20",
	"Q_OLDDEPARTMENT_NAME_S_LK": "请问恶趣味",
	"Q_OLDPOSITION_NAME_S_LK": "请问饿恶趣味恶趣味",
	"Q_INST_STATUS__S_MLK": [
		"WAITING",
		"RUNNING",
		"SUBMIT",
		"DRAFTED"
	]
};

const params = {
	"queryField_BIZDATE": [
		"2025-10-22T01:32:20.636Z",
		"2025-11-28T01:32:20.636Z"
	]
}


const queryFieldParams = [
	{
		"field": "PERSON_NAME",
		"label": "离职员工"
	},
	{
		"field": "EMPNUMBER",
		"label": "员工工号"
	},
	{
		"field": "OLDDEPARTMENT_NAME",
		"label": "现任部门"
	},
	{
		"field": "OLDPOSITION_NAME",
		"label": "现任岗位"
	},
	{
		"field": "INST_STATUS_",
		"label": "流程状态"
	},
	{
		"field": "BIZDATE",
		"label": "离职日期"
	}
];

const keys = Object.keys(queryParams);
const bindValues = queryFieldParams.map(x => {
	const key = keys.find(y => y.includes(x.field));
	if (key) {
		return {
			label: x.label,
			field: x.field,
			value: queryParams[key]
		};
	}
	return x;
}).filter(x => x.value);

console.log(bindValues);

function handleRemove({field}) {
	if (params[`queryField_${field}`]) {
		delete params[`queryField_${field}`];
	} else {
		const key = keys.find(y => y.includes(field));
		delete queryParams[`${key}`];
	}
}
