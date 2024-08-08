## JS函数格式一

~~~javascript
<body>
  <script type="text/javascript">
      /*
        js中的函数定义格式：
        function 函数名(参数列表){
          函数体
        }
       */
      function fn(){
        console.log("fn....");
      }

     //调用函数 ：函数名(实参,....);TODO:函数必须被调用才能执行
     fn();

     //定义函数
     function add(a,b){
        console.log(a+"---"+b);
        //返回
        return a+b;
     }

     //调用add函数
     let sum = add(10,20);
     console.log(sum);

  </script>
</body>
~~~

## 函数格式二

~~~js
let 变量名 = 函数名(实参,实参);

//将匿名函数赋值给一个变量
  let add = function(x,y){
      console.log(x+"---"+y);
      return x+y;
  }

  //调用函数
  let sum = add(1,2);
  console.log(sum);
~~~

## 函数注意事项

~~~js
// 1.在js中没有函数重载概念，如果存在函数名一样的函数，后出现的函数就会覆盖之前的函数名
    function fn2(){
        console.log("fn2......");
    }

    function fn2(a,b){//let a;
        console.log("fn2......"+ a + b);
    }
    //调用函数
    // fn2(10,20);
    fn2();//fn2......undefinedundefined

    //2.在js中调用无参函数可以传递实参；调用有参函数可以不传递实参.数据没有丢失会放到js的一个内置数组对象中 arguments
    function fn3(){//let arguments =[10,1.2];
        console.log("fn3.....");
        //遍历数组
        for(let i=0;i<arguments.length;i++){
            console.log(arguments[i]);
        }
    }
    fn3(10,1.2);
~~~

## RegExp正则对象（重点）

### 1.创建正则对象

有两种方式：

【1】方式一

~~~js
let 正则对象 = new RegExp("^正则表达式$");
~~~

**【2】方式二推荐使用**

~~~javascript
let 正则对象 = /^正则表达式$/;
说明：这种写法在双斜杠中不用书写引号
~~~

注意：

1.方式二在//中直接书写正则表达式，不用书写单引号 ^0-9$

2.在js中由于一些浏览器兼容问题，书写正则符号的时候最好加上边界词：

以什么开始：^

以什么结尾：$

### 2.验证函数

使用RegExp中的test函数，使用格式：

~~~javascript
let result = 正则对象.test(被验证的字符串);
	说明：
    	如果被验证的字符串满足正则表达式则test函数返回true,否则返回false
~~~

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script type="text/javascript">
        /*
             需求：使用正则表达式验证指定的字符串是否满足长度是6.
         */
        //1.创建正则对象
        /*
            1.在正则表达式中任意字符使用符号： .
            2.在正则中表示出现的次数：
                {n,m} 最少出现n次，最多出现m次
                {n,} 最少出现n次
                {n} 正好出现n次
            3.   .{6}  表示正好出现6位任意字符

            4.  ^  表示以什么开始    $ 表示以什么结尾
         */
        // let reg = new RegExp("^.{6}$");
        let reg =/^.{6}$/;
        //2.使用正则对象调用test函数验证字符串
        let result = reg.test("abj1a9");
        console.log(result);
    </script>
</body>
</html>
~~~

## String对象

在js中string属于基本类型(原始数据类型)，然后js将其包装成了引用类型(复合数据类型)。

【1】创建String对象方式
                1. let txt = new String("string"); 使用构造方法创建对象 了解
                                2. let 对象名 = "字符串"; 使用双引号 理解
                                3. let 对象名 = '字符串'; 使用单引号 掌握
                                                4. let 对象名 = `字符串`; 使用反单引号(键盘上的波浪线，在esc下面) 掌握  从es6开始的目的是为了简化字符串的拼接

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script type="text/javascript">
        /*
            【1】创建String对象方式:
                1.let txt = new String("string"); 使用构造方法创建对象 了解
                2.let 对象名 = "字符串"; 使用双引号 理解
                3.let 对象名 = '字符串'; 使用单引号 掌握
                4.let 对象名 = `字符串`; 使用反单引号(键盘上的波浪线，在esc下面) 掌握  从es6开始的目的是为了简化字符串的拼接
         */
        //1.let txt = new String("string"); 使用构造方法创建对象 了解
        let s = new String("柳岩");//s保存地址值
        console.log(s.toString());//柳岩

        // 2.let 对象名 = "字符串"; 使用双引号 理解
        let s1 = "杨幂";
        console.log(s1);//杨幂

        //3.let 对象名 = '字符串'; 使用单引号 掌握

        let s2 = '赵丽颖';
        console.log(s2);//赵丽颖

        // 4.let 对象名 = `字符串`; 使用反单引号(键盘上的波浪线，在esc下面) 掌握  从es6开始的目的是为了简化字符串的拼接
        let i = 10;
        let s3 = '哈哈' + i + '呵呵';//+是拼接
        console.log(s3); //哈哈10呵呵
        //在反单引号中${获取数据的变量名}
        let s4=`嘿嘿${i}嘻嘻`;//es6的新语法
        console.log(s4);//嘿嘿10嘻嘻
    </script>
</body>
</html>
~~~

小结：

创建String对象方法：

~~~js
1.双引号
2.构造方法 了解 let s1=new String("abc");
3.单引号 推荐  let s2='def';
4.反单引号：let s3 = `efg`;

	注意：使用反单引号主要目的为了方便字符串的拼接，省去了字符串+拼接的麻烦
	let s3 = `efg`;
	`${s3}锁哥` 结果是  efg锁哥
    ${变量}这种写法只能书写在反单引号中，${变量}大括号中的变量不一定是反单引号定义的，可以是单引号定义的
~~~

## 自定义对象(重要)

- 格式

~~~javascript
let 对象名称 = {
    			属性名称1:属性值1,
    			属性名称2:属性值2,
    			...
    			函数名称:function (形参列表){}
    			...
			  };
例：
let person ={
      username:"柳岩",
      age:20,
      //定义函数
      eat:function(a){//a=100
        //在自定义对象的函数中不能直接使用自定义对象中的属性，否则报错：selfObjectDemo06.html:32 Uncaught ReferenceError: username is not defined
        // console.log(username+"干饭人，干饭魂,a="+a);
        //使用对象person调用属性名可以获取属性值
        // console.log(person.username+"干饭人，干饭魂,a="+a);
        //后期经常使用的方式：这里的this表示当前自定义对象person
        console.log(this.username+"干饭人，干饭魂,a="+a);
      }
    };
    //如果在自定义对象外部获取自定义对象中的属性值，那么格式：对象名.属性名
    // console.log(person.username);//"柳岩"
    // console.log(person.age);//20
    //调用自定义对象中的函数：对象名.函数名(实参);
    person.eat(100);//干饭人，干饭魂,a=100
~~~

## 2.**BOM(Browser Object Model)**

浏览器对象模型，操作浏览器的。常用的浏览器对象：

1. window对象：Window 对象表示浏览器中打开的窗口。

2. location对象：Location 对象包含有关当前 URL 的信息。

   Location 对象是 window 对象的一部分，可通过  window.Location 属性对其进行访问。

3. history对象：History 对象包含用户（在浏览器窗口中）访问过的 URL。 

History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。

## 2.1.window对象

表示浏览器窗口对象。属于最大的窗口对象，在js中可以使用window对象调用全局函数，属性以及document history location对象。

【1】弹出框

~~~javascript
window.alert(弹出信息);
~~~

**【2】确认框** 掌握

```javascript
let result = window.confirm(确认信息);
	说明：
    	1）确认框具有两个按钮：确定  取消
        2）当点击确定按钮，该函数就会返回true
        3）当点击取消按钮，该函数就会返回false
```

【3】信息提示框

~~~javascript
let result =  window.prompt(提示信息,默认值);
	说明：
        1）信息提示框具有两个按钮：确定  取消
        2）当点击确定按钮，该函数就会返回信息框的值
        3）当点击取消按钮，该函数就会返回null
~~~

### 1.2定时器

- 定时器setInterval

~~~javascript
let timer = window.setInterval(code, millisec) 按照指定的周期（间隔）来执行函数或代码片段。
	参数1： code 必须写。  执行的函数名或执行的代码字符串。 
	参数2： millisec 必须写。时间间隔，单位：毫秒。
window可以理解为浏览器窗口。后面会讲解。
timer 返回值：一个可以传递给 window.clearInterval(定时器的返回值) 从而取消对 code 的周期性执行的值。
在关闭定时器时需要使用定时器的返回值作为参数，否则不知道关闭哪个定时器。
例如：
方式：函数名 ， 	setInterval(show, 100);  √ show 表示函数名，100表示每隔100豪秒执行这个函数。
~~~

案例:

需求：开启一个定时器，每隔1秒钟输出一次 hello world。

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script type="text/javascript">
        /*
            1.定时器
            let 返回值 = window.setInterval(调用函数,时间间隔属于毫秒);
            2.取消定时器
            window.clearInterval(定时器返回值);
         */
        //需求：开启一个定时器，每隔1秒钟输出一次 hello world。
        /*
            第一个参数表示匿名函数，传递给setInterval函数底层，底层负责调用，我们只需要书写函数体传递即可
            第二个参数：表示时间间隔单位是毫秒
         */
        window.setInterval(function () {
            console.log('hello world');
        }, 1000);

        //需求：定时器执行一次hello world就取消定时器
        let timer = window.setInterval(function () {
            console.log('hello world');
            // 取消定时器 timer 表示上述定时器的返回值,执行一次匿名函数体代码之后再执行该代码进行取消定时器
            window.clearInterval(timer);
        }, 1000);
        //取消定时器 timer 表示上述定时器的返回值
        //window.clearInterval(timer);
    </script>
</body>
</html>
~~~

- 定时器setTimeout

~~~javascript
window.setTimeout(code,millisec)
参数：
code  必需。要调用的函数。 (function(){...})
millisec 必需。在执行代码前需等待的毫秒数。
注意：
该定时器只执行一次
~~~

## 2.2 window对象练习_切换灯泡图片

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
    <title>Title</title>
</head>
<body>
<!--
    onclick属于js中的单击事件，只要单击当前开灯的input按钮标签就会执行该事件，调用该事件的js函数on()
-->
<input type="button" onclick="on()" value="开灯">
<!-- 引入灯泡的图片 -->
<img id="myImage" border="0" src="imgs/off.gif" style="text-align:center;">
<input type="button" onclick="off()" value="关灯">

<script>
    //修改img标签的src属性值变为imgs/on.gif===》src="imgs/off.gif" ===》src="imgs/on.gif"
    function on(){
        /*
            1.document.getElementById('myImage') 根据标签<img id="myImage" border="0" src="imgs/off.gif" style="text-align:center;">
            的id属性值获取img整体标签对象，

            2.document.getElementById('myImage').src='imgs/on.gif'; 使用获取的img标签对象调用img标签的src属性并赋值为imgs/on.gif
         */
        document.getElementById('myImage').src='imgs/on.gif';
    }
    //修改img标签的src属性值变为imgs/off.gif===》src="imgs/on.gif" ===》src="imgs/off.gif"
    function off(){
        document.getElementById('myImage').src='imgs/off.gif'
    }

    /*
        需求：每隔一秒，灯泡切换一次状态
        就是每隔一秒更改一次<img id="myImage" border="0" src="imgs/off.gif" style="text-align:center;">标签的src属性值
        这里我们只需要每隔一秒调用上面的js中的on或者off函数即可
     */
    //1.开启定时器
    //2.TODO:定义变量x,并且给初始值
    let x=0;
    window.setInterval(function(){
        //3.切换图片 on() off()函数  先执行on() 过一秒在执行off() 
        if(x % 2 == 0){
            //开灯
            on();
        }else{
            //关灯
            off();
        }
        //4.修改x变量
        x++;
    },1000);

</script>

</body>
</html>
~~~

## 2.3 **Location对象(理解)**

1.window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

~~~html
<body>
    <script type="text/javascript">
        /*
            需求：设置location的href值来实现窗口的跳转。
            就是在页面加载的时候直接访问http://www.baidu.com
         */
        window.location.href = 'http://www.baidu.com';
    </script>
</body>
~~~

## 2.4 **History对象（理解）**

![image-20210422205144979](E:\Java学习课件\Web开发\day01-HTML&CSS&JS基础\04-代码\授课代码\day23_html_css\JavaScript\课件\01_js高级\img1\image-20210422205144979.png)

1.window.history 对象包含浏览器的历史。表示浏览器的历史记录对象。

2.**window.history**对象在编写时可不使用 window 这个前缀。就是我们在使用的时候可以不写window对象

3.History对象常见的函数：

~~~javascript
1.history.back() - 与在浏览器点击后退按钮相同  后退一步
2.history.forward() - 与在浏览器中点击按钮向前相同  前进一步
3.history.go(整数) 如果参数是正整数那么就是前进，如果参数是负整数就是后退。
	举例：
    	 1  前进一步 
         2  前进2步
        -1  后退一步 
        -2  后退2步
~~~

## **DOM概述**  理解

DOM:document object model 文档对象模型, 用来操作html页面中所有html标签的(操作html标签的文本 属性 css样式 以及事件)

DOM中将所有的标签封装成对象 img标签  ===>Image 对象

所有标签的父对象是Element。

在使用dom操作html标签之前，浏览器会将html页面中的标签加载到内存中形成一个dom树，上面最大的对象是document。我们可以通过document调用属性或者函数获取html标签。

![image-20240728011552436](C:\Users\szl\AppData\Roaming\Typora\typora-user-images\image-20240728011552436.png)

## 获取元素的方法

~~~html
<body>
<img id="light" src="imgs/off.gif"> <br>

<div class="cls">传智教育</div>   <br>
<div class="cls">黑马程序员</div> <br>

<input type="checkbox" name="hobby"> 电影
<input type="checkbox" name="hobby"> 旅游
<input type="checkbox" name="hobby"> 游戏
<br>
<script>
    /*
    获取：使用Document对象的方法来获取
        * getElementById：根据id属性值获取，返回一个Element对象
        * getElementsByTagName：根据标签名称获取，返回Element对象数组
        * getElementsByName：根据name属性值获取，返回Element对象数组
        * getElementsByClassName：根据class属性值获取，返回Element对象数组
     */
    //1. getElementById：根据id属性值获取，返回一个Element对象
    //获取img标签：<img id="light" src="imgs/off.gif">
    let oImg = document.getElementById("light");//参数light表示img标签的id属性值 oImg 就是<img id="light" src="imgs/off.gif">标签对象
    console.log(oImg);

    //2. getElementsByTagName：根据标签名称获取，返回Element对象数组
    //获取上述所有的div标签
    let arrDivs = document.getElementsByTagName("div");//参数div表示标签名
    
    //3. getElementsByName：根据name属性值获取，返回Element对象数组
    //获取上述所有的name属性值是hobby的标签
    let arrNames = document.getElementsByName("hobby");//参数hobby是上述标签<input type="checkbox" name="hobby"> 的name属性值
   
    //4. getElementsByClassName：根据class属性值获取，返回Element对象数组
    //获取class是cls的标签
    let arrCls = document.getElementsByClassName("cls");//参数cls是标签<div class="cls">传智教育</div> 的class属性值

</script>
</body>
</html>
~~~

## 元素的使用

~~~html
<body>
<img id="light" src="imgs/off.gif"> <br>

<div class="cls">传智教育</div>
<br>
<div class="cls">黑马程序员</div>
<br>

<input type="checkbox" name="hobby"> 电影
<input type="checkbox" name="hobby"> 旅游
<input type="checkbox" name="hobby"> 游戏
<br>

<script>
     //1. getElementById：根据id属性值获取，返回一个Element对象
     let objImg = document.getElementById("light");//<img id="light" src="imgs/off.gif">
    // 修改图片地址变为imgs/on.gif
    /*
        TODO:objImg表示<img id="light" src="imgs/off.gif">对象，img标签所属Image 对象，因此这里我们可以使用objImg调用Image 对象中的属性或者函数
            Image对象的属性：src	设置或返回图像的 URL。
    */
    objImg.src="imgs/on.gif";

    //2. getElementsByTagName：根据标签名称获取，返回Element对象数组
    let divs = document.getElementsByTagName("div");
    /*
        style:设置元素css样式
        innerHTML：设置元素内容
    */

    for (let i = 0; i < divs.length; i++) {
      //获取div标签对象
      let objDiv = divs[i];//objDiv表示<div class="cls">传智教育</div>所属Div
      //设置字体颜色为红色 标签对象.style	设置或返回元素的 style 属性。
      objDiv.style.color="red";//标签对象.style.css样式名 = "样式值"
	  //更改文本 ：传智大学  标签对象.innerHTML	设置或返回元素的文本内容。
      objDiv.innerHTML="传智大学";
    }

    //3. getElementsByName：根据name属性值获取，返回Element对象数组
    let hobbys = document.getElementsByName("hobby");
    for (let i = 0; i < hobbys.length; i++) {
        //获取每个复选框标签对象
        let objHobby = hobbys[i];//objHobby所属对象Checkbox 对象
        //设置复选框被选中 ==>Checkbox 对象 checked	属性表示设置或返回 checkbox 是否应被选中。
        //checked属性值是true表示被选中，值是false表示不被选中
        objHobby.checked=true;
    }

</script>
</body>
~~~

## 4.事件绑定介绍

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
    <title>Title</title>
</head>
<body>
<!-- 给下面的标签绑定单击事件onclick,只要单击下面的按钮就会执行fn函数 -->
<input type="button"  value="点我试试" onclick="fn();"/>
<script type="text/javascript">
  /*
    事件名作为标签属性名，在属性值中调用js函数。
   */
  function fn(){
     console.log("我被点了");
  }
</script>

<input type="button" value="点我试试" id="btn" class="cls"/>

<script type="text/javascript">
  /*
    标签对象.事件名=function(){
    }  
   */
  //document.getElementById("btn") 获取的是<input type="button" value="点我试试" id="btn"/>标签对象
  //只有是标签对象才可以绑定事件，如果是数组不能直接绑定需要遍历数组取出每个标签对象绑定事件
   document.getElementById("btn").onclick=function(){
     console.log("我又被点了");
   }
  // document.getElementsByClassName("cls").onclick=function(){//错误的，document.getElementsByClassName("cls")是数组
  //   console.log("我又被点了");
  // }
  /*
    document.getElementsByClassName("cls") 获取的内容是[input标签对象]
    document.getElementsByClassName("cls")[0] 获取上述数组中索引是0的标签对象===》input标签对象
  */
  document.getElementsByClassName("cls")[0].onclick=function(){//错误的，ocument.getElementsByClassName("cls")是数组
    console.log("我又被点了");
  }
</script>

</body>
</html>
~~~

## 5.常见事件

| **事件名**  | **说明**                 |
| ----------- | ------------------------ |
| onclick     | 鼠标单击事件             |
| onblur      | 元素失去焦点             |
| onfocus     | 元素获得焦点             |
| onload      | 某个页面或图像被完成加载 |
| onsubmit    | 当表单提交时触发该事件   |
| onkeydown   | 某个键盘的键被按下       |
| onmouseover | 鼠标被移到某元素之上     |
| onmouseout  | 鼠标从某元素移开         |

##### onsubmit事件

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
    <title>Title</title>
</head>
<body>

<form id="register" action="#">
    <input type="text" name="username" id="username"/>

    <input type="submit" value="提交">
</form>

<script>
    //需求：给form表单绑定提交事件，然后将数据提交到后台服务器
    /*
        TODO:如果输入框输入值则可以提交表单，如果输入框没有输入值不能提交表单
    */
   //1.给上述表单绑定提交事件
   document.getElementById("register").onsubmit=function(){
        //alert("表单提交了");
        //2.获取输入框输入的值
        //document.getElementById("username") 获取的是标签对象<input type="text" name="username" id="username"/>
        let usernameValue = document.getElementById("username").value;
        //3.判断usernameValue是否是空字符
        if(usernameValue === "" || usernameValue === ''){
            //不能提交表单 TODO:对于onsubmit事件来说，如果可以提交表单，那么绑定的匿名函数返回true(默认的)，反之返回false
            return false;
        }else{
            //可以提交表单
            return true;
        }
   }

</script>

</body>
</html>
~~~

1.表单提交事件，onsubmit。对于该事件，如果阻止表单提交，绑定的匿名函数体返回false.可以提交表单返回true.



##### window.onload事件

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
    <title>Title</title>
    <script>
        //需求：给form表单绑定提交事件，然后将数据提交到后台服务器
        /*
            TODO:如果输入框输入值则可以提交表单，如果输入框没有输入值不能提交表单
        */
       //1.给上述表单绑定提交事件
       //null
       /*
            TODO:如果将获取form标签的js代码放到form标签上面，那么js引擎在执行js代码的时候例如：
            document.getElementById("register") 由于浏览器还没有将form标签加载到内存中，因此这行代码
            document.getElementById("register")是获取不到form标签的register
            TODO:解决问题：我们可以先让浏览器加载下面的html标签，然后回来在执行下面的js代码即可
            可以将操作html标签的js代码放到onload时间绑定的函数中即可
       */
      window.onload=function(){
            //当整个页面的html 图片 css都执行完在执行该函数体代码
            console.log(document.getElementById("register"));
            document.getElementById("register").onsubmit=function(){
                    //alert("表单提交了");
                    //2.获取输入框输入的值
                    //document.getElementById("username") 获取的是标签对象<input type="text" name="username" id="username"/>
                    let usernameValue = document.getElementById("username").value;
                    //3.判断usernameValue是否是空字符
                    if(usernameValue === "" || usernameValue === ''){
                        //不能提交表单 TODO:对于onsubmit事件来说，如果可以提交表单，那么绑定的匿名函数返回true(默认的)，反之返回false
                        return false;
                    }else{
                        //可以提交表单
                        return true;
                    }
            }
      }
    </script>
</head>
<body>

<form id="register" action="#">
    <input type="text" name="username" id="username"/>

    <input type="submit" value="提交">
</form>
    
</body>
</html>
~~~



## 今日反馈

~~~markdown
能够在JavaScript中定义函数
	1.function 函数名(参数名,参数名,..){
		return;
	}
	2.let 变量名 = function(){}
	3.标签对象.事件名 = function(){}
能够使用JavaScript提供的Array对象、String对象
	1.Array数组对象
		1）创建数组 let 数组名= new Array(数值,数值,....); 只有一个number值，表示数组长度 不能是小数
				   let 数组名=[数值,数值,...];
		2)数组长度可变   存储的数值类型不统一 
		3）push() 向数组末尾添加元素  
		4)splice(删除数据的索引，删除数据的个数)
	2.String：
		1）创建对象  let 对象名 =""或者''
		2）获取字符串的长度：字符串对象.length 
能够使用JavaScript自定义对象
	let 对象名={
		属性名:属性值,
		属性名:属性值,
		....
		函数名:function(参数名,...){
			//在函数中使用属性：this.属性名   this.get函数名()
		}
	}
	
	对象名.属性名 获取属性值
	对象名.函数名(实参);
能够使用Window对象弹出警告框、确认提示框
	1.警告框 ：window.alert(弹出信息);
	2.确认提示框：let result = window.confirm(提示信息); 点击确定按钮，返回值是true,点击取消返回false

能够使用Window对象设置定时器
	1.一直执行的定时器：
		let 变量名 = window.setInterval(function(){},毫秒);  取消定时器 window.clearInterval(定时器变量名)
	2.只会执行一次的定时器：
		window.setTimeout(function(){},毫秒);
能够使用Location对象跳转页面
	window.location.href="跳转地址";
能够使用Document对象获取Element对象
	1.根据标签的id属性值获取的一个标签对象: document.getElementById("id属性值")
	2.根据标签名获取多个标签： document.getElementsByTagName("标签名"); 是数组
	3.根据name属性值获取多个标签： document.getElementsByName("name属性值"); 是数组
	4.根据class属性值获取多个标签： document.getElementsByClassName("class属性值"); 是数组
能够为元素绑定事件
	1.事件名作为标签属性名，在属性值中调用js函数  <标签名 事件名="调用js函数" 。。。。。
	2.标签对象.事件名=function(){}
能够说出常见事件：单击事件、失去焦点事件、获得焦点事件、鼠标移到元素之上事件、鼠标移除事件、表单提交事件
	1.单击事件 onclick
	2.失去焦点事件 : 输入框  onblur
	3.获得焦点事件:onfocus  输入框
	4.鼠标移到元素之上事件：onmouseover
	5.鼠标移除事件:onmouseout
	6.表单提交事件:onsubmit
~~~

