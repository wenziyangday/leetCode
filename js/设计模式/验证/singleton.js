function Singleton(name) {
    this.name = name;
}

Singleton.prototype.sayName = function () {
    console.log(this.name);
}

Singleton.instance = (
    function () {
        let instance = null;
        return function (name) {
            if (!instance) {
                instance = new Singleton(name);
            }
            return instance;
        }
    }
)();

let a = Singleton.instance('jk');
let b = Singleton.instance('李四');
console.log(a === b, a, b);
a.sayName();
b.sayName();


const SingletonOne = (
    function (fn) {
        let result;
        return function () {
            return result || (result = fn.apply(this, arguments));
        }
    }
)()


class SingletonClass {
    constructor(name) {
        this.name = name;
    }

    static getInstance(name) {
        if (!this.Instance) {
            this.Instance = new SingletonClass(name);
        }

       return this.Instance;
    }

    sayName() {
        console.log(this.name);
    }

}

const _SingletonClass1 = SingletonClass.getInstance('我是一个类实现的单例----1');
_SingletonClass1.sayName();
console.log(_SingletonClass1);

const _SingletonClass2 = SingletonClass.getInstance('我是一个类实现的单例----2');
_SingletonClass2.sayName();
console.log(_SingletonClass2);

console.log(_SingletonClass1 === _SingletonClass2);
