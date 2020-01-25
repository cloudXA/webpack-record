# 开发环境

ps: 指南的工具仅适用于开发环境，不要在生产环境中使用他们



#### 1.0 将mode设置为'development'模式

#### 2.0 使用source map 帮助定位错误来自的源文件 -- devtool 选项

#### 3.0  自动编译代码

    3.0.1 webpack watch mode (webpack 观察模式)

    3.0.2 webpack-dev-server  ✔

    3.0.3 webpack-dev-middleware 

webpack-dev-server在编译之后不会写入到任何输出文件，而是将bundle文件保留在内存中，然后将他们server到server中。可以通过dev server 配置中的publicPath选项进行修改。

##### 3.1 webpack-dev-server

    `

```
 devServer: {
+     contentBase: './dist'
+   },`
```

修改配置文件，告诉dev server 从什么位置查找文件。

添加一个可以直接运行dev server 的script 

`

```
   "start": "webpack-dev-server --open",`
```

#### 4.0 使用webpack-dev-middleware

`webpack-dev-middleware` 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。 `webpack-dev-server` 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。下面是一个 webpack-dev-middleware 配合 express server 的示例。


