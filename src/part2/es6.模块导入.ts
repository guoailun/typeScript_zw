// 1、批量导入
import { piliangB, piliangC } from './es6.模块导出';

// 2、导入接口
import { expIFA } from './es6.模块导出'

// 3、导入时起别名
import { expIFA as expAs } from './es6.模块导出'

// 4、导入模块中所有成员绑定在all上
import * as all from './es6.模块导出'

// 5、不加{}导入默认
import exporta from './es6.模块导出'

console.log(all)

class importA implements expAs {
    x: number = 1
    y: number = 2
}

let p: expAs;
let p2: expAs = {
    x: 1,
    y: 2
}