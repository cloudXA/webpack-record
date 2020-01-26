# tree shaking(摇树叶)

tree shaking 用于表述移除JavaScript上下文中的未引入的引用代码（dead-code），依赖es6模块语法的静态结构。

### side-effect-free（无副作用）

`{`

`        "sideEffects" : false `

`}`

以上为无副作用的，可以达到这种纯度，告知webpack可以安全删除未用到的export 。

当代码确实存在一些副作用时，可以改为提供一个数组。

*所有导入文件都会收到tree shaking的影响，这意味着，如果在项目中使用类似css-loader 并import 一个css文件，则需要将其添加到side effect列表中，以免在生产模式中无异中将它删除*

`{`

`        "sideEffects" : [`

`                    "*.csss"`

`        ] `

`}`



## 结论：

- 使用es6模块语法

- 确保没有compiler将es6模块语法转换为commonjs模块

- 在package.json文件中，添加一个sideEffects属性

- 通过将mode选项设置为production，达到启用minification（代码压缩）和 tree shaking 


