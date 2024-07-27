# ES6新语法糖(初级)

## 1 什么是ES6

> JS语法分三块
>
> 1. ECMAScript : 基础语法 
> 2. BOM  浏览器对象 history location window
> 3. DOM 文档对象  document

编程语言JavaScript是ECMAScript的实现和扩展 。ECMAScript是由ECMA（一个类似W3C的标准组织）参与进行标准化的语法规范。ECMAScript定义了：

[语言语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar) – 语法解析规则、关键字、语句、声明、运算符等。

[类型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) – 布尔型、数字、字符串、对象等。

[原型和继承](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

内建对象和函数的[标准库](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) – [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)、[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)、[数组方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)、[对象自省方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)等。

ECMAScript标准不定义HTML或CSS的相关功能，也不定义类似DOM（文档对象模型）的[Web API](https://developer.mozilla.org/en-US/docs/Web/API)，这些都在独立的标准中进行定义。ECMAScript涵盖了各种环境中JS的使用场景，无论是浏览器环境还是类似[node.js](http://nodejs.org/)的非浏览器环境。

ECMAScript标准的历史版本分别是1、2、3、5。

那么为什么没有第4版？其实，在过去确实曾计划发布提出巨量新特性的第4版，但最终却因想法太过激进而惨遭废除（这一版标准中曾经有一个极其复杂的支持泛型和类型推断的内建静态类型系统）。

ES4饱受争议，当标准委员会最终停止开发ES4时，其成员同意发布一个相对谦和的ES5版本，随后继续制定一些更具实质性的新特性。这一明确的协商协议最终命名为“Harmony”，因此，ES5规范中包含这样两句话

> ECMAScript是一门充满活力的语言，并在不断进化中。
>
> 未来版本的规范中将持续进行重要的技术改进

2009年发布的改进版本ES5，引入了[Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)、[Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)、[getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)和[setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)、[严格模式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)以及[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)对象。

ECMAScript 6.0（以下简称ES6）是JavaScript语言的下一代标准，2015年6月正式发布。它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

可以参考：

http://es6.ruanyifeng.com/

## 2. 语法新特性

### 2.1 变量声明: let

​	我们都是知道在ES6以前，var关键字声明变量。无论声明在何处，都会被视为声明在函数的最顶部(不在函数内即在全局作用域的最顶部)。这就是函数变量提升, 例如

```js
//es5
function test(bool) {
    if(bool){
        var a='Hello world!';
    }
    // a可以被访问到
    console.log("test方法内部执行，变量的值："+a); 
}

//执行
test(true);
```

以上的代码实际上是:

```js
//es5
function test(bool) {
    //成员变量声明,变量提升
     var a;
    if(bool){
        a='Hello world!';
    }
    // a可以被访问到
    console.log("test方法内部执行，变量的值："+a);
}

```

接下来ES6主角登场：

​	我们通常用let和const来声明，let表示变量、const表示常量。let和const都是块级作用域。怎么理解这个块级作用域？在一个函数内部 ，在一个代码块内部。看以下代码

```js
//es6
function test2(bool) {
    //成员变量声明
    // var a;
    if(bool){
        //赋值
        // var a='Hello world!';//变量泄露
        let a='Hello world!';//变量定义在局部位置
    }
    //看不到let定义在代码块里面的变量
    console.log("test2方法内部执行，变量的值：" + a);
}

//执行
test2(true);
```



### 2.2 常量声明 const

const 用于声明常量，看以下代码

```js
//定义常量
const username='Rose'
//会报错：常量不能更换引用
// username='Jack';

console.log(username)
```

js的常量类似，相当于static final效果，只生成一个对象，不能改变引用。

### 2.3 模板字符串

​	es6模板字符简直是开发者的福音啊，解决了ES5在字符串功能上的痛点。

​	将表达式嵌入字符串中进行拼接。用${}来界定。

```js
//es5
let username='Rose'
//变量需要拼接
console.log('姓名是：'+username)
//es6
//使用反引号，可以直接打印变量的值，表达式类似于java的el表达式
console.log(`姓名是：${username}`)
```



### 2.4 函数的参数默认值(了解)

​	ES6为参数提供了默认值。在定义函数时便初始化了这个参数，以便在参数没有被传递进去时使用。

```js
 function show(username='Jack'){
    console.log(username);
}
//传参后，使用传入的值
show('Rose');
//没有传参（undifined），自动使用默认值
show()
```

​	这样可以避免不传参时出现undefined



###  2.5 箭头函数(很重要)

ES6也有类似于java中lambda表达式的函数简略写法, 也就是箭头函数。

```markdown
# 箭头函数最直观的特点
1. 不需要function关键字来创建函数
2. 省略return关键字,只有一行代码
```

看下面代码（ES6）

```js
 (response,message) => {
    .......
 }
```

相当于ES5代码

```js
function(response,message){
    ......
}
```

ES5:

```js
//es5
var add=function(a,b){
    return a+b;
}
function add(a,b){
    return a+b;
}
console.log(add(100,200))

```

ES6：

```js

//es6
var add2=(a,b)=>{
    return a+b;
}
console.log(add2(100,200))

//es6更简化写法
//如果函数只有一句话，可以省略大括号和return
var add3=(a,b)=>a+b;
console.log(add3(100,200))
```













