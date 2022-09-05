const express=require('express')
const router=express.Router()
router.get('/name',(req,res)=>{
    res.send({
        data:{
            name:'zhangsan',
            age:18
        },
        msg:'200 ok!',
        status:0
    })
})
router.post('/user',(req,res)=>{
    res.send({
        data:{
            name:'zhangsan',
            age:18
        },
        msg:'200 ok!',
        status:0
    })
})

module.exports=router