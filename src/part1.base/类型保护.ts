console.log("类型保护")

enum Type {
 Strong,
 Week
}

class Java {
  helloJava() {
    console.log("Hello Java")
  }
}

class JavaScript {
  helloJavaScript() {
    console.log("Hello JavaScript")
  }
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

// 创建特殊区块的方法
// 1、instanceof

function getLanguage2(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  // if (!!(lang as Java).helloJava) {
  //   (lang as Java).helloJava();
  // } else {
  //   (lang as JavaScript).helloJavaScript();
  // }

  // 1、instanceof
  if (lang instanceof Java) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  // 2、in

  return lang
}