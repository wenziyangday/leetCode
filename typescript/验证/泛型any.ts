interface IUser {
  name: string;
  age: number;
  department: string;
}

type Optional = Partial<IUser>;

class Class implements Optional {
  name: string;
  age: number;

  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
}



