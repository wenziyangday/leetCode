const arr = [
  {
    id: '1',
    pId: '',
    title: '1',
    children: [
      {
        id: '1-1',
        pId: '1',
        title: '1-1',
      },
      {
        id: '1-2',
        pId: '1',
        title: '1-2',
      }, {
        id: '1-3',
        pId: '1',
        title: '1-3',
      }
    ]
  },
  {
    id: '2',
    pId: '',
    title: '2',
    children: [
      {
        id: '2-1',
        pId: '2',
        title: '2-1',
      },
      {
        id: '2-2',
        pId: '2',
        title: '2-2',
      }, {
        id: '2-3',
        pId: '2',
        title: '2-3',
      }
    ]
  },
  {
    id: '3',
    pId: '',
    title: '3',
  },
];

const a = (arr) => {
  return arr.reduce((acc, x) => x.children ? acc.concat(a(x)) : acc.concat(x), []);
}

console.log(a(arr));


// const arrs = [1, [2, 3, 4, [5, 6, 7]], 8, 9];
//
// let newArr = [];
//
// function lat(arr) {
//   return arr.map(x => {
//     if (Array.isArray(x)) {
//       lat(x);
//     } else {
//       return x;
//     }
//   });
// }
//
// console.log(lat(arrs));
