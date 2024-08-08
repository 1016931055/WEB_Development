<template>
  <div id="msg">
    {{msg}}
    <br>
    <button name = "button1" click = "butt1">关机按钮</button>
    <br>
    <button>重启按钮</button>
    <br>
    <button><b>睡眠按钮</b></button>
  </div>
</template>

<script>
export default {
    data(){
        return {
          msg:"请按按钮:"
        }
    },

    methods:{
      butt1(){
        window.alert("按下关机按钮!")
      }
    }
}
</script>

<style>

</style>