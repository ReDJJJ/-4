<template>
    <div>
        <h2>我是h2标题</h2>
        <button @click="count++">我是按钮{{count}}</button>
    </div>
</template>

<script>
export default {
    name:"",
    data(){
        return {
            count: 0,
        }
    }
}
</script>

<style>
    h2{
        color: black;
    }
</style>