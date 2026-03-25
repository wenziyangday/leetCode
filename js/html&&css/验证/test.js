const promise = new Promise(resolve => {
	console.log(1);
	resolve(3)
});

// console.log(2);
//
// promise.then(res => {
// 	console.log(3);
// })


const aa = () => {
	console.log(arguments);
}

aa();
