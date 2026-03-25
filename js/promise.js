const aa = [Promise.reject(1), Promise.reject(2), Promise.resolve(3)];
Promise.any(aa).then(res => {
	console.log(res);
})
