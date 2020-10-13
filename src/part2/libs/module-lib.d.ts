declare function moduleLib(options: Options): void

interface Options { // 因为声明文件本身就是一个模块，所以这个接口不会向外暴露
    [key: string]: any
}

declare namespace moduleLib {
    const version: string
    function doSomething(): void
}

export = moduleLib
