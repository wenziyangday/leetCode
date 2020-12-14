/**
 * @description leetCode 1678题 设计一个Goal 解析器
 * @param {string} command
 * @return {string}
 * */

// 正则表达式 TODO

function interpret(command) {
  console.log(command.replace(/\w*\((\w{n})\)\w*/g, '***$1***'))
  console.log(command.replace(/\(\)/g, 'o'));
  return '';
}

const interprets = interpret('G()(al)');
console.log(interprets);
