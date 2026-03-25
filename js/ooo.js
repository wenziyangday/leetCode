/*
* 该文件写法同vue,只支持data,computed,created,mounted,methods,watch;
* 获取实例->this;
* 获取数据->this.data
* 获取所有控件的配置->this.formConfig
* 上下文字段->this.contextData
*/
export default {
	data() {
		return {
			isDoEMP_EmpFileChange_ServiceTabs_Config_All: false, EMP_EmpFileChange_ServiceTabs_Config: {
				"personContactMethod_B": {
					name: "联系方式",
					isSingle: "1",
					clientNumber: "personContactMethod",
					apiPath: "personContactMethod",
					subTableName: "personContactMethod_B",
					hrIdKey: "perCMHrid",
					resultType: "object",
					data: null,
					setData: null,
					isDo: false,
					fields: ['officePhone', 'globalRoaming', 'nCell', 'Mobile1', 'Mobile2', 'Mobile3', 'Mobile4', 'privateEmail', 'postalcode', 'homePhone', 'workplace', 'Province_name', 'City_name', 'County_name', 'OfficeSpace_name', 'DetailAddress', 'linkName', 'linkTelNum', 'RelationShip_number']
				}, "T_HR_PEWorkExp_EMPchang_B": {
					name: "社会工作经历",
					isSingle: "0",
					clientNumber: "pwexp",
					apiPath: "PersonWorkExp",
					subTableName: "T_HR_PEWorkExp_EMPchang_B",
					hrIdKey: "pwexpHrid",
					resultType: "array",
					data: null,
					isDo: false,
					fields: ['isUnEmploy', 'unemploymentReason', 'beginDate', 'endDate', 'unitName', 'industry_name', 'unitAddress', 'isWorkAbroad', 'ProfeNature_name', 'ProfeNatureEx', 'workDept', 'position', 'jobDesc', 'linkman', 'linkmanPhone', 'resignation_name', 'resignatio2_name', 'null0']
				}, "T_HR_PEDegre_EMPchang_B": {
					name: "教育经历",
					isSingle: "0",
					clientNumber: "personDegree",
					apiPath: "personDegree",
					subTableName: "T_HR_PEDegre_EMPchang_B",
					hrIdKey: "personDegreeHrId",
					resultType: "array",
					data: null,
					setData: null,
					isDo: false,
					fields: ['enrollDate', 'graduateDate', 'graduateSchool', 'specialty', 'graduateType_name', 'diploma_name', 'degree_name', 'degreeNumber', 'diplomaNumber', 'iSabroad', 'graduationStatus_name', 'isHighest', 'isHighestDegree', 'null3', 'null1', 'null2', 'null0']
				}, "T_HR_PEPersonFamily_EMPchang_B": {
					name: "社会关系",
					isSingle: "0",
					clientNumber: "personFamily",
					apiPath: "personFamily",
					subTableName: "T_HR_PEPersonFamily_EMPchang_B",
					hrIdKey: "personFamilyHrid",
					resultType: "array",
					data: null,
					setData: null,
					isDo: false,
					fields: ['name', 'Nationality_name', 'OtherDoc_name', 'idCardNO', 'Longterm', 'relation_name', 'birthday', 'workUnit', 'workDept', 'job', 'officePhone', 'isProfit', 'null0']
				}, "T_HR_PELanguage_EMPchang_B": {
					name: "语言能力",
					isSingle: "0",
					clientNumber: "personLanguage",
					apiPath: "personLanguage",
					subTableName: "T_HR_PELanguage_EMPchang_B",
					hrIdKey: "personLanguageHrid",
					resultType: "array",
					data: null,
					setData: null,
					isDo: false,
					fields: ['language', 'level', 'grade']
				}, "T_HR_PEBankRecord_EMPchang_B": {
					name: "银行账号",
					apiKey: "getPersonArchivesByTabService",
					isSingle: "0",
					clientNumber: "personBankRecord",
					apiPath: "personBankRecord",
					subTableName: "T_HR_PEBankRecord_EMPchang_B",
					hrIdKey: "personBankRecordHrid",
					resultType: "array",
					data: null,
					setData: null,
					isDo: false,
					fields: ['salarycp_name', 'bank_name', 'accountNum', 'BelongPlace_name', 'financeAccount', 'reimb_name', 'null0']
				}, "T_HR_PCredentialsType_EMPchang_B": {
					name: "证件信息",
					isSingle: "0",
					clientNumber: "personCT",
					apiPath: "personCredentialsType",
					subTableName: "T_HR_PCredentialsType_EMPchang_B",
					hrIdKey: "personCT",
					resultType: "array",
					data: null,
					setData: null,
					isDo: false,
					fields: ['countryRegion_name', 'credentialsType_name', 'credentialsTypeNO', 'documentEndDate', 'isCertify_boolean', 'CountryPermit_number', 'OverNumber', 'CountryPass', 'PassNumber', 'null0']
				}, "T_HR_pCC_EMPchang_B": {
					name: "职业资格信息",
					isSingle: "0",
					clientNumber: "personCertifyCompetency",
					apiPath: "pCC",
					subTableName: "T_HR_pCC_EMPchang_B",
					hrIdKey: "pCCHrid",
					resultType: "array",
					data: null,
					setData: null,
					isDo: false,
					fields: ['occupation_name', 'obtainDate', 'obtainLevel', 'certificateNumber', 'null0']
				}, "T_HR_examresult_EMPchang_B": {
					name: "从业资格考试已通过科目",
					isSingle: "0",
					clientNumber: "examr2",
					apiPath: "examr2",
					subTableName: "T_HR_examresult_EMPchang_B",
					hrIdKey: "examr2Hrid",
					resultType: "array",
					data: null,
					setData: null,
					isDo: false,
					fields: ['RegType_name', 'ExamSub_name', 'paasDate', 'null0']
				}
			}
		}
	}, computed: {}, created() {
		this.EMP_EmpFileChange_init();

		this.getAllTabServices__();
		this.restoreDeletedItemsToSubTable__();

	}, mounted() {
		console.log(this.data, 'datta')
	}, methods: {


		async EMP_EmpFileChange_init() {


			function findAutoSaveTimer(component) {
				let current = component;
				while (current) {
					if (current.autoSaveDraftTimer !== undefined) {
						return current; // current.autoSaveDraftTimer;
					}
					current = current.$parent;
				}
				return null; // 未找到时返回null
			}


			if (this.data?.ID_) return;
			try {
				//rtn:{success:是否执行成功,message:提示信息,data:脚本返回数据};
				let rtn = await this.invokeScriptPromise("getCurUserEmpFileChangePro", {});
				console.log('rtn', rtn)
				if (rtn.success !== true || !rtn.data || rtn.data.success !== true) {

					const timer = findAutoSaveTimer(this);
					if (timer) {
						timer.autoSaveDraft = false;
					}


					//this.$message.error('已存在，不允许新建')
					// 清理 Vue 应用的挂载点
					const app = document.getElementById('app')
					if (app) {
						app.remove()
					}
					document.body.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;flex-direction:column;height:100vh;width:100%;font-size:24px;font-weight:100;">
                        <div style="box-shadow:rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;padding:12px 16px; border-radius:8px">
        <div class="flex items-center">\
                提示：您<strong>已有一条</strong>个人信息修改的草稿，请至<strong>【审批中心】&mdash;&mdash;【我发起的】</strong>中找到该流程并编辑，谢谢！
        </div>
                        </div>`;

				}
			} catch (e) {

			}

		},


		Verifymobile() {
			const fields = ['nCell', 'Mobile1', 'Mobile2', 'Mobile3', 'Mobile4'];
			const labels = ['手机号码', '手机号码1', '手机号码2', '手机号码3', '手机号码4'];
			const data = this.data.sub__personContactMethod_B;
			for (let index = 0; index < fields.length; index++) {
				const field = fields[index];
				const val = data[field];
				if (!val || data[`switch_${field}`] !== "true") {
					continue;
				}
				if (val === data[`${field}_old`] && data[`switch_${field}`] === "true") {
					return {success: false, msg: `原${labels[index]}与现${labels[index]}重复`}
				}

				const find = fields.find(f => {
					if (field !== f) {
						return val === data[`${f}_old`] || (val === data[f] && data[`switch_${f}`] === "true")
					}
				});
				if (find) {
					return {success: false, msg: `${labels[index]}重复`}
				}
			}
			return {success: true, msg: ''};
		}, VerifyUniquenessDegree(value, row, fieldConfig) {
			const subTableName = 'sub__T_HR_PEDegre_EMPchang_B';
			const curField = fieldConfig.field;
			if (value === "1") {
				for (let itemRow of this.data[subTableName]) {
					if (itemRow._key !== row._key) {
						itemRow[curField] = "0";
						itemRow[`switch_${curField}`] = "true";
					}
				}
			}
		},

		VerifyUniquenessDegreeRes() {
			const subTableName = 'sub__T_HR_PEDegre_EMPchang_B';
			let isHighestNumber = 0;
			let isHighestDegreeNumber = 0;
			for (let itemRow of this.data[subTableName]) {
				if ((itemRow.switch_isHighest_boolean === 'true' && itemRow.isHighest_boolean === '1') || (itemRow.switch_isHighest_boolean !== 'true' && itemRow.isHighest_old === '是')) {
					isHighestNumber++;
				}
				if ((itemRow.switch_isHighestDegree_boolean === 'true' && itemRow.isHighestDegree_boolean === '1') || (itemRow.switch_isHighestDegree_boolean !== 'true' && itemRow.isHighestDegree_old === '是')) {
					isHighestDegreeNumber++;
				}
			}
			if (isHighestNumber !== 1) {
				return {success: false, msg: "最高学历必须选择一条，且仅允许选择一条"}
			}
			if (isHighestDegreeNumber !== 1) {
				return {success: false, msg: "最高学位必须选择一条，且仅允许选择一条"}
			}
			return {success: true, msg: ''}
		},


		/**
		 * 过滤指定子表中 changeType 为 "2"（表示删除）的数据
		 * @param {string} subTableName 子表名称
		 * @returns {Array|boolean} 过滤后的数组 或 false 表示失败
		 */
		async filterDeletedSubTableData__(subTableName) {
			try {
				const key = `sub__${subTableName}`;
				if (!Array.isArray(this.data[key])) {
					console.warn(`数据不存在或非数组: ${key}`);
					return false;
				}

				this.data[key] = this.data[key].filter(row => row?.changeType !== "2");
				return this.data[key];
			} catch (error) {
				console.error(`过滤子表 [${subTableName}] 数据时出错:`, error);
				return false;
			}
		},

		/**
		 * 对所有配置的子表执行删除数据过滤
		 * @returns {boolean} 是否全部成功
		 */
		async filterAllSubTablesDeletedData__() {
			if (!this.EMP_EmpFileChange_ServiceTabs_Config) {
				console.warn('未找到子表配置');
				return false;
			}
			const tableNames = Object.keys(this.EMP_EmpFileChange_ServiceTabs_Config);
			const results = await Promise.all(tableNames.map(async (tableName) => {
				const result = await this.filterDeletedSubTableData__(tableName);
				if (result === false) {
					console.warn(`子表 [${tableName}] 过滤失败`);
				}
				return true;
			}));
			return true;
		},

		insertItemAtIndex__(arr, item, index) {
			if (!Array.isArray(arr)) return [item];
			const validIndex = Math.max(0, Math.min(index < 0 ? arr.length : index, arr.length));
			return [...arr.slice(0, validIndex), item, ...arr.slice(validIndex)];
		},

		async restoreDeletedItemsToSubTable__() {
			if (!this.data?.ID_ || !this.data.subtable_delete_datas) return;
			await this.filterAllSubTablesDeletedData__();
			const subTableDeleteData = this.getUtil().toJson(this.data.subtable_delete_datas);
			if (!subTableDeleteData || typeof subTableDeleteData !== 'object') return;

			Object.entries(subTableDeleteData).forEach(([key, items]) => {
				if (!key || !Array.isArray(items) || items.length === 0) return;

				const targetKey = 'sub__' + key;
				const targetArr = this.data?.[targetKey] || [];

				items.forEach(item => {
					if (!item) return;

					// 必须有 _key 字段
					if (!item._key) {
						console.warn('恢复失败：缺少 _key 字段', item);
						return;
					}

					// 判断 _key 是否已存在
					const exists = targetArr.some(existingItem => existingItem?._key === item._key);
					if (exists) {
						console.warn(`_key [${item._key}] 已存在，跳过插入`);
						return;
					}

					// 插入位置
					const insertIndex = item._row_index ?? 99999999999999;
					this.data[targetKey] = this.insertItemAtIndex__(targetArr, item, insertIndex);
				});
			});
		},

		setFieldSubTableDeleteData__(row, subTableName, delIdField) {
			// if(this.data?.ID_) return;
			if (!row || !subTableName || !delIdField) return;
			const subTableConfig = this.EMP_EmpFileChange_ServiceTabs_Config[subTableName];
			if (row?.changeType === "1" && row._is_new_row === "true" && !this.data?.ID_) {
				return;
			}
			if (row?.changeType === "2" && row?._deleteTime) {
				return;
			}
			const hrIdKey = subTableConfig.hrIdKey;
			// const delIdField = 'pwexp_delete_ids';
			// const newDeleteRows  = row.filter(item => item?.[hrIdKey]);
			const newDelIds = (row?.filter(item => item?.[hrIdKey])?.map(item => item[hrIdKey])) || [];
			const oldDelIds = (this.data[delIdField] || '').split(',').filter(Boolean);
			const delIds = [...new Set([...oldDelIds, ...newDelIds])];
			const delIdsStr = delIds.join(',');
			this.data[delIdField] = delIdsStr;


			let CURUSER = localStorage.getItem('user');
			CURUSER = CURUSER ? JSON.parse(CURUSER) : {};
			const fullName = CURUSER.fullName || '';
			const userAccount = CURUSER.account || '';
			const userInfo = `${fullName}(${userAccount})`

			let subTableDeleteData = this.getUtil().toJson(this.data.subtable_delete_datas) || {};
			let curSubTableDeleteData = subTableDeleteData?.[subTableName] || [];
			const timeStr = this.Formula.GET_CURRENT_DATE('YYYY-MM-DD HH:mm:ss');
			const existingKeys = curSubTableDeleteData.map(item => item._key);
			const newItems = row?.filter(item => item?._key && (!item?.changeType || (item?.changeType === "1" && item?.ID_)) && !existingKeys.includes(item._key)).map(item => {
				return {
					...item, changeType: "2", _deleteTime: timeStr, _deleteTimeTips: userInfo + " 删除于 " + timeStr,
				}
			});
			// 合并新旧数据
			const delData = [...curSubTableDeleteData, ...newItems];
			subTableDeleteData[subTableName] = delData;
			this.data.subtable_delete_datas = JSON.stringify(subTableDeleteData);
		},

		async setTabDataFormData__(result, subTableName) {
			if (this.data?.ID_) return false;
			if (!result || !subTableName) return false;
			const item = this.EMP_EmpFileChange_ServiceTabs_Config[subTableName];
			const res = await this.setApiDataFormData__(result, item);
			return res;
		},

		async setApiDataFormData__(result, item) {
			if (this.data?.ID_) return false;
			if (!result) return false;
			let {subTableName, apiPath, hrIdKey, resultType, fields} = item || {};
			resultType = resultType || 'array';
			let serviceDataResult = result?.[apiPath];
			this.EMP_EmpFileChange_ServiceTabs_Config[subTableName].isDo = true;
			this.EMP_EmpFileChange_ServiceTabs_Config[subTableName].data = result;
			if (resultType == 'object') {
				serviceDataResult = serviceDataResult || {};
				const subObjData = this.data[`sub__${subTableName}`];
				for (let key of fields) {
					if (key === "" || key === "undefined" || key === null || key === undefined) {
						continue;
					}
					let val = serviceDataResult[key];
					if (typeof serviceDataResult[key] === 'object') {
						if (Array.isArray(serviceDataResult[key])) {
							for (const seit of serviceDataResult[key]) {
								if (seit.hasOwnProperty("size") && seit.hasOwnProperty("data")) {
									seit.preview = seit.data + '&isshow=1'
								}
							}
						} else {
							if (serviceDataResult[key].hasOwnProperty("size") && serviceDataResult[key].hasOwnProperty("data")) {
								serviceDataResult[key].preview = serviceDataResult[key].data + '&isshow=1'
							}
						}
						val = JSON.stringify(serviceDataResult[key]);
					}
					// const val = typeof serviceDataResult[key] === 'object' ? JSON.stringify(serviceDataResult[key]) : serviceDataResult[key];
					subObjData[key + '_old'] = val || '';
				}
				subObjData[hrIdKey] = serviceDataResult?.[hrIdKey] || "";
				this.EMP_EmpFileChange_ServiceTabs_Config[subTableName].setData = subObjData;
				return subObjData;
			}

			serviceDataResult = serviceDataResult || [];

			const subFieldsObj = this.data.initData?.[subTableName] || {};
			let subTableData = [];
			for (const ele of serviceDataResult) {
				// if (!ele || !ele?.[hrIdKey]){
				//     continue;
				// }
				let subdata = {...subFieldsObj};
				subdata['_key'] = apiPath + (Math.random().toString(36).slice(-6));
				for (const key of fields) {

					let vale = ele[key];
					if (typeof ele[key] === 'object') {
						if (Array.isArray(ele[key])) {
							for (const eit of ele[key]) {
								if (eit.hasOwnProperty("size") && eit.hasOwnProperty("data")) {
									eit.preview = eit.data + '&isshow=1'
								}
							}
						} else {
							if (ele[key].hasOwnProperty("size") && ele[key].hasOwnProperty("data")) {
								ele[key].preview = ele[key].data + '&isshow=1'
							}
						}
						vale = JSON.stringify(ele[key]);
					}
					// const vale = typeof ele[key] === 'object' ? JSON.stringify(ele[key]) : ele[key];
					subdata[`${key}_old`] = vale || '';
				}
				subdata[hrIdKey] = ele?.[hrIdKey] || "";
				subTableData.push(subdata);
			}

			this.data[`sub__${subTableName}`] = subTableData;
			this.EMP_EmpFileChange_ServiceTabs_Config[subTableName].setData = subTableData;
			return subTableData;
		},

		async getPersonByTabService__(item) {
			if (this.data?.ID_) return;
			let CURUSER = localStorage.getItem('user');
			CURUSER = CURUSER ? JSON.parse(CURUSER) : {};
			const personID = JSON.parse(this.data?.curuser || '{}')?.hrId || CURUSER.hrId || '';
			if (!personID) return false;
			const postData = {
				"bodys": {
					"personID": personID, "isSingle": item.isSingle, "clientNumber": item.clientNumber
				}, "headers": {}, "pathParams": {}, "querys": {}
			};
			const res = await this.postJson(`/api-system/system/core/sysInterfaceApi/executeApiByApiKey?apiKey=getPersonArchivesByTabService`, postData);
			const result = res.data?.body;
			return await this.setApiDataFormData__(result, item);
		}, async getAllTabServices__() {
			if (this.data?.ID_) return [];
			const tabs = Object.values(this.EMP_EmpFileChange_ServiceTabs_Config);
			try {
				const results = await Promise.all(tabs.map(async (tab) => {
					try {
						const result = await this.getPersonByTabService__(tab);
						return {success: true, data: result, tab};
					} catch (error) {
						console.error(`error---${tab.name}:`, error);
						return {success: false, error: error.message, tab};
					}
				}));
				this.isDoEMP_EmpFileChange_ServiceTabs_Config_All = true;
				console.log('Results:', results);
				// 返回最终结果
				return results;
			} catch (error) {
				console.error('error:', error);
				this.isDoEMP_EmpFileChange_ServiceTabs_Config_All = false;
				return [];
			}
		},

		/**
		 * 方法名: _beforeValid
		 * 参数: action 值为字符串，用于判断是保存/启动流程
		 * 参数: checkRequired 值为布尔，用于判断是否校验必填字段
		 * 用途: 在表单开始校验前执行的方法，返回true/false,用于控制表单校验是否执行
		 * 执行校验: return {success: true, msg: ''}
		 * 阻止校验: return {success: false, msg: '不执行校验'}
		 */
		async _beforeValid(action, checkRequired) {
			await this.filterAllSubTablesDeletedData__();


			return {success: true, msg: ''};
		},

		/**
		 * 方法名: _beforeSubmit
		 * 参数: action 值为字符串，用于判断是保存/启动流程
		 * 用途: 在表单设置校验通过后，提交之前执行的验证，返回验证结果信息
		 * 校验成功: return {success:true,msg:""}
		 * 校验未通过: return {success:false,msg:"XXXX字段必须是中文"}
		 * 例子: if(this.data.fullName===''){ return {success:false,msg:"姓名必填"} }
		 */
		async _beforeSubmit(action) {

			if (action !== "newValid" && !this.data?.ID_) {
				let isNewValid = false;
				for (const key in this.EMP_EmpFileChange_ServiceTabs_Config) {
					const item = this.EMP_EmpFileChange_ServiceTabs_Config[key];
					if (!item.isDo || !item.setData) {
						isNewValid = true;
						await this.getPersonByTabService__(item)
					}
				}

				if (isNewValid) {
					console.log('isNewValid: ', isNewValid);
					const vRes = await this.valid(true, "newValid");
					if (!vRes.success) {
						return vRes;
					}
				}
			}


			const degreeRes = this.VerifyUniquenessDegreeRes();
			if (!degreeRes.success) {
				return degreeRes;
			}
			// 校验手机号码重复
			const mobile = this.Verifymobile();
			if (!mobile.success) {
				return mobile;
			}
			// 校验流程发起条件
			debugger;
			if (!this.data.ID_ || (this.data.ID_ && (!this.data.INST_STATUS_ || this.data.INST_STATUS_ == "DRAFTED"))) {
				let res = await this.invokeScriptPromise("checkPersonalInforChange", {"data": JSON.stringify(this.data)});
				if (res.success && res.code == 200) {
					let resData = res.data;
					if (!resData.success || !(resData.code == 200)) {
						const errorData = Array.isArray(resData.data) ? resData.data : [resData.data];
						return {success: false, msg: "当前表单验证不通过", error: [...errorData]}
						// return {success:false,msg:resData.message};
					}
				}
			}


			return {success: true, msg: ""};
		},

		/**
		 * 方法名: _errorValid
		 * 参数: action 值为字符串，用于判断是保存/启动流程
		 * 参数: checkRequired 值为布尔，用于判断是否校验必填字段
		 * 参数: checkRule 表单必填设置校验结果
		 * 参数: beforeSubmitResult _beforeSubmit方法的返回结果
		 * 用途: 用于校验表单校验不通过时，执行额外的方法
		 * 返回: 无
		 */
		async _errorValid(action, checkRequired, checkRule, beforeSubmitResult) {
			this.restoreDeletedItemsToSubTable__();
			//固定返回true即可
			return true;
		}, /**
		 * 方法名: _afterSubmit
		 * 参数: result 提交成功返回的数据
		 * 参数: formJson 表单数据
		 * 参数: action 值为字符串，用于判断是保存/启动流程
		 * 方法执行结果提示信息
		 * 执行成功: return {success:true,msg:"表单信息已成功转发给XXXX"}
		 * 执行失败: return {success:false,msg:"表单信息转发失败了"}
		 */
		async _afterSubmit(result, formJson, action) {

		}

	},

}
