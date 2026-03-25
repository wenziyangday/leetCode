<template>
	<div class="dataList-popup">
		<div class="popupHeaderToolbar">
			<div class="closeDownIcon van-haptics-feedback" @click="cancel">
				<van-icon name="arrow-down" />
			</div>
			<div class="popupHeaderToolbarTitle" style="text-align: left; padding-left: 8px;">{{ popupTitle }}</div>
			<div v-if="mobileIsSearchView === 'YES' && Object.keys(queryParams).length > 0"
			     class="closeDownIcon van-haptics-feedback" @click="showSearch = true">
				<van-icon name="filter-o" />
			</div>
			<div v-if="mobileButton.length > 0"
			     class="closeDownIcon van-haptics-feedback" @click="showOperate = true">
				<van-icon name="setting-o" />
			</div>
		</div>
		<!-- 模板1、2代码感觉不符合规范，待调整 -->
		<div class="list-content">
			<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
				<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" :immediate-check="false"
				          @load="onLoad">
					<div class="rx-card-item-center" v-if="styleSheet === 1">
						<template v-for="(element, elementIndex) in listData" :key="elementIndex">
							<div class="rx-card-item-imgbox" v-if="isShowImg">
								<my-icon style="font-size: 56px;color: #d5ddff;" :type="'iconimage-fill'"></my-icon>
							</div>
							<div class="rx-card-item-content">
								<ul class="item-list-top">
									<li class="list-top-main">{{ mainShow(element) }}</li>
									<li class="list-top-less-main fontColor"
									    v-for="(lessMainShow, lessMainShowIndex) in lessMainShowList(element)"
									    :key="lessMainShowIndex">{{ lessMainShow }}</li>
								</ul>
								<ul class="item-list-center">
									<li v-for="(vice, viceIndex) of viceShowList(element)" :key="viceIndex" v-html="vice">
									</li>
								</ul>
								<ul class="item-list-bottom">
									<li v-for="(item, itemIndex) of labelList(element)" :key="itemIndex" v-html="item"></li>
								</ul>
							</div>
						</template>
					</div>
					<div class="rx-card-item-center" v-else-if="styleSheet === 2">
						<template v-for="(element, elementIndex) in listData" :key="elementIndex">
							<div class="rx-card-item-imgbox" v-if="isShowImg">
								<my-icon style="font-size: 56px;color: #d5ddff;" :type="'iconimage-fill'"></my-icon>
							</div>
							<div class="rx-card-item-content rx-card-item-content-right">
								<div class="state">{{ mainStatus(element) }}</div>
								<ul class="item-list-top">
									<li class="list-top-main">{{ mainShowLabel(element) }}：{{ mainShow(element) }}</li>
								</ul>
								<ul class="item-list-center">
									<li v-for="(item, itemIndex) of labelList(element)" :key="itemIndex" v-html="item"></li>
								</ul>
								<ul class="item-list-bottom">
									<li v-for="(vice, viceIndex) of viceShowList(element)" :key="viceIndex" v-html="vice">
									</li>
								</ul>
							</div>
						</template>
					</div>
					<div v-else-if="styleSheet === 3" class="rx-card-item-table">
						<rx-grid height="auto" ref="rxGrid" :data="listData" :columns="columns" :cellStyle="cellStyle" @cellClick="handleClick">
							<template v-for="(columnItem, columnIndex) in columns" :key="columnIndex" #[columnItem.slots.default]="{ row }">
								<span v-html="display(row, columnItem.field)"></span>
							</template>
						</rx-grid>
					</div>
					<div class="rx-card-item-center" v-else>
						<div class="cellInfo" v-for="(column, columnIndex) in listData" :key="columnIndex">
							<van-cell-group inset>
								<van-cell>
									<template #title>
										<span class="titleIndex">第{{ columnIndex + 1 }}条</span>
									</template>
								</van-cell>
								<van-cell title-style="width: 120px" v-for="(item, index) in columns" :key="index">
									<template #title>
										<span class="title">{{ item.header }}</span>
									</template>
									<template #value>
										<!-- <a v-if='item.renderType === "LINK"' @click="clickLink(item, column)"
												style="color:#4d9eff;">查看</a> -->
										<span class="label" v-html="display(column, item.field)"></span>
									</template>
								</van-cell>
							</van-cell-group>
						</div>
					</div>
					<van-popup v-model:show="showSearch" round position="bottom" :close-on-click-overlay="false"
					           safe-area-inset-bottom :z-index="5" style="height: 40%; max-height: 90%; padding-top: 4px;">
						<div class="searchHeader">
							<p>搜索</p>
						</div>
						<div class="search-content">
							<template v-for="(item, index) in searchList" :key="index">
								<van-field v-model="queryParams[item.searchParamKey]" :clearable="true"
								           :label="item.fieldLabel" label-align="left" input-align="right" />
							</template>
						</div>
						<div class="btn user-operate">
							<van-button style="width: 42%;" type="primary" size="small"
							            @click="onConfirm">确定</van-button>
							<van-button style="width: 42%;" type="primary" size="small" plain
							            @click="onReset">重置</van-button>
						</div>
					</van-popup>
					<!-- 移动端操作按钮 -->
					<van-action-sheet v-model:show="showOperate" teleport="body"  :actions="mobileButton" close-on-click-action cancel-text="关闭"  @cancel="showOperate=false" @select="onOperateChange" />
				</van-list>
			</van-pull-refresh>
		</div>
	</div>
</template>
<script>
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_SORT_ORDER = "asc";
export default {
	name: "fssc_ctrip_order_flight_info",
	inject: ["closeDlg"],
	data() {
		return {
			listData: [],
			key: "fssc_ctrip_order_flight_info",
			popupTitle: '飞机订单信息',
			pageNo: 1,
			pageSize: 10,
			loading: false,
			finished: false,
			refreshing: false,
			totalCount: 0,
			id: '1906288095557341186',
			appId: '1781325137178607617',
			name: '飞机订单信息',
			columns: [],
			styleSheet: null,
			mobileStyleList: [],
			mobileButton: [],
			mobileIsSearchView: 'YES',
			mobileSearch: [],
			queryParams: {},
			searchList: [],
			initParams: {},
			sortField: '',
			sortOrder: 'asc',
			Api: {},
			showSearch: false,
			showOperate: false,
			formBoList:{
				isPage: 'NO',
				isShowSelectColumn: 'YES',
				formAlias: '',
				formAddAlias: '',
				formDetailAlias: '',
				rowEdit: 'NO',
				isMax: 'YES',
				width: 780,
				height: 480,
				isShade: 'YES',
				tableStyle:3,
				lineHeight:40,
				isShowView: 'NO',
				heightAuto:'YES',
				isShowSearch: 'YES',
				isFieldShow: 'YES',
				id: '1906288095557341186',
				appId: '1781325137178607617',
				name: '飞机订单信息',
				dataStyle: 'list',
				idField: 'FD_ID',
				textField: '',
				parentField: '',
				publishConf: [],
				instColumnConfig: [],
				key: 'fssc_ctrip_order_flight_info',
				isDialog:'NO',
				isTreeDlg:'NO',
				isConfig:'NO',
				busSolution:''
			},
			//columns:[{"field":"index","width":50,"title":"序号","type":"seq"},{"headerAlign":"left","showHeaderOverflow":true,"field":"FD_ORDER_ID","showOverflow":true,"minWidth":120,"sortable":false,"title":this.i18NameParse('wtrpfba589228','订单号')},{"headerAlign":"left","slots":{"default":"FD_CREATE_TIME"},"showHeaderOverflow":true,"field":"FD_CREATE_TIME","showOverflow":true,"minWidth":120,"sortable":false,"title":this.i18NameParse('ixtqjts589228','预订日期')},{"headerAlign":"left","showHeaderOverflow":true,"field":"FD_FLIGHT_WAY","showOverflow":true,"minWidth":80,"sortable":false,"title":this.i18NameParse('ioxrtpp589228','类型')},{"headerAlign":"left","showHeaderOverflow":true,"field":"FD_D_CITY_NAME","showOverflow":true,"minWidth":80,"sortable":false,"title":this.i18NameParse('qruoxex589228','出发地')},{"headerAlign":"left","showHeaderOverflow":true,"field":"FD_A_CITY_NAME","showOverflow":true,"minWidth":80,"sortable":false,"title":this.i18NameParse('getcqpd589228','目的地')},{"headerAlign":"left","showHeaderOverflow":true,"field":"FD_FLIGHT","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('mflevci589228','航班号')},{"headerAlign":"left","slots":{"default":"FD_TAKEOFF_TIME"},"showHeaderOverflow":true,"field":"FD_TAKEOFF_TIME","showOverflow":true,"minWidth":120,"sortable":false,"title":this.i18NameParse('apwzcxe589228','出行时间')},{"headerAlign":"left","showHeaderOverflow":true,"field":"FD_PRE_EMPLOY_NAME","showOverflow":true,"minWidth":80,"sortable":false,"title":this.i18NameParse('cncmjcv589228','出行人')},{"headerAlign":"left","slots":{"default":"FD_AMOUNT"},"showHeaderOverflow":true,"field":"FD_AMOUNT","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('xjpwdhm589228','总金额')},{"headerAlign":"left","showHeaderOverflow":true,"field":"FD_ORDER_STATUS","showOverflow":true,"minWidth":100,"sortable":false,"title":this.i18NameParse('ketjdbs589228','订单状态')}],
		}
	},
	computed: {
		mainShow() {
			return function (element) {
				const res = this.columns.find(item => item.isShow === 'mainShow')
				return res ? this.display(element, res.field) : ''
			}
		},
		mainStatus() {
			return function (element) {
				const res = this.columns.find(item => item.isShow === 'status')
				return res ? this.display(element, res.field) : ''
			}
		},
		mainShowLabel() {
			return function (element) {
				const res = this.columns.find(item => item.isShow === 'mainShow')
				return res ? res.title : ''
			}
		},
		viceShowTitle() {
			return function (element) {
				const res = this.columns.find(item => item.isShow === 'viceShowTitle')
				return res ? this.display(element, res.field) : ''
			}
		},
		viceShowTitleValue() {
			return function (element) {
				const res = this.columns.find(item => item.isShow === 'viceShowTitleValue')
				return res ? this.display(element, res.field) : ''
			}
		},
		lessMainShowList() {
			return function (element) {
				const res = this.columns.filter(item => item.isShow === 'nextMainShow')
				return res ? res.map(item => this.display(element, item.field)) : []
			}
		},
		viceShowList() {
			return function (element) {
				const res = this.columns.filter(item => item.isShow === 'subShowValue')
				return res ? res.map(item => this.display(element, item.field)) : []
			}
		},
		labelList() {
			return function (element) {
				const res = this.columns.filter(item => item.isShow === 'label')
				return res ? res.map(item => this.display(element, item.field)) : []
			}
		},
		isShowImg() {
			return this.columns.find(item => item.isShowImg)
		}
	},
	mounted() {
		this.init()
		debugger
		console.log(this.dialogVm, 'dialogVM实例信息');
	},
	methods: {
		handleClick(params) {
			const {row, column} = params;
			this.handleCELLClick(params, this.formBoList);
			console.log('handleClick--手机数据列表模板', params, handleClick)
		},
		init() {
			this.columns = this.dialogVm.columns.map(item => {
				return {
					...item,
					title: item.header,
					width: item.isWidth,
					slots: { default: item.field },
				}
			})
			this.styleSheet = this.dialogVm.styleSheet
			this.mobileStyleList = this.dialogVm.mobileStyleList
			this.mobileButton = this.dialogVm.mobileButton.map(item => {
				return {
					...item,
					name: item.btnLabel
				}
			})
			this.mobileIsSearchView = this.dialogVm.mobileIsSearchView
			this.mobileSearch = this.dialogVm.mobileSearch
			this.queryParams = this.dialogVm.queryParams
			this.initParams = this.dialogVm.initParams
			this.searchList = this.dialogVm.searchList
			this.Api = this.dialogVm.api
			console.log("🚀 ~ 当前this:", this.columns)
			this.loadData()
		},
		getQueryParams(query) {
			let ary = [];
			for (let key in query) {
				ary.push(key + "=" + query[key]);
			}
			return ary.join("&")
		},
		async loadData(page = 1) {
			this.loading = true;
			this.refreshing = page === 1;
			
			const _parameter = {
				pageNo: page,
				pageSize: this.pageSize,
				sortField: this.sortField || "",
				sortOrder: this.sortOrder || DEFAULT_SORT_ORDER,
				params: {
					...this.initParams,
					...this.queryParams
				}
			};
			
			const res = await this.Api.getFormBoListData(this.key, _parameter).catch(this.handleError);
			this.totalPage = res.result.totalPage || 0;
			this.totalCount = res.result.totalCount || 0;
			this.pageSize = res.result.pageSize || DEFAULT_PAGE_SIZE;
			this.pageNo = res.result.pageNo || 1;
			
			if (this.pageNo >= this.totalPage) {
				this.finished = true;
			}
			
			let data = res.result.data || [];
			//   const datalist = await setDataAction(data);
			const datalist = data;
			
			if (!Array.isArray(this.listData)) this.listData = [];
			this.listData = this.pageNo === 1 ? datalist : this.listData.concat(datalist);
			this.loading = false;
			this.refreshing = false;
		},
		handleError(error) {
			this.loading = false;
			this.refreshing = false;
			console.error('请求失败:', error);
		},
		
		async onRefresh(params = {}) {
			console.log('refresh');
			this.listData = [];
			this.pageNo = 0;
			this.totalPage = 0;
			this.finished = false;
			this.refreshing = true;
			if (Object.keys(params).length) this.queryParam = params;
			await this.onLoad();
			this.refreshing = false;
		},
		
		async onLoad() {
			if (this.refreshing) {
				this.listData = [];
				this.refreshing = false;
				this.pageNo = 0;
			}
			await this.loadData(this.pageNo + 1);
		},
		cancel() {
			this.closeDlg()
		},
		onConfirm() {
			this.loadData()
			this.showSearch = false
		},
		
		onReset() {
			Object.keys(this.queryParams).map(key => {
				this.queryParams[key] = ''
			})
			this.loadData()
			this.showSearch = false
		},
		
		onOperateChange(action) {
		
		},
		
		display(row, columnField) {
			if (row.hasOwnProperty(columnField + '_display')) {
				return row[columnField + '_display'];
			} else {
				return row[columnField];
			}
		},
		
		
	}
}
</script>
<style scoped>
.list-content {
	height: calc(100% - 40px);
	overflow-y: scroll;
}

.rx-card-item-center {
	display: flex;
	flex-direction: column;
	/* border-radius: 10px; */
	margin: 10px;
	/* cursor: move; */
}

.rx-card-item-imgbox {
	padding: 4px 0px 10px 8px;
}

.rx-card-item-content {
	/* flex: 1; */
	margin: 5px 0;
	padding: 10px 10px 0 10px;
	border-radius: 10px;
	background-color: #fff;
}

.fontColor {
	color: #2e86ff !important;
}

ul,
li {
	padding: 0;
	margin: 0;
	list-style: none;
}

.item-list-top {
	display: flex;
	justify-content: space-between;
	padding-bottom: 14px;
}

.item-list-top .list-top-main {
	font-size: 16px;
	color: #333;
	font-weight: bold;
}

.list-top-less-main {
	font-size: 16px;
}

.item-list-center,
.item-list-bottom {
	display: flex;
	font-size: 12px;
	flex-wrap: wrap;
	white-space: nowrap;
}

.item-list-bottom,
.item-list-center {
	padding-bottom: 10px;
}

.item-list-center li {
	position: relative;
	padding: 6px;
	border-right: 1px solid transparent;
	white-space: normal;
}

.item-list-center li:after {
	content: '';
	height: 12px;
	width: 1px;
	background-color: #e4e7eb;
	position: absolute;
	right: -1px;
	top: 3px;
}

.item-list-center li:first-child {
	padding-left: 0;
}

.item-list-center li:last-child {
	padding-right: 0;
}

.item-list-center li:last-child:after {
	content: '';
	display: none;
}

.item-list-bottom li {
	padding: 2px 6px;
	background-color: #f6f6f4;
	border-radius: 2px;
	margin-right: 5px;
	white-space: normal;
}

.rx-card-item-content-right {
	position: relative;
}

.rx-card-item-content-right .state {
	padding: 2px 10px;
	background-color: #87d068;
	border-radius: 0px 2px 0px 12px;
	top: 0;
	right: 0;
	position: absolute;
	color: #fff;
	font-size: 12px;
}



.dataList-popup {
	width: 100%;
	height: 95vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background-color: #f0f2f5;
}

.dataList-popup .van-cell::after {
	border: 1px solid #ebedf0 !important;
}

.popupHeaderToolbar {
	padding: 8px 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.popupHeaderToolbar>.popupHeaderToolbarTitle {
	color: rgba(0, 0, 0, .9);
	font-weight: 700;
	font-size: 15px;
	flex: 1;
	text-align: left;
	padding-left: 5px;
	font-family: var(--van-font-family);
}

.popupHeaderToolbar>.closeDownIcon {
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: rgba(0, 0, 0, .9);
	background-color: #f7f7f7;
	border-radius: 50%;
	overflow: hidden;
}

.listContent {
	height: calc(100% - 40px);
	overflow-y: scroll;
}

.titleIndex {
	font-size: 1rem;
	font-weight: 700;
}

.cellInfo {
	border-radius: 1rem;
	/* border: 2px solid var(--dragform-border-primary-color); */
	background-color: var(--van-cell-background);
	margin: 0 0 .75rem .75rem;
}

.cellInfo .title {
	color: var(--van-cell-value-color);
	/* font-weight: 700; */
}

.cellInfo :deep(.van-cell__value) {
	flex: 1;
}

.cellInfo .label {
	color: var(--van-cell-text-color);
}

.cellInfo :deep(.van-cell) {
	background-color: var(--van-cell-background);
}

.cellInfo:last-child {
	margin-bottom: 0;
}

.btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: var(--van-cell-vertical-padding) var(--van-cell-horizontal-padding);
	position: absolute;
	bottom: 0;
	width: 100%;
}

.searchHeader {
	padding: 8px 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
}

.search-content {
	height: calc(100% - 85px);
	overflow-y: scroll;
}

.rx-card-item-table {
	/* width: 100%; */
	table-layout: fixed;
}

.rx-card-item-table tr {
	text-align: center;
}

.rx-card-item-table tr th {
	border: 1px solid #e5e5e5;
	height: 43px;
}

.rx-card-item-table tr td {
	height: 35px;
	border: 1px solid #e5e3e3;
}

.m-data-list-layout {
	color: #0d0d0d !important;
}

</style>
