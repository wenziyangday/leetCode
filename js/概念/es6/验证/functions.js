const func = function (a = 1, b, c) {

}

console.log(func.length)

const cat = {
  lives: 9,
  jumps: function () {
    console.log('jumps', this, this.lives);
    this.lives -= 1;
  },
  walk: () => {
    console.log('walk', this, this.lives);
    this.lives -= 1;
  }
}

cat.jumps();
cat.walk();
console.log(cat.lives, 'lives');

/** 尾调用优化 */
function m() {
  return n();
}

function n() {

}
