<template>
    <div class="demo">
        <div class="">学校名称：{{schoolname}}</div>
        <div class="">学校地址：{{address}}</div>
        <div v-text='msg'></div>
        <!-- ref相当于id -->
        <button @click='change' ref="msge">改变msg</button>
        
    </div>
</template>

<style>
    .demo>div{
        background-color: lightgreen;
        width: 500px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border: 1px solid;
        
    }
    .demo{
        margin-top: 100px;
    }
</style>


<script>

    export default {
        name:'school',
        data(){
            return{
                schoolname:'平远中学',
                address:'平远县',
                msg:'message'
            }
        },
        methods:{
            change(){
            
                window.console.log(this.$refs.msge),
                this.msg='message after change';
            }
        }

    }
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




    

</script>