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
// tuple.push(2)
// console.log(tuple)
// tuple[2]  但是不能越界访问

// 函数
// let add1 = (x, y) => x + y //es6写法
let add1 = (x: number, y: number): number => x + y // 也可以增加返回值的类型，返回值类型一般可以省略

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
let un: undefined = undefined  // 不能被复制成其他任何数据类型
let nu: null = null

num = undefined  // undefined null 是任何其他类型的子类型
num = null


// void 是一种操作符，可以让任何表达式返回undefined
let noReturn = () => { }

// any
let x
x = 1
x = []
x = () => { }

// never 表示永远也不会有返回值的类型
let error = () => {
    throw new Error('error')
}
let endless = () => { // 死循环类型
    while (true) { }
}
