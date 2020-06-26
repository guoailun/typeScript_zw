// 1) 对象类型的接口
interface List {
  id: string;
  name: string;
  // [x: string]: string, // 字符串属性签名
  // color?: string,      // 可选属性
  // readonly x: number,  // 只读属性

}

interface Result {
  data: List[]
}

function render (resule: Result) {
  resule.data.forEach((value) => {
    // console.log(value.id, value.name)
  })
}

let result = {
  data: [
    {
      name: 'zw',
      id: '1'
    },
    {
      name: 'zw2',
      id: '2'
    }
  ]
}

render(result)

// 当返回的结果，字段个数超出接口的定义，ts的类型检查会报错
// 如下
/*render({
  data: [
    {
      name: 'zw',
      id: '1'
    },
    {
      name: 'zw2',
      id: '2',
      sex: '女'  此行报错
    }
  ]
})
*/

/*绕过类型检查的方法
1）赋值给字面量 render(result)
2）进行类型断言
render({
  data: [
    {
      name: 'zw2',
      id: '2',
      sex: '女'  
    }
  ]
} as unknown as Result)

render(<Result>{
  data: [
    {
      name: 'zw2',
      id: '2'  
    },{
      name: 'zw2',
      id: '2',
      sex: '女'  
    }
  ]
})
3) 字符串索引签名
interface List {
  id: string,
  name: string,
  [x: string]: string
}
*/


// 当不确定接口属性的个数时，可以使用可索引类型的接口
// 1）用数字类型索引的接口
interface StringArray {
  [x: number]: string
}

let arr: StringArray;
arr = ['1', '2', '3'];


// 2) 函数类型的接口
let add33333: (x: number, y: number) => number

// type和interface 多数情况下有相同的功能，就是定义类型。但有一些小区别：
// type：不是创建新的类型，只是为一个给定的类型起一个名字。type还可以进行联合、交叉等操作，引用起来更简洁。
// interface：创建新的类型，接口之间还可以继承、声明合并。
// 如果可能，建议优先使用 interface
interface Add {
  (x: number, y: number): number
}
type Add2 = (x: number, y: number) => number;
const add2222:Add = (a, b) => a + b;

interface Lib {
  (): void;
  version: string;
  doSomeThing(): void;
}

function getLib(): Lib {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomeThing = () => {}
  return lib
}

let lib1 = getLib();
lib1.version = '1.0';



