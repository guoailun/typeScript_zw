class Dog {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  run(){};
  private move(){}
  protected a(){}
  readonly age: number = 1;
  static food: string = 'gouliang';
};

// console.log(Dog.prototype); // 不包含内部属性的，只有run方法和constructor
let dog1 = new Dog('xiaohu')
// dog1.move()
// dog1.a();
// console.log(dog1) // 可以看到内部属性只在实例上，而不再原形上，与ES不同的是，实例属性必须有初始值，或者在构造函数中被初始化，或者声明为可选属性
// console.log(Dog.food);
// console.log(dog1.food);


// 继承
class Haskey extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color;
    // this.move()
    this.a();
  }
  color: string;
}
// console.log('Haskey', Haskey.prototype)
// console.log(Haskey.food)
console.log(Haskey)

class Haskey2 extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    // this.color = color;
  }
  // color: string;
}

// console.log(Haskey2)

let dog2 = new Haskey2('xiaohu', 'white')
// console.log(dog2)



// 抽象类
abstract class Animal {
  eat() {
    console.log('eat');
  };
  abstract sleep(): void;
}
 
// let animal = new Animal()

class Cat extends Animal {
  constructor (name: string) {
    super();
    this.catName = name;
  }
   catName: string;
   sleep() {
    console.log('sleep');
   }
}

let cat1 = new Cat('xiao');
cat1.eat();

class Workflow {
  step1() {
      return this
  }
  step2() {
      return this
  }
}
new Workflow().step1().step2()

class MyFlow extends Workflow {
  next() {
      return this
  }
}
new MyFlow().next().step1().next().step2()

// 接口与class
interface Human {
  // new (name: string): void;
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor(name: string){
    this.name = name;
  }
  name: string;
  eat(){};
  sleep(){}
}

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

class Auto {
  state = 1
  // private state2 = 1
}
interface AutoInterface extends Auto {

}
// class C implements AutoInterface {
//   state = 1
// }
// class Bus extends Auto implements AutoInterface {

// }




class Auto1{
  state = 1;
  private state2 = 0;
  protected state3 = 3;
}
interface AutoInterface extends Auto1{}
class Bus1 extends Auto1 implements AutoInterface{
  showMsg(){
      // console.log(this.state2); // 不能访问来自接口的私有属性
      console.log(this.state3); // 可以访问来自接口的被保护属性
  }
}
let bus = new Bus1();
bus.showMsg();
console.log(bus); // 输出可以看到state2属性和state3属性
