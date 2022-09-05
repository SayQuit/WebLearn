const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = mysql.createPool({
    
})
router.get('/select', (req, res) => {
    let result = ''
    db.query('select*from new_table', (err, res) => {
        if (err){
            result='MYSQL ERR'
        }
        else {
            result=res
        }
    })

    console.log('res:'+result);
    res.send('result')
})

router.get('/insert', (req, res) => {
    const name='赵六'
    const insertStr='insert into new_table(name) values (?)'
    db.query(insertStr, [name],(err, results) => {
        if(err)console.log(err)
        else console.log(results);
    })
    res.send('ok')

    // const insert='insert into user set ?'
    // db.query(insert, user,(err, results) => {

    // })

})

module.exports = router