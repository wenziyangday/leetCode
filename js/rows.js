const row = {aaa: 'aksdkl', ad: 'asdasd', ccc: ''};
const ad = Object.keys(row).every(key => {
	return row[key];
});

console.log(ad); // true
