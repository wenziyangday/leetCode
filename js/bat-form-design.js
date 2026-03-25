/*
* 该文件写法同vue,只支持data,computed,created,mounted,methods,watch;
* 获取实例->this;
* 获取数据->this.data
* 获取所有控件的配置->this.formConfig
* 上下文字段->this.contextData
*/




export default {
	data(){
		return {

		}
	},
	computed:{

	},
	created(){
		if (this.data.shrID) {
			this.hgfk();
		}
		this.inItGrowthPlanProposal();
		this.initSubTable1();
		this.initSubTable_z59ml();
	},


	methods:{

		async initSubTable_z59ml(){
			/**
			 * * @param EMPNUMBER varchar
            TYPE varchar
            李彤山 2025-05-09 ODS业绩指标
            1、对象：《试用期考核流程（财富委）表单》，子表《试用期关键业绩目标值》
            2、新增单据（初始化时），从《ODS业绩指标》取回【关键指标值】回写到子表的【指标完成值】
                取值逻辑：用户一致 且 类型=1
            3、如果用户修改了员工，再次执行取数
            4、每次打开表单，都执行一次取数
            5、流程运行完成后，不再执行取数
            6、不考虑手工导入“试用期关键业绩目标值”
            7、涉及流程：
                流程1 试用期考核流程（财富委_含成长计划）
                流程2 试用期考核流程（财富委）
            8、不支持初始化取到数据后再删除或者添加一条记录

			 */
			try{
				if(!this.data.personNum){
					return;
				}
				if(['SUCCESS_END','CANCEL','ERROR_END'].includes(this.contextData.status)){
					return;
				}
				//接口返回数据 data:[{PERSON,EMPNUMBER,LINEGROUPLEVEL,PERFORMTARGET,TARGETVALUE,PERSON_NAME}]
				let rtn= await this.invokeCustomQueryPromise("htxqcfw",{"EMPNUMBER":this.data.personNum,"TYPE":"1"});
				console.log(rtn, 'lrtlm,,,')
				if(rtn.data?.length){
					if(!this.data.sub__subTable_z59ml?.length){
						this.data.sub__subTable_z59ml = rtn.data.map(row => ({
							targetName:row.PERFORMTARGET,
							targetVal:'',
							targetValue:row.TARGETVALUE
						}));
					}else{

						rtn.data.forEach(row =>{
							const  oldRow = this.data.sub__subTable_z59ml.find(e => e.targetName === row.PERFORMTARGET);
							if(oldRow){
								oldRow.targetValue = row.TARGETVALUE;
							}
						});
					}
				}
			}
			catch(e){
			}
		},


		initSubTable1() {
			if (this.data.sub__AssessmentIndicatorsHG?.length) return
			debugger
			this.data.sub__AssessmentIndicatorsHG = [
				{
					"targetValue": "试用期间执业行为的合规性(包括但不限于在试用期内因违规行为被监管机构、自律组织等出具行政处罚、行政监管措施、自律措施等;因违规行为被公司出具合规工作措施函件、合规问责、违规违纪处罚、日常合规考核扣分等情况)",
					"completionStandard": "(1)若是在试用期内，因其在之前任职单位的违规行为而受到监管处罚的，原则上不纳入“\n试用期间执业行为的合规性”评价，但需要纳\n、\"带病流动人员”管理范畴，强化管理，审\n慎评估是否予以转正:\n(2)如涉及重大违法违规行为、重大风险事件\n或违反廉洁从业行为的，应按规定实施一票否决，考核权重不受前述比例限制，并视情况进行违规违纪处罚或合规问责;\n(3)无违规违纪行为，违规违纪则本项得0分。",
					"completionDate": "",
					"weight": 10,
					"score": ""
				},
				{
					"targetValue": "试用期内完成合规培训及合规相关测试的情况",
					"completionStandard": "完成合规培训和测试，未完成任何一项则本项得0分。",
					"completionDate": "",
					"weight": 5,
					"score": ""
				},
				{
					"targetValue": "试用期内员工合规意识及合规相关工作配合情况(包括但不限于是否按要求完成投资行为申报、兼职申报配合参加合规文化建设活动等)",
					"completionStandard": "按要求完成投资行为申报、兼职申报、配合参加合规文化建设活动等，未完成任何一项则本项得0分。",
					"completionDate": "",
					"weight": 5,
					"score": ""
				}
			]
		},


		async hgfk(){
			try {
				//接口返回数据 data:[{FPERSONID,NOWPOSNAME,NOWPOSID,FADMINORGUNITID,FHRORGUNITID,ORGID,ORGNAME,ORGNUMBER,ORGDISNAME,COMPANYID,COMNAME,COMNUMBER,COMDISNAME,FEMPPOSTRANKID,LEVELID,LEVELNUM,LEVELNAME,GRADEID,GRADE,GRADENAME,GRADENUM,ROLEID,ROLENAME,ROLENUM,COSTID,COSTNAME,COSTNUM,SERVID,SERVNAME,SERVNUM,SUPID,SUPNAME,SUPNUM,SUP2ID,SUP2NAME,SUP2NUM,TEAID,TEANAME,TEANUM,TALID,TALNAME,TALNUM,ENROLLDATE,CFBROKERCODE,NEWCELL,EMAIL,FORMALDATE,ISTRAINED,FENTERDATE,FPLANFORMALDATE,FTRYOUTMONTH,GENDERNAME,FAGE,FSOCIALSERVICEYEARS,FJOINCOMPANYYEARS,FBIRTHDAY,FJOINDATE,CFDIRECTSUPERIORID,ISVIOLATEHONESTRULE,OCCUPATIONALSITUATIONNAME,CFINTERNSHIPSTARTDATE,CFEXPECTEDENDDATE,FACTUALFORMALDATE,FIDCARDNO,OFFICENUMBER,OFFICENAME,FADDRESS,ISSENIORMGT,CARDNO,CARDTYPENUM,CARDTYPENAME,POSNUMBER,POSNAME,FHJADDRESS,CFEXPECTEDGRADUATEDATE,DTNUMBER,CTTFNUMBER,ORGDISSHORTNAME}]
				console.log(this.data, '指定复制')
				let rtn= await this.invokeCustomQueryPromise("getChangeInfoFromShrByFpersonid",{"FPERSONID":this.data.shrID || ''});
				if(rtn.data?.length){
					this.data.IsNewEmpTtra = rtn.data[0].ISTRAINED || '0'
				}
			} catch(e){

			}

		},

		//获取当前节点信息
		getCurrentNode() {
			const defaultNodeId = '00000000000000000000000000000000000000';
			const _contextData = this?.contextData;
			const defId = _contextData?.defId || '';
			const nodeId = _contextData?.nodeId || _contextData?.curNodeId || defaultNodeId;
			return { defId, nodeId };
		},
		// 判断子表权重
		validateProcessNode(subTableName, subWeightField, processNodeJson={}, rate) {
			processNodeJson = processNodeJson || {};
			const { defId, nodeId } = this.getCurrentNode() || {};
			const processDefIds = Object.keys(processNodeJson);
			if (!processDefIds.includes(defId)) {
				return { success: true, msg: "" };
			}
			const tableName = {
				'AssessmentIndicators': '试用期考核指标',
				'AssessmentIndicatorsHG': '试用期考核指标(合规)'
			}
			const nodeIds = processNodeJson[defId] || [];
			if(nodeIds.includes(nodeId)){
				const subAry = this.data[`sub__${subTableName}`];
				/*if (!subAry?.length) {
						return { success: false, msg: "子表不能为空" };
				}*/
				const sumWeight = subAry.reduce((sum, item) => sum + Number(item?.[subWeightField] || 0), 0);
				if (sumWeight !== rate) {
					return { success: false, sumWeight, msg: tableName[subTableName] + "权重之和必须等于" + rate };
				}
			}
			return { success: true, msg: "" };
		},



		/**
		 * 子表[员工成长计划方案(导师填写)]初始化方法
		 */
		async inItGrowthPlanProposal() {

			if (this.data.ID_) return;
			try {
				const res = await this.get('/api-system/system/core/sysDic/listByKey?key=ygczjhwd&parentTreeId=&pid=&appId=');
				if (!res || (Array.isArray(res) && res.length === 0)) return;

				const subTableFileid = this.data.initData['GrowthPlanProposal'] || {};
				this.data.sub__GrowthPlanProposal = (res || []).map(item => ({
					...subTableFileid,
					wd: item.value,
					_key: this.Util.randomId()
				}));

			} catch (e) {}

		},

		/**
		 * 方法名: _beforeSubmit
		 * 参数: action 值为字符串，用于判断是保存/启动流程
		 * 用途: 在表单设置校验通过后，提交之前执行的验证，返回验证结果信息
		 * 校验成功: return {success:true,msg:""}
		 * 校验未通过: return {success:false,msg:"XXXX字段必须是中文"}
		 * 例子: if(this.data.fullName===''){ return {success:false,msg:"姓名必填"} }
		 */
		/**
        let weights = 0;
        this.data.sub__AssessmentIndicators.forEach(row => weights+= +row.weight );
        if(weights !== 100){
            return {success:false,msg:"权重之和必须等于100"};
        };
		 */


		async _beforeSubmit(action){
			if(this.data.belongingServiceTeam!="02" && this.data.belongingServiceTeam!="03" && this.data.belongingServiceTeam!="05" && this.data.belongingServiceTeam!="17" && this.data.belongingServiceTeam!="19" && this.data.belongingServiceTeam!="04" && this.data.belongingServiceTeam!="22"  ){
				const validProAssessTargetbBill = this.validateProcessNode(
					'AssessmentIndicators',
					'weight',
					{
						'1866801550224003074': ['Activity_13cos0k','Activity_0h2k2z4','Activity_0hcitbe','Activity_1hgy4t8','Activity_0e2aijt','Activity_1vx69gy','Activity_0qy8d5v','Activity_1i079b4','Activity_05ovuek','Activity_1pk9q24','Activity_0ysgukx','Activity_11u8e4g','Activity_1sj5gad','Activity_0w6lefz','Activity_177vzij'],
						'1868533187282481154': ['Activity_0kpxlx1','Activity_0x1g2yo','Activity_0hcitbe','Activity_1hgy4t8','Activity_0e2aijt','Activity_1vx69gy','Activity_0qy8d5v','Activity_1i079b4','Activity_05ovuek','Activity_1pk9q24','Activity_0ysgukx','Activity_11u8e4g','Activity_1sj5gad','Activity_0w6lefz','Activity_177vzij'],
					},
					80
				);
				if(validProAssessTargetbBill?.success === false){
					return validProAssessTargetbBill;
				}

				const validProAssessTargetbBill_hgTable = this.validateProcessNode(
					'AssessmentIndicatorsHG',
					'weight',
					{
						'1866801550224003074': ['Activity_13cos0k','Activity_0h2k2z4','Activity_0hcitbe','Activity_1hgy4t8','Activity_0e2aijt','Activity_1vx69gy','Activity_0qy8d5v','Activity_1i079b4','Activity_05ovuek','Activity_1pk9q24','Activity_0ysgukx','Activity_11u8e4g','Activity_1sj5gad','Activity_0w6lefz','Activity_177vzij'],
						'1868533187282481154': ['Activity_0kpxlx1','Activity_0x1g2yo','Activity_0hcitbe','Activity_1hgy4t8','Activity_0e2aijt','Activity_1vx69gy','Activity_0qy8d5v','Activity_1i079b4','Activity_05ovuek','Activity_1pk9q24','Activity_0ysgukx','Activity_11u8e4g','Activity_1sj5gad','Activity_0w6lefz','Activity_177vzij'],
					},
					20
				)
				if(validProAssessTargetbBill_hgTable?.success === false){
					return validProAssessTargetbBill_hgTable;
				}
				console.log(validProAssessTargetbBill_hgTable, validProAssessTargetbBill, '提交')
				if (validProAssessTargetbBill_hgTable.sumWeight && validProAssessTargetbBill.sumWeight && (validProAssessTargetbBill_hgTable.sumWeight + validProAssessTargetbBill?.sumWeight !== 100)) {
					return { success: false, sumWeight, msg: '试用期考核指标与试用期考核指标（合规）权重之和必须等于100' };
				}
			}

			return { success: true, msg: "" };
		},
		/**
		 * 方法名: _afterSubmit
		 * 参数: result 提交成功返回的数据
		 * 参数: formJson 表单数据
		 * 参数: action 值为字符串，用于判断是保存/启动流程
		 * 方法执行结果提示信息
		 * 执行成功: return {success:true,msg:"表单信息已成功转发给XXXX"}
		 * 执行失败: return {success:false,msg:"表单信息转发失败了"}
		 */
		async _afterSubmit(result,formJson,action){

		}
	},
	watch:{

	}
}
