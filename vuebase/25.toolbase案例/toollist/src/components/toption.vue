<template>
   
    <div>
        <div class="optionLine">
            <div>
                <input type="checkbox" :checked='Todo.fin' @click="change">
                <input type="text" :value=inputData ref="input2" @keyup="changemyname">
            </div>
            <button @click="begininput">编辑</button>
            <button @click="deleteme">删除</button>
        </div>
    </div>
</template>


<style>
    .optionLine{
        width: 500px;
        height: 60px;
        border: 1px solid gray;

        position: relative;

        margin-bottom: -1px;
    }
        .optionLine>div{
        position: absolute;

        top: 50%;
        left: 0%;
        transform: translateY(-50%);

        border: none;
        outline: none;
        
    }
    .optionLine input{


        border: none;
        outline: none;
        
    }
    .optionLine>button:first-of-type{
        position: absolute;

        top: 50%;
        left: 80%;
        transform: translateY(-50%);
    }
    .optionLine>button:last-of-type{


        position: absolute;

        top: 50%;
        left: 90%;
        transform: translateY(-50%);
    }


</style>



<script>

// import dbtn from './dbtn'



    export default{
        name:'toption',
        components: {
    


        },


        data(){
            return {
                Name:'toption',


            }
        },
        props:{

            inputData:{
                typeof:String
            },
            Todo:{

            },
            updatefin:{

            },
            DeleteItem:{
                
            }

            
        },
        watch:{

        },
        methods:{


            change(){
                this.updatefin(this.Todo.id)
            },
            deleteme(){
                this.DeleteItem(this.Todo.id)
            },
            begininput(){
                this.$refs.input2.focus();
            },
            changemyname(){
                this.bus.$emit('changename',this.$refs.input2.value,this.Todo.id)
            }

        },
        
       
        
    }
</script>