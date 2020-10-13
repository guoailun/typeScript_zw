// import './part1.base/datatype'
// import './part1.base/emun'
// import './part1.base/interface'
// import './part1.base/function'
// import './part1.base/class'
// import './part1.base/fanxing'
// import './part1.base/类型保护'
// import './part1.base/类型推断'
// import './part1.base/类型兼容'
// import './part1.base/高级类型'
// import './part2/es6.模块导入'
// import './part2/node.模块导入'
import './part2/声明合并/a'
import $ from 'jquery'

let hello: string = "hello typeScript";
document.querySelectorAll('.app')[0].innerHTML = hello;

$('.app').css('color', 'red')

globalLib({x: 1})
globalLib.doSomething()

import moduleLib from './part2/libs/module-lib'
moduleLib.doSomething()

import umdLib from './part2/libs/umd-lib' // umd也可以与global引用一致
umdLib.doSomething()


import m from 'moment'

// 给moment上添加一个自定义的方法
// m.myFunction = () {}

declare module 'moment' {
    export function myFunction(): void
}

m.myFunction = () => {
    console.log('myFunction')
}

m.myFunction()

// 给全局变量加
declare global {
    namespace globalLib {
        function doAnything(): void
    }
}

// 会对全局命名空间造成污染
globalLib.doAnything = () => {
    console.log('globalLib do anything')
}

globalLib.doAnything()