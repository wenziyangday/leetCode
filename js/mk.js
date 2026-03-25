const data = [];
const rtn = {
	data: []
}

const newArr = []

rtn.data.forEach(row =>{
	const  oldRow = this.data.sub__subTable_z59ml.find(e => e.targetName === row.PERFORMTARGET);
	if(oldRow){
		oldRow.targetValue = row.TARGETVALUE;
		newArr.push({
			...oldRow
		})
	}
});

this.data.sub__subTable_z59ml = newArr
