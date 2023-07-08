# 初始化
npm init -y

# 安装依赖
npm i -D jest

安装 Jest 后，用 jest-cli 初始化 jest 配置文件：

> npx jest --init

# 编写测试工具函数

# npx jest
npm run test

# 转译器
一些属性配置其实是被注释了，我们只要打开注释，并更新即可

不要强迫症把注释去掉，它们可以作为配置的简单版文档。

### TSC 转译

```
npm i -D typescript

安装转译器 tsc
npx tsc --init

安装 ts-jest
npm i -D ts-jest
```

### 配置ts-jest
在 jest.config.js 打开preset注释文字，并更新

```
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  // ...
};
```

### 更新ts文件

### 安装Jest 类型声明包
> npm i -D @types/jest

### 添加声明
```
// tsconfig.json
{
  "compilerOptions": {
    "types": ["node", "jest"]
  }
}
```

# 路径

使用@作为src目录

```
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

// jest.config.js
modulex.exports = {
  "moduleNameMapper": {
    "@/(.*)": "<rootDir>/src/$1"
  }
}
```

# 测试
localStorage封装成storage函数，测试storage函数

### 编写代码
```
src/utils/storage.ts
test/utils/storage.test
```

### 运行

由于 Node.js 环境并没有 localStorage，所以你会得到这样的报错：

> localStorage is not defined

### 全局 Mock
```
tests/jest-setup.ts
```

### setupFilesAfterEnv
然后在 jest.config.js 里更新 setupFilesAfterEnv 配置：

```
// jest.config.js 
module.exports = {
  setupFilesAfterEnv: ['./tests/jest-setup.ts'],
};
```

### jsdom
我们不可能把浏览器里所有的 API 都 Mock 一遍，而且不可能做到 100% 还原所有功能

因此这不是一个解决方案

别急，jest 提供了 testEnvironment 配置

```
// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
}
```

删除jest-setup.ts文件后

安装jest-environment-jsdom

> npm i jest-environment-jsdom

# 测试网页地址
第一种方法使用 jest-environment-jsdom-global (opens new window)。 这种方法会在 global 全局对象挂一个 jsdom， 通过 jsdom 的 reconfigure API 来修改 JSDOM 环境的 url。

第二种方法使用 jest-location-mock (opens new window)。 这种方法会监听 window.location.assign，通过它来改变网页地址。

> 推荐使用第二种

### jest-environment-jsdom-global
在tests/jest-setup.ts 里全局引入一下

# 需求
通过需求去写测试用例

需求: 把给定对象转换成查询参数字符串

### 先写测试用例
```
1. test/utils/objToSearchStr.test.ts
2. 在src/utils/objToSearchStr.ts中去实现
```
