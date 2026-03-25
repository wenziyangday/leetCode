const arr = [1, 2, 3, 4, 5];

const arrProxy = new Proxy(arr, {
  get(target, p, receiver) {
    console.log(target, p, receiver);
    return target[p];
  }
});

let aa = arrProxy[1];
arrProxy.push(100)
console.log(aa, arrProxy);


const arr2 = [10, 20, 30, 40, 50];

Object.defineProperty(arr2, 1, {
  get(val) {
    return val;
  }
});

arr2[1] = 1000;
console.log(arr2[1]);
