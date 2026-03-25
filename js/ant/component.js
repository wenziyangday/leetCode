const components = ['文档', '组件', '高级组件', '商店', '实战课程', '组件总览', 'Surely Table', 'Surely Form', 'Affix固钉', 'ConfigProvider全局化配置', 'FloatButton悬浮按钮', 'Watermark水印', 'App包裹组件', 'Button按钮', 'Icon图标', 'Typography排版', 'Divider分割线', 'Flex弹性布局', 'Grid栅格', 'Layout布局', 'Space间距', 'Anchor锚点', 'Breadcrumb面包屑', 'Dropdown下拉菜单', 'Menu导航菜单', 'PageHeader页头', 'Pagination分页', 'Steps步骤条', 'AutoComplete自动完成', 'Cascader级联选择', 'Checkbox多选框', 'DatePicker日期选择框', 'Form表单', 'Input输入框', 'InputNumber数字输入框', 'Mentions提及', 'Radio单选框', 'Rate评分', 'Select选择器', 'Slider滑动输入条', 'Switch开关', 'TimePicker时间选择框', 'Transfer穿梭框', 'TreeSelect树选择', 'Upload上传', 'Avatar头像', 'Badge徽标数', 'Calendar日历', 'Card卡片', 'Carousel走马灯', 'Collapse折叠面板', 'Comment评论', 'Descriptions描述列表', 'Empty空状态', 'Image图片', 'List列表', 'Popover气泡卡片', 'QRCode二维码', 'Segmented分段控制器', 'Statistic统计数值', 'Table表格', 'Tabs标签页', 'Tag标签', 'Timeline时间轴', 'Tooltip文字提示', 'Tour漫游式引导', 'Tree树形控件', 'Alert警告提示', 'Drawer抽屉', 'Message全局提示', 'Modal对话框', 'Notification通知提醒框', 'Popconfirm气泡确认框', 'Progress进度条', 'Result结果', 'Skeleton骨架屏', 'Spin加载中', ' Surely Table ', ' Surely Form '];
const splitAffix = (str) => {
	const match = str.match(/^([A-Za-z]+)([\u4e00-\u9FFF]+)$/u);
	return match ? [match[1], match[2]] : [];
};
const componentsMapFilter = components.filter(x => /^[A-Za-z].*[\u4e00-\u9FFF]$/.test(x)).map(x => splitAffix(x)).map(x => {
	return {
		label: x[1], component: x[0]
	}
});
// console.log(componentsMapFilter, 'componentsMapFilter');
const componentsGroup = [{
	"groupTitle": "高级组件", "children": ["Surely Table", "Surely Form"]
}, {
	"groupTitle": "其他", "children": ["Affix固钉", "ConfigProvider全局化配置", "FloatButton悬浮按钮", "Watermark水印"]
}, {
	"groupTitle": "其它", "children": ["App包裹组件"]
}, {
	"groupTitle": "通用", "children": ["Button按钮", "Icon图标", "Typography排版"]
}, {
	"groupTitle": "布局", "children": ["Divider分割线", "Flex弹性布局", "Grid栅格", "Layout布局", "Space间距"]
}, {
	"groupTitle": "导航",
	"children": ["Anchor锚点", "Breadcrumb面包屑", "Dropdown下拉菜单", "Menu导航菜单", "PageHeader页头", "Pagination分页", "Steps步骤条"]
}, {
	"groupTitle": "数据录入",
	"children": ["AutoComplete自动完成", "Cascader级联选择", "Checkbox多选框", "DatePicker日期选择框", "Form表单", "Input输入框", "InputNumber数字输入框", "Mentions提及", "Radio单选框", "Rate评分", "Select选择器", "Slider滑动输入条", "Switch开关", "TimePicker时间选择框", "Transfer穿梭框", "TreeSelect树选择", "Upload上传"]
}, {
	"groupTitle": "数据展示",
	"children": ["Avatar头像", "Badge徽标数", "Calendar日历", "Card卡片", "Carousel走马灯", "Collapse折叠面板", "Comment评论", "Descriptions描述列表", "Empty空状态", "Image图片", "List列表", "Popover气泡卡片", "QRCode二维码", "Segmented分段控制器", "Statistic统计数值", "Table表格", "Tabs标签页", "Tag标签", "Timeline时间轴", "Tooltip文字提示", "Tour漫游式引导", "Tree树形控件"]
}, {
	"groupTitle": "反馈",
	"children": ["Alert警告提示", "Drawer抽屉", "Message全局提示", "Modal对话框", "Notification通知提醒框", "Popconfirm气泡确认框", "Progress进度条", "Result结果", "Skeleton骨架屏", "Spin加载中"]
}]
function camelToDash(str) {
	return str.replace(/(?!^)([A-Z])/g, '-$1').toLowerCase();
}

const componentsGroupMapFilter = componentsGroup.filter(x => x.children.every(y => /^[A-Za-z].*[\u4e00-\u9FFF]$/.test(y))).map(x => ({
	...x, children: x.children.map(y => splitAffix(y)).map(y=> ({title: y[1], component: y[0], dir: `() => defineAsyncComponent(() => import('ant-design-vue/es/${camelToDash(y[0])}'))`}))
}));


console.dir(componentsGroupMapFilter, { depth: null })
// console.table(componentsGroupMapFilter)

/**
 * @description 从 Ant Design 官网获取组件列表
 * */
function getComponentsFromAntWebsite() {
	const arr = [];

	const groups = document.querySelectorAll('.ant-menu-item-group');

	groups.forEach(group => {
		const groupTitle = group.querySelector('.ant-menu-item-group-title').innerText;
		const items = group.querySelectorAll('.ant-menu-item');
		const children = [];
		items.forEach(item => {
			children.push(item.querySelector('.ant-menu-title-content').innerText);
		})

		arr.push({
			groupTitle, children
		})
	})

	console.log(arr)
	return arr
}


const finalComponents = [
	{
		groupTitle: '其他',
		children: [
			{ title: '固钉', component: 'Affix' },
			{ title: '全局化配置', component: 'ConfigProvider' },
			{ title: '悬浮按钮', component: 'FloatButton' },
			{ title: '水印', component: 'Watermark' }
		]
	},
	{
		groupTitle: '其它',
		children: [ { title: '包裹组件', component: 'App' } ]
	},
	{
		groupTitle: '通用',
		children: [
			{ title: '按钮', component: 'Button' },
			{ title: '图标', component: 'Icon' },
			{ title: '排版', component: 'Typography' }
		]
	},
	{
		groupTitle: '布局',
		children: [
			{ title: '分割线', component: 'Divider' },
			{ title: '弹性布局', component: 'Flex' },
			{ title: '栅格', component: 'Grid' },
			{ title: '布局', component: 'Layout' },
			{ title: '间距', component: 'Space' }
		]
	},
	{
		groupTitle: '导航',
		children: [
			{ title: '锚点', component: 'Anchor' },
			{ title: '面包屑', component: 'Breadcrumb' },
			{ title: '下拉菜单', component: 'Dropdown' },
			{ title: '导航菜单', component: 'Menu' },
			{ title: '页头', component: 'PageHeader' },
			{ title: '分页', component: 'Pagination' },
			{ title: '步骤条', component: 'Steps' }
		]
	},
	{
		groupTitle: '数据录入',
		children: [
			{ title: '自动完成', component: 'AutoComplete' },
			{ title: '级联选择', component: 'Cascader' },
			{ title: '多选框', component: 'Checkbox' },
			{ title: '日期选择框', component: 'DatePicker' },
			{ title: '表单', component: 'Form' },
			{ title: '输入框', component: 'Input' },
			{ title: '数字输入框', component: 'InputNumber' },
			{ title: '提及', component: 'Mentions' },
			{ title: '单选框', component: 'Radio' },
			{ title: '评分', component: 'Rate' },
			{ title: '选择器', component: 'Select' },
			{ title: '滑动输入条', component: 'Slider' },
			{ title: '开关', component: 'Switch' },
			{ title: '时间选择框', component: 'TimePicker' },
			{ title: '穿梭框', component: 'Transfer' },
			{ title: '树选择', component: 'TreeSelect' },
			{ title: '上传', component: 'Upload' }
		]
	},
	{
		groupTitle: '数据展示',
		children: [
			{ title: '头像', component: 'Avatar' },
			{ title: '徽标数', component: 'Badge' },
			{ title: '日历', component: 'Calendar' },
			{ title: '卡片', component: 'Card' },
			{ title: '走马灯', component: 'Carousel' },
			{ title: '折叠面板', component: 'Collapse' },
			{ title: '评论', component: 'Comment' },
			{ title: '描述列表', component: 'Descriptions' },
			{ title: '空状态', component: 'Empty' },
			{ title: '图片', component: 'Image' },
			{ title: '列表', component: 'List' },
			{ title: '气泡卡片', component: 'Popover' },
			{ title: '二维码', component: 'QRCode' },
			{ title: '分段控制器', component: 'Segmented' },
			{ title: '统计数值', component: 'Statistic' },
			{ title: '表格', component: 'Table' },
			{ title: '标签页', component: 'Tabs' },
			{ title: '标签', component: 'Tag' },
			{ title: '时间轴', component: 'Timeline' },
			{ title: '文字提示', component: 'Tooltip' },
			{ title: '漫游式引导', component: 'Tour' },
			{ title: '树形控件', component: 'Tree' }
		]
	},
	{
		groupTitle: '反馈',
		children: [
			{ title: '警告提示', component: 'Alert' },
			{ title: '抽屉', component: 'Drawer' },
			{ title: '全局提示', component: 'Message' },
			{ title: '对话框', component: 'Modal' },
			{ title: '通知提醒框', component: 'Notification' },
			{ title: '气泡确认框', component: 'Popconfirm' },
			{ title: '进度条', component: 'Progress' },
			{ title: '结果', component: 'Result' },
			{ title: '骨架屏', component: 'Skeleton' },
			{ title: '加载中', component: 'Spin' }
		]
	}
]



