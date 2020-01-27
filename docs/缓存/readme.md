# 缓存：

通过命中缓存，以降低网络流量，使网站加载速度更快。在部署新版本时，不要更改资源文件名，浏览器可能认为他没有被更新，就会使用它的缓存版本，缓存的存在，当你需要获取新的代码时，就会显得很棘手。所有通过必要的配合，以确保webpck编译生成的文件能被客户端缓存，在文件内容变化时，能够请求到新的文件。

#### 1.0 输出文件名：

```
    output: {
+     filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')    }
```

bundle 的名称是它内容（通过 hash）的映射

#### 2.0 提取引导模板：

```
+   optimization: {
+     runtimeChunk: 'single'
+   }
```

构建后，会提取出来runtime bundle，为所有 chunk 创建一个 runtime bundle

#### 3.0 提取第三方库到vendor 文件：

```
    optimization: {
-     runtimeChunk: 'single'
+     runtimeChunk: 'single',
+     splitChunks: {
+       cacheGroups: {
+         vendor: {
+           test: /[\\/]node_modules[\\/]/,
+           name: 'vendors',
+           chunks: 'all'
+         }
+       }
+     }
```

[name]文件不再含有来自`node_modules` 目录的 `vendor` 代码，被分配到vendors.文件了。

#### 4.0 模块标识符：

`vendor` bundle 会随着自身的 `module.id` 的变化，而发生变化，而 `vendor` hash 发生变化是我们要修复的。使用两个插件来解决这个问题。第一个插件是 `NamedModulesPlugin`，将使用模块的路径，而不是一个数字 identifier。虽然此插件有助于在开发环境下产生更加可读的输出结果，然而其执行时间会有些长。第二个选择是使用 [`HashedModuleIdsPlugin`](https://webpack.docschina.org/plugins/hashed-module-ids-plugin)，推荐用于生产环境构建：

```
+ const webpack = require('webpack');
```

```
+      new webpack.HashedModuleIdsPlugin()
```

现在，不论是否添加任何新的本地依赖，对于前后两次构建，`vendor` hash 都应该保持一致：
