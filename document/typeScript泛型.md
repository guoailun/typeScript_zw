# 泛型
泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定
[把泛型理解为代表类型的参数]

# 泛型定义
1、泛型可以定义函数
2、泛型可以定义一个函数类型
3、泛型可以约束接口成员
4、泛型也可以约束类的成员 [泛型不能应用于类的静态成员]

# 泛型的好处
1、函数和类可以轻松地支持多种类型，增强程序的扩展性
2、不必写多条函数的重载，冗长的联合类型声明，增强代码的可读性
3、灵活控制类型之间的约束

泛型不仅可以保持类型的一致性，又不失程序的灵活性，同时也可以通过泛型约束，控制类型之间的约束。

不同的判断方法有不同的使用场景：
typeof：判断一个变量的类型
instanceof：判断一个实例是否属于某个类
in：判断一个属性是否属于某个对象
类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内

# 类型保护
TS能够在特定的区块中保证变量属于某种特定的类型，可以在此区块中放心的引用此类型的属性，或者调用此类型的方法

4中创建特殊区块的方法