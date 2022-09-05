const express=require('express')
const app=express()
const cors=require('cors')
const router=require('./15-mysql2')
app.use(cors())
app.use('/mysql',router)

app.listen(80,()=>{
    console.log('http://127.0.0.1:80');
})

