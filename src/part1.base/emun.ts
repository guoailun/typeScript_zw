// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

// console.log(Role)
// console.log(Role.Developer)
// console.log(Role[2])

// 字符串枚举
enum role2 {
  Success = 'success',
  Fail = 'fail'
}


// 枚举成员
// Role.Reporter = 0
enum Char {
  // const member
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member
  d = Math.random(),
  e = '123'.length,
  f = 4 // 在computed member后的枚举成员需要呗赋予初始值
}

// 常量枚举 用const 定义定义的枚举，是常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]
// console.log(month)

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

// 变量定义成枚举类型
let e: E = 3
let f: F = 3

// console.log(e === f) 不同类型不能进行比较

// 变量定义成枚举成员类型
let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2)  // 不同枚举成员类型，不能进行比较
// console.log(e1 === e3)  // 相同枚举成员类型，可以进行比较

let g1: G = G.a // 字符串枚举类型，只能定义成枚举成员类型
let g2: G.a = G.a

// 用途代码
// role judge
const enum RoleEnum{
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

function initByRole(role: RoleEnum) {
  if (role === RoleEnum.Reporter || role === RoleEnum.Developer) {
      // do sth
  } else if (role === RoleEnum.Maintainer || role === RoleEnum.Owner) {
      // do sth
  } else if (role === RoleEnum.Guest) {
      // do sth
  } else {
      // do sth
  }
}
