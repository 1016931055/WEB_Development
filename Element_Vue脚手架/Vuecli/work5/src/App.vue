<!--
	1.template相当于body标签
-->
<template>
  <div id="app">
    <!-- 脚手架的logo图片 -->
    <img src="./assets/logo.png">
    <!-- 访问vue ,必须加#-->
    <a href="#/">访问vue</a> <!-- "/" 对应Router中的path: '/', --> 
    <a href="#/friend">访问好友</a>
    <a href="#/element">访问element</a>
    <a href="#/myTest">访问我的页面</a>
    <!-- 组件输出位置，欢迎页面输出的文字是由下面的标签输出的 -->
    <router-view/>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
   data(){
     return {
        msg:"vue架手架挺难的"
     }
   }
}
</script>

<!--书写css代码-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
