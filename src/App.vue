<!-- app.vue 与 main.js同级别 , 直属src文件夹 -->

<template>
    <div>
        <MyButton></MyButton>
    </div>
</template>

<script>
    import MyButton from "./components/MyButton.vue"; //引入组件配置对象
    // @代表src文件夹,为webpack配置好的

    export default {
        name:"",
        components:{
            MyButton:MyButton, //正式注册组件
        }
    }
</script>

<style>
    
</style>