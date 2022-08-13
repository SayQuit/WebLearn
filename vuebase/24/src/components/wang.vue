<template>
    <div class="demo03">
        <div>姓名:{{name}}</div>
        <div @click="showName"></div>
    </div>
</template>

<script>
// import { mixin } from 'vue/types/umd'
import {mx} from './mx'

    export default{
        name:'wang',
        data() {
            return {
                msg:'我是一个学生',
                myname:this.name,
                // 这里变成可以改了
            }
        },
        // props:[]
        // props:{
        //     name:String
        // }

        props:{
            //这里不可以改
            name:{
                typeof:String,
                require:true,
                // default:
            }
        },

         mixins:[mx],
    }
</script>


<style scoped>
    .demo03>div{
        background-color: tomato;
        width: 500px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border: 1px solid;

        
    }

</style>