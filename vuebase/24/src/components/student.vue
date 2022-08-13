<template>
    <div class="demo01">
        <div>学生姓名{{stuname}}</div>
        <div>学生年龄{{stuage}}</div>
    </div>
</template>

<style>
    .demo01{
        
        margin-top: 100px;
    }
    .demo01>div{
        background-color:lightblue;
        width: 500px;
        height: 100px;
        line-height: 100px;
        text-align: center;
               border: 1px solid;
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