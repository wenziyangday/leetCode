function repeat(target, n) {
  return (new Array(n + 1)).join(target);
}

console.log(repeat(1, 10));

console.log(new Array(10).join('1'))
