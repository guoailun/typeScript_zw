// 函数声明的几种方式, 后三种只是函数类型的定义，没有实现
// 1) 用function 关键字来定义
function add12(x: number, y: number) {
  return x + y;
}

// 2) 通过一个变量来定义函数类型
let add22: (x: number, y: number) => number

// 3) 通过一个类型别名来定义函数类型
type add233 =  (x: number, y: number) => number

// 4) 通过一个接口来定义函数类型
interface Add222 {
  (x: number, y: number): number;
}

// 可选参数, 可选参数必须位于必选参数之后
function add5 (x: number, y?:number) {
  return y ? x + y : x
}

// 默认值参数 默认值参数在必传参数前是不可省略的
function add6(x: number, y = 0, z: number, q = 1) {
  console.log(x, y, z, q)
  return x + y + z + q;
}
let number = add6(1, undefined, 4)
console.log('number', number)

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => (pre + cur))
}

let obj2222 = {
  do: () => {
    console.log()
  },
  do2: function aaa() {
    console.log()
  }
}

// 函数重载
function add8 (...rest: number[]): number;
function add8 (...rest: string[]): string;
function add8 (...rest: any[]): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
};

// console.log(add8('1', 'ass', '2'))
// console.log(add8(2, 4, 5))


let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[1], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);




