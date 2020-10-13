declare namespace umdLib {
    const version = '3.0.0'
    function doSomething(): void
}

export as namespace umdLib  // 专为umd模块设置的语句
export = umdLib
