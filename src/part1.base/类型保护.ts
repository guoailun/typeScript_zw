console.log("类型保护")

enum Type {
 Strong,
 Week
}

class Java {
  helloJava() {
    console.log("Hello Java")
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log("Hello JavaScript")
  }
  javaScript: any
}

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  if (!!(lang as Java).helloJava) {
    (lang as Java).helloJava();
  } else {
    (lang as JavaScript).helloJavaScript();
  }
  return lang
}

getLanguage(Type.Strong)

getLanguage2(Type.Strong, '1')

// 创建特殊区块的方法
// 1、instanceof

function getLanguage2(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  // if (!!(lang as Java).helloJava) {
  //   (lang as Java).helloJava();
  // } else {
  //   (lang as JavaScript).helloJavaScript();
  // }

  // 1、instanceof 判断一个实例是不是属于某个类
//   if (lang instanceof Java) {
//     lang.helloJava();
//   } else {
//     lang.helloJavaScript();
//   }

  // 2、in 判断一个属性是不是属于某个对象
//   if ('java' in lang) {
//     lang.helloJava();
//   } else {
//     lang.helloJavaScript();
//   }


  // 3、typeOf 判断一个基本类型
//   if (typeof x === 'string') {
//     x.length
//   } else {
//     x.toFixed(2)
//   }
  // 4、通过类型保护函数
  if(isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  return lang

}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava != undefined
}