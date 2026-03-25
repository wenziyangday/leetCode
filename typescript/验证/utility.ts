type AwaitP = Awaited<Promise<string>>

type Parti = {
  name: string,
  age: number,
  sex: string
}

const parti: Parti = {
  name: '张胜男',
  age: 100,
  sex: '那么'
}

const parti2: Partial<Parti> = {}

type Req = Required<Partial<Parti>>
const req: Req = {
  name: '张胜男',
  age: 100,
  sex: '那么'
}

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

// Cannot assign to 'title' because it is a read-only property.
// todo.title = "Hello";

// Object.freeze()

type TAnimal = 'dog' | 'cat' | 'fish'
type TAnimalProperties = {
  age: number,
  name: string,
  sex: string
}

const animal: Record<TAnimal, TAnimalProperties> = {
  dog: {
    age: 12,
    name: 'lucy',
    sex: ''
  },
  cat: {
    age: 12,
    name: 'lucy',
    sex: ''
  },
  fish: {
    age: 12,
    name: 'lucy',
    sex: ''
  },
}
const animal2: Record<string, TAnimalProperties> = {
  dog: {
    age: 12,
    name: 'lucy',
    sex: ''
  }
}

const tAnimalProp: Omit<TAnimalProperties, 'name'> = {
  age: 12,
  sex: '',
}

type PP = Parameters<() => string>;
const pp: PP = []

const objD = {
  401: '认证失败，无法访问系统资源',
  403: '当前操作没有权限',
  404: '访问资源不存在',
  defaultCode: '系统未知错误，请反馈给管理员'
}


type TObjD = typeof objD

const tObjD: TObjD = {
  401: '',
  403: '',
  404: '',
  defaultCode: ''
}

type TCodeType = keyof TObjD;

type KeyTObjD = keyof TObjD
const keyTObjD: TCodeType | number = 100
