// 单独导出
export let exportA = 1

// 批量导出
let piliangB = 2
let piliangC = 3
export { piliangB, piliangC }

// 导出接口
export interface expIFA {
    x: number
    y: number
}

// 导出函数
export function f() {}

// 导出时起别名
function exportFun () {}
export { exportFun as exportFunG }

// 默认导出无需函数名 -- 若起名字则会在导入时无效
export default function () {
    console.log('I am is export default')
}

// 引入外部的模块重新导出
export { str as hello } from './b'