// 接口的声明合并 当shengmingA不在一个文件中也可以发生声明合并
// 执行顺序标注
interface shengmingA {
    x: number
    // y: string
    foo (bar: number): number // 3
    foo (bar: 'a'): number // 1 - 2

}

interface shengmingA {
    y: number
    foo (bar: string): string // 1 1 - 3
    foo (bar: number[]): number[] // 2
    foo (bar: 'b'): number // 1 - 1
}

let shengminga: shengmingA = {
    x: 1,
    y: 2,
    foo (bar: any) {
        return bar
    }
}

// 函数和命名空间合并
function Lib () {}
namespace Lib {
    export let version = 'v1.0'
}

// 类和命名空间合并
class LibClass {}
namespace LibClass {
    export let state = '111'
}
console.log(Lib.version)
console.log(LibClass.state)

// 类、函数和命名空间合并：需要放在类、函数定义之后


// 枚举类型和命名空间合并
enum Color2 {
    Red,
    Blue,
    Yellow
}

namespace Color2 {
    export function mix() {
        console.log('I am enum mix')
    }
}

console.log(Color2)