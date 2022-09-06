const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const ejwt = require('express-jwt')
const secretKey = 'dkjaglsahakskasjfkjjasgfkjds,fsdj,'
app.use(cors())
app.use(ejwt({secret:secretKey}))

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})
app.post('/login', (req, res) => {
    res.send({
        status: 200,
        message: '200 ok',
        token: jwt.sign({username: userinfo.username}, secretKey, { expiresIn: '30000h' })
    })
})
app.get('/getinfo', (req, res) => {
    console.log(req.user);
    res.send('ok')
})

// req.session.destory
