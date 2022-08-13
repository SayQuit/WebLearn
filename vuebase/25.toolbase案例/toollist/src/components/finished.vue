<template>
    <div class="finished">
        <input type="checkbox" name="" id="" @click="selectAllFin()" :checked="v">
        <span class="finishedblock">已完成{{finished}}/未完成{{notfinish}}</span>
        <button @click="deleteAllFin">删除已完成任务</button>
    </div>
</template>


<style>
    .finishedblock{
        margin-right: 15px;

        line-height: 100px;

    }
    .finished{
        width: 500px;
        height: 100px;
    }
</style>


<script>


    export default{
        name:'finish',
        data(){
            return{
                ischecked:false

            }
        },
        
        props:{
                finished:{
                    
                },
                notfinish:{

                },
                deleteAllfinish:{

                },
                selectAll:{

                },
                v:{
                    
                }
  
        },
        methods:{
        deleteAllFin(){
            this.deleteAllfinish();
            // this.v=false;
        },
        selectAllFin(){

            
            
            this.selectAll();
            
        }
        },
        
    }
</script>