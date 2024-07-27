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

## 注意事项

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

