<template>
  <span class="ani_dot">....</span>
</template>

<style>
.ani_dot {
  font-family: simsun;
}
:root .ani_dot {
  /* 这里使用Hack是因为IE6~IE8浏览器下， vertical-align解析不规范，值为bottom或其他会改变按钮的实际高度*/
  display: inline-block;
  width: 1.5em;
  vertical-align: bottom;
  overflow: hidden;
  position: fixed;
  left:50%;
  top:50%;
  font-size: 12.5em;
}
@-webkit-keyframes dot {
  0% {
    width: 0;
    margin-right: 1.5em;
  }
  33% {
    width: 0.5em;
    margin-right: 1em;
  }
  66% {
    width: 1em;
    margin-right: 0.5em;
  }
  100% {
    width: 1.5em;
    margin-right: 0;
  }
}
.ani_dot {
  -webkit-animation: dot 3s infinite step-start;
}

@keyframes dot {
  0% {
    width: 0;
    margin-right: 1.5em;
  }
  33% {
    width: 0.5em;
    margin-right: 1em;
  }
  66% {
    width: 1em;
    margin-right: 0.5em;
  }
  100% {
    width: 1.5em;
    margin-right: 0;
  }
}
.ani_dot {
  animation: dot 3s infinite step-start;
}
</style>

