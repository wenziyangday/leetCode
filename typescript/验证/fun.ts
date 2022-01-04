interface User {
  name: string;
  age: number;

  // 索引签名
  [propName: string]: any;
}

const getProperties = (user: User, key: string) => user[key];
const getUser = (user: User) => user.color;
const getSex = (user: User) => user.sex;
const getMajor = (user: User) => user.major;

// 类型推断
const names = getUser({color: 'red', sex: '男', major: '煜文'} as unknown as User);
const sex = getSex({color: 'red', sex: '男', major: '煜文'} as unknown as User);
const major = getMajor({color: 'red', sex: '男', major: '煜文'} as unknown as User);
console.log(names, sex, major)
console.log(getProperties({color: 'red', sex: '男', major: '煜文'} as unknown as User, 'sex'))


interface BaseResponse {
  code: number,
  message: string
}

interface ItemList {
  name: string,
  age: number,
  major: string
}

interface Extra {
  father: string,
  mother: string
}

// 1
interface Res extends BaseResponse, Extra {
  list: ItemList[],
  pageNum: number,

  [propName: string]: any;
}

const res: Res = {
  code: 200,
  message: '数据收集成功',
  father: '',
  mother: '',
  list: [{
    name: '张三',
    age: 100,
    major: undefined || null
  }],
  pageNum: 1,
  brother: 'asdsd'
}

// 2
const res2 = {
  code: 200,
  message: '数据收集成功',
  father: '',
  mother: '',
  list: [{
    name: '张三',
    age: 100,
    major: undefined || null
  }],
  pageNum: 1,
}

// 3
const res3 = {
  code: 200,
  message: '数据收集成功',
  father: '',
  mother: '',
  list: [{
    name: '张三',
    age: 100,
    major: undefined || null
  }],
  pageNum: 1,
  study: ['1212', ['34']]
} as unknown as Res;


console.log(res.list)

type Resd = {
  name: string;
  age: number,
  readonly oo: string
}
type SetRes = (name: string, age: number) => void;
const setRes: SetRes = (name) => {
  console.log(name)
}
setRes('你你你', 12);

interface SetRe {
  a(name: string, age: number): void
}

type ARes = Resd & SetRes & SetRe & Res;

interface AResd extends Resd, SetRe {
  name: string
}

const aResd: AResd = {
  name: '张珊珊',
  age: 100,
  oo: '12',
  a: (name, age) => {
  },
  b: () => {
  },
  c() {
  }
}

console.log(aResd.oo);

// 基本类型
type S = string;
// 联合类型
type Resda = Resd | Res;
//元组类型
type DRes = [number, string]

interface SetRe {
  b: () => void

  c(): void
}


const setRe: SetRe = {
  a(name: string, age: number) {
  },
  b: () => {
  },
  c() {
  }
}
