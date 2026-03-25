const obj = [
	{
		"field": "index",
		"width": 50,
		"title": "序号",
		"type": "seq",
		"resizable": true
	},
	{
		"headerAlign": "left",
		"slots": {
			"default": "ID_"
		},
		"showHeaderOverflow": true,
		"field": "ID_",
		"showOverflow": true,
		"minWidth": 100,
		"sortable": true,
		"title": "业务单号",
		"resizable": true
	},
	{
		"headerAlign": "left",
		"slots": {
			"default": "EMPTYPE",
			"edit": "EMPTYPEEdit"
		},
		"showHeaderOverflow": true,
		"field": "EMPTYPE",
		"showOverflow": true,
		"allowCellEdit": true,
		"minWidth": 100,
		"sortable": true,
		"title": "员工类型",
		"resizable": true
	},
	{
		"headerAlign": "left",
		"slots": {
			"default": "EMPSTATUS"
		},
		"showHeaderOverflow": true,
		"field": "EMPSTATUS",
		"showOverflow": true,
		"minWidth": 100,
		"sortable": true,
		"title": "员工状态",
		"resizable": true
	},
	{
		"headerAlign": "left",
		"slots": {
			"default": "ENTERDATE"
		},
		"showHeaderOverflow": true,
		"field": "ENTERDATE",
		"showOverflow": true,
		"minWidth": 200,
		"sortable": true,
		"title": "入职日期",
		"resizable": true
	},
	{
		"headerAlign": "left",
		"slots": {
			"default": "BIZDATE"
		},
		"showHeaderOverflow": true,
		"field": "BIZDATE",
		"showOverflow": true,
		"minWidth": 100,
		"sortable": true,
		"title": "离职日期",
		"resizable": true
	},
	{
		"headerAlign": "left",
		"slots": {
			"default": "INST_ID_"
		},
		"showHeaderOverflow": true,
		"field": "INST_ID_",
		"showOverflow": "ellipsis",
		"minWidth": 100,
		"sortable": true,
		"title": "流程实例ID",
		"resizable": true
	}
];
const obj2 = {
	Q_ENTERDATE_D_GE: "2025-10-23 10:47:55",
	"kkalsdk": 'aksdklaklsd'
}

const aa =  {
	"queryField_ENTERDATE": [
		"2025-10-10T05:48:06.703Z",
		"2025-11-06T05:48:06.703Z"
	]
}

const safeConditions = Object.keys(obj2).filter(x => {
	return obj.some(y => x.replace('_', '').includes(y.field));
});

const fil = safeConditions.map(x => {
	const column = obj.find(y => x.replace('_', '').includes(y.field));
	console.log(column, x, obj2[x])
	return {
		label: column?.title,
		value: obj2[x]
	}
}).filter(x => x.value);

console.log(fil, '')
