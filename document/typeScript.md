# typeScript 
1、什么是 TypeScrip?
那么，什么是 TypeScript，根据官方的定义，它是拥有类型系统的 JavaScript 的超集，可以编译成纯 JavaScript。这里，你要注意三个要点：
    1）第一，类型检查：TypeScript 会在编译代码时进行严格的静态类型检查，这意味着你可以在编码阶段发现可能存在的隐患，而不必把它们带到线上。
    2）第二，语言扩展：TypeScript 会包括来自 ECMAScript 6 和未来提案中的特性，比如异步操作和装饰器；也会从其他语言借鉴某些特性，比如接口和抽象类。
    3）第三，工具属性：TypeScript 能够编译成标准的 JavaScript，可以在任何浏览器、操作系统上运行，无需任何运行时的额外开销。从这个角度上讲，TypeScript 更像是一个工具，而不是一门独立的语言。

# 强类型语言，弱类型语言
1、强类型语言：不允许改变变量的数据类型，除非进行强制类型转换
2、弱类型语言：变量可以赋予不同的数据类型

# 静态类型语言，动态类型语言
1、静态类型语言：在编译阶段确定所有的变量的类型
class C {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function add(a, b) {
  return a.x + a.y + b.x + b.y // 不知道a、b的类型，在运算的时候才可知道
}

2、动态类型语言：在执行阶段确定所有的变量的类型
class C {
  public:
    iny x;
    int y; // 在编译阶段可知类型
  }
}

int add(C a, C b) {
  return a.x + a.y + b.x + b.y
}

对比：
    静态类型语言      动态类型语言
对类型极度严格        对类型非常宽松，比较灵活
立即发现错误          Bug可能隐藏数月甚至数年
运行时性能好          运行时性能差
自文档化             可读性差

## 一些关键字
1、extends
extends 可以用来继承一个类，也可以用来继承一个 interface，但还可以用来判断有条件类型：

T extends U ? X : Y;

上面的类型意思是，若 T 能够赋值给 U，那么类型是 X，否则为 Y。

举个栗子：
type Words = 'a'|'b'|"c";
type W<T> = T extends Words ? true : false;
type WA = W<'a'>; // -> true
type WD = W<'d'>; // -> false


2、typeof
在 JS 中 typeof 可以判断一个变量的基础数据类型，在 TS 中，它还有一个作用，就是获取一个变量的声明类型，如果不存在，则获取该类型的推论类型。

举个栗子：
interface Person {
  name: string;
  age: number;
  location?: string;
}

const jack: Person = { name: 'jack', age: 100 };
type Jack = typeof jack; // -> Person


3、keyof
keyof 可以用来取得一个对象接口的所有 key 值

interface Person {
    name: string;
    age: number;
    location?: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number

4、in
in 可以遍历枚举类型

type Keys = "a" | "b"
type Obj =  {
  [p in Keys]: any
} 
// -> { a: any, b: any }

上面 in 遍历 Keys，并为每个值赋予 any 类型。




