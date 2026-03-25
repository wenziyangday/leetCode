export default {
	methods: {
		VerifyFamilyInfoRes() {
			// 假设的子表名称，请替换为实际的家属信息子表名
			const subTableName = 'T_HR_PEPersonFamily_EMPchang_B';
			const familyData = this.data[subTableName] || [];

			// 记录配偶数量（用于规则8和9）
			let spouseCount = 0;
			// 记录证件号与姓名的映射，用于判断同一证件号是否对应多个姓名（用于规则7）
			const idToNamesMap = new Map();

			for (let itemRow of familyData) {
				// ---- 以下字段名需要替换为你系统实际的字段名 ----
				const relation = itemRow.relation_number;     // 家属关系，如 '配偶', '父亲', '母亲'
				const idNumber = itemRow.idCardNO;     // 证件号码
				const name = itemRow.name || '';       // 家属姓名
				// ---------------------------------------------

				// 规则 7：同一个员工，一个证件号码对应多个姓名
				if (idNumber && name) {
					if (!idToNamesMap.has(idNumber)) {
						idToNamesMap.set(idNumber, new Set());
					}
					idToNamesMap.get(idNumber).add(name);

					if (idToNamesMap.get(idNumber).size > 1) {
						return {success: false, msg: "存在一个证件号码对应多个家属姓名"};
					}
				}

				// 规则 8：记录配偶信息条数
				if (relation === '配偶') {
					spouseCount++;
				}

				// 规则 10 & 11：本人父母姓名校验
				if (relation === '本人父母') {
					if (name) {
						// 规则 10：中文字符或中英文结合不允许有空格，纯英文允许有空格
						const hasChinese = /[\u4e00-\u9fa5]/.test(name);
						const hasSpace = /\s/.test(name);
						if (hasChinese && hasSpace) {
							return {success: false, msg: `父母姓名填写错误：中文或中英结合的名字不允许包含空格（当前填写：${name}）`};
						}

						// 规则 11：名字不允许包含除“·”之外的其他符号
						// 正则解释：匹配除了 中文、英文字母、空格 和 "·" 之外的任何字符
						const hasInvalidSymbol = /[^\u4e00-\u9fa5a-zA-Z\s·]/.test(name);
						if (hasInvalidSymbol) {
							return {success: false, msg: `父母姓名填写错误：名字不允许包含除“·”之外的符号（当前填写：${name}）`};
						}
					}
				}
			}

			// 规则 8 结果判断：同一个员工填写了多个配偶信息
			if (spouseCount > 1) {
				return {success: false, msg: "家属信息中存在多条配偶信息，请更正"};
			}

			// 规则 9：填写了已婚但没有配偶信息
			// 假设主表中有婚姻状况字段，请替换为实际的字段路径，例如 this.data.marital_status
			const maritalStatus = this.data.marital_status;
			if (maritalStatus === '已婚' && spouseCount === 0) {
				return {success: false, msg: "您的婚姻状态为已婚，请补充配偶信息"};
			}

			// 全部校验通过
			return {success: true, msg: ''};
		},
		VerifyFamilyInfoRes2() {
			const subTableName = 'T_HR_PEPersonFamily_EMPchang_B';
			const familyData = this.data[subTableName] || [];

			let spouseCount = 0;
			const idToNamesMap = new Map();

			// --- 新增：身份证末位校验辅助函数（规则 2） ---
			const checkIdCardLastDigit = (id) => {
				// 如果不是18位基本格式，直接返回 false（或者你可以放行，交由其他长度校验逻辑处理）
				if (!/^\d{17}[\dxX]$/i.test(id)) return false;

				const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
				const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
				let sum = 0;

				// 计算前17位的加权和
				for (let i = 0; i < 17; i++) {
					sum += parseInt(id[i], 10) * weights[i];
				}

				// 用加权和除以11取余，找到对应的校验码，并与身份证最后一位比对
				const expectedLastDigit = checkCodes[sum % 11];
				const actualLastDigit = id[17].toUpperCase();

				return expectedLastDigit === actualLastDigit;
			};

			for (let itemRow of familyData) {
				// ---- 假设的字段名 ----
				const relation = itemRow.relation_number;     // 家属关系
				const idNumber = itemRow.idCardNO;     // 证件号码
				const name = itemRow.name || '';       // 家属姓名
				const certType = itemRow.OtherDoc_number || '居民身份证'; // 证件类型，用于缩小校验范围
				// ----------------------

				// 规则 2：身份证号码末位不符合校验规则
				if (idNumber && certType.includes('身份证')) {
					if (!checkIdCardLastDigit(idNumber)) {
						return { success: false, msg: `家属姓名【${name}】的身份证号码末位填写有误或不符合校验规则，请更正` };
					}
				}

				// 规则 7：同一个员工，一个证件号码对应多个姓名
				if (idNumber && name) {
					if (!idToNamesMap.has(idNumber)) {
						idToNamesMap.set(idNumber, new Set());
					}
					idToNamesMap.get(idNumber).add(name);

					if (idToNamesMap.get(idNumber).size > 1) {
						return { success: false, msg: `存在一个证件号码（${idNumber}）对应多个家属姓名，请检查` };
					}
				}

				// 规则 8：记录配偶信息条数
				if (relation === '配偶') {
					spouseCount++;
				}

				// 规则 10 & 11：父母姓名校验
				if (relation === '父亲' || relation === '母亲') {
					if (name) {
						// 规则 10：中文字符或中英结合不允许有空格
						const hasChinese = /[\u4e00-\u9fa5]/.test(name);
						const hasSpace = /\s/.test(name);
						if (hasChinese && hasSpace) {
							return { success: false, msg: `父母姓名填写错误：中文或中英结合的名字不允许包含空格（当前填写：${name}）` };
						}

						// 规则 11：名字不允许包含除“·”之外的其他符号
						const hasInvalidSymbol = /[^\u4e00-\u9fa5a-zA-Z\s·]/.test(name);
						if (hasInvalidSymbol) {
							return { success: false, msg: `父母姓名填写错误：名字不允许包含除“·”之外的符号（当前填写：${name}）` };
						}
					}
				}
			}

			// 规则 8 结果判断：同一个员工填写了多个配偶信息
			if (spouseCount > 1) {
				return { success: false, msg: "家属信息中存在多条配偶信息，请更正" };
			}

			// 规则 9：填写了已婚但没有配偶信息
			const maritalStatus = this.data.marital_status; // 假设主表中有婚姻状况字段
			if (maritalStatus === '已婚' && spouseCount === 0) {
				return { success: false, msg: "您的婚姻状态为已婚，请补充配偶信息" };
			}

			// 全部校验通过
			return { success: true, msg: '' };
		}
	}
}
