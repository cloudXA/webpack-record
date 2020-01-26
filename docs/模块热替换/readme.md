# 模块热替换

## 概念：

        模板热替换（hot module replacement / HMR）是webpack提供的最有用的功能之一。允许运行时时更新所有类型的模块，无需刷新。HMR不适用于生产环境，这意味着他应用于开发环境。



### 启用HMR：

#### 步骤一：

更新webpack.config.js配置，使用webpack内置的 插件

```
HotModuleReplacementPlugin
```

#### 步骤二：

修改index.js文件，在print.js内部发生变更时，告诉webpack接收update module 



### 通过Node.js

#### 步骤一：

添加新的dev-server.js文件，在package.json 添加“dev-server”脚本



### HMR加载样式

#### 步骤一：

yarn add style-loader css-loader --save-dev

#### 步骤二:

src 中添加style.css 

#### 步骤三：

在index.js 中引入style.css文件,当你操作npm run dev-server 就可以看到实时更新的文件。




