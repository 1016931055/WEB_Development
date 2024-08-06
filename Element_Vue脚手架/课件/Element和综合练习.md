---
typora-copy-images-to: img
---



# 1、Element  基本使用

## 1.1、Element介绍

- Element：网站快速成型工具。是饿了么公司前端开发团队提供的一套基于Vue的网站组件库。

- 使用Element前提必须要有Vue。

- 组件：组成网页的部件，例如超链接、按钮、图片、表格等等~

- Element官网：https://element.eleme.cn/#/zh-CN

- 自己完成的按钮

  ![](.\img\我是按钮.png)

- Element 提供的按钮

  ![](.\img\element提供的按钮.png)

## 1.2、Element快速入门

- **开发步骤**

  1. 引入 Element 样式文件夹。

     > 引入组件库 (资料/element/element-ui 整个放到webapp路径，如果是静态工程就放到项目根目录)

     ![image-20200921215535932](img\image-20200921215535932.png)

  2. 引入 Vue 核心 js 文件。

     > 在项目根目录下创建js文件夹，将课后资料中的vue.js文件放到该文件夹下
     >
     > ![image-20200921215857557](img\image-20200921215857557.png)

  3. 在html中引入vue.js

     ![image-20200921220622044](img\image-20200921220622044.png)

  4. 在html中引入 Element 核心 js 文件。

     > 说明：element组件库基于vue的,所以要先导入vue。在导入 Element 核心 js 文件。至于如何导入 Element 核心 js 文件，我们可以参考官网说明：
     >
     > ![image-20200921220853837](img\image-20200921220853837.png)
     >
     > 从官网复制之后修改引入本地的文件

     ![image-20200921221100460](img\image-20200921221100460.png)

  5. 编写按钮标签。

  在官网中找到按钮标签的代码，将代码复制到html页面中：

  ![image-20200921221418684](img\image-20200921221418684.png)

  ![image-20200921221455334](img\image-20200921221455334.png)

  

  1. 通过 Vue 核心对象加载元素。

     ~~~vue
     <script>
         new Vue({
             el:"#div"
         });
     </script>
     ~~~

     

- **代码实现**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>快速入门</title>
      <!--
          element组件库基于vue的,先导入vue
      -->
      <script src="../js/vue.js"></script>
      <!-- 引入样式 -->
      <link rel="stylesheet" href="../element-ui/lib/theme-chalk/index.css">
      <!-- 引入组件库 -->
      <script src="../element-ui/lib/index.js"></script>
  
  </head>
  <body>
  <!--
      element组件库: 快速搭建网站效果
  -->
      <div id="div">
          <button>按钮标签</button>
          <br>
          <div>
              <el-button>默认按钮</el-button>
              <el-button type="primary">主要按钮</el-button>
              <el-button type="success">成功按钮</el-button>
              <el-button type="info">信息按钮</el-button>
              <el-button type="warning">警告按钮</el-button>
              <el-button type="danger">危险按钮</el-button>
          </div>
  
          <div style="margin: 20px 0">
              <el-button plain>朴素按钮</el-button>
              <el-button type="primary" plain>主要按钮</el-button>
              <el-button type="success" plain>成功按钮</el-button>
              <el-button type="info" plain>信息按钮</el-button>
              <el-button type="warning" plain>警告按钮</el-button>
              <el-button type="danger" plain>危险按钮</el-button>
          </div>
  
          <div>
              <el-button round>圆形按钮</el-button>
              <el-button type="primary" round>主要按钮</el-button>
              <el-button type="success" round>成功按钮</el-button>
              <el-button type="info" round>信息按钮</el-button>
              <el-button type="warning" round>警告按钮</el-button>
              <el-button type="danger" round>危险按钮</el-button>
          </div>
      </div>
  </body>
  <script>
      new Vue({
          el:"#div"
      });
  </script>
  </html>
  ```

## 1.3、基础布局

基础布局在官网位置：

![image-20200921221949073](img\image-20200921221949073.png)

将页面分成最多 24 个部分，自由切换。并且支持响应式布局。

![](.\img\基础布局.png)

- **代码实现**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>基础布局</title>
      <link rel="stylesheet" href="../element-ui/lib/theme-chalk/index.css">
      <script src="../js/vue.js"></script>
      <script src="../element-ui/lib/index.js"></script>
      <style>
          .el-row {
              /* 行距为20px */
              margin-bottom: 20px;
          }
          .bg-purple-dark {
              background: red;
          }
          .bg-purple {
              background: blue;
          }
          .bg-purple-light {
              background: green;
          }
          .grid-content {
              /* 边框圆润度 */
              border-radius: 4px;
              /* 行高为36px */
              min-height: 36px;
          }
      </style>
  </head>
  <body>
  <!--
      一行最多24份,超过就失效
  -->
      <div id="div">
          <el-row>
              <!--一行超过24份，就不显示了-->
               <!--<el-col :span="25"><div class="grid-content bg-purple-dark"></div></el-col>-->
              <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
          </el-row>
          <el-row>
               <!--一行被拆分为2列，每列12份-->
              <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
          <el-row>
               <!--一行被拆分为3列，每列8份-->
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row>
               <!--一行被拆分为4列，每列6份-->
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
          <el-row>
               <!--一行被拆分为6列，每列4份-->
              <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
          </el-row>
  
      </div>
  </body>
  <script>
      new Vue({
          el:"#div"
      });
  </script>
  </html>
  ```

## 1.4、容器布局

官方说明：

![image-20200921223426142](img\image-20200921223426142.png)

将页面分成头部区域、侧边栏区域、主区域、底部区域。

![](.\img\容器布局.png)

注意：`<el-container>`：外层容器。当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

- **代码实现**

  官方给出很多种，我们只演示其中一种即可，其余可以自己学习。
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>容器布局</title>
      <link rel="stylesheet" href="element-ui/lib/theme-chalk/index.css">
      <script src="js/vue.js"></script>
      <script src="element-ui/lib/index.js"></script>
      <style>
          .el-header, .el-footer {
              background-color: #d18e66;
              color: #333;
              text-align: center;
              height: 100px;
          }
          .el-aside {
              background-color: #55e658;
              color: #333;
              text-align: center;
              height: 580px;
          }
          .el-main {
              background-color: #5fb1f3;
              color: #333;
              text-align: center;
              height: 520px;
          }
      </style>
  </head>
  <body>
      <div id="div">
           <!--表示外层容器-->
          <el-container>
               <!--包含子元素el-header，所以会垂直显示-->
              <el-header>头部区域</el-header>
              <!--表示外层容器又包含一个内部容器-->
              <el-container>
                <!--表示外层容器，不包含el-header或者el-footer,所以水平左右显示-->
                <el-aside width="200px">侧边栏区域</el-aside>
                <!--表示外层容器又包含一个内部容器-->
                <el-container>
                  <el-main>主区域</el-main>
                  <!--包含子元素el-footer，所以会垂直显示-->
                  <el-footer>底部区域</el-footer>
                </el-container>
              </el-container>
            </el-container>
      </div>
  </body>
  <script>
      new Vue({
          el:"#div"
      });
  </script>
  </html>
  ```

## 1.5、表单组件(掌握)

![image-20200922075324205](img\image-20200922075324205.png)

由输入框、下拉列表、单选框、多选框等控件组成，用以收集、校验、提交数据。

在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker

- **代码实现**

  表单组件也有很多种，我们这里讲解和演示一种比较强大的自带校验的表单组件，这样我们就不用像以前那样自己书写js代码校验表单了。
  
  我们演示的表单组件如下：
  
  ![image-20200922080601057](img\image-20200922080601057.png)
  
  说明：Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并且 Form-Item 的 `prop` 属性设置为需校验的字段名即可。
  
  复制上述表单组件到模板中，演示效果：
  
  1.复制官网代码分两步进行复制，先复制视图即html标签
  
  ![image-20200922081225342](img\image-20200922081225342.png)
  
  2.在复制脚本即js代码，复制js代码时需要注意如下：
  
  ![image-20200922081549161](img\image-20200922081549161.png)
  
  ![image-20200922081927866](img\image-20200922081927866.png)
  
  注意：对于上述data(){return {}}解释：
  
  ![image-20211213233551319](img\image-20211213233551319.png)
  
  ~~~javascript
  <script>
          let a = {
              name:"zs",
              age:18
          }
  
          function b(){
              return {
                  name:"zs",
                  age:18 
              }
          }
  
          console.log(a);
          console.log(b());
  
  </script>
  ~~~
  
  
  
  
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>表单组件</title>
      <link rel="stylesheet" href="../element-ui/lib/theme-chalk/index.css">
      <script src="../js/vue.js"></script>
      <script src="../element-ui/lib/index.js"></script>
  </head>
  <body>
      <div id="div">
          <!--
              1.:model="ruleForm"表示使用vue给form表单绑定model属性，属性值是ruleForm
              2.:rules="rules"表示使用vue给form表单绑定rules属性，属性值是rules，只需要通过 rules 属性传入约定的验证规则
          -->
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <!--
                  3.在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio
                  4.Form-Item 的 prop 属性设置为需校验的字段名即可
              -->
              <el-form-item label="活动名称" prop="name">
                  <!--
                      5.v-model="ruleForm.name" 这里使用的双向绑定，即输入框数据变化那么下面的vue中的：
                           ruleForm: {
                              name: '',
                              region: '',
                              date1: '',
                              date2: '',
                              delivery: false,
                              type: [],
                              resource: '',
                              desc: ''
                          }
                          name也会发生改变，而下面的name发生变化，输入框也会发生变化。这里当输入框输入数据之后例如输入锁哥，那么就会将锁哥放到ruleForm的name值中，这里的v-model="ruleForm.name"，ruleForm.name是找到ruleForm中的name属性
                  -->
                  <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="活动时间" required>
                  <el-col :span="11">
                      <el-form-item prop="date1">
                          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                      </el-form-item>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                      <el-form-item prop="date2">
                          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                      </el-form-item>
                  </el-col>
              </el-form-item>
              <el-form-item label="即时配送" prop="delivery">
                  <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质" prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                      <el-checkbox label="地推活动" name="type"></el-checkbox>
                      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源" prop="resource">
                  <el-radio-group v-model="ruleForm.resource">
                      <el-radio label="线上品牌商赞助"></el-radio>
                      <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item>
                  <!--
                      6.@click="submitForm('ruleForm')" 表示给当前按钮button绑定一个点击事件，@click是v-on:click简写当单击立即创建按钮时触发函数submitForm，同时将vue中的data中的ruleForm所有数据传递到该函数中
                  -->
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <!--
                      7.点击重置按钮，执行绑定的重置函数resetForm
                  -->
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
          </el-form>
      </div>
  </body>
  <script>
      new Vue({
          el:"#div",
          data() {
              return {
                  ruleForm: {
                      name: '',
                      region: '',
                      date1: '',
                      date2: '',
                      delivery: false,
                      type: [],
                      resource: '',
                      desc: ''
                  },
                  rules: {
                      name: [
                          //trigger: 'blur' ：表示给name输入框绑定离焦事件
                          { required: true, message: '请输入活动名称', trigger: 'blur' },
                          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                      ],
                      region: [
                          { required: true, message: '请选择活动区域', trigger: 'change' }
                      ],
                      date1: [
                          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                      ],
                      date2: [
                          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                      ],
                      type: [
                          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                      ],
                      resource: [
                          { required: true, message: '请选择活动资源', trigger: 'change' }
                      ],
                      desc: [
                          { required: true, message: '请填写活动形式', trigger: 'blur' }
                      ]
                  }
              };
          },
          methods: {
              //点击立即创建按钮执行的函数
              submitForm(formName) {//formName=ruleForm
                  this.$refs[formName].validate((valid) => {
                      if (valid) {
                          //如果表单输入项都合法就弹出框输出submit，并且可以提交表单
                          alert('submit!');
                      } else {
                          //说明 输入项是非法的，在控制台输出数据
                          console.log('error submit!!');
                          //阻止表单提交
                          return false;
                      }
                  });
              },
              //重置表单
              resetForm(formName) {
                  this.$refs[formName].resetFields();
              }
          }
      });
  </script>
  </html>
  ```

## 1.6、表格组件

![image-20200922090140415](img\image-20200922090140415.png)

用于展示多条结构类似的数据，可对数据进行编辑、删除或其他自定义操作。

- **代码实现**

  ![image-20200922090508547](img\image-20200922090508547.png)
  
  当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
  
  1.先复制视图即html标签
  
  ![image-20200922090711290](img\image-20200922090711290.png)
  
  2.再复制js代码
  
  ![image-20200922090736512](img\image-20200922090736512.png)
  
  1.基础表格
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>表格组件</title>
      <link rel="stylesheet" href="../element-ui/lib/theme-chalk/index.css">
      <script src="../js/vue.js"></script>
      <script src="../element-ui/lib/index.js"></script>
  </head>
  <body>
  <div id="div">
      <template>
          <!--
              当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，
              用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
              1.el-table :data="tableData" :表示`el-table`元素中注入`data`的tableData对象数组
          -->
          <el-table
                  :data="tableData"
                  style="width: 100%">
              <!--
                  2.`el-table-column`中用`prop`属性来对应对象中的键名date即可填入数据
                  3.用`label`属性来定义表格的列名
                  4.可以使用`width`属性来定义列宽
              -->
              <!--日期-->
              <el-table-column
                      prop="date"
                      label="日期"
                      width="180">
              </el-table-column>
              <!--姓名-->
              <el-table-column
                      prop="name"
                      label="姓名"
                      width="180">
              </el-table-column>
              <!--地址-->
              <el-table-column
                      prop="address"
                      label="地址">
              </el-table-column>
          </el-table>
      </template>
  </div>
  </body>
  <script>
      new Vue({
          el: "#div",
          data() {
              return {
                  tableData: [{
                      date: '2016-05-02',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1517 弄'
                  }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄'
                  }, {
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1516 弄'
                  }]
              }
          }
      });
  </script>
  </html>
  ```

2.带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。

![image-20210511101921563](img\image-20210511101921563.png)

3.带边框表格

默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。

![image-20200922093852613](img\image-20200922093852613.png)



## 1.7、导航栏组件

![image-20200922094210891](img\image-20200922094210891.png)

我们这里学习黑色背景的顶部导航栏组件。

导航菜单默认为垂直模式(就是不写)，通过`mode`属性可以使导航菜单变更为水平模式。另外，在菜单中通过`submenu`组件可以生成二级菜单。Menu 还提供了`background-color(菜单的背景色)`、`text-color(菜单的文字颜色)`和`active-text-color(当前激活菜单的文字颜色)`.



- **代码实现**

  1.先复制视图即html标签
  
  ![image-20200922121737909](img\image-20200922121737909.png)
  
  2.再复制js代码
  
  ![image-20200922121830758](img\image-20200922121830758.png)
  
  
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>顶部导航栏</title>
      <link rel="stylesheet" href="../element-ui/lib/theme-chalk/index.css">
      <script src="../js/vue.js"></script>
      <script src="../element-ui/lib/index.js"></script>
  </head>
  <body>
      <div id="div">
          <!--
              1. :default-active="activeIndex2" 表示默认被选中的菜单项
              2.导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式.
              mode="horizontal" 表示水平模式，不书写mode或者值是mode="vertical"都是垂直模式
              3.background-color="#545c64" 导航栏背景颜色
              4.text-color="#fff" 菜单文字颜色
              5.active-text-color="#ffd04b" 当前激活菜单颜色，就是当前被选中菜单的颜色
              6. @select="handleSelect" 表示每次点击顶部导航栏组件选项时执行的函数handleSelect
          -->
          <el-menu
                  :default-active="activeIndex2"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
              <el-menu-item index="1">处理中心</el-menu-item>
              <!--
                  在菜单中通过submenu组件可以生成二级菜单
              -->
              <el-submenu index="2">
                  <template slot="title">我的工作台</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-submenu index="2-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="2-4-1">选项1</el-menu-item>
                      <el-menu-item index="2-4-2">选项2</el-menu-item>
                      <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
              </el-submenu>
              <!--disabled表示不可用的-->
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
      </div>
  </body>
  <script>
      new Vue({
          el:"#div",
          data() {
              return {
                  //activeIndex 表示背景颜色是白色的导航栏
                  activeIndex: '1',
                  /*
                      activeIndex2 表示背景颜色是黑色的导航栏.
                      activeIndex2: '1' 值即单引号中表示索引，从1开始：
                      例如上述：
                      1  处理中心
                      2  我的工作台
                      3  消息中心
                      4  订单管理
                   */
                  activeIndex2: '1'
              };
          },
          methods: {
              handleSelect(key, keyPath) {
                  console.log(key, keyPath);
              }
          }
      });
  </script>
  </html>
  ```



## 1.8、小结

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
  常用组件不需要记住，只需要在Element官网中复制并学会修改使用即可。

# 2、界面案例 学生列表(不需要你搭建，但是必须看懂)

## 2.1、案例效果和分析

![image-20200922221407616](img\image-20200922221407616.png)

## 2.2、头部区域的实现

- **实现思路**

  - 头部效果实现。
  - 侧边栏和主区域效果实现。

- **代码实现**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>学生列表</title>
      <link rel="stylesheet" href="element-ui/lib/theme-chalk/index.css">
      <script src="js/vue.js"></script>
      <script src="element-ui/lib/index.js"></script>
      <style>
        .el-header{
          background-color: #545c64;
        }
        .header-img{
          width: 100px;
          margin-top: 20px;
        }
      </style>
  </head>
  <body>
    <div id="div">
      <el-container>
        <!-- 头部 -->
        <el-header class="el-header">
          <el-container>
            <div>
              <!--引入一张图片-->
              <img src="img/export.png" class="header-img"/>
            </div>
            <el-menu
              :default-active="activeIndex2"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="white"
              active-text-color="#ffd04b"
              style="margin-left: auto;">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="3"><a href="学生列表.html" target="_self">首页</a></el-menu-item>
            </el-menu>
          </el-container>
        </el-header>
      </el-container>
    </div>
  </body>
  <script>
      new Vue({
          el:"#div"
      });
  </script>
  </html>
  ```

## 2.3、侧边栏区域的实现

```html
<!-- 侧边栏区域 -->
 <el-container style="height: 580px; border: 1px solid #eee">
        <!--没有el-header或者el-footer所以是左右显示-->
        <!-- 侧边栏区域 -->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <!--默认展开索引是1即学工部-->
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>学工部</template>
              <el-menu-item-group>
                <el-menu-item index="1-1"><i class="el-icon-help"></i>在校学生管理</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-help"></i>学生升级/留级</el-menu-item>
                <el-menu-item index="1-3"><i class="el-icon-help"></i>学生就业情况</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>咨询部</template>
              <el-menu-item-group>
                <el-menu-item index="2-1"><i class="el-icon-help"></i>意向学生管理</el-menu-item>
                <el-menu-item index="2-2"><i class="el-icon-help"></i>未报名学生管理</el-menu-item>
                <el-menu-item index="2-3"><i class="el-icon-help"></i>已报名学生管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-menu"></i>教研部</template>
              <el-menu-item-group>
                <el-menu-item index="3-1"><i class="el-icon-help"></i>已有课程管理</el-menu-item>
                <el-menu-item index="3-2"><i class="el-icon-help"></i>正在研发课程管理</el-menu-item>
                <el-menu-item index="3-3"><i class="el-icon-help"></i>新技术课程管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

</el-container>
```

## 2.4、主区域的实现

**主区域和侧边栏区域放在一起**

```html
<!-- 主区域 -->
        <el-container>
          <el-main>
            <b style="color: red;font-size: 20px;">学生列表</b>
            <div style="float:right">
              <el-button type="primary">添加学生</el-button>
            </div>
            <el-table :data="tableData"  style="width: 100%;">
              <!--通过prop属性显示下面vue对象中的数据，prop的属性值必须是下面vue中的date name address-->
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址" >
              </el-table-column>
              <el-table-column
                label="操作"
                width="180">
                <el-button type="warning">编辑</el-button>
                <el-button type="danger">删除</el-button>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
```

**在vue中定义data**

```js
<script>
    new Vue({
        el:"#div",
        data:{
          tableData:[
            {
              date:"2088-08-08",
              name:"张三",
              address:"上海市航头镇"
            },{
              date:"2088-08-08",
              name:"李四",
              address:"上海市航头镇"
            },{
              date:"2088-08-08",
              name:"王五",
              address:"上海市航头镇"
            },
          ]
        }
    });
</script>
```

整体代码：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>学生列表</title>
    <link rel="stylesheet" href="../element-ui/lib/theme-chalk/index.css">
    <script src="../js/vue.js"></script>
    <script src="../element-ui/lib/index.js"></script>
    <style>
      .el-header{
        background-color: #545c64;
      }
      .header-img{
        width: 100px;
        margin-top: 20px;
      }
    </style>
</head>
<body>
  <div id="div">
    <el-container>
      <!-- 头部 -->
      <el-header class="el-header">
        <el-container>
          <div>
            <!--引入一张图片-->
            <img src="img/export.png" class="header-img"/>
          </div>
          <el-menu
            :default-active="activeIndex2"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="white"
            active-text-color="#ffd04b"
            style="margin-left: auto;">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="学生列表.html" target="_self">首页</a></el-menu-item>
          </el-menu>
        </el-container>
      </el-header>


      <el-container style="height: 580px; border: 1px solid #eee">
        <!--没有el-header或者el-footer所以是上下垂直显示-->
        <!-- 侧边栏区域 -->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <!--默认展开索引是1即学工部-->
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>学工部</template>
              <el-menu-item-group>
                <el-menu-item index="1-1"><i class="el-icon-help"></i>在校学生管理</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-help"></i>学生升级/留级</el-menu-item>
                <el-menu-item index="1-3"><i class="el-icon-help"></i>学生就业情况</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>咨询部</template>
              <el-menu-item-group>
                <el-menu-item index="2-1"><i class="el-icon-help"></i>意向学生管理</el-menu-item>
                <el-menu-item index="2-2"><i class="el-icon-help"></i>未报名学生管理</el-menu-item>
                <el-menu-item index="2-3"><i class="el-icon-help"></i>已报名学生管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-menu"></i>教研部</template>
              <el-menu-item-group>
                <el-menu-item index="3-1"><i class="el-icon-help"></i>已有课程管理</el-menu-item>
                <el-menu-item index="3-2"><i class="el-icon-help"></i>正在研发课程管理</el-menu-item>
                <el-menu-item index="3-3"><i class="el-icon-help"></i>新技术课程管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        
        <!-- 主区域 -->
        <el-container>
          <el-main>
            <b style="color: red;font-size: 20px;">学生列表</b>
            <div style="float:right">
              <el-button type="primary">添加学生</el-button>
            </div>
            <el-table :data="tableData"  style="width: 100%;">
              <!--通过prop属性显示下面vue对象中的数据，prop的属性值必须是下面vue中的date name address-->
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址" >
              </el-table-column>
              <el-table-column
                label="操作"
                width="180">
                <el-button type="warning">编辑</el-button>
                <el-button type="danger">删除</el-button>
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</body>
<script>
    new Vue({
        el:"#div",
        data:{
          tableData:[
            {
              date:"2088-08-08",
              name:"张三",
              address:"上海市航头镇"
            },{
              date:"2088-08-08",
              name:"李四",
              address:"上海市航头镇"
            },{
              date:"2088-08-08",
              name:"王五",
              address:"上海市航头镇"
            },
          ]
        }
    });
</script>
</html>
~~~
