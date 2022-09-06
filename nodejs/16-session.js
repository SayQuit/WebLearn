const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const session=require('express-session')

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))

app.listen(80,()=>{
    console.log('http://127.0.0.1:80');
})
app.post('/login',(req,res)=>{
    if(req.body.username!=='admin'||req.body.password!=='123456'){
        return res.send('登陆失败')
    }

    req.session.user=req.body
    req.session.islogin=true

    res.send('登陆成功')
})

app.get('/username',(req,res)=>{
    if(!req.session.islogin){
        return res.send('失败')
    }
    res.send({username:req.session.user})

    
})

app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.send('成功')

    
})

// req.session.destory
