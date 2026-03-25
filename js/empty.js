const aa = {
	"defId": "",
	"name": ""
};

let str = ''
Object.entries(aa).forEach(([key, value]) => {
	str += value;
})

console.log('str', str)
