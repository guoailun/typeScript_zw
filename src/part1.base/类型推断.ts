let a;
let b = 1;
let c = '12345';
let d = [];
let e4 = [1];

let cfun = (x = 1) => x + 1;

window.onkeydown = (event: KeyboardEvent) => { 
  console.log('onkeydown', event)
}

// 类型兼容
let s: string = '1';
// s = null 管理配置

interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x1 : X = {a: 'a', b: 'b'};
let y1 : Y = {a: 'a', b: 'b', c: 'c'};
x1 = y1
// y1 = x1

// 函数的类型兼容： 函数作为参数
type Handler = (x: number, y: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 1)参数个数
let handler1 = (x: number) => {};
hof(handler1);
let handler2 = (x: number, y: number, z: number) => {};
// hof(handler2);

// 2)可选参数和剩余参数
let handler3 = (x: number, y: number) => {};
let handler4 = (x?: number, y?: number) => {};
let handler5 = (...args: number[]) => {};
// 3)固定参数兼容可选参数
handler3 = handler4
handler3 = handler5

// handler4 = handler5;
// handler4 = handler3;

handler5 = handler3;
handler5 = handler4;

// 4)参数类型
let handler6 = (x: string) => {}
// hof(handler6);

// 5)返回值类型
let f1 = () => ({name: 'a'})
let g11 = () => ({name: 'a', location: 'beijing'})

f1 = g11;
// g11 = f1;


// 枚举类型的兼容性
enum Fruit { Apple, Banana };
enum Color { Red, Black };
let fruit: Fruit.Apple = 3;
let no:number = Color.Red;
// let color:Fruit.Apple = Color.Red

// 类的兼容性

class A {
  constructor(p: number, q: number) {};
  id: number = 1;
  private name: string = '';

}

class B {
  static s = 1;
  constructor(p: number) {};
  id: number = 2;
  private name: string = '';
}

let a1 = new A (1, 2);
let b1 = new B (1);
// a1 = b1;
// b1 = a1;

class C extends A {}
let c1 = new C (1, 2);
c1 = a1;
a1 = c1;


// 泛型的兼容
interface Empty<T> {
  // value: T
};
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};

obj1 = obj2;

// 泛型函数
let log111 = <T>(x: T): T => {
  console.log('x')
  return x;
}

let log222 = <U>(x: U): U => {
  console.log('y')
  return x;
}

log111 = log222



