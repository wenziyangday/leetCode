/** readonly 修饰符 */
type Rx = {
  readonly x: number
}

let rx: Rx = {
  x: 100,
}

// error
// rx.x = 100;

// 可以进行整体替换
rx = {
  x: 10,
}

console.log('局部readonly', rx.x);

// 全部只读
type NumX = {
  x: number
}

let numX: Readonly<NumX> = {
  x: 100
}

// error
// numX = {}
// numX.x = 100;

let arr: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7];

// 局部修改报错
// arr[0] = 1;
arr = [1, 3, 4, 5, 6];

let arr2 = [1, 2, 3, 4] as const;

// error
// arr2 = [1, 2, 3, 4, 5]
// arr2[1] = 100;

