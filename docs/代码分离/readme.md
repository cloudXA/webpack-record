# 代码分离

- 入口起点，使用entry配置手动分离代码

- 防止重复 ，使用[`SplitChunksPlugin`](https://webpack.docschina.org/plugins/split-chunks-plugin/) 去重和分离 chunk。

- 动态导入：通过模块中的内联函数调用来分离代码

## 入口起点：

```
 entry: {    index: './src/index.js',
+   another: './src/another-module.js'
  },
```

但是存在重复加载loader，这种方法不能动态将核心应用程序逻辑中的代码拆分出来。防止重复： （prevent duplication）

添加[`SplitChunksPlugin`](https://webpack.docschina.org/plugins/split-chunks-plugin/)插件，将重复lodash模块去掉

```
+   optimization: {
+     splitChunks: {
+       chunks: 'all'
+     }
+   }
```

## 动态导入：

使用chunkFilename作为output。 通过getComponent使用动态导入dynamic import 动态导入分离一个chunk。

针对async函数做出简化，需要使用像babel这样的预处理器和[Syntax Dynamic Import Babel Plugin](https://babel.docschina.org/docs/en/babel-plugin-syntax-dynamic-import/#installation)做简化，TODO: 


