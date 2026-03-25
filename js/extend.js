const AMapWXUI = require('./amap-wx');

AMapWXUI.AMapWX.prototype.getFormLog = function () {
  console.log('getFormLog');
}

const amapWX = new AMapWXUI.AMapWX({
  key: '11d28ce7cb3f990b7f3044b4a13029d6'
});

amapWX.__proto__.getLog = function () {
  console.log('log info')
}
amapWX.getLog();
amapWX.getFormLog();
