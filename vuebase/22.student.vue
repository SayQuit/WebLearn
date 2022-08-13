<template>
    <div>
        <div class="demo">学生姓名{{stuname}}</div>
        <div class="demo">学生年龄{{stuage}}</div>
    </div>
</template>

<style>
    .demo{
        background-color:lightblue;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
</style>


<script>

    export default {
        name:'student',
        data(){
            return{
                stuname:'小明',
                stuage:18,
            }
        },

    }

</script>