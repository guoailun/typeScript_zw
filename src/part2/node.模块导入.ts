let nodeRequire1 = require('./node.模块导出1')
let nodeRequire2 = require('./node.模块导出2')

let es6import = require('./es6.模块导出')
import es6tonode = require('./es6tonode.import')
import es6tonode2 from './es6tonode.import'

console.log(nodeRequire1, nodeRequire2)
// es6import()
console.log(es6import)
es6import.default()
es6tonode()
es6tonode2()