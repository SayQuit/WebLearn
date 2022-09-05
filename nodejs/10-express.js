const express = require('express')
const app=express()
app.listen(80,()=>{
    console.log('启动成功');
})
// ?id=1&ids=2
app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send('成功')
})
// /:id
app.get('/user/:id/:name',(req,res)=>{
    console.log(req.params);
    res.send('成功')
})

app.use(express.static('./clock'))
app.get('/clock/index.html',(req,res)=>{
    res.send('/clock/index.html')
})
// app.post('',(req,res)=>{
    
// })

