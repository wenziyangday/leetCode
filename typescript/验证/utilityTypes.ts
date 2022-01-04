type freeze = <Type>(obj: Type) => Readonly<Type>;

type Student = {
  name: string;
  age: number;
  sex: string;
}

type PartialStudent = Partial<Student>;
const partialStudent: PartialStudent = {
  name: 'anyway'
}

type Students = 'lily' | 'amy';
type RecordStudents = Record<Students, Student>;
const recordStudents: RecordStudents = {
  lily: {
    name: 'lily',
    age: 100,
    sex: 'nv'
  },
  amy: {
    name: 'amy',
    age: 10,
    sex: 'jj'
  }
}

type PickStudent = Pick<Student, "name" | "age">;
const pickStudent: PickStudent = {
  name: 'pick',
  age: 100
}

type OmitStudent = Omit<Student, "name" | "sex">;
const omitStudent: OmitStudent = {
  age: 1000
}

// ExcludeS = "b" | "c"
type ExcludeS = Exclude<"a" | "b" | "c", "a">;

