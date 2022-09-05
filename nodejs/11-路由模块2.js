const express = require('express')
const router=express.Router()

router.get('/name',(req,res)=>{
    res.send('这是/name')
})
router.get('/user',(req,res)=>{
    res.send('这是/user')
})


module.exports=router
