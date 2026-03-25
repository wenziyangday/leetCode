//该文件写法同vue,只支持data,computed,created,mounted,methods,watch;
//获取实例->this;
//获取数据->this.data
//获取所有控件的配置->this.formConfig
//上下文字段->this.contextData
export default {
	data() {
		return {}
	},
	computed: {},
	created() {

	},
	mounted() {
		console.log(123)
	},
	methods: {


		VerifyUniquenessDegree(...args) {
			const [value, row, fieldConfig, ...restArgs] = args;
			if (!value) return;
			const {field, subTable} = fieldConfig || {};
			for (const item of this.data[`sub__${subTable}`]) {
				item[field] = 0;
			}
			if (row && field) row[field] = 1;
		},
		async _beforeSubmit(action) {


			// 校验 教育经历子表中是否最高学历，是否最高学位，必须有，且只有一条
			/*let isHighestnum = 0;
			let isHighestDegreenum = 0;

			const degrees = this.data.sub__T_HR_ATSPersonDegree;

			if (degrees.length === 0) {
					return { success: false, msg: "教育经历不能为空" };
			}

			for (const { isHighest, isHighestDegree } of degrees) {
					if (isHighest == 1 || isHighest === 'true' || isHighest === true) {
							isHighestnum++;
					}
					if (isHighestDegree == 1 || isHighestDegree === 'true' || isHighestDegree === true) {
							isHighestDegreenum++;
					}
			}

			if (isHighestnum !== 1) {
					return { success: false, msg: "【教育经历-是否最高学历】必须有，且只能有一条" };
			}

			if (isHighestDegreenum !== 1) {
					return { success: false, msg: "【教育经历-是否最高学位】必须有，且只能有一条" };
			}
			*/

			// 校验 工作经历中，证明人姓名和证明人联系方式，不能重复
			// const workExps = this.data.sub__T_HR_PEWorkExp;
			// const contactMap = new Map();
			//
			// //先排序
			// workExps.sort((a, b) => {
			// 	return new Date(a.beginDate) - new Date(b.beginDate)
			// });
			// for (let i = 1; i < workExps.length; i++) {
			// 	if (new Date(workExps[i].beginDate) - new Date(workExps[i - 1].endDate) > 30 * 24 * 60 * 60 * 1000) {
			// 		return {success: false, msg: `第${i} - ${i + 1}段工作经历之间时间空缺差大于30天，请补充待业经历！`};
			// 	}
			// }
			// debugger
			// for (const {linkmanPhone, linkman} of workExps) {
			// 	if (!linkmanPhone && !linkman) {
			// 		continue;
			// 	}
			// 	const key = `${linkmanPhone}-${linkman}`;
			// 	const count = contactMap.get(key) || 0;
			// 	if (count > 0) {
			// 		return {success: false, msg: "工作经历中的联系人及联系电话重复，请修改后提交！"};
			// 	}
			// 	contactMap.set(key, count + 1);
			// }


			//在提交之前执行进行验证返回验证结果信息{success:true,msg:""}

			return {success: true, msg: ""};
		},
		educationIsHighestChange(e) {
			if (!e.isHighest || e.isHighest == 'false') return;
			this.data.sub__education.map(item => {
				item.isHighest = item.index_ == e.index_ ? 'true' : 'false';
				return item
			});
		},
		educationIsHighestDegreeChange(e) {
			if (!e.isHighestDegree || e.isHighestDegree == 'false') return;
			this.data.sub__education.map(item => {
				item.isHighestDegree = item.index_ == e.index_ ? 'true' : 'false';
				return item
			});
		},


		_afterSubmit(result, formJson, action) {
			//在提交之后执行返回表单提交数据，该方法可以返回 {success:false,true,msg:""}
		}
	},
	watch: {
		//"this.data.sub__ATS_sub_workExp[i].Industry"(){
		//this.changeIndustry();
		//}
	}
}
