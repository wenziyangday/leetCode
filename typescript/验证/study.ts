const num: number = 123;

function nums(num: number): number {
  return 10 * num;
}

/**
 * @param name -姓名
 * @param age -年龄
 * @param married -是否结婚
 * */
interface Name {
  name: string;
  age: number;
  married: boolean;
}

const _name: Name = {
  name: '张三',
  age: 100,
  married: false
}

console.log(_name)

// 内联类型注解
const _name2: {
  name: string;
  age: number;
  married: boolean;
} = {
  name: '张三-2',
  age: 10,
  married: false
};

console.log(_name2);

const aNull: null = null;
const aAny: any = '12' || 10 || false || {} || null || undefined;

function log(msg: string): void {
  console.log(msg);
}

// 泛型注解
function reverse<T>(items: T[]): T[] {
  let result = [];
  for (let i = items.length; i >= 0; i -= 1) {
    result.push(items[i])
  }
  return result;
}

let aa = reverse([1, '2', 3])
aa = ['1', '2']

// 联合类型
const bb: string | number = 1 || 'op';
console.log(bb)

//
const cc: [string, number, boolean] = ['12', 10, false];

function ex() {
}

type StrOrNum = string | number;

/**
 * @param major -klkl
 * */
interface People extends Name {
  major: string;

  logName(val: string): void;
}

const people: People = {
  name: '李四',
  age: 100,
  married: false,
  major: '看看了',
  logName: val => {

  }
}


type LongHand = {
  (a: number): number
}

type ShortLand = (a: number) => number

// 可调用
interface Re {
  (): string;

  new(): string
}

// declare const re: Re
// const _re = re()

declare const Rse: Re

const __re = new Rse();

// 类型断言 不推荐使用
let a = {} as Re;
let _a = <Re>{};

// 最好是
let __aa: Name = {
  name: '张三',
  age: 100,
  married: false
}

enum Enum {
  one = "one",
  two = 'two',
}

type CC = 'one' | 'two';
let _cc: CC = 'one';

const obj = {
  aa: '1212'
}

obj.aa = 'kkkl'

const readonly01: {
  readonly name: string
} = {
  name: 'kkk'
}

// const aaaa;
// console.log(aaaa)

type AAA = {
  readonly name: string
}

type WIAA = {
  name: string
} & AAA

let aaa: WIAA = {
  name: 'kjjkkj'
}

class PPP {
  private name: string;
  public age: number;
  protected subject: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.subject = "kjmjkkj";
  }

  private aa() {
    console.log('kk');
  }

  protected bbb() {
    console.log('bbb');
  }

}

class SubPPP extends PPP {
  constructor(name, age) {
    super(name, age);
  }

  aaa() {
    this.aaa();
  }

  bbbb() {
    this.bbb();
  }
}


const ppp = new PPP('张三', 100);
const subPPP = new SubPPP('张三', 100);
console.log(ppp.age);
console.log(subPPP.aaa());
console.log(subPPP.bbbb());





