/**
 * jsonp 目标页面回调本地页面的方法并带入参数
 * */

const script = document.createElement('script');
script.src = 'http://www.baidu.com?callback=fn';

function fn() {
  console.log('klkkl')
}

