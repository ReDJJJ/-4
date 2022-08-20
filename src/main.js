
var a;//eslint测试
/* eslint-disable no-unused-vars */  //添加此注释,eslint的no-unused-vars检测功能在此文件关闭

import Vue, { h } from 'vue'; //引入Vue包,相当于以前的scipt引入vue文件（此处不带解析器
// import Vue from 'vue/dist/vue.esm.js';
import App from './App.vue'
// new Vue({
//   el:"#app",  //此处就是挂载index.html的app
//   components:{
//     App,
//   },
//   template:"<App />"
// });

//以上写法会报错
//默认导入 的只是runtime-only版本的vue,此版本vue不带解析器compiler
//package.json 的main属性决定了具体入口文件
// You are using the runtime-only build of Vue where the template compiler is not available. 
// Either pre-compile the templates into render functions, or use the compiler-included build.

new Vue({
    el:"#app",
    render: h=> h(App), //不能用funciton , this指向问题
    //render函数： 1.注册并定义组 件 2.使用组件 3* 自动寻找解析器的loader (package.json里面生产依赖的vue-template-compiler)
})

// render函数比自己手动写法注册使用 打包后文件体积小,速度快

