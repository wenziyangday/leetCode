/**
 * 隐藏手机号中间四位
 * @param {string} str
 * @return {string}
 */

const hidePhoneMid = function (str) {
    return str.replace(/(\d{3})(\d{4})(\d{4})/g, '$1****$3');
}


//  tips:
//  正则分组 $1, $2, $3 ....
//  关键点正则表达式里的 () 起到分组的功用
console.log(hidePhoneMid('18055127268'));