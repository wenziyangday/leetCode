/**
 * 从末尾进行千分位隔离
 * @param {string} str
 * @return {string}
 */

const paticiple = function (str) {
    const newStr = str.replace(/(?=(\d{3})+(?!\d))/g, ',');
    if (str.length % 3 === 0) {
        return newStr.substr(1,)
    }
    return newStr;
}


//  tips:
//  正则 模式匹配
// 3的倍数 首个是有，
console.log(paticiple('118055127268'));