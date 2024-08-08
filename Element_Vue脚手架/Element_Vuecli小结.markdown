## 小结

# Element

- Element：网站快速成型工具。是一套为开发者、设计师、产品经理准备的基于Vue的桌面端组件库。

- 使用Element前提必须要有Vue。

- 使用步骤
  1.下载Element核心库。
  2.引入Element样式文件。
  3.引入Vue核心js文件。
  4.引入Element核心js文件。
  5.借助常用组件编写网页。
  
- 常用组件
  网页基本组成部分，布局、按钮、表格、**表单**等等~~~
  
- 常用组件不需要记住，只需要在Element官网中复制并学会修改使用即可。

- 官网: https://element.eleme.cn/#/zh-CN

  #   1.Node.js

  ~~~javascript
  官网：https://nodejs.org/zh-cn/ 
  中文学习网：http://nodejs.cn/learn
  ~~~

  > 1.*Node.js* 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。*Node.js* 使用了一个事件驱动、非阻塞式 I/O 的模型,使其轻量又高效。
  >
  > 2.前端的底层 html,css和 js, 这些都不需要编译 , 由浏览器解释运行(解释型语言)

  > 3.我们可以将Node.js理解成java的 JDK
  >
  > 4.*Node.js* 的包管理器 npm,是全球最大的开源库生态系统。

  小结：Node.js 是一个开源和跨平台的 JavaScript 运行时环境，功能类似于浏览器。

  

  我们在命令提示符下输入命令

  ```shell
  node demo1.js ---运行demo1.js文件
  ```

  ### 模块化编程

  > node的exports和require(模块化)
  >
  > 模块就是文件

  创建文本文件demo3_1.js

  ```js
  exports.add=function(a,b){ // 导出
  	return a+b;
  }
  ```

  创建文本文件demo3_2.js

  ```js
  let demo= require('./demo3_1');  // 导入 ./ 必须书写，表示使用当前路径导入demo3_1文件的内容
  console.log(demo.add(400,600));
  ```

  我们在命令提示符下输入命令

  ```sh
  node demo3_2.js
  ```

  结果为1000

# 2.npm 包管理器

​	npm全称 Node Package Manager，是 Node.js 标准的软件包管理器。

​	在 2017 年 1 月时，npm 仓库中就已有超过 350000 个软件包，这使其成为世界上最大的单一语言代码仓库，并且可以确定几乎有可用于一切的软件包。

它起初是作为下载和管理 Node.js 包依赖的方式，但其现在也已成为前端 JavaScript 中使用的工具。

   `npm` 有很多功能。

> 可以把它看成maven中包依赖管理那部分

## 2 npm命令

### 2.1 初始化工程

init命令是工程初始化命令。

建立一个`npmdemo`空文件夹，在命令提示符进入该文件夹  执行命令初始化

```sh
npm init
```

最后会生成**package.json**文件，这个是包的配置文件，相当于maven的pom.xml

### 2.2 本地安装(了解)

install命令用于安装某个模块，如果我们想安装express模块（node的web框架），输出命令如下：

```sh
npm install express
```

### 2.3 全局安装(掌握)

刚才我们使用的是本地安装，会将js库安装在当前目录(node_modules)，只对当前工程有效, 而使用全局安装会将库安装到你的全局目录下。

如果你不知道你的全局目录在哪里，执行命令

> -g   global 全局

```sh
npm root -g
```

比如我们全局安装vue,  输入以下命令

```sh
npm install vue -g
```

### 2.4 批量下载

我们从网上下载某些代码，发现只有package.json,没有node_modules文件夹，这时我们需要通过命令重新下载这些js库.

进入目录（package.json所在的目录）输入命令

```sh
npm install
```

此时，npm会自动下载package.json中依赖的js库.

### 2.5 淘宝NPM镜像【建议使用】

有时我们使用npm下载资源会很慢，所以我们可以安装一个cnmp(淘宝镜像)来加快下载速度。

输入命令，进行全局安装淘宝镜像。

**注意：需要保证网络畅通。**

```sh
更换成淘宝的源
npm config set registry https://registry.npm.taobao.org 
– 配置后可通过下面方式来验证是否成功 
npm config get registry 

npm install cnpm@7.1.0 -g
```

安装后，我们可以使用以下命令来查看cnpm的版本

> 如果安装之后有问题, 请查看  资料\问题

```sh
cnpm -v
```

使用cnpm

```sh
cnpm install -g 需要下载的js库
例如：
 cnpm install -g axios
```

### 2.6 运行工程

如果我们想运行某个工程，则使用run命令

如果package.json中定义的脚本如下：

* dev是开发阶段测试运行

* build是构建编译工程

* lint 是运行js代码检测 

```sh
npm run dev
```

### 2.7 编译工程

我们接下来，测试一个代码的编译.编译后我们就可以将工程部署到nginx中

编译后的代码会放在dist文件夹中，首先我们先删除dist文件夹中的文件,进入命令提示符输入命令

```sh
npm run build
```

生成后我们会发现只有个静态页面，和一个static文件夹

这种工程我们称之为单页Web应用（single page web application，SPA），就是只有一张Web页面的应用，是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。

这里其实是调用了webpack来实现打包的，关于webpack我们后续的章节进行介绍

#  3.Webpack

https://webpack.js.org/ (官网)

webpack 是一个现代 javascript 应用程序的 **静态模块打包器 (module bundler)**

 vue-cli 脚手架环境, 集成了 webpack, 所以才能对各类文件进行打包处理

![](E:/Java学习课件/Web开发/day04-Element&Vue脚手架/01_课件/02_Vue脚手架/assets/1-1.jpg) 

webpack是一个 静态模块 打包器,可以做以下的这些工作

1. 语法转换(主要是浏览器兼容)

   - less/sass转换成css
   - ES6转换成ES5
   - ...

2. html/css/js 代码压缩合并 (打包，将多个文件变为一个或数个)

3. webpack可以在开发期间提供一个开发服务器

   

> 可以把它看成maven中工程自动化那部分(<packaging>jar</packaging>) ,前端项目也是先打包再上线

**运行方法：**

~~~js
1.新建项目空白目录，运行`npm init –y` 命令，初始化包管理配置文件package.json

2. 新建 src 源代码目录,并且把 bar.js 和 logic.js 和 main.js 文件复制到 src目录

3. 创建index.html ,引用bundle.js：
	<!doctype html>
    <html>
      <head>  
      </head>
      <body>   
        <script src="dist/bundle.js"></script>
      </body>
    </html>
4.运行 `npm install webpack webpack-cli` 命令，安装webpack相关的包(如果全局安装过webpack 和 webpack-cli工具, 此步骤可跳过)

5.在项目根目录中，创建名为webpack.config.js 的 webpack配置文件:
	var path = require("path");
    module.exports = {
        mode: 'development', // mode 用来指定构建模式development、production
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        }
    };

6.在package.json 配置文件中的scripts节点下，新增dev脚本如下：
    {
      "name": "work4",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack"  //script 节点下的脚本，可以通过 npm run 执行
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }

7. 在终端中运行 `npm run dev` 命令，启动webpack进行项目打包。
~~~

# 4. webpack-dev-server 开发服务器

​	每次修改代码, 都需要重新打包, 才能看到最新的效果, 且实际工作中, 打包非常费时 (30s - 60s) 之间

为什么费时? 

1. 构建依赖
2. 读取对应的文件, 才能加载  
3. 用对应的 loader 进行处理  
4. 将处理完的内容, 写入到 dist 目录  

简而言之就是我们希望修改源码完毕之后，不用再每次重新打包，运行的结果直接是修改后的结果。

解决方案：我们可以开启一个开发服务器webpack-dev-server,  **在电脑内存中打包**, 缓存一些已经打包过的内容, 只重新打包修改的文件 **(热更新)**



~~~js
package.json 配置文件中
 "dev": "webpack" 变为：
 "dev": "webpack-dev-server"
~~~

# 5.vue-cli 脚手架(重点)

> `vue-cli`也叫vue脚手架,`vue-cli`是vue官方提供的一个全局命令工具，这个命令可以帮助我们快速的创建一个vue项目的基础架子。
>
> 脚手架：搭建好的一个架子，我们在架子上进行开发

- 开箱即用
- 零配置
- 基于webpack、webpack-dev-server

https://cli.vuejs.org/zh/guide/

### 1.安装脚手架到全局位置

~~~java
cnpm install vue-cli -g 
~~~

### 2.使用脚手架命令初始化工程(开发中都是前端工程师做的)

~~~java
cnpm install vue-cli -g    # 只需安装一次， 可以使用cnpm安装,通过

# Windows使用 `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
    
# work5是模块名字
vue init webpack work5
    
# 查看vue版本
vue --version
~~~

![img](./课件/assets/1158910-20180402175800742-1696202686.png)

1、在src目录下创建 views 文件夹

2、在views文件夹下创建 userList.vue 组件文件(Vue文件格式如下)

~~~vue
<template>
</template>

<script>
</script>

<style>
</style>
~~~

3、在 router/index.js 下定义页面路由

~~~js
import userList from '@/views/userList' //引入新的组件
~~~

4、修改根组件App.vue

~~~vue
<template>
  <div id="app">
    <img src="./assets/logo.png"> 
    <!-- 注意：这里需要加# -->
    <a href="#/">发现vue</a>
    <a href="#/users">发现好友</a><br>

    <!-- 组件的输出位置 -->
    <router-view/>

  </div>

</template>
~~~



~~~markdown
# 1.对于index.html和main.js文件我们不需要修改
# 2.main.js文件引入根组件App.vue
# 3.根组件App.vue包含其他组件即components目录或者自己创建的views目录下的组件，组件以 .vue结尾的文件
# 4.修改完组件一定要修改路由(router/index.js)
# 5.自己的图片一般存放在static目录下
~~~

# 6.Element-UI组件库

## 安装

element官网：

~~~html
https://element.eleme.cn/#/zh-CN/component/installation
~~~



1. 推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

   ```js
   cnpm i element-ui -S
   ```


1. 说明：i是install的首字母。S 是save的首字母

2. 导入Element-UI 相关资源

   

   在main.js中添加如下配置：

```js
  // 导入组件库
  import ElementUI from 'element-ui';
  // 导入组件相关样式
  import 'element-ui/lib/theme-chalk/index.css';
  // 配置 Vue 插件
  Vue.use(ElementUI);
```

## 2 快速入门

需求：实现elementui中的表格

1. 新增 views/elementview.vue

2. 到router/inidex.js中配置路径

3. 修改App.vue

   ```html
   <template>
     <div id="app">
       <img src="./assets/logo.png"> 
       <a href="#/">发现vue</a>
       <a href="#/userlist">发现好友</a>
       <a href="#/elementview">elementui使用</a>
       <br>
       <!-- 组件的输出位置 -->
       <router-view/>
        <!-- <span>{{msg}}</span> -->
     </div>
   </template>
   
   <script>
   export default {
     data(){
       return {
         msg : "hello vue"
       }
     }
   }
   </script>
   
   <style>
     span{
       color : red
     }
   </style>
   ```
