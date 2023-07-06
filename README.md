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