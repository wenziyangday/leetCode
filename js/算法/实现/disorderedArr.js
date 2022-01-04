/**
 * @description 乱序数组 sort 以及 sort 不是真实意义上的乱序，从而引入了一个新的算法
 * 洗牌算法：每次都是让当前数组状态的最后一个和 其前面数据的随机位置进行交换 从而形成一个乱序数组 （本质上就是一个等概率事件）
 * https://www.zhihu.com/question/68330851
 * https://new.qq.com/omn/20201208/20201208A0845600.html
 *
 * 概率事件：即每个元素在同一位置出现的概率是一样的 10 => 1/10 (已经出现的元素 此时概率是1) 接下来 9 => 1/9 * 9/10
 * 感觉就是除了已经出现的元素，其他的元素出现概率 相等
 * */

// 基础版（在某种场景下，并不是真实的完全乱序）
function disorderedArr(arr) {
  return arr.sort(() => .5 - Math.random());
}


// 完全版
const arr = shuffle2([1, 2, 3, 4, 5, 6, 7, 8]);

function shuffle2(arr) {
  let len = arr.length, index;
  let array = arr.slice();
  while (len) {
    index = Math.floor(Math.random() * len--);
    [array[index], array[len]] = [array[len], array[index]];
  }
  return array;
}

Array.prototype.shuffle = function () {
  let array = this, index;
  let len = array.length;
  while (len) {
    index = Math.floor(Math.random() * len--);
    [array[index], array[len]] = [array[len], array[index]];
  }
  return array;
}

const arras = [
  '浦发银行张江科技支行',
  '浦发银行张江科技支行',
  '浦发银行张江科技支行',
  '浦发银行张江科技支行',
  '浦发银行张江科技支行',
  '浦发银行紫薇路支行',
  '浦发银行展想广场支行',
  '浦发银行科苑路支行',
  '浦发银行唐镇支行',
  '浦发银行龙阳路支行',
  '浦发银行川沙支行',
  '浦发银行北蔡支行'
];

console.time();
let sum = {};
for (let i = 0; i < 100000000; i++) {
  let kes = arras.shuffle()[0];
  if (sum[kes]) {
    sum[kes] += 1;
  } else {
    sum[kes] = 1;
  }
}
console.log(sum);
console.timeEnd();

console.time();
let sum2 = {};
let j = 0;
while (j < 100000000) {
  let kes = arras.shuffle()[0];
  if (sum2[kes]) {
    sum2[kes] += 1;
  } else {
    sum2[kes] = 1;
  }
  j += 1;
}
console.log(sum2);
console.timeEnd();


const q22 = [
  {
    "ranking": 1,
    "storeName": "浦发上海南京西路支行（原北京西路支行）",
    "poiId": "E42ab9fdaf4f011ebbe73fa163e1c2c53",
    "latitude": 31.222705,
    "longitude": 121.443748,
    "flowRatio": 4.3011646,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区南京西路1788号103室",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106013",
      "name": "静安寺街道"
    },
    "unlocked": true
  },
  {
    "ranking": 2,
    "storeName": "浦发银行商城路支行",
    "poiId": "E4438a88bf4f011ebbe73fa163e1c2c53",
    "latitude": 31.229959,
    "longitude": 121.517943,
    "flowRatio": 3.223701,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区商城路618号良友大厦底楼（浦发银行）",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115005",
      "name": "陆家嘴街道"
    },
    "unlocked": true
  },
  {
    "ranking": 3,
    "storeName": "浦发上海永银大厦支行（原老西门支行）",
    "poiId": "E42bf09f5f4f011ebbe73fa163e1c2c53",
    "latitude": 31.224082,
    "longitude": 121.480481,
    "flowRatio": 2.89745,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦（卢湾）区西藏南路218号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101022",
      "name": "淮海中路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 4,
    "storeName": "大光明支行",
    "poiId": "E429a83e3f4f011ebbe73fa163e1c2c53",
    "latitude": 31.232824,
    "longitude": 121.471138,
    "flowRatio": 2.7666628,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区南京西路240号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101002",
      "name": "南京东路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 5,
    "storeName": "浦发上海九江路支行",
    "poiId": "E42a680e2f4f011ebbe73fa163e1c2c53",
    "latitude": 31.234757,
    "longitude": 121.480112,
    "flowRatio": 2.5931065,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区九江路555号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101013",
      "name": "外滩街道"
    },
    "unlocked": true
  },
  {
    "ranking": 6,
    "storeName": "浦发上海住业大厦支行",
    "poiId": "E42a89b5cf4f011ebbe73fa163e1c2c53",
    "latitude": 31.236266,
    "longitude": 121.470688,
    "flowRatio": 2.4155917,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区北京西路99号住业大厦底楼",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101002",
      "name": "南京东路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 7,
    "storeName": "上海浦东发展银行股份有限公司水务大厦支行",
    "poiId": "E42290755f4f011ebbe73fa163e1c2c53",
    "latitude": 31.218364,
    "longitude": 121.431953,
    "flowRatio": 2.3501642,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市江苏路389号水务大厦附楼一楼",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105002",
      "name": "江苏路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 8,
    "storeName": "浦发银行陆家嘴支行",
    "poiId": "E454812f8f4f011ebbe73fa163e1c2c53",
    "latitude": 31.229959,
    "longitude": 121.524839,
    "flowRatio": 2.2782528,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区东方路710号汤臣金融大厦底楼",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115005",
      "name": "陆家嘴街道"
    },
    "unlocked": true
  },
  {
    "ranking": 9,
    "storeName": "浦发银行肇嘉浜路支行",
    "poiId": "E44eee503f4f011ebbe73fa163e1c2c53",
    "latitude": 31.194315,
    "longitude": 121.44093,
    "flowRatio": 2.2504075,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区肇嘉浜路1077号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104014",
      "name": "徐家汇街道"
    },
    "unlocked": true
  },
  {
    "ranking": 10,
    "storeName": "上海浦东发展银行建国东路支行",
    "poiId": "E41b58873f4f011ebbe73fa163e1c2c53",
    "latitude": 31.211624,
    "longitude": 121.475518,
    "flowRatio": 2.1782913,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区马当路588弄508、516号一层",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101022",
      "name": "淮海中路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 11,
    "storeName": "浦发银行南丹支行",
    "poiId": "E440e3755f4f011ebbe73fa163e1c2c53",
    "latitude": 31.189696,
    "longitude": 121.442322,
    "flowRatio": 2.1547456,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区天钥桥路309号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104014",
      "name": "徐家汇街道"
    },
    "unlocked": true
  },
  {
    "ranking": 12,
    "storeName": "浦发银行控江支行",
    "poiId": "E447abe3ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.274021,
    "longitude": 121.515622,
    "flowRatio": 2.138275,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市杨浦区控江路1669-2号",
    "district": {
      "id": "310110",
      "name": "杨浦区"
    },
    "township": {
      "id": "310110009",
      "name": "四平路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 13,
    "storeName": "上海浦东发展银行西藏南路支行",
    "poiId": "E428c1430f4f011ebbe73fa163e1c2c53",
    "latitude": 31.214517,
    "longitude": 121.484933,
    "flowRatio": 2.112909,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区西藏南路768号（原址：西藏南路1424号)",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101019",
      "name": "老西门街道"
    },
    "unlocked": true
  },
  {
    "ranking": 14,
    "storeName": "浦发上海卢湾支行营业部",
    "poiId": "E42ae1979f4f011ebbe73fa163e1c2c53",
    "latitude": 31.202638,
    "longitude": 121.473049,
    "flowRatio": 2.0561264,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦（卢湾）区斜土路713号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101021",
      "name": "打浦桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 15,
    "storeName": "上海浦东发展银行股份有限公司上海局门路小微支行",
    "poiId": "E41c1ee1df4f011ebbe73fa163e1c2c53",
    "latitude": 31.206768,
    "longitude": 121.48223,
    "flowRatio": 1.9126222,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区斜土路106-1号底层",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101021",
      "name": "打浦桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 16,
    "storeName": "浦发银行东安支行",
    "poiId": "E43a869e1f4f011ebbe73fa163e1c2c53",
    "latitude": 31.193515,
    "longitude": 121.450279,
    "flowRatio": 1.86478,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区斜土路2109号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104008",
      "name": "枫林路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 17,
    "storeName": "浦发银行创智天地支行",
    "poiId": "Ef396eff3f51111ebbe73fa163e1c2c53",
    "latitude": 31.306188,
    "longitude": 121.512747,
    "flowRatio": 1.8335675,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市杨浦区淞沪路290号一层05-09单元",
    "district": {
      "id": "310110",
      "name": "杨浦区"
    },
    "township": {
      "id": "310110019",
      "name": "五角场街道"
    },
    "unlocked": true
  },
  {
    "ranking": 18,
    "storeName": "浦发银行徐家汇支行",
    "poiId": "E447421c5f4f011ebbe73fa163e1c2c53",
    "latitude": 31.192027,
    "longitude": 121.432292,
    "flowRatio": 1.8168694,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区虹桥路188号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104014",
      "name": "徐家汇街道"
    },
    "unlocked": true
  },
  {
    "ranking": 19,
    "storeName": "浦发上海普陀支行营业部",
    "poiId": "E42b99b19f4f011ebbe73fa163e1c2c53",
    "latitude": 31.237045,
    "longitude": 121.431997,
    "flowRatio": 1.8136162,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区长寿路746号",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107015",
      "name": "长寿路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 20,
    "storeName": "浦发上海南市支行",
    "poiId": "E42ac37b8f4f011ebbe73fa163e1c2c53",
    "latitude": 31.212535,
    "longitude": 121.489167,
    "flowRatio": 1.810181,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区（南市区）陆家浜路1011号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101019",
      "name": "老西门街道"
    },
    "unlocked": true
  },
  {
    "ranking": 21,
    "storeName": "浦发上海外滩支行",
    "poiId": "E42b2e685f4f011ebbe73fa163e1c2c53",
    "latitude": 31.224899,
    "longitude": 121.499565,
    "flowRatio": 1.7582666,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区中山南路28号久事大厦24楼",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101017",
      "name": "小东门街道"
    },
    "unlocked": true
  },
  {
    "ranking": 22,
    "storeName": "浦发上海静安支行营业部",
    "poiId": "E42cb53edf4f011ebbe73fa163e1c2c53",
    "latitude": 31.232703,
    "longitude": 121.461794,
    "flowRatio": 1.7106518,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区北京西路669号",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106011",
      "name": "石门二路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 23,
    "storeName": "浦发上海武定社区支行",
    "poiId": "E42bdd25af4f011ebbe73fa163e1c2c53",
    "latitude": 31.228816,
    "longitude": 121.439488,
    "flowRatio": 1.6873335,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区武定路1129号",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106014",
      "name": "曹家渡街道"
    },
    "unlocked": true
  },
  {
    "ranking": 24,
    "storeName": "浦发上海国脉大厦支行",
    "poiId": "E42b24f9df4f011ebbe73fa163e1c2c53",
    "latitude": 31.244602,
    "longitude": 121.442721,
    "flowRatio": 1.6803039,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区江宁路1207号",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107015",
      "name": "长寿路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 25,
    "storeName": "上海浦东发展银行股份有限公司曹家渡支行（原恒隆广场支行）",
    "poiId": "E42101aa2f4f011ebbe73fa163e1c2c53",
    "latitude": 31.227708,
    "longitude": 121.43047,
    "flowRatio": 1.6666315,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区万航渡路790号1-2层",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106014",
      "name": "曹家渡街道"
    },
    "unlocked": true
  },
  {
    "ranking": 26,
    "storeName": "浦发上海同济新村社区支行",
    "poiId": "E42aeb00df4f011ebbe73fa163e1c2c53",
    "latitude": 31.28164,
    "longitude": 121.50821,
    "flowRatio": 1.6658351,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市杨浦区彰武路49-2号",
    "district": {
      "id": "310110",
      "name": "杨浦区"
    },
    "township": {
      "id": "310110009",
      "name": "四平路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 27,
    "storeName": "浦发上海四平路支行",
    "poiId": "E42b1b34df4f011ebbe73fa163e1c2c53",
    "latitude": 31.262301,
    "longitude": 121.490786,
    "flowRatio": 1.6559163,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市虹口区四平路188号商贸大厦一楼",
    "district": {
      "id": "310109",
      "name": "虹口区"
    },
    "township": {
      "id": "310109017",
      "name": "四川北路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 28,
    "storeName": "浦发上海分行营业部",
    "poiId": "E42a9cd26f4f011ebbe73fa163e1c2c53",
    "latitude": 31.235277,
    "longitude": 121.511343,
    "flowRatio": 1.6205636,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区浦东南路588号2楼",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115005",
      "name": "陆家嘴街道"
    },
    "unlocked": true
  },
  {
    "ranking": 29,
    "storeName": "浦发上海人民大厦支行",
    "poiId": "E42a74eedf4f011ebbe73fa163e1c2c53",
    "latitude": 31.229445,
    "longitude": 121.473427,
    "flowRatio": 1.612169,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区人民大道200号（不对外营业）",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101002",
      "name": "南京东路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 30,
    "storeName": "浦发上海武宁路支行",
    "poiId": "E42bd38f8f4f011ebbe73fa163e1c2c53",
    "latitude": 31.237106,
    "longitude": 121.431745,
    "flowRatio": 1.5894877,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "为配合市政动迁，网点自2016年4月1日起暂停营业，需办理业务的客户可前往长寿路746号普陀支行营业部办理，",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107015",
      "name": "长寿路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 31,
    "storeName": "上海浦东发展银行芷江支行（原西藏北路支行）",
    "poiId": "E4286c2eef4f011ebbe73fa163e1c2c53",
    "latitude": 31.255456,
    "longitude": 121.457243,
    "flowRatio": 1.588555,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区普善路139号(2010年6月17日迁址,原址西藏北路51号)",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106022",
      "name": "芷江西路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 32,
    "storeName": "浦发上海虹口支行营业部",
    "poiId": "E42c3f1faf4f011ebbe73fa163e1c2c53",
    "latitude": 31.287351,
    "longitude": 121.490294,
    "flowRatio": 1.58628,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市虹口区曲阳路731号",
    "district": {
      "id": "310109",
      "name": "虹口区"
    },
    "township": {
      "id": "310109010",
      "name": "曲阳路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 33,
    "storeName": "上海浦东发展银行股份有限公司上海自贸试验区分行",
    "poiId": "E41c32381f4f011ebbe73fa163e1c2c53",
    "latitude": 31.235231,
    "longitude": 121.511741,
    "flowRatio": 1.5660329,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区浦东南路588号浦发大厦22楼",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115005",
      "name": "陆家嘴街道"
    },
    "unlocked": true
  },
  {
    "ranking": 34,
    "storeName": "上海浦东发展银行黄浦支行营业部",
    "poiId": "E42941b72f4f011ebbe73fa163e1c2c53",
    "latitude": 31.23973,
    "longitude": 121.48626,
    "flowRatio": 1.5498807,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区宁波路50号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101013",
      "name": "外滩街道"
    },
    "unlocked": true
  },
  {
    "ranking": 35,
    "storeName": "上海浦东发展银行股份有限公司闸北支行",
    "poiId": "E427f350af4f011ebbe73fa163e1c2c53",
    "latitude": 31.246553,
    "longitude": 121.457593,
    "flowRatio": 1.5497215,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区天目西路123号",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106015",
      "name": "天目西路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 36,
    "storeName": "浦发银行大众大厦支行",
    "poiId": "E443c9e52f4f011ebbe73fa163e1c2c53",
    "latitude": 31.199294,
    "longitude": 121.416435,
    "flowRatio": 1.5466958,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区中山西路1515号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105009",
      "name": "虹桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 37,
    "storeName": "浦发银行闵行支行",
    "poiId": "E45437c48f4f011ebbe73fa163e1c2c53",
    "latitude": 31.107654,
    "longitude": 121.376167,
    "flowRatio": 1.4861138,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区莘松路159号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112101",
      "name": "莘庄镇"
    },
    "unlocked": true
  },
  {
    "ranking": 38,
    "storeName": "浦发上海打浦桥支行",
    "poiId": "E42b8617af4f011ebbe73fa163e1c2c53",
    "latitude": 31.203084,
    "longitude": 121.463965,
    "flowRatio": 1.4784472,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区肇嘉浜路201弄1-2号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104007",
      "name": "斜土路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 39,
    "storeName": "浦发上海天山路支行",
    "poiId": "E42b55f29f4f011ebbe73fa163e1c2c53",
    "latitude": 31.215518,
    "longitude": 121.385866,
    "flowRatio": 1.4454603,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区威宁路426号临",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105102",
      "name": "新泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 40,
    "storeName": "浦发上海杨浦支行营业部",
    "poiId": "E42bb6d32f4f011ebbe73fa163e1c2c53",
    "latitude": 31.289714,
    "longitude": 121.521088,
    "flowRatio": 1.4374753,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市杨浦区黄兴路1718号",
    "district": {
      "id": "310110",
      "name": "杨浦区"
    },
    "township": {
      "id": "310110101",
      "name": "五角场镇"
    },
    "unlocked": true
  },
  {
    "ranking": 41,
    "storeName": "浦发上海四川北路支行",
    "poiId": "E42b11bdcf4f011ebbe73fa163e1c2c53",
    "latitude": 31.261467,
    "longitude": 121.483559,
    "flowRatio": 1.4318334,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市虹口区四川北路1851号1楼",
    "district": {
      "id": "310109",
      "name": "虹口区"
    },
    "township": {
      "id": "310109017",
      "name": "四川北路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 42,
    "storeName": "浦发银行漕河泾支行",
    "poiId": "E44d2c98ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.172543,
    "longitude": 121.405117,
    "flowRatio": 1.4059217,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区桂箐路65号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104012",
      "name": "虹梅路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 43,
    "storeName": "浦发银行虹桥商务区支行",
    "poiId": "E44fc59a4f4f011ebbe73fa163e1c2c53",
    "latitude": 31.194327,
    "longitude": 121.314422,
    "flowRatio": 1.3734354,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区申长路818号1号楼1楼101单元及二楼201、202、203A单元",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112008",
      "name": "新虹街道"
    },
    "unlocked": true
  },
  {
    "ranking": 44,
    "storeName": "浦发上海长宁支行营业部",
    "poiId": "E42ca1675f4f011ebbe73fa163e1c2c53",
    "latitude": 31.218672,
    "longitude": 121.420127,
    "flowRatio": 1.3492981,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区长宁路855号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105001",
      "name": "华阳路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 45,
    "storeName": "浦发银行临空支行",
    "poiId": "E43b6d9fdf4f011ebbe73fa163e1c2c53",
    "latitude": 31.219999,
    "longitude": 121.358694,
    "flowRatio": 1.3346246,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区金钟路633号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105011",
      "name": "北新泾街道"
    },
    "unlocked": true
  },
  {
    "ranking": 46,
    "storeName": "浦发上海大连路支行",
    "poiId": "E42b4ca89f4f011ebbe73fa163e1c2c53",
    "latitude": 31.27363,
    "longitude": 121.500568,
    "flowRatio": 1.3314624,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市虹口区四平路840号",
    "district": {
      "id": "310109",
      "name": "虹口区"
    },
    "township": {
      "id": "310109014",
      "name": "嘉兴路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 47,
    "storeName": "浦发银行漕宝支行",
    "poiId": "E44d2449ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.167746,
    "longitude": 121.430164,
    "flowRatio": 1.3253655,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区漕宝路38号一楼",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104017",
      "name": "漕河泾街道"
    },
    "unlocked": true
  },
  {
    "ranking": 48,
    "storeName": "上海浦东发展银行股份有限公司新华支行",
    "poiId": "E420bc5eff4f011ebbe73fa163e1c2c53",
    "latitude": 31.20296,
    "longitude": 121.430432,
    "flowRatio": 1.2875103,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区番禺路483号一楼浦发银行",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105004",
      "name": "新华路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 49,
    "storeName": "上海浦东发展银行股份有限公司长风支行",
    "poiId": "E427e9fbff4f011ebbe73fa163e1c2c53",
    "latitude": 31.232059,
    "longitude": 121.39471,
    "flowRatio": 1.2820959,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区金沙江路966号一楼西侧",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107014",
      "name": "长风新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 50,
    "storeName": "浦发上海文化广场支行",
    "poiId": "E42b8ff09f4f011ebbe73fa163e1c2c53",
    "latitude": 31.21507,
    "longitude": 121.462226,
    "flowRatio": 1.2708577,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦（卢湾）区茂名南路165号乙室",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101023",
      "name": "瑞金二路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 51,
    "storeName": "浦发银行虹桥支行",
    "poiId": "E44fcd554f4f011ebbe73fa163e1c2c53",
    "latitude": 31.204787,
    "longitude": 121.405601,
    "flowRatio": 1.2693561,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区兴义路8号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105009",
      "name": "虹桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 52,
    "storeName": "浦发银行飞虹路支行（原北外滩支行）",
    "poiId": "E45545062f4f011ebbe73fa163e1c2c53",
    "latitude": 31.262941,
    "longitude": 121.503178,
    "flowRatio": 1.2492455,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市虹口区飞虹路271、281号",
    "district": {
      "id": "310109",
      "name": "虹口区"
    },
    "township": {
      "id": "310109014",
      "name": "嘉兴路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 53,
    "storeName": "浦发银行柳州路支行",
    "poiId": "E448fe1b5f4f011ebbe73fa163e1c2c53",
    "latitude": 31.172629,
    "longitude": 121.423676,
    "flowRatio": 1.2308867,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区柳州路523号-3",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104011",
      "name": "田林街道"
    },
    "unlocked": true
  },
  {
    "ranking": 54,
    "storeName": "上海浦东发展银行金沙江路支行",
    "poiId": "E4291b75ff4f011ebbe73fa163e1c2c53",
    "latitude": 31.237487,
    "longitude": 121.368118,
    "flowRatio": 1.1816795,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区金沙江路2218号",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107102",
      "name": "长征镇"
    },
    "unlocked": true
  },
  {
    "ranking": 55,
    "storeName": "浦发银行江宁支行",
    "poiId": "E449e475af4f011ebbe73fa163e1c2c53",
    "latitude": 31.235506,
    "longitude": 121.45115,
    "flowRatio": 1.1771295,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区江宁路507号",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106006",
      "name": "江宁路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 56,
    "storeName": "上海浦东发展银行股份有限公司平型关路支行",
    "poiId": "E41fc2984f4f011ebbe73fa163e1c2c53",
    "latitude": 31.273682,
    "longitude": 121.461879,
    "flowRatio": 1.1688714,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区延长路50号2幢一层105室、二层201室",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106019",
      "name": "大宁路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 57,
    "storeName": "上海浦东发展银行股份有限公司上海共康社区支行",
    "poiId": "E41c08cfcf4f011ebbe73fa163e1c2c53",
    "latitude": 31.321084,
    "longitude": 121.437577,
    "flowRatio": 1.167097,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区共康路433号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113112",
      "name": "庙行镇"
    },
    "unlocked": true
  },
  {
    "ranking": 58,
    "storeName": "浦发上海宜川支行",
    "poiId": "E42b5f7a7f4f011ebbe73fa163e1c2c53",
    "latitude": 31.26269,
    "longitude": 121.437385,
    "flowRatio": 1.1594759,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区宜川路316号(原址:宜川路328号,09年12月28日迁入)",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107020",
      "name": "宜川路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 59,
    "storeName": "上海浦东发展银行上海德州社区支行",
    "poiId": "E41a93afff4f011ebbe73fa163e1c2c53",
    "latitude": 31.172555,
    "longitude": 121.491718,
    "flowRatio": 1.1570417,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区德州路392号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115009",
      "name": "上钢新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 60,
    "storeName": "浦发银行虹桥河滨支行",
    "poiId": "E44fd583bf4f011ebbe73fa163e1c2c53",
    "latitude": 31.218114,
    "longitude": 121.405339,
    "flowRatio": 1.155381,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区长宁路1786号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105005",
      "name": "周家桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 61,
    "storeName": "浦发银行临沂社区支行",
    "poiId": "E43b5c10df4f011ebbe73fa163e1c2c53",
    "latitude": 31.194799,
    "longitude": 121.512893,
    "flowRatio": 1.1530378,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区临沂路141号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115010",
      "name": "南码头路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 62,
    "storeName": "浦发银行徐汇支行",
    "poiId": "E4474b443f4f011ebbe73fa163e1c2c53",
    "latitude": 31.20221,
    "longitude": 121.44989,
    "flowRatio": 1.1508311,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区建国西路589号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104003",
      "name": "天平路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 63,
    "storeName": "浦发银行塘桥支行",
    "poiId": "E443c1a9bf4f011ebbe73fa163e1c2c53",
    "latitude": 31.21149,
    "longitude": 121.522705,
    "flowRatio": 1.1341784,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区蓝村路522-1号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115008",
      "name": "塘桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 64,
    "storeName": "浦发银行龙柏支行",
    "poiId": "E455c272ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.180051,
    "longitude": 121.364601,
    "flowRatio": 1.1272852,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区黄桦路235、237、239号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112008",
      "name": "新虹街道"
    },
    "unlocked": true
  },
  {
    "ranking": 65,
    "storeName": "浦发银行展想广场支行",
    "poiId": "E44588252f4f011ebbe73fa163e1c2c53",
    "latitude": 31.210689,
    "longitude": 121.628972,
    "flowRatio": 1.1194367,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区祖冲之路2290弄展想广场1号楼103室",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115125",
      "name": "张江镇"
    },
    "unlocked": true
  },
  {
    "ranking": 66,
    "storeName": "浦发上海曹杨支行",
    "poiId": "E42ba37bcf4f011ebbe73fa163e1c2c53",
    "latitude": 31.23894,
    "longitude": 121.40567,
    "flowRatio": 1.0899078,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区兰溪路125号",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107005",
      "name": "曹杨新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 67,
    "storeName": "浦发上海豫园支行",
    "poiId": "E42c67064f4f011ebbe73fa163e1c2c53",
    "latitude": 31.224184,
    "longitude": 121.488349,
    "flowRatio": 1.0894983,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区河南南路366号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101018",
      "name": "豫园街道"
    },
    "unlocked": true
  },
  {
    "ranking": 68,
    "storeName": "上海浦东发展银行股份有限公司第一营业部",
    "poiId": "E42520285f4f011ebbe73fa163e1c2c53",
    "latitude": 31.236002,
    "longitude": 121.489937,
    "flowRatio": 1.0585362,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市中山东一路12号",
    "district": {
      "id": "310101",
      "name": "黄浦区"
    },
    "township": {
      "id": "310101013",
      "name": "外滩街道"
    },
    "unlocked": true
  },
  {
    "ranking": 69,
    "storeName": "浦发上海绿洲雅宾利社区支行",
    "poiId": "E42c2a22bf4f011ebbe73fa163e1c2c53",
    "latitude": 31.258467,
    "longitude": 121.473556,
    "flowRatio": 1.058013,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区宝昌路387号",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106017",
      "name": "宝山路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 70,
    "storeName": "上海浦东发展银行股份有限公司延长中路支行（原:中华新路支行）",
    "poiId": "E41fd6561f4f011ebbe73fa163e1c2c53",
    "latitude": 31.266477,
    "longitude": 121.444664,
    "flowRatio": 1.0560793,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区沪太路785号19幢底层101-2室（原址：上海市静安区中华新路496号）",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106018",
      "name": "共和新路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 71,
    "storeName": "浦发上海大宁支行（原四川北路支行）",
    "poiId": "E42b4312af4f011ebbe73fa163e1c2c53",
    "latitude": 31.279804,
    "longitude": 121.455056,
    "flowRatio": 1.0501871,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区广中路895号(原址:上海市虹口区四川北路1501号)",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106019",
      "name": "大宁路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 72,
    "storeName": "浦发上海迎春路社区支行",
    "poiId": "E42c713fef4f011ebbe73fa163e1c2c53",
    "latitude": 31.223567,
    "longitude": 121.553807,
    "flowRatio": 1.0356501,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区迎春路786号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115016",
      "name": "花木街道"
    },
    "unlocked": true
  },
  {
    "ranking": 73,
    "storeName": "浦发上海崮山路社区支行",
    "poiId": "E42b730d0f4f011ebbe73fa163e1c2c53",
    "latitude": 31.245251,
    "longitude": 121.553847,
    "flowRatio": 1.0264593,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区崮山路306号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115013",
      "name": "洋泾街道"
    },
    "unlocked": true
  },
  {
    "ranking": 74,
    "storeName": "浦发上海馥邦社区支行",
    "poiId": "E42cca271f4f011ebbe73fa163e1c2c53",
    "latitude": 31.219999,
    "longitude": 121.368055,
    "flowRatio": 1.0225692,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区北渔路38号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105011",
      "name": "北新泾街道"
    },
    "unlocked": true
  },
  {
    "ranking": 75,
    "storeName": "上海浦东发展银行上南路支行",
    "poiId": "E41a8a1a9f4f011ebbe73fa163e1c2c53",
    "latitude": 31.178518,
    "longitude": 121.496,
    "flowRatio": 1.0009571,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区浦东南路5021-5029号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115007",
      "name": "周家渡街道"
    },
    "unlocked": true
  },
  {
    "ranking": 76,
    "storeName": "上海浦东发展银行股份有限公司牡丹江路支行",
    "poiId": "E4240ac09f4f011ebbe73fa163e1c2c53",
    "latitude": 31.403874,
    "longitude": 121.482299,
    "flowRatio": 0.9920165,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区牡丹江路1718号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113003",
      "name": "友谊路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 77,
    "storeName": "上海浦东发展银行股份有限公司上海中远两湾城社区支行",
    "poiId": "E41bf956ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.251273,
    "longitude": 121.44327,
    "flowRatio": 0.9908563,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区中潭路51号101室",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107020",
      "name": "宜川路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 78,
    "storeName": "浦发上海许昌路支行(原五角场支行)",
    "poiId": "E42c5d485f4f011ebbe73fa163e1c2c53",
    "latitude": 31.268134,
    "longitude": 121.516051,
    "flowRatio": 0.98992354,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市杨浦区许昌路1296号",
    "district": {
      "id": "310110",
      "name": "杨浦区"
    },
    "township": {
      "id": "310110008",
      "name": "江浦路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 79,
    "storeName": "浦发银行古美支行",
    "poiId": "E4426b786f4f011ebbe73fa163e1c2c53",
    "latitude": 31.133165,
    "longitude": 121.394824,
    "flowRatio": 0.9756596,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区古美西路385号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112108",
      "name": "梅陇镇"
    },
    "unlocked": true
  },
  {
    "ranking": 80,
    "storeName": "浦发上海仙霞路支行",
    "poiId": "E42a7e5fcf4f011ebbe73fa163e1c2c53",
    "latitude": 31.205948,
    "longitude": 121.391706,
    "flowRatio": 0.9714737,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区仙霞路475号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105008",
      "name": "仙霞新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 81,
    "storeName": "上海浦东发展银行股份有限公司长江西路支行",
    "poiId": "E427b1cb4f4f011ebbe73fa163e1c2c53",
    "latitude": 31.33266,
    "longitude": 121.444123,
    "flowRatio": 0.96264684,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区长江西路1929-1939号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113008",
      "name": "张庙街道"
    },
    "unlocked": true
  },
  {
    "ranking": 82,
    "storeName": "浦发银行中原支行",
    "poiId": "E43ae72ddf4f011ebbe73fa163e1c2c53",
    "latitude": 31.318039,
    "longitude": 121.533539,
    "flowRatio": 0.94899714,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市杨浦区国和路1075-1077号(07年6月10日迁入新址,原址:中原路190号)",
    "district": {
      "id": "310110",
      "name": "杨浦区"
    },
    "township": {
      "id": "310110016",
      "name": "殷行街道"
    },
    "unlocked": true
  },
  {
    "ranking": 83,
    "storeName": "浦发上海长白社区银行",
    "poiId": "E42caaef5f4f011ebbe73fa163e1c2c53",
    "latitude": 31.29229,
    "longitude": 121.54162,
    "flowRatio": 0.93960154,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市杨浦区靖宇东路120号",
    "district": {
      "id": "310110",
      "name": "杨浦区"
    },
    "township": {
      "id": "310110015",
      "name": "延吉新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 84,
    "storeName": "浦发上海联洋支行",
    "poiId": "E42c33fbff4f011ebbe73fa163e1c2c53",
    "latitude": 31.227245,
    "longitude": 121.558825,
    "flowRatio": 0.93473315,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区芳甸路195号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115016",
      "name": "花木街道"
    },
    "unlocked": true
  },
  {
    "ranking": 85,
    "storeName": "浦发上海凉城路支行",
    "poiId": "E42a93563f4f011ebbe73fa163e1c2c53",
    "latitude": 31.289049,
    "longitude": 121.470487,
    "flowRatio": 0.92654335,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市虹口区凉城路461号(2011年8月29日迁入)(原址:凉城路485号)",
    "district": {
      "id": "310109",
      "name": "虹口区"
    },
    "township": {
      "id": "310109016",
      "name": "凉城新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 86,
    "storeName": "浦发银行剑河路支行",
    "poiId": "E43ce9279f4f011ebbe73fa163e1c2c53",
    "latitude": 31.210614,
    "longitude": 121.368261,
    "flowRatio": 0.92278963,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区剑河路465号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105102",
      "name": "新泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 87,
    "storeName": "上海浦东发展银行股份有限公司上海三泉社区支行",
    "poiId": "E41befa91f4f011ebbe73fa163e1c2c53",
    "latitude": 31.308047,
    "longitude": 121.441429,
    "flowRatio": 0.91955924,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区三泉路400号101室",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106020",
      "name": "彭浦新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 88,
    "storeName": "浦发展银行期交所支行",
    "poiId": "E431ebf83f4f011ebbe73fa163e1c2c53",
    "latitude": 31.225091,
    "longitude": 121.536463,
    "flowRatio": 0.907138,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区浦电路577号平安财富大厦1楼",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115013",
      "name": "洋泾街道"
    },
    "unlocked": true
  },
  {
    "ranking": 89,
    "storeName": "浦发上海万里支行",
    "poiId": "E42a5e99ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.26823,
    "longitude": 121.41204,
    "flowRatio": 0.9048175,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区新村路1559号(15年11月30日迁入,原址新村路1511号)",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107021",
      "name": "万里街道"
    },
    "unlocked": true
  },
  {
    "ranking": 90,
    "storeName": "浦发银行泗泾支行",
    "poiId": "E44a352bef4f011ebbe73fa163e1c2c53",
    "latitude": 31.115556,
    "longitude": 121.258333,
    "flowRatio": 0.8992666,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市松江区泗泾镇泗凤路336号",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117102",
      "name": "泗泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 91,
    "storeName": "浦发银行吴宝支行",
    "poiId": "E442bb3fef4f011ebbe73fa163e1c2c53",
    "latitude": 31.157291,
    "longitude": 121.350276,
    "flowRatio": 0.89435273,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区吴宝路15号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112102",
      "name": "七宝镇"
    },
    "unlocked": true
  },
  {
    "ranking": 92,
    "storeName": "浦发银行三林支行",
    "poiId": "E43a1c52cf4f011ebbe73fa163e1c2c53",
    "latitude": 31.139411,
    "longitude": 121.513667,
    "flowRatio": 0.893602,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区上南路4511-4525号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115130",
      "name": "三林镇"
    },
    "unlocked": true
  },
  {
    "ranking": 93,
    "storeName": "浦发银行昌里支行",
    "poiId": "E4484d27bf4f011ebbe73fa163e1c2c53",
    "latitude": 31.179445,
    "longitude": 121.502756,
    "flowRatio": 0.89123607,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区齐河路211号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115007",
      "name": "周家渡街道"
    },
    "unlocked": true
  },
  {
    "ranking": 94,
    "storeName": "浦发银行上海长桥社区支行",
    "poiId": "E43a5683ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.13504,
    "longitude": 121.43877,
    "flowRatio": 0.8901668,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区罗香路93号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104010",
      "name": "长桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 95,
    "storeName": "浦发上海金杨支行",
    "poiId": "E42c84b52f4f011ebbe73fa163e1c2c53",
    "latitude": 31.252443,
    "longitude": 121.582656,
    "flowRatio": 0.8655063,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区金杨路696号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115012",
      "name": "金杨新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 96,
    "storeName": "上海浦东发展银行股份有限公司曹路支行",
    "poiId": "E4210b8bdf4f011ebbe73fa163e1c2c53",
    "latitude": 31.281399,
    "longitude": 121.676462,
    "flowRatio": 0.8639821,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区金钻路824号一层、826号一层，828弄1号楼102室、103室、401-5室",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115117",
      "name": "曹路镇"
    },
    "unlocked": true
  },
  {
    "ranking": 97,
    "storeName": "浦发银行吴中支行",
    "poiId": "E442b2caff4f011ebbe73fa163e1c2c53",
    "latitude": 31.177257,
    "longitude": 121.388559,
    "flowRatio": 0.86129767,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区莲花路2333号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112107",
      "name": "虹桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 98,
    "storeName": "上海浦东发展银行股份有限公司梅川支行",
    "poiId": "E422341e6f4f011ebbe73fa163e1c2c53",
    "latitude": 31.242027,
    "longitude": 121.383774,
    "flowRatio": 0.8491494,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区梅川路1249号B座底层13、15、16、17号(原地址:上海市普陀区真光路1288号)",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107102",
      "name": "长征镇"
    },
    "unlocked": true
  },
  {
    "ranking": 99,
    "storeName": "上海浦东发展银行股份有限公司南翔支行",
    "poiId": "E41d40130f4f011ebbe73fa163e1c2c53",
    "latitude": 31.311008,
    "longitude": 121.317356,
    "flowRatio": 0.84550947,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市嘉定区南翔镇宝翔路801号华润五彩城一楼(陈翔路、宝翔路路口)",
    "district": {
      "id": "310114",
      "name": "嘉定区"
    },
    "township": {
      "id": "310114102",
      "name": "南翔镇"
    },
    "unlocked": true
  },
  {
    "ranking": 100,
    "storeName": "浦发上海周浦支行",
    "poiId": "E42af466cf4f011ebbe73fa163e1c2c53",
    "latitude": 31.114956,
    "longitude": 121.576728,
    "flowRatio": 0.8437805,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区周浦镇年家浜路362号甲",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115132",
      "name": "周浦镇"
    },
    "unlocked": true
  },
  {
    "ranking": 101,
    "storeName": "浦发银行新松江路支行",
    "poiId": "E447d9f92f4f011ebbe73fa163e1c2c53",
    "latitude": 31.039101,
    "longitude": 121.211404,
    "flowRatio": 0.84196055,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市松江区新松江路1290号",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117003",
      "name": "方松街道"
    },
    "unlocked": true
  },
  {
    "ranking": 102,
    "storeName": "上海浦东发展银行股份有限公司彭浦支行",
    "poiId": "E4200a3f8f4f011ebbe73fa163e1c2c53",
    "latitude": 31.311017,
    "longitude": 121.458187,
    "flowRatio": 0.83722866,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市静安区临汾路408、410、412、414号",
    "district": {
      "id": "310106",
      "name": "静安区"
    },
    "township": {
      "id": "310106021",
      "name": "临汾路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 103,
    "storeName": "上海浦东发展银行金汇支行",
    "poiId": "E429124b5f4f011ebbe73fa163e1c2c53",
    "latitude": 31.182241,
    "longitude": 121.373498,
    "flowRatio": 0.8352949,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区金汇路538号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112008",
      "name": "新虹街道"
    },
    "unlocked": true
  },
  {
    "ranking": 104,
    "storeName": "浦发上海民生路支行",
    "poiId": "E42be6d7bf4f011ebbe73fa163e1c2c53",
    "latitude": 31.242526,
    "longitude": 121.534168,
    "flowRatio": 0.833384,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区浦东大道1189号（原址浦东大道1525号）",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115013",
      "name": "洋泾街道"
    },
    "unlocked": true
  },
  {
    "ranking": 105,
    "storeName": "浦发银行高境支行",
    "poiId": "E45554e63f4f011ebbe73fa163e1c2c53",
    "latitude": 31.320973,
    "longitude": 121.479471,
    "flowRatio": 0.83281523,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区殷高西路231-253号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113111",
      "name": "高境镇"
    },
    "unlocked": true
  },
  {
    "ranking": 106,
    "storeName": "上海浦东发展银行股份有限公司紫薇路支行",
    "poiId": "E4253312cf4f011ebbe73fa163e1c2c53",
    "latitude": 31.205278,
    "longitude": 121.613611,
    "flowRatio": 0.8315867,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区张江路745号一层、 749号一层、753号一层",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115125",
      "name": "张江镇"
    },
    "unlocked": true
  },
  {
    "ranking": 107,
    "storeName": "浦发上海真如支行",
    "poiId": "E42c16a56f4f011ebbe73fa163e1c2c53",
    "latitude": 31.250278,
    "longitude": 121.391389,
    "flowRatio": 0.8030361,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市普陀区北石路388号",
    "district": {
      "id": "310107",
      "name": "普陀区"
    },
    "township": {
      "id": "310107022",
      "name": "真如镇街道"
    },
    "unlocked": true
  },
  {
    "ranking": 108,
    "storeName": "浦发上海解放中路支行",
    "poiId": "E42c5246ef4f011ebbe73fa163e1c2c53",
    "latitude": 30.915477,
    "longitude": 121.459198,
    "flowRatio": 0.79573345,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市奉贤区南桥镇解放中路352号",
    "district": {
      "id": "310120",
      "name": "奉贤区"
    },
    "township": {
      "id": "310120101",
      "name": "南桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 109,
    "storeName": "浦发上海龙茗路支行",
    "poiId": "E42cd7841f4f011ebbe73fa163e1c2c53",
    "latitude": 31.156794,
    "longitude": 121.381743,
    "flowRatio": 0.7738939,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区龙茗路2131号（龙茗路漕宝路口）",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112006",
      "name": "古美街道"
    },
    "unlocked": true
  },
  {
    "ranking": 110,
    "storeName": "浦发上海博兴路社区支行",
    "poiId": "E42ad7ecbf4f011ebbe73fa163e1c2c53",
    "latitude": 31.27152,
    "longitude": 121.59176,
    "flowRatio": 0.7716872,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区博兴路899号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115014",
      "name": "浦兴路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 111,
    "storeName": "上海浦东发展银行虹桥枢纽支行",
    "poiId": "E42892186f4f011ebbe73fa163e1c2c53",
    "latitude": 31.195401,
    "longitude": 121.327809,
    "flowRatio": 0.76868427,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海虹桥机场西航站楼12.15米层出发大厅",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112008",
      "name": "新虹街道"
    },
    "unlocked": true
  },
  {
    "ranking": 112,
    "storeName": "浦发银行浦江支行",
    "poiId": "E44aaf9a0f4f011ebbe73fa163e1c2c53",
    "latitude": 31.082707,
    "longitude": 121.504627,
    "flowRatio": 0.7636794,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区江月路1850弄1-6号D栋1F层D04（浦江城市生活广场）",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112009",
      "name": "浦锦街道"
    },
    "unlocked": true
  },
  {
    "ranking": 113,
    "storeName": "浦发上海江海支行",
    "poiId": "E42bfa144f4f011ebbe73fa163e1c2c53",
    "latitude": 30.90548,
    "longitude": 121.459006,
    "flowRatio": 0.7478684,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市奉贤区南桥镇江海路222号",
    "district": {
      "id": "310120",
      "name": "奉贤区"
    },
    "township": {
      "id": "310120101",
      "name": "南桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 114,
    "storeName": "上海浦东发展银行古北支行（原淮海西路支行）",
    "poiId": "E41adf18ff4f011ebbe73fa163e1c2c53",
    "latitude": 31.194527,
    "longitude": 121.395591,
    "flowRatio": 0.7375401,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市古北新区黄金城道881号",
    "district": {
      "id": "310105",
      "name": "长宁区"
    },
    "township": {
      "id": "310105009",
      "name": "虹桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 115,
    "storeName": "浦发银行奉贤支行",
    "poiId": "E444c9d20f4f011ebbe73fa163e1c2c53",
    "latitude": 30.917439,
    "longitude": 121.488585,
    "flowRatio": 0.7223662,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市奉贤区南奉公路7557号庙泾新村51号",
    "district": {
      "id": "310120",
      "name": "奉贤区"
    },
    "township": {
      "id": "310120101",
      "name": "南桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 116,
    "storeName": "浦发上海华高苑支行",
    "poiId": "E42ab01eff4f011ebbe73fa163e1c2c53",
    "latitude": 31.282346,
    "longitude": 121.609597,
    "flowRatio": 0.71990925,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区金高路1056号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115121",
      "name": "高行镇"
    },
    "unlocked": true
  },
  {
    "ranking": 117,
    "storeName": "浦发银行川沙支行（原名新川支行）",
    "poiId": "E445aa30ff4f011ebbe73fa163e1c2c53",
    "latitude": 31.187986,
    "longitude": 121.691528,
    "flowRatio": 0.7043031,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区川沙镇妙境路648--652号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115103",
      "name": "川沙新镇"
    },
    "unlocked": true
  },
  {
    "ranking": 118,
    "storeName": "浦发银行锦绣支行",
    "poiId": "E452e4205f4f011ebbe73fa163e1c2c53",
    "latitude": 31.179083,
    "longitude": 121.536725,
    "flowRatio": 0.70384806,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区成山路2069号一楼",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115105",
      "name": "北蔡镇"
    },
    "unlocked": true
  },
  {
    "ranking": 119,
    "storeName": "上海浦东发展银行龙阳支行",
    "poiId": "E4294b1b0f4f011ebbe73fa163e1c2c53",
    "latitude": 31.209156,
    "longitude": 121.554612,
    "flowRatio": 0.6940203,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区梅花路800号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115016",
      "name": "花木街道"
    },
    "unlocked": true
  },
  {
    "ranking": 120,
    "storeName": "浦发银行大华支行",
    "poiId": "E443d2026f4f011ebbe73fa163e1c2c53",
    "latitude": 31.276451,
    "longitude": 121.409124,
    "flowRatio": 0.6868769,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区武威东路90号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113102",
      "name": "大场镇"
    },
    "unlocked": true
  },
  {
    "ranking": 121,
    "storeName": "浦发银行上海育秀社区支行",
    "poiId": "E43a38e21f4f011ebbe73fa163e1c2c53",
    "latitude": 30.909226,
    "longitude": 121.467642,
    "flowRatio": 0.67734486,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市奉贤区南桥镇育秀路159号",
    "district": {
      "id": "310120",
      "name": "奉贤区"
    },
    "township": {
      "id": "310120101",
      "name": "南桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 122,
    "storeName": "浦发银行黄金钫支行",
    "poiId": "E4559001df4f011ebbe73fa163e1c2c53",
    "latitude": 31.254742,
    "longitude": 121.573832,
    "flowRatio": 0.6724765,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区枣庄路398号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115012",
      "name": "金杨新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 123,
    "storeName": "浦发银行上海康健社区支行",
    "poiId": "E43a2f598f4f011ebbe73fa163e1c2c53",
    "latitude": 31.15721,
    "longitude": 121.42234,
    "flowRatio": 0.669792,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市徐汇区桂林东街188号",
    "district": {
      "id": "310104",
      "name": "徐汇区"
    },
    "township": {
      "id": "310104013",
      "name": "康健新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 124,
    "storeName": "浦发银行江川支行",
    "poiId": "E449ec62af4f011ebbe73fa163e1c2c53",
    "latitude": 31.004963,
    "longitude": 121.421498,
    "flowRatio": 0.66440034,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区江川路204号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112001",
      "name": "江川路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 125,
    "storeName": "上海浦东发展银行股份有限公司北蔡支行",
    "poiId": "E41d3680ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.185141,
    "longitude": 121.545598,
    "flowRatio": 0.6554598,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区北蔡镇莲园路79-95号,原址为莲园路324号2006年4月23日迁入",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115105",
      "name": "北蔡镇"
    },
    "unlocked": true
  },
  {
    "ranking": 126,
    "storeName": "浦发银行青浦支行",
    "poiId": "E4553cec5f4f011ebbe73fa163e1c2c53",
    "latitude": 31.146243,
    "longitude": 121.111831,
    "flowRatio": 0.64604145,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市青浦区城中东路699号",
    "district": {
      "id": "310118",
      "name": "青浦区"
    },
    "township": {
      "id": "310118002",
      "name": "盈浦街道"
    },
    "unlocked": true
  },
  {
    "ranking": 127,
    "storeName": "浦发银行万源城支行",
    "poiId": "E439ffb80f4f011ebbe73fa163e1c2c53",
    "latitude": 31.148549,
    "longitude": 121.394548,
    "flowRatio": 0.645814,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区古龙路540号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112006",
      "name": "古美街道"
    },
    "unlocked": true
  },
  {
    "ranking": 128,
    "storeName": "浦发银行德平支行",
    "poiId": "E4475e1d5f4f011ebbe73fa163e1c2c53",
    "latitude": 31.255078,
    "longitude": 121.556285,
    "flowRatio": 0.6454272,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区浦东大道2372-2376号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115012",
      "name": "金杨新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 129,
    "storeName": "浦发银行春申路支行",
    "poiId": "E44856bd3f4f011ebbe73fa163e1c2c53",
    "latitude": 31.106231,
    "longitude": 121.401178,
    "flowRatio": 0.6426518,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区春申路2750号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112101",
      "name": "莘庄镇"
    },
    "unlocked": true
  },
  {
    "ranking": 130,
    "storeName": "浦发银行杨思支行（原浦东大道支行，嘉兴大厦支行）",
    "poiId": "E448ad1aff4f011ebbe73fa163e1c2c53",
    "latitude": 31.156911,
    "longitude": 121.49928,
    "flowRatio": 0.6401721,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区海阳路719号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115130",
      "name": "三林镇"
    },
    "unlocked": true
  },
  {
    "ranking": 131,
    "storeName": "上海浦东发展银行股份有限公司张江科技支行",
    "poiId": "E42001ad8f4f011ebbe73fa163e1c2c53",
    "latitude": 31.202934,
    "longitude": 121.605541,
    "flowRatio": 0.63095856,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区张江高科技园区博云路56号D座",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115125",
      "name": "张江镇"
    },
    "unlocked": true
  },
  {
    "ranking": 132,
    "storeName": "浦发上海唐镇支行",
    "poiId": "E42aff29ff4f011ebbe73fa163e1c2c53",
    "latitude": 31.20818,
    "longitude": 121.652381,
    "flowRatio": 0.607117,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区唐镇唐安路780号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115114",
      "name": "唐镇"
    },
    "unlocked": true
  },
  {
    "ranking": 133,
    "storeName": "浦发银行松江支行",
    "poiId": "E448de0daf4f011ebbe73fa163e1c2c53",
    "latitude": 31.013753,
    "longitude": 121.225392,
    "flowRatio": 0.594764,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市松江区乐都路388号",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117001",
      "name": "岳阳街道"
    },
    "unlocked": true
  },
  {
    "ranking": 134,
    "storeName": "上海浦东发展银行股份有限公司月浦支行",
    "poiId": "E42114e25f4f011ebbe73fa163e1c2c53",
    "latitude": 31.417074,
    "longitude": 121.42522,
    "flowRatio": 0.5921706,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市月浦镇龙镇路95号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113104",
      "name": "月浦镇"
    },
    "unlocked": true
  },
  {
    "ranking": 135,
    "storeName": "上海浦东发展银行东绣路支行",
    "poiId": "E41aab24ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.206585,
    "longitude": 121.536757,
    "flowRatio": 0.5912151,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区东绣路559号二层、563号一层、二层",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115016",
      "name": "花木街道"
    },
    "unlocked": true
  },
  {
    "ranking": 136,
    "storeName": "浦发上海市府浦东行政中心支行",
    "poiId": "E42b7c775f4f011ebbe73fa163e1c2c53",
    "latitude": 31.196128,
    "longitude": 121.50649,
    "flowRatio": 0.582502,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区世博村路300号5号楼底楼",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115010",
      "name": "南码头路街道"
    },
    "unlocked": true
  },
  {
    "ranking": 137,
    "storeName": "浦发银行徐泾支行",
    "poiId": "E44754c26f4f011ebbe73fa163e1c2c53",
    "latitude": 31.171404,
    "longitude": 121.269424,
    "flowRatio": 0.57974935,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市青浦区徐泾镇盈港东路1928号(近明珠路)原址:2011年8月8日迁徐泾镇京华路77号,前址:青浦徐泾中路1230",
    "district": {
      "id": "310118",
      "name": "青浦区"
    },
    "township": {
      "id": "310118106",
      "name": "徐泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 138,
    "storeName": "浦发上海潼港社区支行",
    "poiId": "E42c03837f4f011ebbe73fa163e1c2c53",
    "latitude": 31.347324,
    "longitude": 121.574498,
    "flowRatio": 0.570877,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区张杨北路5688弄63号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115104",
      "name": "高桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 139,
    "storeName": "浦发上海香山社区支行",
    "poiId": "E42cc09bff4f011ebbe73fa163e1c2c53",
    "latitude": 31.245278,
    "longitude": 121.568889,
    "flowRatio": 0.5506754,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区灵山路1772号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115012",
      "name": "金杨新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 140,
    "storeName": "浦发银行九亭支行",
    "poiId": "E43b7e2faf4f011ebbe73fa163e1c2c53",
    "latitude": 31.129434,
    "longitude": 121.330614,
    "flowRatio": 0.54687625,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市松江区九亭镇九亭大街455号-457号",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117107",
      "name": "九亭镇"
    },
    "unlocked": true
  },
  {
    "ranking": 141,
    "storeName": "浦发银行上海北门路支行",
    "poiId": "E43a25b07f4f011ebbe73fa163e1c2c53",
    "latitude": 31.627051,
    "longitude": 121.395437,
    "flowRatio": 0.5360019,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市崇明区城桥镇北门路228号",
    "district": {
      "id": "310151",
      "name": "崇明区"
    },
    "township": {
      "id": "310151101",
      "name": "城桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 142,
    "storeName": "浦发银行新桥支行",
    "poiId": "E447e33b3f4f011ebbe73fa163e1c2c53",
    "latitude": 31.061983,
    "longitude": 121.316718,
    "flowRatio": 0.5319298,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市新桥镇新南街286、288号",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117105",
      "name": "新桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 143,
    "storeName": "浦发银行荣乐中路支行",
    "poiId": "E44f9bcc4f4f011ebbe73fa163e1c2c53",
    "latitude": 31.018192,
    "longitude": 121.239751,
    "flowRatio": 0.52851737,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市松江区荣乐中路12弄108、110、111号1楼",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117001",
      "name": "岳阳街道"
    },
    "unlocked": true
  },
  {
    "ranking": 144,
    "storeName": "浦发上海金山支行营业部",
    "poiId": "E42c7ae9df4f011ebbe73fa163e1c2c53",
    "latitude": 30.72993,
    "longitude": 121.349798,
    "flowRatio": 0.50615454,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市金山区卫清西路153号",
    "district": {
      "id": "310116",
      "name": "金山区"
    },
    "township": {
      "id": "310116113",
      "name": "山阳镇"
    },
    "unlocked": true
  },
  {
    "ranking": 145,
    "storeName": "浦发银行南桥支行",
    "poiId": "E44180229f4f011ebbe73fa163e1c2c53",
    "latitude": 30.925613,
    "longitude": 121.466337,
    "flowRatio": 0.49484804,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市奉贤区运河北路258、268、272号(原址:南桥镇环城东路1446号,08年10月18日迁入)",
    "district": {
      "id": "310120",
      "name": "奉贤区"
    },
    "township": {
      "id": "310120002",
      "name": "奉浦街道"
    },
    "unlocked": true
  },
  {
    "ranking": 146,
    "storeName": "上海浦东发展银行股份有限公司江桥支行",
    "poiId": "E4229b450f4f011ebbe73fa163e1c2c53",
    "latitude": 31.261712,
    "longitude": 121.347519,
    "flowRatio": 0.4757384,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市嘉定区嘉怡路158号",
    "district": {
      "id": "310114",
      "name": "嘉定区"
    },
    "township": {
      "id": "310114118",
      "name": "江桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 147,
    "storeName": "上海浦东发展银行股份有限公司安亭支行",
    "poiId": "E41fa88c7f4f011ebbe73fa163e1c2c53",
    "latitude": 31.298954,
    "longitude": 121.153755,
    "flowRatio": 0.45512733,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市嘉定区安亭镇新源路879号",
    "district": {
      "id": "310114",
      "name": "嘉定区"
    },
    "township": {
      "id": "310114103",
      "name": "安亭镇"
    },
    "unlocked": true
  },
  {
    "ranking": 148,
    "storeName": "浦发上海嘉定支行营业部",
    "poiId": "E42b08898f4f011ebbe73fa163e1c2c53",
    "latitude": 31.385489,
    "longitude": 121.252489,
    "flowRatio": 0.4443213,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市嘉定区博乐路199号",
    "district": {
      "id": "310114",
      "name": "嘉定区"
    },
    "township": {
      "id": "310114004",
      "name": "嘉定镇街道"
    },
    "unlocked": true
  },
  {
    "ranking": 149,
    "storeName": "上海浦东发展银行股份有限公司顾村支行",
    "poiId": "E42859576f4f011ebbe73fa163e1c2c53",
    "latitude": 31.358475,
    "longitude": 121.410412,
    "flowRatio": 0.44150037,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区顾村镇顾北东路377号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113109",
      "name": "顾村镇"
    },
    "unlocked": true
  },
  {
    "ranking": 150,
    "storeName": "浦发银行锦秋路支行",
    "poiId": "E452dbc03f4f011ebbe73fa163e1c2c53",
    "latitude": 31.321667,
    "longitude": 121.376667,
    "flowRatio": 0.43176356,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区华秋路58弄15、16号",
    "district": {
      "id": "310113",
      "name": "宝山区"
    },
    "township": {
      "id": "310113102",
      "name": "大场镇"
    },
    "unlocked": true
  },
  {
    "ranking": 151,
    "storeName": "浦发银行虹梅路支行",
    "poiId": "E44fdd443f4f011ebbe73fa163e1c2c53",
    "latitude": 31.186764,
    "longitude": 121.388069,
    "flowRatio": 0.42593968,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区虹梅路3211号102、103室",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112107",
      "name": "虹桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 152,
    "storeName": "浦发银行科技馆支行",
    "poiId": "E44e8b25cf4f011ebbe73fa163e1c2c53",
    "latitude": 31.1312,
    "longitude": 121.3211,
    "flowRatio": 0.42318696,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区浦东世纪大道2000号",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117107",
      "name": "九亭镇"
    },
    "unlocked": true
  },
  {
    "ranking": 153,
    "storeName": "浦发上海南汇支行营业部",
    "poiId": "E42accd3ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.048809,
    "longitude": 121.75565,
    "flowRatio": 0.37739214,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区（南汇区）惠南镇人民东路3388号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115131",
      "name": "惠南镇"
    },
    "unlocked": true
  },
  {
    "ranking": 154,
    "storeName": "浦发上海朱泾支行",
    "poiId": "E42bacf61f4f011ebbe73fa163e1c2c53",
    "latitude": 30.902723,
    "longitude": 121.16408,
    "flowRatio": 0.35416487,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市金山区朱泾镇秀州街728号",
    "district": {
      "id": "310116",
      "name": "金山区"
    },
    "township": {
      "id": "310116101",
      "name": "朱泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 155,
    "storeName": "浦发银行汇金支行",
    "poiId": "E449dc908f4f011ebbe73fa163e1c2c53",
    "latitude": 31.164166,
    "longitude": 121.146944,
    "flowRatio": 0.32857162,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市青浦区赵巷镇秀源路596、598、600号",
    "district": {
      "id": "310118",
      "name": "青浦区"
    },
    "township": {
      "id": "310118003",
      "name": "香花桥街道"
    },
    "unlocked": true
  },
  {
    "ranking": 156,
    "storeName": "浦发银行华新支行",
    "poiId": "E440d6593f4f011ebbe73fa163e1c2c53",
    "latitude": 31.238408,
    "longitude": 121.231321,
    "flowRatio": 0.32490894,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市青浦区华新镇新府中路1672、1674、1676号1-2层",
    "district": {
      "id": "310118",
      "name": "青浦区"
    },
    "township": {
      "id": "310118107",
      "name": "华新镇"
    },
    "unlocked": true
  },
  {
    "ranking": 157,
    "storeName": "上海浦东发展银行股份有限公司上海堡镇社区支行",
    "poiId": "E41c1295ff4f011ebbe73fa163e1c2c53",
    "latitude": 31.541741,
    "longitude": 121.62237,
    "flowRatio": 0.3224975,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市崇明区堡镇中路365号",
    "district": {
      "id": "310151",
      "name": "崇明区"
    },
    "township": {
      "id": "310151102",
      "name": "堡镇"
    },
    "unlocked": true
  },
  {
    "ranking": 158,
    "storeName": "上海浦东发展银行股份有限公司国际机场支行",
    "poiId": "E41e1161af4f011ebbe73fa163e1c2c53",
    "latitude": 31.149835,
    "longitude": 121.802296,
    "flowRatio": 0.31869832,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市迎宾大道6000-8000号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115139",
      "name": "祝桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 159,
    "storeName": "浦发银行名都新城社区支行",
    "poiId": "E442a946cf4f011ebbe73fa163e1c2c53",
    "latitude": 31.114886,
    "longitude": 121.396358,
    "flowRatio": 0.31644613,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市闵行区莘朱路389号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112108",
      "name": "梅陇镇"
    },
    "unlocked": true
  },
  {
    "ranking": 160,
    "storeName": "浦发上海崇明支行",
    "poiId": "E42b695caf4f011ebbe73fa163e1c2c53",
    "latitude": 31.625629,
    "longitude": 121.427752,
    "flowRatio": 0.29758674,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市崇明区城桥镇翠竹路1588弄1号",
    "district": {
      "id": "310151",
      "name": "崇明区"
    },
    "township": {
      "id": "310151101",
      "name": "城桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 161,
    "storeName": "浦发上海长兴支行",
    "poiId": "E42c97808f4f011ebbe73fa163e1c2c53",
    "latitude": 31.389229,
    "longitude": 121.692037,
    "flowRatio": 0.27231202,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市崇明区长兴镇凤滨路38弄2号",
    "district": {
      "id": "310151",
      "name": "崇明区"
    },
    "township": {
      "id": "310151116",
      "name": "长兴镇"
    },
    "unlocked": true
  },
  {
    "ranking": 162,
    "storeName": "浦发上海瑞建路支行",
    "poiId": "E42c0d1c3f4f011ebbe73fa163e1c2c53",
    "latitude": 31.10022,
    "longitude": 121.59889,
    "flowRatio": 0.23966642,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区周浦镇周泰路61-69号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115132",
      "name": "周浦镇"
    },
    "unlocked": true
  },
  {
    "ranking": 163,
    "storeName": "上海浦东发展银行股份有限公司金桥支行",
    "poiId": "E426e2b78f4f011ebbe73fa163e1c2c53",
    "latitude": 31.251771,
    "longitude": 121.614371,
    "flowRatio": 0.23466152,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区金港路509号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115120",
      "name": "金桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 164,
    "storeName": "上海江湾镇社区支行",
    "poiId": "E41a74971f4f011ebbe73fa163e1c2c53",
    "latitude": 31.1815,
    "longitude": 121.2835,
    "flowRatio": 0.23290981,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市虹口区新市北路1380号",
    "district": {
      "id": "310118",
      "name": "青浦区"
    },
    "township": {
      "id": "310118106",
      "name": "徐泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 165,
    "storeName": "浦发上海外高桥支行营业部",
    "poiId": "E42b37a0ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.314227,
    "longitude": 121.605585,
    "flowRatio": 0.23193158,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区外高桥保税区加枫路18号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115123",
      "name": "高东镇"
    },
    "unlocked": true
  },
  {
    "ranking": 166,
    "storeName": "上海浦东发展银行股份有限公司科苑路支行",
    "poiId": "E42516b10f4f011ebbe73fa163e1c2c53",
    "latitude": 31.216205,
    "longitude": 121.594666,
    "flowRatio": 0.21277647,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区科苑路151号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115125",
      "name": "张江镇"
    },
    "unlocked": true
  },
  {
    "ranking": 167,
    "storeName": "浦发银行商飞大厦支行",
    "poiId": "E44394fd6f4f011ebbe73fa163e1c2c53",
    "latitude": 31.185498,
    "longitude": 121.479978,
    "flowRatio": 0.19214264,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区世博大道1919号B座101室",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115009",
      "name": "上钢新村街道"
    },
    "unlocked": true
  },
  {
    "ranking": 168,
    "storeName": "浦发上海枫泾支行",
    "poiId": "E42bc9ecef4f011ebbe73fa163e1c2c53",
    "latitude": 30.895365,
    "longitude": 121.015796,
    "flowRatio": 0.1810181,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市金山区枫泾镇泾波路344--350号",
    "district": {
      "id": "310116",
      "name": "金山区"
    },
    "township": {
      "id": "310116102",
      "name": "枫泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 169,
    "storeName": "浦发银行上海航头支行",
    "poiId": "E43a4ce7df4f011ebbe73fa163e1c2c53",
    "latitude": 31.037222,
    "longitude": 121.592222,
    "flowRatio": 0.15560687,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区沪南公路5588号A108-109室",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115137",
      "name": "航头镇"
    },
    "unlocked": true
  },
  {
    "ranking": 170,
    "storeName": "浦发上海杨高北路支行",
    "poiId": "E42bc083cf4f011ebbe73fa163e1c2c53",
    "latitude": 31.341302,
    "longitude": 121.595157,
    "flowRatio": 0.1335853,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区外高桥保税区日京路79号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115123",
      "name": "高东镇"
    },
    "unlocked": true
  },
  {
    "ranking": 171,
    "storeName": "上海分行博园社区支行",
    "poiId": "E41a6a803f4f011ebbe73fa163e1c2c53",
    "latitude": 31.156171,
    "longitude": 121.540859,
    "flowRatio": 0.11704639,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "御桥路231号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115136",
      "name": "康桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 172,
    "storeName": "浦发上海锦江社区支行",
    "poiId": "E42c8e2edf4f011ebbe73fa163e1c2c53",
    "latitude": 31.1321,
    "longitude": 121.2718,
    "flowRatio": 0.104147404,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区长乐路400号110室",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117102",
      "name": "泗泾镇"
    },
    "unlocked": true
  },
  {
    "ranking": 173,
    "storeName": "浦发银行上海自贸试验区新片区分行",
    "poiId": "E43a43659f4f011ebbe73fa163e1c2c53",
    "latitude": 30.895262,
    "longitude": 121.92653,
    "flowRatio": 0.08760849,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区南汇新城区环湖西一路333号107-108室",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115145",
      "name": "南汇新城镇"
    },
    "unlocked": true
  },
  {
    "ranking": 174,
    "storeName": "浦发上海空港支行营业部",
    "poiId": "E42c20951f4f011ebbe73fa163e1c2c53",
    "latitude": 31.161637,
    "longitude": 121.799514,
    "flowRatio": 0.08690325,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区启航路1000号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115139",
      "name": "祝桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 175,
    "storeName": "浦发银行朱家角支行",
    "poiId": "E44899bc0f4f011ebbe73fa163e1c2c53",
    "latitude": 31.116944,
    "longitude": 121.045278,
    "flowRatio": 0.07884991,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市青浦区珠湖路510号一、二层",
    "district": {
      "id": "310118",
      "name": "青浦区"
    },
    "township": {
      "id": "310118102",
      "name": "朱家角镇"
    },
    "unlocked": true
  },
  {
    "ranking": 176,
    "storeName": "中华路支行",
    "poiId": "E4295da4df4f011ebbe73fa163e1c2c53",
    "latitude": 31.29,
    "longitude": 121.29,
    "flowRatio": 0.078781664,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市黄浦区中华路120号",
    "district": {
      "id": "310114",
      "name": "嘉定区"
    },
    "township": {
      "id": "310114102",
      "name": "南翔镇"
    },
    "unlocked": true
  },
  {
    "ranking": 177,
    "storeName": "上海分行千汇苑社区支行",
    "poiId": "E41a09ec7f4f011ebbe73fa163e1c2c53",
    "latitude": 31.119416,
    "longitude": 121.772439,
    "flowRatio": 0.07402701,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区祝桥镇千汇路566号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115139",
      "name": "祝桥镇"
    },
    "unlocked": true
  },
  {
    "ranking": 178,
    "storeName": "浦发上海化学工业区支行",
    "poiId": "E42aa6e8ff4f011ebbe73fa163e1c2c53",
    "latitude": 30.815946,
    "longitude": 121.465359,
    "flowRatio": 0.05910331,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市金山区目华路201号化工大厦二楼",
    "district": {
      "id": "310120",
      "name": "奉贤区"
    },
    "township": {
      "id": "310120118",
      "name": "柘林镇"
    },
    "unlocked": true
  },
  {
    "ranking": 179,
    "storeName": "浦发银行临港支行",
    "poiId": "E43b64d2df4f011ebbe73fa163e1c2c53",
    "latitude": 30.872052,
    "longitude": 121.820557,
    "flowRatio": 0.04028944,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市浦东新区新元南路555号",
    "district": {
      "id": "310115",
      "name": "浦东新区"
    },
    "township": {
      "id": "310115145",
      "name": "南汇新城镇"
    },
    "unlocked": true
  },
  {
    "ranking": 180,
    "storeName": "浦发上海虹桥机场支行",
    "poiId": "E42c48b16f4f011ebbe73fa163e1c2c53",
    "latitude": 31.1121,
    "longitude": 121.2039,
    "flowRatio": 0.016720913,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市长宁区空港一路89号",
    "district": {
      "id": "310117",
      "name": "松江区"
    },
    "township": {
      "id": "310117103",
      "name": "佘山镇"
    },
    "unlocked": true
  },
  {
    "ranking": 181,
    "storeName": "上海浦东发展银行股份有限公司宝山支行",
    "poiId": "E41fb10a0f4f011ebbe73fa163e1c2c53",
    "latitude": 31.2354,
    "longitude": 121.2856,
    "flowRatio": 0.004822903,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区牡丹江路1283号",
    "district": {
      "id": "310112",
      "name": "闵行区"
    },
    "township": {
      "id": "310112106",
      "name": "华漕镇"
    },
    "unlocked": true
  },
  {
    "ranking": 182,
    "storeName": "上海浦东发展银行股份有限公司上海经纬绿洲社区支行",
    "poiId": "E41c28a2ef4f011ebbe73fa163e1c2c53",
    "latitude": 31.331912,
    "longitude": 121.140536,
    "flowRatio": 0.0014787202,
    "cityName": "上海市",
    "coveredRange": 150,
    "address": "上海市宝山区纬地路338-5号",
    "district": {
      "id": "310114",
      "name": "嘉定区"
    },
    "township": {
      "id": "310114114",
      "name": "外冈镇"
    },
    "unlocked": true
  }
]
