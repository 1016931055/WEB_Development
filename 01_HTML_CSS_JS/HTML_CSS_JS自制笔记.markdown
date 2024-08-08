## 网站和网页区别

~~~html
网站=网页+后端(java+数据库)
网页：显示给用户看的
~~~

## API网址:

~~~html
W3C:https://www.w3school.com.cn/index.html
HTML:https://www.w3school.com.cn/tags/index.asp
CSS:https://www.w3school.com.cn/cssref/index.asp
~~~

## HTML介绍

~~~html
1.HTML 指的是超文本标记语言: Hyper Text Markup Language 
	1)超文本：超过普通文本。普通文本是.txt,普通文本只能书写字符数据。超文本是除了可以存放字符数据，还可以存放视频、音频图片等
	2）标记：标签。主要用来标识的。超链接标签：a   图片标签：img  输入框标签：input
2.HTML作用： 使用标记标签来描述网页 。即写网站网页的。相当于整个网页的架构。
3.html的标签有两种：
	1）双标签：<标签名 属性名="属性值" 属性名="属性值" 。。。>文本</标签名>
    2）单标签：<标签名 属性名="属性值" 属性名="属性值" 。。。/>
**4.html不用编译。直接使用浏览器运行解析看效果。**
~~~



## CSS

~~~html
1.CSS是一门语言，用于控制网页表现
2.CSS(Cascading Style Sheet)：层叠样式表
3.W3C 标准：网页主要由三部分组成:
    结构：HTML
    表现：CSS
    行为：JavaScript
~~~

## 在html页面中引入css

##### 1.在标签内部引入

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <!--
      1.在html标签内部引入css
        1)要求属性名必须style，在属性值中书写的都是css代码格式：
          style="样式名:样式值;样式名:样式值;样式名:样式值....."
    -->
    <div style="color:red">div1</div>
</body>
</html>
~~~

##### 2.在head标签内部使用style标签引入

~~~html
<!-- 文档类型声明标签，告知浏览器这个页面采取html版本来显示页面 -->
<!DOCTYPE html>
<!-- 告诉浏览器这是一个英文网站，本页面采取英文显示，单也可以书写中文 -->
<html lang="en">
<head>
    <!-- 必须书写，告知浏览器以UTF-8编码表编解码中文，如果不书写就会乱码 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 标题标签 -->
    <title>title</title>
    <style>
        div{
           color:green; 
        }
    </style>
</head>
<body>
    <!--
        1.在head标签内部引入css
            <style type="text/css">
                作用的标签{
                    样式名:样式值;
                    样式名:样式值;
                    ......
                }
            </style>
    -->
    <div>传智教育</div>
    <div>传智教育</div>
</body>
</html>
~~~

##### 3.在head标签内部使用link标签引入外部的css文件

~~~html
<!-- 文档类型声明标签，告知浏览器这个页面采取html版本来显示页面 -->
<!DOCTYPE html>
<!-- 告诉浏览器这是一个英文网站，本页面采取英文显示，单也可以书写中文 -->
<html lang="en">
<head>
    <!-- 必须书写，告知浏览器以UTF-8编码表编解码中文，如果不书写就会乱码 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 标题标签 -->
    <title>title</title>
    <!--引入外部的css,开发使用-->
    <link rel="stylesheet" href="../css/demo01.css">
</head>
<body>
    <!--
      1.在head标签内部引入css
      <link rel="stylesheet" href="外部css文件地址"/>
    -->
    <div>传智教育</div>
    <div>传智教育</div>
</body>
</html>
~~~

外部的css文件后缀名是.css

~~~css
/*在css文件中只能书写css代码，css文件后缀名是.css*/
div{
  color:blue;  
}
~~~



## css选择器(理解)

##### 1.元素选择器

~~~css
.css文件中：
元素名{
    样式名:样式值;
    样式名:样式值;
    ....
}
~~~

##### 2.id选择器(很重要)

~~~css
.css文件中：
#id属性值{
      样式名:样式值;
      样式名:样式值;
    ....
}

HTML调用：<body>中:
<div id="myDiv">div2</div>
~~~

##### 3.类选择器

~~~css
.css文件中：
.class属性值{
      样式名:样式值;
    样式名:样式值;
    ....
}

HTML调用：<body>中:
  <div class="myDiv">div2</div>
~~~

## JavaScript介绍

~~~HTML
1.JavaScript 是一门跨平台、面向对象的脚本语言，来控制网页行为的，它能使网页可交互
	Js用来前端页面校验; 
	Js可以实现网页的一些动画效果
2.JavaScript 和 Java 是完全不同的语言，不论是概念还是设计。但是基础语法类似。
3.JavaScript（简称：JS） 在 1995 年由 Brendan Eich 发明，并于 1997 年成为 ECMA 标准。
4.ECMAScript 6 (ES6) 是最新的 JavaScript 版本（发布于 2015 年)。
5.JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。JavaScript语言不需要编译，直接由各大浏览器解析运行。学习JavaScript语言不需要单独安装软件，只需要浏览器即可
  W3C 标准：网页主要由三部分组成
    结构：HTML
    表现：CSS
    行为：JavaScript
~~~

## 在html页面中引入js文件

##### 1.内部引入

~~~html
...
<body>
    <!--在html页面内部引入js-->
    <script>
        //弹框
        alert("我是一个快乐的屌丝程序员");
        //TODO: 1.使用<script src="../js/demo01.js">
    </script>
</body>
</html>
~~~

##### 2.外部引入

~~~html
 <!-- 引入外部的js文件 -->
    <script src="../js/demo01.js"></script> //...只能引入外部的js文件，不能在文本中书写js代码
~~~

## JS的三种输出方式(掌握)

~~~html
...
<body>
<script type="text/javascript">
    //1.弹出框
    alert("哈哈");
    //2.输出数据到页面中
    document.write("呵呵");
    //3.输出到浏览器控制台
    //调出浏览器控制台快捷键：f12
    console.log("嘿嘿");
</script>
</body>
</html>
~~~

## 定义变量 掌握

~~~html
...
<body>
  <script type="text/javascript">
      /*
        定义js中的变量：
         1.es6前使用var定义
         2.es6开始定义变量是let 常量使用const
       */
      // 1.es6前使用var定义
      var i = 10;
      console.log(i);
      //2.es6开始定义变量是let 常量使用const 推荐使用
      let x="哈哈";
      console.log(x);

      let y=3.14;
      console.log(y);//3.14

      //定义常量：不能改变
      const PI=3.14;
      //更改常量PI的值
      //PI=1.2;//报错，因为PI是常量，不能改变
      console.log(PI);
  </script>
</body>
</html>
~~~

定义变量：let 变量名=数值;

定义常量：const 常量名=数值; 不能改变。

## 数据类型(掌握)

~~~html
...
<body>
  <script type="text/javascript">
      /*
        js的数据类型：
          1.原始数据类型
            1)number (整数 小数 NaN)
            2)string 字符类型
            3)布尔类型  true false
            4)null ：空对象类型
            5）undefined ：未定义类型
          2.引用数据类型 Object Date等
       */
      let i =10;
      //输出i的数据类型
      console.log(typeof i);//number

      //定义字符类型
      let s1='哈哈';
      //输出s1的数据类型
      console.log(typeof s1);//string

      //定义变量接收NaN数据
      let j=1-'abc';
      //输出j的值
      console.log(j);//NaN not a number 不是一个数字
       //输出j的数据类型
       console.log(typeof j);//number

       //定义变量
       let x;
       console.log(x);
       //输出x的数据类型
       console.log(typeof x);//undefined


       //2.引用数据类型 Object Date等
       // 获取当前系统时间
       let date = new Date();
       console.log(date);//Thu Dec 01 2022 17:10:49 GMT+0800 (中国标准时间)
      ///////////////////////typeof关键字////////////////////////////////////////
      /*
        typeof关键字作用：可以查看某个变量的数据类型。
        格式：typeof 变量名
       */
      
  </script>
</body>
</html>
~~~

# 20.运算符(掌握)

~~~html
<!-- 文档类型声明标签，告知浏览器这个页面采取html版本来显示页面 -->
<!DOCTYPE html>
<!-- 告诉浏览器这是一个英文网站，本页面采取英文显示，单也可以书写中文 -->
<html lang="en">

<head>
    <!-- 必须书写，告知浏览器以UTF-8编码表编解码中文，如果不书写就会乱码 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 标题标签 -->
    <title>title</title>
</head>
<body>
  <script type="text/javascript">
      /*
         == 和 ===区别
          1. == :非严格比较，具有强制类型转换功能，如果两侧的数据类型不一致，转换一样的类型，然后比较数值是否相等
          2.=== :严格比较，如果运算符两侧类型不一致，比较类型，然后返回false,如果类型一致在比较数值。
       */
      //定义变量
      let i=10;
      let j='10';
      //输出比较结果
      console.log(i==j);//true  比较数值 10==10==》true
      console.log(i===j);//false  i属于number类型，j属于string类型，类型不一致，因此结果是false

      /*
        逻辑运算符：
          && || !
            1.&& 短路与 ： 一徦即假  false && true
            2.|| 短路或 ： 一真即真 true || false 
            3.在js中有六种假：
              1）false
              2) 0
              3)空字符 '' 或者 ""
              4）NaN 
              5)null
              6)undefined
              TODO:在js中逻辑运算符可以针对任意类型进行运算
       */
      if(0 || true){
          console.log("真的");
      }else{
          console.log("假的");
      }

      if(10 && 1.2){
          console.log("真的");
      }else{
          console.log("假的");
      }

      if(10 && ''){
          console.log("真的");
      }else{
          console.log("假的");
      }
     
  </script>
</body>
</html>
~~~

# 21.扩展_全局函数

~~~html
<!-- 文档类型声明标签，告知浏览器这个页面采取html版本来显示页面 -->
<!DOCTYPE html>
<!-- 告诉浏览器这是一个英文网站，本页面采取英文显示，单也可以书写中文 -->
<html lang="en">

<head>
    <!-- 必须书写，告知浏览器以UTF-8编码表编解码中文，如果不书写就会乱码 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 标题标签 -->
    <title>title</title>
</head>
<body>
<script type="text/javascript">
    /*
      其他类型转换为数字
      1.parseInt(数值)：将参数数值转换为整数，从左向右解析，遇到非数值就停止解析 
      2.在js中有全局函数概念：不归属任何对象，即可以理解为不需要任何对象调用的函数
        TODO:注意：所有的全局函数都可以使用浏览器窗口对象调用，即window对象调用，但是可以省略
     */
    let s = "123abc";
    //将s转换为number类型
    console.log(window.parseInt(s));//123
    console.log(parseInt("12.3"));//12
    console.log(parseInt("a12.3"));//NaN  这里解析的时候遇到非数值a则停止解析

    //将布尔类型转换为整数 ：true 1  false 0
    console.log(Number(true));//1
    console.log(Number(false));//0

    ///////////////////其他类型转换为布尔类型////////////////////
    console.log(Boolean(0));//false
    console.log(Boolean("哈哈"));//true

</script>
</body>
</html>
~~~

