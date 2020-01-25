# 资源管理

## 概述：

        webpack将动态打包所有依赖（创建依赖图），因为现在每个模块都可以明确表述它自身的依赖，可以避免打包未使用的模块。不仅引入JavaScript，还可以通过loader引入任何其他类型的文件。

#### 加载css

##### `yarn add style-loader css-loader`

##### webpack.config.js配置 （见代码）

         npm run build 

#### 加载image图片

        yarn add file-loader --save-dev  +  webpack.config.js配置 （引入图片资源，） +  npm run build 

#### 加载fonts 字体

        接上面配置 + webpack.config.js配置（引入字体资源，在.css文件声明） +   npm run build 

#### 加载数据

        默认能够加载json



### 总结： 针对引入何种字体还不知道。需要导入csv tsv 和 xml的话，需要引入相关依赖。package.json中build是部署环境吗，dev是开发环境。



# 管理输出

可以根据入口起点定义的名称，动态的产生bundle名称，

`

```
  const path = require('path');  module.exports = {
-   entry: './src/index.js',
+   entry: {
+     app: './src/index.js',
+     print: './src/print.js'
+   },
    output: {
-     filename: 'bundle.js',
+     filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')    }  };`
```

执行npm run build后，动态得到的名称为app.bundle.js 和 print.bundle.js

`

```
...          Asset     Size  Chunks                    Chunk Names  app.bundle.js   545 kB    0, 1  [emitted]  [big]  app print.bundle.js  2.74 kB       1  [emitted]         print
...`
```

## 设置HtmlWebpackPlugin

        当构建时重新命名生成新的bundle，我们的index.html文件仍然引用旧的bundle名称，使用htmlwebpackPlugin 

        yarn add html-webpack-plugin --save-dev +  webpack.config.js 

htmlwebpackPlugin 会默认生成他自己的index.html文件，会替换原来的文件。所有的bundle会自动添加到HTML中。



## 清理/dist 文件夹，设置clean-webpack-plugin

        在每次构建前清理/dist文件夹，这样只会生成用到的文件。

yarn add clean-webpack-plugin +  webpack.config.js 



ps： commit 1 全部内容
