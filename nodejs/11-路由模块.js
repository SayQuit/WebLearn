const express = require('express')
const router =require('./11-路由模块2')
const app=new express()
app.use('/my',router)
app.listen(80,()=>{
    console.log('启动成功');
})