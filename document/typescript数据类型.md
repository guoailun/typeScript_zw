# typeScript 数据类型
1、es6的数据类型
Boolean  
Number  
String  
undefined  
null  
Symbol  // 基本数据类型

Array  
Object  
Function // 引用类型
2、typeScript的数据类型
Boolean  Number  String  undefined  null  Symbol  Array  Object  Function
新增：viod  any  never  元组  枚举  高级类型

元组：Tuple
是一种特殊的数组，限定数组的类型和个数

Object
let obj:object 与 let obj:Object 和 let obj:{} 的区别
let obj: object // 表示非原始类型(非string/boolean/number/symbol/null/undefined)
let obj: Object // TypeScript定义的标准JavaScript Object接口(按ctr可查看)
let obj: {} // 表示一个空对象类型

枚举类型：enum 一组有名字的常量集合，理解成手机里的通讯录，只记住人名就可以了
默认是从0开始，可以以定义值


接口：interfac 约束对象 函数 类的结构

# typeScript 类型注解
作用：相当于强类型语言中的类型声明
语法：(变量/函数): type

