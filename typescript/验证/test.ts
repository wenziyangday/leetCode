function test(name: string): string;
function test(name: string, age: number): number;
function test(name: string, age?: number, sex?: boolean): boolean;
function test(name: string, age?: number, sex?: boolean): any {
  if (name) return name;
  if (age) return age;
  if (sex) return sex;
  return name + age + sex;
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

}

function printPoint(p: Point) {
  console.log('printPoint:', p.x, p.y)
}

printPoint(new Point(1, 2))

interface IPoint {
  x: number,
  y: number
}

function printPointIP(p: IPoint) {
  console.log('printPointIP:', p.x, p.y)
}

printPointIP(new Point(1, 2))


function creatArr<T>(length: number, x: T): Array<T> {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(x);
  }
  return result;
}

const aa = creatArr(10, '12');
console.log(aa, 'aa');

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const swap2 = function <T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

interface ITmm {
  <T>(length: number, value: T): Array<T>;
}

const ca: ITmm = function <T>(length: number, value: T) {
  return []
}

interface ITk<T> {
  (length: number, val: T): Array<T>
}

const aaa: ITk<any> = function (length, val): [] {
  return []
}

function creatArrA<T = string>(length: number, value: T): T[] {
  return []
}


interface Alarm {
  age: number,
  name: string
}

interface Alarm {
  age: number,
  sex: string
}

const alarm: Alarm = {
  age: 12,
  name: '张胜男',
  sex: 'nam'
}

console.log(alarm)

class A {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class AA extends A {

}

const a: AA = new AA('', 100);

class AB implements A {
  age: number;
  name: string;

  constructor(name) {
    this.name = name;
  }

  log() {
    console.log(this.name)
  }
}

const ab: AB = new AB('zhan')
ab.log()

enum Opts {
  add,
  edit
}

const opt: Opts = Opts.add
console.log(opt)

if (opt) {
  console.log('我执行了', true)
} else {
  console.log('我执行了', false)
}


interface IBA {
  x: number,
  y: number,

  [propsName: string]: any
}

interface IBB {
  z: number,
  h: number,

  [name: string]: any
}

// 类型别名
type TBA = IBA | IBB
const tba: TBA = {
  x: 10,
  y: 10,
  m: 100,
  mm: 100,
  z: 10,
  h: 10
}

console.log(tba)

type TA = {
  name: string
}

function logIbb(x: IBB): void {
  console.log(x)
}

logIbb({z: 100, h: 100, m: 100} as IBB)
logIbb(<IBB>{z: 100, h: 100, m: 100})
logIbb({z: 100, h: 100, m: 100, kl: '1212'})

const obj = {
  z: 100,
  h: 100,
  m: 100
}

logIbb(obj)

type Name = string
const n1ame: Name = '12'

interface IPerson {
  name: string,
  age: number
}

interface IDancePerson extends IPerson {
  danceMajor: string
}

type TPerson = {
  name: string,
  age: number
}
type TDancePerson = TPerson & {
  danceMajor: string
}

function log<T>(name: T): T {
  return name;
}

log<string>('张胜男')

let arrowLog: <T>(name: T) => T = log;
let objLog: { <T>(name: T): T } = log;

interface ILog {
  <T>(name: T): T
}

const iLog: ILog = log

// 泛型参数作为整个interface参数类型
interface ILogWhole<T> {
  (name: T): T
}

const iLogWhole: ILogWhole<number> = log


class Person<T> {
  name: T;
  logName: (name: T) => T;
  // static age: T;
}

const person = new Person<string>();
person.name = '张胜男';
person.logName = (name) => {
  return name;
}

function log2<T>(name: T): T {
  // console.log(name.length);
  return name;
}

// 解决这种
interface INameLength {
  length: number
}

function logSolved<T extends INameLength>(name: T): T {
  console.log(name.length, name);
  return name;
}

// logSolved(2)
logSolved({length: 100, value: 1});

function logName<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key]
}

const objLog2 = {
  name: '张三定',
  age: '1000',
  slogan: '加油，vincent'
}

logName(objLog2, 'name')
// TS2345: Argument of type '"name1"' is not assignable to parameter of type '"name" | "age" | "slogan"'.
// logName(objLog2, 'name1')

function getProperty<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

type TAmapFish = {
  [name: number]: any
}

type TKeyof = keyof TAmapFish


type Ta = keyof String
const Ta: Ta = 'toLowerCase'


let name2 = '张三';
let firstName: typeof name2 = '张';
// 等价于
let firstNameEqual: string = '张';


function f() {
  return {
    x: 1,
    y: 2
  }
}

type P = ReturnType<typeof f>;
// type PP = typeof f();
// const pp: P = {
//   x: 12
// }
const tpa = {
  a: 1,
  b: '1'
}
type TPA = typeof tpa
// const tpas: TPA = {}


interface IProps {
  name: string,
  age?: number,
  grade: string
}

type TIProps = Pick<IProps, 'name' | 'age'>
const tIProps: TIProps = {
  name: ''
}

const mmm = null as string
console.log(mmm)
