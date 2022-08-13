<template>
    <div class="tinput">
        <input type="text" placeholder="请输入你的任务名称,敲下回车确定" @keyup.enter="getContent()" v-model="content">
    </div>
</template>


<style>
    .tinput{
        width: 500px;
        height: 60px;



        box-sizing: border-box;


        position: relative;

    }
        
    
    .tinput>input{

        height: 30px;
        width: 500px;

        border-radius: 7px;
        outline: none;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        border: 1px solid lightgray;

        padding-left: 10px;

    }
        
    
</style>


<script>


    export default{
        name:'tsearch',
        data(){
            return{
                content:'',

                
  
            }
        },
        methods:{
            getContent(){

                this.$emit("getData",this.content);
                 
                
            }
        }
    }
</script>