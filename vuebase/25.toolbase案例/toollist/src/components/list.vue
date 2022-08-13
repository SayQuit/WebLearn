<template>
    <div class="Applist">
        <div class="listblock">
            <tsearch @getData="getsearchdata"></tsearch>


            <toption 
                class="optionLine" 
                v-for="item in optionList" 
                :key="item.id" 
                v-bind:inputData="item.name" 
                :Todo="item" 
                :updatefin="updatefin"
                :DeleteItem="DeleteItem"
            >
            </toption>


            <finished 
                :finished="finish" :notfinish="num-finish"
                :deleteAllfinish="deleteAllfinish" 
                :selectAll="selectAll"
                :v="v"
            ></finished>
    </div>
    </div>
</template>


<style>
    .listblock{

        width: 500px;
       
    }
    .Applist{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 550px;
        padding-top: 10px;



        margin: 0 auto;

        border-radius: 10px;

    }
</style>


<script>
// import dbtn from './dbtn'
import toption from './toption'
import tsearch from './tsearch'
import finished from './finished'
    export default{
        name:'list',
        components:{
            toption,
            tsearch,
            finished,
            

        },
        // mounted(){
        //     // this.optionList.push()
        //     // this.i=localStorage.getItem('i');
        //     // this.num=localStorage.getItem('num');


        // },
        mounted(){
            this.bus.$on('changename',this.changelistname)
        },
        data(){
            return{

                finish:0,
                num:Number(localStorage.getItem('num'))||0,
                i:Number(localStorage.getItem('i'))||1,
                v:false,
                optionList:JSON.parse(localStorage.getItem('List'))||[]
            }
        },
        watch:{
            'optionList':{
                deep:true,
                handler(value){
                    localStorage.setItem('List',JSON.stringify(value))
                    localStorage.setItem('num',this.num);
                    localStorage.setItem('i',this.i);
                }
                
            },
            
            finish(newValue,oldValue){
                if(newValue==oldValue-1&&oldValue==this.num){
                    window.console.log(newValue,oldValue,this.num);
                    this.v=false;
                    
                }
            }
        },
    
        methods:{
            getsearchdata(data){
                
                this.num+=1;

                this.optionList.push({name:data,id:this.i,fin:false})
                
                this.i+=1

            },
            changelistname(data,id1){
                for(var i=0;i<this.optionList.length;i++)
                {
                    if(id1==this.optionList[i].id)
                    {
                        this.optionList[i].name=data;
                    }
                }
            },
            updatefin(ID){
                for(var i=0;i<this.num;i++){
                    if(ID==this.optionList[i].id)
                    {
                        this.optionList[i].fin=!this.optionList[i].fin;
                        if(this.optionList[i].fin==true)this.finish++;
                        else this.finish--;
                        break;
                    }
                }
                for(var j=0;j<this.num;j++){
        
                    if(this.optionList[j].fin==true&&j==this.num-1)
                    {
                        this.v=true;
                        
                    
                    }
                    else if(this.optionList[j].fin==false)
                    {
                        
                        break;
                    }
                    
                    
                }

                
            },
            deleteAllfinish(){
                this.optionList=this.optionList.filter(todo=>{
                    
                    return todo.fin==false;

                })
                
                this.finish=0;
                this.v=false;
                this.num=this.optionList.length;
            },
            DeleteItem(ID){


                this.optionList=this.optionList.filter( todo =>{
                    if(todo.fin==true&&todo.id==ID)this.finish--;
                    return todo.id!=ID;
                })
                this.num--;
            },
            selectAll(){
                this.v=!this.v;
                if(this.v){
                    this.finish=this.num;
                    for(var i=0;i<this.num;i++){
                        this.optionList[i].fin=true;
                    }
                }
                else{
                    this.finish=0;
                    for(var j=0;j<this.num;j++){
                        this.optionList[j].fin=false;
                    }                    
                }
                
            }
        

        }
    }
</script>