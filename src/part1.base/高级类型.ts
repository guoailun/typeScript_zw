// 1、交叉类型 适合对象的混入
interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}

let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

// 2、联合类型 使类型具有不确定性使代码更灵活 像是去并集
let alian: string | number
let blian: 'a' | 'b' | 'c'
let clian: 1 | 2 | 3

class Dog1 implements DogInterface {
    run() {}
    eat() {}
}

class Cat1 implements CatInterface {
    jump() {}
    eat() {}
}

enum Master { Boy, Girl } 
function getPet (master: Master) {
    let pet = master === Master.Boy ? new Dog1() : new Cat1();
    pet.eat();
    // pet.run() 在类的联合类型，取实例的交集
    return pet;
}

// 3、索引类型
// 场景：抽取obj 的所有value到一个数组中
const objValue = {
    a: 1,
    b: 2,
    c: 3
}

function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}

console.log(getValues(objValue, ['a', 'b']))
console.log(getValues(objValue, ['e', 'f'])) // 当获取Object中没有的属性时，返回undefined但是编译不报错

// 为了解决此问题引入索引类型
// keyof T
interface Obj {
    a: number
    b: string
}

let key: keyof Obj 

//  索引访问操作符
// T[k]
let valueA: Obj['a']

// T extends U

// 改造getValue 函数 约束keys 都是obj里边拥有的属性

function getValues1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

console.log(getValues1(objValue, ['a', 'b']))
// console.log(getValues1(objValue, ['e', 'f']))

// 4、映射类型
interface yingsheObj {
    a: string
    b: number
    c: boolean
}

type ReadonlyObj = Readonly<yingsheObj>

type PartialObj = Partial<yingsheObj>

type PickObj = Pick<yingsheObj, 'a' | 'c'>

// 以上所有的属性都是来自于yingsheObj  这样的情况称为同态

// 一个新增的映射类型
type RecordObj = Record<'x' | 'y', yingsheObj>
type RecordObj2 = Record<'x' | 'y', string>

// 5、条件类型
// 条件类型是一种由条件表达式决定的类型
// T extends U ? X : Y

type TypeName<T> = 
T extends string ? 'string' : 
T extends number ? 'number' :
T extends boolean ? 'boolean' :
T extends undefined ? 'undefined' :
T extends Function ? 'function' : 'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// A extends U ? X : Y | B extends U ? X : Y
type T3 = TypeName<string | string[]>
type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Diff<'a', 'a' | 'e'>  Diff<'b', 'a' | 'e'>  Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'  => 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Excloud<T, U>
// NotNullable<T>
// Extract<U, T>

type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>



// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;
