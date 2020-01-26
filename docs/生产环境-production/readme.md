# 1.0生产环境

## 1.1区别：

#### 1.1.1 开发环境development(开发环境)

需要强大的source map和一个有着living reloading（实时重新加载）或hot module replacement(热模块替换)能力的localhost server 

#### 1.1.2 生产环境production

关注在压缩bundle 轻量的source map 资源优化等，通过优化方式改善加载事件



## 1.2 逻辑分离：

需要为每个环境编写彼此独立的webpack配置，遵循不重复原则，

- 安装`webpack-merge`

- 然后项目配置如下：

| webpack.common.js | webpack.dev.js | webpack.prod.js |
| ----------------- | -------------- | --------------- |
| 公共配置              | 开发环境配置         | 生产环境配置          |

- npm scripts 
  
  ```
        "start": "webpack-dev-server --open --config webpack.dev.js",
  ```

```
       "build": "webpack --config webpack.prod.js"
```

## 1.2 指定mode

指定mode会自动配置DefinePlugin,针对react，添加DefinePlugin插件后，应该看到bundle大小显著下降。mode有development 和 production。 设置production mode配置后， webpack4+ 会默认压缩你的代码。minification(压缩)



## 1.3source mapping(源码映射)

在生产环境启用source map,这样对debug运行benchmark tests (基准测试）有帮助，在生产环境production使用 

```
devtool: 'source-map'
```

在开发环境使用

```
devtool: 'inline-source-map'
```

**避免在生产production环境使用inline-和eval-，因为会增加bundle体积大小，降低整体性能**

## 1.4 最小化css

将生产环境下的 CSS 进行压缩会非常重要，请查看 [在生产环境下压缩](https://webpack.docschina.org/plugins/mini-css-extract-plugin/#minimizing-for-production) 章节。


