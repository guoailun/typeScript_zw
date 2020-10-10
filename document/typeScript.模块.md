### 模块化
common.js | cmd | amd | ES6模块

### 目前支持比较好的
common.js | ES6模块

ES6模块
    1、ES6模块导出 export 关键字
    2、ES6模块导入 import 关键字

    注释：ES6的导出支持一个顶级导出【export default】,可以有多个export

common.js 
    1、node.js 是common.js 的一种实现
    2、node模块导出 module.exports

    注释：common.js 顶级导出【module.exports】会覆盖掉其他的导出，可以有多个exports.key

当ES6模块与common.js 混用的时候回有兼容性问题 - 解决方案
    1、将ES6导出写成类似于common.js的导出方式
    将export default 改写成 export = 并且没有其他的export
    导入时写成 import c = require(path) || import c from path

## 工具
ts-node 直接执行node 的ts文件 ts-node ./src/part2/node.模块导入.ts
tsc ./src/part2/es6.模块导入.ts -t es6 编译ts文件
tsc ./src/part2/es6.模块导入.ts -m amd 编译ts文件