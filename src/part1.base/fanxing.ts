function log(value: any): any {
  console.log(value);
  return value;
}

function log3(value: string): string {
  console.log(value);
  return value;
}

// 泛型函数
function log2<T>(value : T): T{
  console.log(value);
  return value;
}

// 泛型函数的调用, 可以在调用时指定参数类型
log2<string[]>(['a', 'b'])
log2<number>(1)

// 使用类型别名来定义泛型函数类型
type Log = <T>(value: T) => T
let MyLog: Log = log

// 定义一个泛型接口
interface LOGG {
  <T>(value: T) : T
}

// 也可以用泛型来约束接口的其他成员
interface LOGGG<T> { // 可以约束接口的所有成员
  (value: T) : T
}

// 如果想实现接口LOGGG 需要指定类型
let myLog: LOGGG<string> = log


// 也可以用泛型来约束接口的其他成员
interface LOGGG1<T = number> { // 可以约束接口的所有成员
  (value: T) : T
}

// 如果想实现接口LOGGG 需要指定类型
let myLog1: LOGGG1 = log
myLog1(1)


// 定义一个泛型类，约束类的成员
class Cla<T> {
  run(value: T){
    console.log(value);
    return value;
  }
}

// 实例化这个类, 指定类型参数时，实例的方法将会受到泛型的约束
let log1 = new Cla<number>()
log1.run(1)

// 实例化这个类, 不指定类型参数时
let log22 = new Cla()
log22.run({a: ''})

interface length {
  length: number
}

// 要求传入的参数需要具有length属性
function LOGGGGG <T extends length>(value: T) : T {
  console.log(value, value.length)
  return value;
}
LOGGGGG([1])
LOGGGGG("12345678")
LOGGGGG({length: 1})




function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}
