// 原始类型
let bool: boolean = true
// let num: number = 123
let num: number | undefined | null = 123 //联合类型

let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 3, 'a'] // 联合类型

// 元组 元组是一种特殊的数组，他限定了数组元素的类型和个数
let tuple: [number, string] = [0, '1']
// 元素的越界，可以push进去
tuple.push(2)
// console.log(tuple)
// console.log(tuple.length) // 3
// tuple[2]  但是不能越界访问

// 函数
// let add1 = (x, y) => x + y //es6写法
let add1 = (x: number, y: number): number => x + y // 也可以增加返回值的类型，返回值类型一般可以省略
let add2 = (x: number, y: number) => x + y // 也可以增加返回值的类型，返回值类型一般可以省略


let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number // 定义函数类型，并未实现
compute = (a, b) => a + b

// 对象

// let obj1: object = { x: 1, y: 2 }
// obj1.x = 3 // 没有指定obj1所拥有的属性

let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol  含义：具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2) false

// undefined, null
let un: undefined = undefined  // 变量被赋值成undefined后，不能被赋值成其他任何数据类型，只能赋值成它本身
let nu: null = null

let num1: number = 123;
num = undefined  // 如第4行，联合类型
num = null

// undefined null 是任何其他类型的子类型
// num1 = undefined;
// num1 = null;  tsconfig.json strictNullChecks: false, 之后可以赋值

// void 是一种操作符，可以让任何表达式返回undefined
void 0 // undefined
let noReturn = () => { }

// any 在ts中，不指定一个变量的类型，默认是any类型，可以任意的赋值类型
let x
x = 1
x = []
x = () => { }

// never 表示永远也不会有返回值的类型
// let error = () => {
//     throw new Error('error')
// }
// let endless = () => { // 死循环类型
//     while (true) { }
// }

let aaaa: Object;