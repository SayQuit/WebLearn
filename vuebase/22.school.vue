<template>
    <div>
        <div class="demo">学校名称：{{schoolname}}</div>
        <div class="demo">学校地址：{{address}}</div>
    </div>
</template>

<style>
    .demo{
        background-color: lightgreen;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
</style>


<script>
    // const school=Vue.extend({
    //     data(){
    //         return{
    //             schoolname:'平远中学',
    //             address:'平远县',
    //         }
    //     },
    
    // })

    // // export{school};
    // export default school;

    export default {
        name:'school',
        data(){
            return{
                schoolname:'平远中学',
                address:'平远县',
            }
        },

    }

</script>