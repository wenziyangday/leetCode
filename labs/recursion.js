const arr = [
  {
    path: '/a1',
    name: 'a1',
    children: [
      {
        path: '/a1-1',
        name: 'a1-1',
        children: [
          {
            path: '/a1-1-1',
            name: 'a1-1-1',
          }
        ]
      },
      {
        path: '/a1-2',
        name: 'a1-2',
        children: [
          {
            path: '/a1-2-1',
            name: 'a1-2-1',
          }
        ]
      }
    ]
  },
  {
    path: '/a2',
    name: 'a2',
    children: [
      {
        path: '/a2-1',
        name: 'a2-1',
      },
      {
        path: '/a2-2',
        name: 'a2-2',
      },
    ]
  }
];


function recursion(arr, result) {
  let len = arr.length, i = 0;
  while (i < len) {
    const {path, name} = arr[i];
    result.push({path, name});
    if (arr[i].children) {
      recursion(arr[i].children.map(x => {
        const path2 = x.path;
        return {
          ...x,
          path: `${path}${path2}`
        }
      }), result);
    }

    i++;
  }
}

function getResult(arr) {
  let result = [];
  recursion(arr, result);
  return result;
}


console.log(getResult(arr));
