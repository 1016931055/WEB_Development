---
typora-copy-images-to: assets
---

# AJAX&JSON

## 一. AJAX的概述

### 1.1 什么是ajax
AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）

导入`02_代码\授课素材\01_ajax素材\同步\day0301_maven-usermanager`项目到idea中演示同步弊端。

同步：

![image-20210615162338304](assets\image-20210615162338304.png)

异步：

![image-20220212180819173](assets\image-20220212180819173.png)



![1553212487038](assets\1553212487038-1611334197732.png) 

1.AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。

​	说明：异步：就是不同步。例如我们向后台发送请求，同步的方式是后台必须返回响应数据才可以在浏览器上进行下一步操作，而异步方式可以在不需要等待后台服务器响应数据，直接可以进行其他操作。

2.AJAX 不是新的编程语言，而是一种使用现有标准的新方法。

3.AJAX 是与服务器交换数据并更新部分网页的技术，在不重新加载整个页面的情况下。

小结：

简而言之：ajax就是一项通过js技术**发送异步请求** 的技术。     异步请求，局部更新，不是整个网页更新。




### 1.2 同步和异步的区别

```markdown
#同步
1. 浏览器与服务器是串行的操作，浏览器发起请求的时候，服务器在处理该请求的时候，浏览器只能等待。响应返回，然后才能够发送下一个请求，如果该请求没有响应，不能发送下一个请求，客户端会处于一直等待过程中。
2. 缺点：执行效率低，用户体验差。
#异步
1. 浏览器与服务器是并行工作的，浏览器发送一个请求，不需要等待响应返回，随时可以再发送下一个请求，即不需要等待。
2. 优点：执行效率高，用户体验更好。
```



![1553212724057](assets\1553212724057-1611334197732.png)

​	AJAX使用异步的提交方式，浏览器与服务器可以并行操作，即浏览器后台发送数据给服务器。用户在前台还是可以继续工作。用户感觉不到浏览器已经将数据发送给了服务器，并且服务器也已经返回了数据。

![1553212896200](assets\1553212896200-1611334197732.png)

小结：

【1】同步请求存在的问题：

1. 阻塞：请求发出后必须得等到响应结束才能操作页面信息。
2. 全部更新：整个页面更新。

【2】异步请求好处：

​	1.非阻塞：请求发出后不用等到响应结束才能操作页面信息。随时可以操作。

​	2.局部更新：页面的局部位置更新

### 1.3 AJAX的应用场景

​	Ajax通常用需要发送异步请求的地方，如表单的异步校验，搜索框的自动补全，异步加载数据；

#### 1.3.1 注册表单的用户名异步校验

​	很多站点的注册页面都具备自动检测用户名是否存在的友好提示，当用户输入的账号已经存在，那么在输入框位置会出现提示信息。该功能整体页面并没有刷新，但仍然可以异步与服务器端进行数据交换，查询用户的输入的用户名是否在数据库中已经存在。

![1530519828207](assets\1530519828207-1611334197732.png)



#### 1.3.2  内容自动补全

​	不管是专注于搜索的百度，还是站点内商品搜索的京东，都有搜索功能，在搜索框输入查询关键字时，整个页面没有刷新，但会根据关键字显示相关查询字条，这个过程是异步的。

![1530518212302](assets\1530518212302-1611334197732.png)



## 二.AJAX 的交互模型和传统交互模型的区别(了解)

AJAX 的交互模型和传统交互模型的区别如下图所示：

![](assets\ajax和同步交互区别-1611334197733.bmp)

【1】传统交互模型：浏览器客户端向服务器直接发送请求数据，然后后台服务器接收到请求，处理请求数据，期间浏览器客户端只能等待服务器处理数据，并响应数据，最后服务器将响应数据响应给浏览器客户端，浏览器接收到响应之后才可以继续下一步操作。

【2】AJAX 的交互模型：就是浏览器内部多了一个ajax引擎，浏览器客户端向服务器发送请求的数据，都是先由浏览器将请求数据交给ajax引擎，注意，ajax引擎位于浏览器内部，是由js编写的一个软件。然后接下来都是由ajax引擎和服务器进行交互，此时用户可以在浏览器上进行其他操作，如果再次向服务器发送请求，那么依然是交给ajax引擎处理，并且服务器响应的数据也是交给ajax引擎处理，由ajax引擎来分配浏览器的操作。

注意：ajax引擎内部具有一个核心对象：XMLHttpRequest。都是由该对象进行异步请求交互数据的。 new XMLHttpRequest()启用ajax引擎

**小结：ajax支持异步访问，网页局部刷新。主要是依赖于核心对象：XMLHttpRequest。Ajax就是通过XMLHttpRequest对象来发送异步的请求。**

## 三. Ajax异步请求 axios (重要!)

### 1 axios介绍

- **原生ajax请求的代码编写太过繁琐,我们可以使用axios这个库来简化操作！**

  >在后续学习的Vue(前端框架)中发送异步请求,使用的就是axios. 
  >
  >需要注意的是axios不是vue的插件,它可以独立使用.
  >
  >axios说明网站：(https://www.kancloud.cn/yunye/axios/234845) 

- **使用步骤**
  1.引入axios核心js文件。

  ![image-20210122214308443](assets\image-20210122214308443-1611334197733.png)

  2.使用axios对象调用方法来发起异步请求。
  3.使用axios对象调用方法来处理响应的数据。

- **axios常用方法**

  http://www.baidu.com?username=锁哥 ==》get请求

  ![](assets\axios常用方法-1611334197733.png) 

  **回调函数：回过头来调用的函数，回调函数都是我们负责书写，不负责调用，都是底层帮助我们调用。**

    setInterval(function(){},1000);

  ```js
  #备注: then函数的参数response是一个json对象,我们重点只需要了解response.data即可
  {
      // `data` 由服务器提供的响应 (重要!) response.data
      data: {},
  
      // `status` 来自服务器响应的 HTTP 状态码 response.status
      status: 200,
  
      // `statusText` 来自服务器响应的 HTTP 状态信息
      statusText: 'OK',
  
      // `headers` 服务器响应的头
      headers: {},
  
      // `config` 是为请求提供的配置信息
      config: {}
  }
                          
  ```

- **代码实现**

  - get请求
    - axios使用说明：

  ~~~javascript
   	/*
          *  # axios的api介绍
          *  1. get(参数) 建立和服务器的连接
          *       get参数 : 是请求地址+请求参数  ---url?key=value&key=value...
          *  2. then(fn) 处理服务器响应
          *       fn(response) : 响应成功的回调函数
          *       response.data : 响应体数据
          *
          *  3. catch(fn)
          *       fn(error) : 响应失败的的回调函数
          *       error : 错误信息
          *
          *  4. finally(fn)
          *       fn : 响应结束的回调函数(无论响应成功与否,都会执行)
          * */
  整体代码,链式编程：
  // /AjaxServlet 表示后台服务器地址 url
  // name=zs&age=18 表示向后台提交的数据，get请求数据位于url后面，携带数据格式：url?key=value&key=value
  axios.get("/AjaxServlet?name=zs&age=18")
       .then(function (response) {
              // 回调函数的函数体,处理后台服务器的响应的代码，所有的数据都放到response对象中了，注意response只是一个对象标识符，名字随便定义,我们只负责编写匿名函数体代码
          })
       .catch(function (error) {
              // 回调函数的函数体，如果后台服务器出现异常就在这里处理，所有的错误信息放到error对象中
          };)
       .finally(function () {
            // 回调函数的函数体，必须执行的代码
          };);
  
  =================使用es6的箭头函数简================================================
      ()=>{}
  axios.get("/AjaxServlet?name=zs&age=18")
       .then(response=>{
              // 回调函数的函数体,处理后台服务器的响应的代码，所有的数据都放到response对象中了，注意response只是一个对象标识符，名字随便定义,我们只负责编写匿名函数体代码
          })
       .catch(error=>{
              // 回调函数的函数体，如果后台服务器出现异常就在这里处理，所有的错误信息放到error对象中
          };)
       .finally(() => {
            // 回调函数的函数体，必须执行的代码
          };);
  
  ~~~

  代码实现：
  
  步骤：
  
  1.导入axios的js库到当前项目webapp文件夹下
  
  2.创建html页面
  
  3.在html页面中导入axios的js库
  
  4.在html页面向后台发送axios的ajax异步请求
  
  5.创建Servlet，接收请求数据，处理业务逻辑和响应数据
  
  6.在html页面中处理服务器的响应数据
  
  ~~~html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>使用axios发送异步请求</title>
  </head>
  <body>
  <!--  不能在文本中书写js代码-->
  <script type="text/javascript" src="js/axios-0.18.0.js"></script>
  <script type="text/javascript">
      //1.使用axios对象调用函数向后台服务器发送ajax异步请求
      /*
          整体： axios.get().then().catch().finally();
            1）get()函数表示两后台服务器发送get请求，格式：
                get(url?key=value&key=value...);===axios.get("/axiosDemo01Servlet?username=锁哥&password=1234")
            2)then() 处理后台服务器响应的，格式：
                  then(function(接收响应数据的对象名){
                      处理响应的代码
                  });
  
                  then(function (resp){
                   console.log(resp);
               })
               后台响应数据：
                  resp={
                          data: 'axios实现ajax异步get请求,username=锁哥',
                          status: 200,
                          statusText: '',
                          headers: {…},
                          config: {…},
                      }
  
                  resp.data就可以获取 数据： axios实现ajax异步get请求,username=锁哥
  
            3)catch() :处理异常
                  catch(function (error) {
                      console.log(error);
                  })
  
                  let person ={
                      username:"锁哥",
                      age:18
                  }
          小结：
            1.get函数：建立和服务器的连接，在参数中书写连接服务器的url和请求参数
            2.then函数：书写处理响应数据的，在该函数的参数位置书写回调函数
            3.catch函数：书写处理响应错误信息数据的，在该函数的参数位置书写回调函数
            4.finally函数：无论响应成功还是失败都要执行的代码，在该函数的参数位置书写回调函数
       */
      axios.get("http://localhost:8080/axiosDemo01Servlet?username=锁哥&password=1234")
           .then(function (response) {
               //处理响应数据的回调函数体代码，response表示接受服务器响应数据的对象，该对象中具有重要属性是data
              console.log(response);
              console.log(response.data);
            })
          .catch(function (error) {
              //书写处理响应错误信息数据的，在该函数的参数位置书写回调函数
              console.log(error);
           })
          .finally(function () {
               //无论响应成功还是失败都要执行的代码，在该函数的参数位置书写回调函数
               console.log('我是必须执行的...');
           });
  </script>
  </body>
  </html>
  ~~~

![image-20220213103140617](assets\image-20220213103140617.png)



【后台代码，先不用理会，后面会讲解】

~~~markdown
# 说明：对于后台代码我们不用理会，但是我们需要启动后台，如果不启动后台，前端是无法访问后台的。前端这几天启动后台基本都是一样的方式，如下：
~~~

- 1.找到课后资料中的目录： `day03-AJAX&Vue\02_代码\授课素材\01_ajax素材\异步\后端` 
- 2.在上述目录下输入cmd命令打开dos窗口

![image-20220205085531646](assets\image-20220205085531646.png)

- 3.在dos窗口中输入jdk命令来启动项目：

~~~java
java -jar day0302_ajax.jar
ps:使用java命令运行jar包：java -jar 项目的jar包
~~~

说明：1)java -jar 属于java中命令，执行jar包的  2）day0302_ajax.jar 是上述目录中后台项目的jar包

![image-20220205085634327](assets\image-20220205085634327.png)

- 停止后台项目运行：ctrl+c



  ~~~java
package com.itheima.sh.a_axios_01;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/axiosDemo01Servlet")
public class AxiosDemo01Servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1.获取请求数据
        // axios.get("/axiosDemo01Servlet?username=锁哥&password=1234")
        //.getParameter("username"); 函数的参数username是前端get函数中url后面参数的key
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        //2.输出
        System.out.println(username+"---"+password);
        //模拟异常：
//        int i = 1 / 0;
        //3.响应数据给前端
        response.getWriter().print("axios实现ajax异步get请求,username="+username);
    }
}

  ~~~

  小结：

  1.使用axios发送ajax的异步请求：

  ~~~javascript
1.导入axios的js库
<script type="text/javascript" src="js/axios-0.18.0.js"></script>
2.使用axios对象调用方法进行发送请求和处理响应数据：
axios.get("url?key=value&key=value").then(function(response){
    //处理响应代码
}).catch(function(error){
    //处理响应代码,错误信息
}).finally(function(){
    //必须执行的
});
  ~~~

  

  

  - post请求

    - axios使用说明：

  ~~~javascript
 	/*
        *  1. post(url,param)
        *       url : 请求地址(不能包含请求参数)
        *       param : 请求参数(走请求体) key=value&key=value... 如果不携带参数那么书写： axios.post(url).then()...
        *
        *  2. 箭头函数 (相当于java中的lambda表达式)
        *       es6的新语法 !!!
        *       //普通函数
        *       function(response){

                    console.log(response.data) // 响应体数据
                }
                //箭头函数 :(参数名,参数名,...) => {函数体}
                //如果参数只有一个那么可以省略小括号
                response => {
                    console.log(response.data)
                }
           注意：考虑后期学习的vue框架我们建议都使用箭头函数。

        * */
整体代码,链式编程：
  axios.post(url, param)
       .then(response => {
            // 回调函数的函数体,后台响应成功执行then函数
        })
       .catch(error => {
           // 回调函数的函数体
        })
       .finally(() => {
            // 回调函数的函数体
        });
  ~~~

  代码实现：

  ~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>使用axios发送异步请求</title>
</head>
<body>
<!--  不能再文本中书写js代码-->
<script type="text/javascript" src="js/axios-0.18.0.js"></script>
<script type="text/javascript">
    //1.使用axios对象调用函数向后台服务器发送ajax异步请求
    /*
        整体： axios.post().then().catch().finally();
          1）post()函数表示向后台服务器发送post请求，格式：
              post(url,key=value&key=value...);===axios.post("/axiosDemo01Servlet","username=锁哥&password=1234")
          2)then() 处理后台服务器响应的，格式：
                then(function(接收响应数据的对象名){
                    处理响应的代码
                });
            其实在then函数中的回调函数我们可以使用es6的新语法，箭头函数：
                (参数)=>{函数体}
            格式：
            then(resp=>{
                    函数体
            });
     */
    /*
             说明：
                1.http://localhost:8080/axiosDemo03Servlet 表示后台服务器地址
                2.username=锁哥&password=1234：表示向后台携带的参数
    */
    //使用es6的箭头函数简化上述回调函数的写法
    axios.post("http://localhost:8080/axiosDemo03Servlet","username=锁哥&password=1234")
         .then(response=>{
            console.log(response.data);
            })
         .finally(()=>{
                console.log('必须执行的');
            });

</script>
</body>
</html>
  ~~~

  

  - **java代码**【后台代码，先不用理会，后面会讲解】

  ```java
package com.itheima.sh.a_axios_01;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/axiosDemo03Servlet")
public class AxiosDemo03Servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1.获取请求数据
        //  axios.post("/axiosDemo02Servlet","username=锁哥&password=1234")
        //.getParameter("username"); 函数的参数username是前端post函数中url后面参数的key

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        //2.输出
        System.out.println(username+"---"+password);
        //3.响应数据
        response.getWriter().print("axios实现ajax异步post请求,username="+username);
    }
}

  ```

小结：

1.如果使用的是axios的post请求，那么必须在post函数中将url和请求参数分开书写:

~~~javascript
axios.post("http://localhost:8080/axiosDemo03Servlet", "username=锁哥&password=1234")
~~~

2.我们对于需要使用回调函数的位置可以使用es6的箭头函数简化代码书写：

~~~javascript
  axios.post("/axiosPostServlet", "username=锁哥&password=1234")
        .then(response=>{//response属于标识符，随便定义
            console.log(response.data);
        })
        .finally(()=>{
            console.log('必须执行的');
        });
~~~

3.箭头函数体省略书写，思想和java中lambda省略思想是一样的：

~~~javascript
 axios.post("/axiosPostServlet", "username=锁哥&password=1234")
        .then(response=>console.log(response.data))
        .finally(()=>{
            console.log('必须执行的');
        });
~~~

### 2 练习：检查用户名是否已被注册

![image-20210509140423068](assets\image-20210509140423068.png)

【1】需求

```markdown
#需求: 
	   a. 有一个注册的表单, 有注册用户名和密码,一个提交按钮
	   b. 用户名输完之后,检测这个用户名是否可用
	   c. 就算服务器没有立即响应, 用户还能继续在表单上操作 -> 异步

	   
```

【2】分析

~~~markdown
#分析:
	1. 用户名输入框注册一个失去焦点事件(onblur)
	2. 向服务器发送 异步 请求
	3. 服务器响应之后, 提示信息 局部更新到页面上
~~~

【3】html代码

~~~javascript
 /*
    *   需求: 查看此用户名是否已注册
    *   分析:
    *       1. 前提: 注册的用户存到数据库中了
    *       2. 判断: 数据库中是否有这个用户名
    *           1). 如果有, 提示已被注册不可用
    *           2). 如果没有, 提示可用
    *
    *   前端: 发起请求
    *       事件: onblur
    *       1). 请求的类型: 异步 (不跳转而且只要页面局部更新)
    *       2). axios
    *           a. 请求地址
    *           b .请求参数
    *
    *   后端: 接收请求,业务处理,响应数据
    *       1). 获取请求参数
    *       2). 查询数据库
    *       3). 根据结果响应
    *
    *   前端: 接收响应, 显示数据
    *
    * */
~~~



【4】步骤

~~~markdown
#前端
1.创建一个html页面，书写html标签
2.在html页面中导入axios的js库
3.使用js获取用户名输入框的标签对象并给其绑定一个离焦事件onblur
4.在离焦事件绑定的匿名函数体中获取页面输入的用户名
5.使用axios向后台发送异步请求并携带用户名数据到后台服务器
6.在axios的回调函数中处理后台响应的数据
7.根据响应的结果进行判断
8.用户名存在，不能注册，提示用户名已经存在
9.用户名不存在，可以注册，提示可以注册

#后台
1.创建注册的servlet
2.处理请求乱码
3.获取页面提交的请求参数
4.模拟数据库判断获取的数据是否存在
5.响应数据给前端页面
~~~

【5】代码实现

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="">
    <input type="text" name="username" placeholder="请输入用户名" id="username">
    <span id="usernameSpan"></span>
    <br>
    <input type="password" name="password" placeholder="请输入密码"> <br>
    <button>提交</button>
</form>
</body>

</html>
```

~~~html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="">
    <input type="text" name="username" placeholder="请输入用户名" id="username">
    <span id="usernameSpan"></span>
    <br>
    <input type="password" name="password" placeholder="请输入密码"> <br>
    <button>提交</button>
</form>
<!--  导入axios类库  -->
<script type="text/javascript" src="js/axios-0.18.0.js"></script>
<script type="text/javascript">
    /*
        说明：
            1.后台地址url："http://localhost:8080/registerServlet"
            2.后台需要根据key即参数名是username来获取前端提交的用户名数据
     */

       //3.使用js获取用户名输入框的标签对象并给其绑定一个离焦事件onblur
    document.getElementById('username').onblur = function () {
        //4.在离焦事件绑定的匿名函数体中获取页面输入的用户名
        let username = this.value;
        //5.使用axios向后台发送异步请求并携带用户名数据到后台服务器
        //"username="+username 等号左边的username需要后台根据该username获取页面输入的值，等号右边的username是上述保存用户名的变量
        axios.post("http://localhost:8080/registerServlet","username="+username)
             .then(resp=>{
                 // 6.在axios的回调函数中处理后台响应的数据
                 let result = resp.data;
                 //7.根据响应的结果进行判断
                 if(result == false){
                    //8.用户名存在，不能注册，提示用户名已经存在
                     document.getElementById('usernameSpan').innerHTML="<font color='red'>用户名存在，重新输入</font>"
                 }else {
                    //9.用户名不存在，可以注册，提示可以注册
                     document.getElementById('usernameSpan').innerHTML="<font color='green'>注册成功</font>"
                 }
             });


    };

</script>
</body>
</html>
~~~





servlet代码【后台代码，先不用理会，后面会讲解】

```java
package com.itheima.sh.a_axios_01;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/registerServlet")
public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1.获取请求参数
        //后台如何获取usernameValue的值：request.getParameter("username");
        String username = request.getParameter("username");
        //2.将获取的name值传递到service层，这里我们暂时不写了，判断
        if("岩岩".equals(username)){
            //响应数据，说明用户名存在，不能注册
            response.getWriter().print(false);
        }else{
            //响应数据，说明用户名不存在，能注册
            response.getWriter().print(true);
        }
    }
}

```

## 四.  JSON

### 1 JSON概述

JavaScript对象文本表示形式（JavaScript Object Notation : js对象简写)

> json是js对象

> json是目前 前后端数据交互的主要格式之一

```markdown
* java对象表示形式
		User user = new User();
			user.setUsername("后羿");
			user.setAge(23);
			user.setSex("男");
			...
			
		Product product = new Product();
			product.setName("小米10");
			product.setDesc("1亿像素的手机小王子");
			
* javaScript对象表示形式
       
		let user ={"username":"后羿","age":23,"sex":"男"}
		let product = {"name":"小米10","desc":"1亿像素的手机小王子"}
```



json可以取代XML笨重的数据结构，和xml相比：更小、更快，更易解析

> json、xml作用：作为数据的载体，在网络中传输

![image-20211214191245247](assets\image-20211214191245247.png)

小结：

1.json在js中是一个对象，在java中是字符串

2.作用：用来前后台数据的传输的

3.格式：

~~~javascript
{key:value,key:value,....} 
建议：json的key其实随便定义，不书写双引号也可以，值如果是字符串，在js中使用单引号双引号都可以。但是我们后期会将json的数据传递到后台服务器极java代码中，由于单引号和双引号在java中是有区别的。因此建议json的key最好使用双引号，值如果是字符串最好也使用双引号。
{"username":"锁哥","password":"1234","age":18}; 
~~~



### 2 JSON基础语法

> json是一种特殊的 js 对象

```markdown
#json的语法主要有两种:
        1. 对象 { }
        2. 数组 [ ]
        
1. 对象类型
		{name:value,name:value,....}
		
2. 数组类型
		[
            {name:value,name:value}, 
            {name:value,name:value},
            {name:value,name:value}
		]
		
3. 复杂对象
		{
            name:value,
            wives:[{name:value},{},{}],
            son:{name:value}
		}
#注意: 
	1. 其中name必须是string类型
		json在js中,name的双引号可以省略,建议加双引号
	2. value必须是以下数据类型之一：
		字符串
		数字
		对象（JSON 对象）
		数组
		布尔
		Null
	3. JSON 中的字符串必须用双引号包围。(单引号不行!主要是涉及到后期在后端java代码中操作)	
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
  <script type="text/javascript">
      /*
          json介绍
            1.定义格式 1：{key:value,key:value,...}
            2.定义格式 2：
                [{key:value,key:value,...},{key:value,key:value,...}，{key:value,key:value,...},...]
            3.定义格式 3：
                {key:value,key:[key:value,key1:value1,...],key:value,...}


            说明：
              1）在json中key是字符串，可以加引号，也可以不加，建议加双引号
              2）在json中value是什么类型就书写什么，如果是字符串类型，一定使用双引号
              3)如果定义的json是：let 对象名 = {key:value,key:value,...} 获取value值：对象名.key
              4)如果定义的json是：let 数组名 = [{key1:value1,key2:value2,...},{key3:value3,key4:value4,...}]
                        获取value4值：数组名[1].key4  === 1表示数组索引1的位置
              5)如果定义的json是：let 对象名 = {key:value,key2:[key:value,key1:value1,...],key:value,...}
                        获取value1值：对象名.key2[1].key1
       */
      //1.定义格式：{key:value,key:value,...}
      let oJson = {"username":"锁哥","age":18,"sex":"男"};
      //需求：获取18
      console.log(oJson.age);//18

      /*
        2.定义格式 2：
                [{key:value,key:value,...},{key:value,key:value,...}，{key:value,key:value,...},...]
       */
      let a1 = [{"username": "锁哥", "age": 18, "sex": "男"}, {"username": "柳岩", "age": 19, "sex": "女"}];
      //需求：获取柳岩
      //a1[1] 获取的是{"username": "柳岩", "age": 19, "sex": "女"}，是一个对象，是对象就可以使用   对象.key  获取value
      console.log(a1[1].username);//柳岩

     /*
        3.定义格式 3：
                {key:value,key:[{},{},...],key:value,...}
     */
      let oJson2={"company":"黑马程序员","persons":[{"username":"锁哥","age":18},{"username":"坡坡","age":28}]};
      //获取坡坡
      console.log(oJson2.persons[1].username);//对象.key获取value，数组就遍历取出每个对象


  </script>
</body>
</html>
```

补充：

![image-20220513205645046](assets\image-20220513205645046.png)



## 五.  ajax和json综合 (特别重要!!!)

### 5.1  响应数据是json格式

> 需求：向后台发送请求，获取好友列表并显示到页面中

【1】html页面

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>ajax和json综合</h1>
<!--
    获取好友列表
-->
<input type="button" value="响应数据是json字符串" onclick="method01()"> <br>
<hr>
<h3>好友列表</h3>
<!--存放查询好友的结果信息-->
<div id="messageDiv"></div>
<table width="500px" cellspacing="0px" cellpadding="5px" border="1px" id="myTable">
    <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
    </tr>
    <!--<tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>-->

</table>

</body>
<!--导入axios库-->
<script type="text/javascript" src="js/axios-0.18.0.js"></script>
<script type="text/javascript">
    /*
      需求：向后台发送请求，获取好友列表并显示到页面中
      说明：后台的url地址： "http://localhost:8080/axiosJsonDemo01Servlet"
     */

     function method01() {
        //向后台发送请求
        axios.post("http://localhost:8080/axiosJsonDemo01Servlet")
            .then(resp => {
                //1.接收后端响应的Result对象
                let obj = resp.data;
                console.log(obj);
                //2.判断是否成功
                if (obj.flag) {
                    //查询成功
                    document.getElementById('messageDiv').innerHTML = obj.message;
                    //取出数组
                    let arr = obj.valueData;
                    //遍历数组取出每个json对象
                    //定义变量保存每个对象的数据的tr内容
                    let content = "";
                    for (let friend of arr) {//friend 表示每个json对象===={age: 18, id: '001', name: '张三'}
                        //这里书写是+= 累加
                        content += `
                                  <tr>
                                     <td>${friend.id}</td>
                                     <td>${friend.name}</td>
                                     <td>${friend.age}</td>
                                 </tr>
                                `
                    }
                    //3.获取table标签对象
                    let oTable = document.getElementById('myTable');
                    //4.将获取的数据即content放到table标签的文本中 appendChild
                    oTable.innerHTML += content;//这里使用+=,这样就不会覆盖原来的表头tr

                } else {
                    //查询失败
                    document.getElementById('messageDiv').innerHTML = obj.message;
                }
            });
    }
</script>

</html>
~~~

【2】后端代码

~~~java
package com.itheima.sh.b_json_02;

import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

@WebServlet("/axiosJsonDemo01Servlet")
public class AxiosJsonDemo01Servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            response.setContentType("text/html;charset=utf-8");
            // 需求：查询当前用户的好友 List<Friend> list,转成json格式字符串,最后响应
            //1.创建集合对象保存多个好友
            ArrayList<Friend> list = new ArrayList<>();
            //2.向集合添加数据
            Collections.addAll(list, new Friend("001", "张三", 18), new Friend("002", "李四", 19),
                    new Friend("003", "王五", 20));

            //3.创建Result类的对象
            /*
                true : 表示查询成功
                "查询好友列表成功" 查询好友成功的信息
                list:存放好友的集合数据
             */
            Result result = new Result(true, "查询好友列表成功", list);

//            int i = 1/0;

            //5.使用fastjson中的JSON类的方法String toJsonString(Object obj)
            String s = JSON.toJSONString(result);
            //5.响应给前端
            response.getWriter().print(s);
        } catch (Exception e) {
            e.printStackTrace();
            //告知浏览器查询好友列表失败
            /*
                false : 表示查询失败
                "查询好友列表成功" 查询好友成功的信息
                list:存放好友的集合数据
             */
            Result result = new Result(false, "查询好友列表失败");
            //5.使用fastjson中的JSON类的方法String toJsonString(Object obj)
            String s = JSON.toJSONString(result);
            //5.响应给前端
            response.getWriter().print(s);
        }
    }
}

~~~











